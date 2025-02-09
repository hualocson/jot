import { pgTable, serial, smallint, text } from "drizzle-orm/pg-core";

import recordTimestamp from "../columns/record-timestamp";

export enum POST_STATUS {
  DRAFT,
  PUBLISHED,
  ARCHIVED,
}

export const postsTable = pgTable("posts", {
  id: serial().primaryKey(),
  slug: text().notNull().unique(),
  category: text().notNull(),
  md: text().notNull(),
  status: smallint("status").notNull().$type<POST_STATUS>(),
  ...recordTimestamp,
});
