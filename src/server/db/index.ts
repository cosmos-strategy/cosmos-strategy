import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "@/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

// Retry utility for database operations
export const withRetry = async <T>(
  operation: () => Promise<T>,
  maxRetries = 3,
  delay = 1000
): Promise<T> => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation();
    } catch (error) {
      if (i === maxRetries - 1) throw error;

      console.warn(
        `Database operation failed (attempt ${i + 1}/${maxRetries}):`,
        error
      );
      await new Promise((resolve) =>
        setTimeout(resolve, delay * Math.pow(2, i))
      ); // Exponential backoff
    }
  }
  throw new Error("Max retries exceeded");
};

// Optimized connection configuration for serverless
const connectionConfig: postgres.Options<{}> = {
  // Serverless-optimized connection pool
  max: 1, // Single connection for serverless
  idle_timeout: 5, // Close idle connections quickly
  max_lifetime: 60 * 5, // 5 minutes max lifetime
  connect_timeout: 30, // 30 seconds connection timeout

  // Performance optimizations
  prepare: false, // Disable prepared statements for serverless
  fetch_types: false, // Skip fetching types for faster cold starts
  transform: postgres.camel, // Transform snake_case to camelCase

  // Connection settings
  connection: {
    application_name: "nextjs-app",
    statement_timeout: 30,
    idle_in_transaction_session_timeout: 10,
  },

  // SSL configuration (uncomment if your database requires SSL)
  // ssl: env.NODE_ENV === "production" ? "require" : false,

  // Error handling
  onnotice: env.NODE_ENV !== "production" ? console.log : () => {},

  // Additional Supabase settings (remove if not using Supabase)
  publications: "supabase_realtime",

  // Connection error handling
  onclose: () => {
    console.log("Database connection closed");
  },
};

// Create connection with error handling
const createConnection = () => {
  try {
    return postgres(env.DATABASE_URL, connectionConfig);
  } catch (error) {
    console.error("Failed to create database connection:", error);
    throw error;
  }
};

const conn = globalForDb.conn ?? createConnection();

// Only cache connection in development
if (env.NODE_ENV !== "production") {
  globalForDb.conn = conn;
}

export const db = drizzle(conn, { schema });

// Safe query wrapper with retry logic
export const safeQuery = async <T>(queryFn: () => Promise<T>): Promise<T> => {
  return withRetry(queryFn);
};

// Connection management functions
export const closeConnection = async () => {
  try {
    if (conn) {
      await conn.end();
      console.log("Database connection closed successfully");
    }
  } catch (error) {
    console.error("Error closing database connection:", error);
  }
};

// Enhanced health check with timeout
export const checkDatabaseConnection = async (timeoutMs = 10000) => {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Health check timeout")), timeoutMs)
  );

  const healthCheck = async () => {
    try {
      await conn`SELECT 1 as health_check`;
      return {
        status: "connected",
        timestamp: new Date().toISOString(),
        config: {
          max_connections: connectionConfig.max,
          idle_timeout: connectionConfig.idle_timeout,
          connect_timeout: connectionConfig.connect_timeout,
        },
      };
    } catch (error) {
      console.error("Database health check failed:", error);
      return {
        status: "failed",
        error: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      };
    }
  };

  try {
    return await Promise.race([healthCheck(), timeoutPromise]);
  } catch (error) {
    return {
      status: "timeout",
      error: error instanceof Error ? error.message : "Health check timeout",
      timestamp: new Date().toISOString(),
    };
  }
};

// Graceful shutdown handler
export const gracefulShutdown = async () => {
  console.log("Initiating graceful database shutdown...");
  await closeConnection();
};

// Auto-cleanup on process termination (for local development)
if (typeof process !== "undefined") {
  process.on("SIGINT", gracefulShutdown);
  process.on("SIGTERM", gracefulShutdown);
}
