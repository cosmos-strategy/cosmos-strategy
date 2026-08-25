import { db } from "@/server/db";
import { sql } from "drizzle-orm";
import { NextResponse } from "next/server";

// Always run fresh — never cache
export const dynamic = "force-dynamic";

/**
 * Keep-alive endpoint.
 *
 * Supabase free-tier projects PAUSE after ~7 days of no activity, which would
 * make the whole site error again. This route runs a tiny query so the database
 * registers activity. It is called on a schedule by the Vercel cron defined in
 * `vercel.json` (once a day) — comfortably inside the 7-day window.
 */
export async function GET() {
  try {
    await db.execute(sql`select 1`);
    return NextResponse.json({ ok: true, ts: new Date().toISOString() });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
