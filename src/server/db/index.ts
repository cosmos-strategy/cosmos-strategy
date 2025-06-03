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

// Connection pool configuration optimized for serverless environments
const connectionConfig: postgres.Options<{}> = {
  // Connection pool settings
  max: env.NODE_ENV === "production" ? 1 : 10, // Limit connections in production (serverless)
  idle_timeout: 20, // Close idle connections after 20 seconds
  max_lifetime: 60 * 30, // Close connections after 30 minutes
  connect_timeout: 30, // Connection timeout in seconds

  // Performance optimizations
  prepare: false, // Disable prepared statements for serverless
  transform: postgres.camel, // Transform snake_case to camelCase

  // Error handling
  onnotice: env.NODE_ENV !== "production" ? console.log : () => {}, // Log notices in development only

  // // SSL configuration (adjust based on your database provider)
  // ssl: env.NODE_ENV === "production" ? "require" : false,

  // Additional serverless optimizations
  fetch_types: false, // Skip fetching types for faster cold starts
  publications: "supabase_realtime", // Only if using Supabase

  // Connection retry settings
  connection: {
    application_name: "nextjs-app",
    // statement_timeout: "30s", // Uncomment if needed
    // idle_in_transaction_session_timeout: "10s", // Uncomment if needed
  },
};

const conn = globalForDb.conn ?? postgres(env.DATABASE_URL, connectionConfig);

// Only cache connection in development
if (env.NODE_ENV !== "production") {
  globalForDb.conn = conn;
}

export const db = drizzle(conn, { schema });

// Optional: Export connection for manual cleanup if needed
export const closeConnection = async () => {
  if (conn) {
    await conn.end();
  }
};

// Optional: Health check function
export const checkDatabaseConnection = async () => {
  try {
    await conn`SELECT 1`;
    return { status: "connected", timestamp: new Date().toISOString() };
  } catch (error) {
    console.error("Database connection failed:", error);
    return {
      status: "failed",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
