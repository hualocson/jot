import { relations } from "drizzle-orm";
import { foreignKey, integer, pgTable, serial } from "drizzle-orm/pg-core";

import recordTimestamp from "../out/columns/record-timestamp";
import { postsTable } from "./posts";

export const likesTable = pgTable(
  "likes",
  {
    id: serial().primaryKey(),
    postId: integer("post_id").notNull(),
    ...recordTimestamp,
  },
  (table) => [
    foreignKey({
      name: "post_fk",
      columns: [table.postId],
      foreignColumns: [postsTable.id],
    })
      .onDelete("cascade")
      .onUpdate("cascade"),
  ]
);

export const likesRelations = relations(likesTable, ({ one }) => ({
  post: one(postsTable, {
    fields: [likesTable.id],
    references: [postsTable.id],
  }),
}));
