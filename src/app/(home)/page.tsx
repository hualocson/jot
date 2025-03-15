import { Metadata } from "next";

import { getPreviewPosts } from "@/services/post";
import { IPreviewPost } from "@/types";

import HeroSection from "./components/hero-section";
import HighlightPostsSection from "./components/highlight-posts-section";
import RecentPostsSection from "./components/top-posts-section";

export const metadata: Metadata = {
  title: "A daily journal of life and code",
};

export default async function Home() {
  const highlightPosts: IPreviewPost[] = await getPreviewPosts(true);
  const recentPosts: IPreviewPost[] = await getPreviewPosts();

  return (
    <div className="mx-auto max-w-screen-md py-4">
      <HeroSection />
      <HighlightPostsSection posts={highlightPosts} />
      {recentPosts.length > 0 && <RecentPostsSection posts={recentPosts} />}
    </div>
  );
}
