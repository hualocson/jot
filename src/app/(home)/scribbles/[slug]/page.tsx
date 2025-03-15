import { FC } from "react";

import { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

import calculateReadingTime from "@/lib/calc-reading-time";
import { getAllSlugs, getPostBySlug } from "@/services/post";

import PostHeader from "./components/post-header";

const MDXRerender = dynamic(() => import("@/components/mdx/mdx-render"), {
  ssr: false,
});

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

const PostPage: FC<Params> = async (props) => {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return notFound();
  }

  const readingTime = calculateReadingTime(post.content);

  return (
    <div className="relative mx-auto mb-10 flex max-w-screen-md flex-col ~/lg:~mt-20/24 ~/lg:~gap-12/20 lg:flex-row lg:items-start">
      <div className="mx-auto flex max-w-screen-sm flex-col gap-6">
        <PostHeader {...post} readingTime={readingTime} />
        <div>
          <MDXRerender source={post.content} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Savvy Money`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}
