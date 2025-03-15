import { postsTable } from "./../../migrations/schemas/posts";

export type SelectPost = typeof postsTable.$inferSelect;

interface IPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
}

interface IPreviewPost {
  slug: string;
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  category: string;
}
