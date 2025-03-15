import { relations } from "drizzle-orm";
import { boolean, pgTable, serial, smallint, text } from "drizzle-orm/pg-core";

import recordTimestamp from "../out/columns/record-timestamp";
import { likesTable } from "./likes";

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
  isHighlighted: boolean("is_highlighted").default(false),
  ...recordTimestamp,
});

export const postsRelations = relations(postsTable, ({ many }) => ({
  likes: many(likesTable),
}));
