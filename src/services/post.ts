import { db } from "@/configs/db";
import { IPost, IPreviewPost } from "@/types";
import matter from "gray-matter";

const getPosts = async () => {
  const post = await db.query.postsTable.findMany();

  return post;
};

const getPreviewPosts = async (isHighlighted: boolean = false) => {
  const posts = await db.query.postsTable.findMany({
    limit: 4,
    orderBy: (posts, { asc }) => [asc(posts.updatedAt)],
    where: (post, { eq }) => eq(post.isHighlighted, isHighlighted),
  });

  const previewPosts: IPreviewPost[] = posts.map((post) => {
    const { data } = matter(post.md);
    // console.log(data);
    return {
      slug: post.slug,
      title: data.title,
      coverImage: data.coverImage,
      date: data.date,
      excerpt: data.excerpt,
      category: post.category,
    } as IPreviewPost;
  });

  return previewPosts;
};

const getPostBySlug = async (slug: string) => {
  const post = await db.query.postsTable.findFirst({
    where: (post, { eq }) => eq(post.slug, slug),
  });

  if (!post) {
    return undefined;
  }

  const { data, content } = matter(post.md);

  const res: IPost = {
    slug: post.slug,
    title: data.title,
    date: data.date,
    category: post.category,
    coverImage: data.coverImage,
    excerpt: data.excerpt,
    ogImage: {
      url: data.ogImage.url,
    },
    content,
  };

  return res;
};

const getAllSlugs = async () => {
  const posts = await db.query.postsTable.findMany({
    where: (post, { isNotNull }) => isNotNull(post.deletedAt),
  });

  return posts.map((p) => p.slug);
};

export { getAllSlugs, getPostBySlug, getPosts, getPreviewPosts };
