"use client";

import React, { FC } from "react";

import { cn } from "@/lib/utils";
import { IPreviewPost } from "@/types";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import BlogCard from "@/components/blogs/blog-card";
import FeatureCard from "@/components/blogs/feature-card";

interface IHighlightPostsSectionProps {
  posts: IPreviewPost[];
}

const HighlightPostsSection: FC<IHighlightPostsSectionProps> = ({ posts }) => {
  return posts.length > 0 ? (
    <div className="space-y-6 py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Highlight scribbles</h2>
        <Button
          variant={"ghost"}
          className="px-0 text-primary-900 hover:bg-transparent hover:underline"
        >
          View more
          <ChevronRight />
        </Button>
      </div>
      <div className={cn("grid", posts.length > 2 && "grid-cols-2")}>
        <FeatureCard post={posts[0]} />
        {posts.length > 2 && (
          <div className="flex flex-col gap-4 pl-8">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default HighlightPostsSection;
