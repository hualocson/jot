import { env } from "@/env";
import { neon } from "@neondatabase/serverless";
import { ExtractTablesWithRelations } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-http";
import { PgTransaction } from "drizzle-orm/pg-core";
import { PostgresJsQueryResultHKT } from "drizzle-orm/postgres-js";

import * as schema from "../../migrations/schemas/index";

const sql = neon(env.DATABASE_URL);

export const db = drizzle(sql, {
  schema,
  casing: "snake_case",
});

export type TX =
  | PgTransaction<
      PostgresJsQueryResultHKT,
      typeof schema,
      ExtractTablesWithRelations<typeof schema>
    >
  | typeof db;
