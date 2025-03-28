import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" });

export default defineConfig({
  dialect: "postgresql",
  schema: "./migrations/schemas/*",
  out: "./migrations/out",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
