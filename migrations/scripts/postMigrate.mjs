import { config } from "dotenv";
import path from "path";
import postgres from "postgres";

config({ path: ".env" });

const sql = postgres(process.env.DEV_DATABASE_URL);
console.log("postMigrate: Running post-migrate scripts...");
Promise.all([
  sql
    .file(path.resolve("migrations/privilege.sql"))
    .then(() => {
      console.log("privilege.sql has been executed.");
    })
    .catch((error) => {
      console.error("Error executing privilege.sql:", error);
    }),
])
  .then(() => {
    console.log("postMigrate: Finished running post-migrate scripts.");
  })
  .finally(() => {
    process.exit();
  });
