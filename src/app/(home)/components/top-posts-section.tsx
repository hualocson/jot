"use client";

import { FC } from "react";

import { IPreviewPost } from "@/types";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import VerticalBlogCard from "@/components/blogs/vertical-blog-card";

interface IRecentPostsSectionProps {
  posts: IPreviewPost[];
}

const RecentPostsSection: FC<IRecentPostsSectionProps> = ({ posts }) => {
  return (
    <div className="space-y-6 py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Recent scribbles</h2>
        <Button
          variant={"ghost"}
          className="px-0 text-primary-900 hover:bg-transparent hover:underline"
        >
          View more
          <ChevronRight />
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-6">
        {posts.map((post) => (
          <VerticalBlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RecentPostsSection;
