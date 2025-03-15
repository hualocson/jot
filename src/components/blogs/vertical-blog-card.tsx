"use client";

import React, { FC } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { IPreviewPost } from "@/types";
import dayjs from "dayjs";

interface IVerticalBlogCardProps {
  post: IPreviewPost;
}

const VerticalBlogCard: FC<IVerticalBlogCardProps> = ({ post }) => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push(`/scribbles/${post.slug}`);
  };
  return (
    <div
      onClick={handleOnClick}
      className="group/container flex w-full cursor-pointer flex-col items-center gap-4"
    >
      <span className="relative aspect-video w-full flex-shrink-0 overflow-hidden rounded-lg bg-slate-400/30 shadow transition-all duration-300">
        <Image
          src={post.coverImage}
          alt={`image - ${post.title}`}
          fill
          priority
          className="rounded-lg object-cover"
          sizes="33vw"
        />
        <span className="absolute inset-0 transition-all duration-300 group-hover/container:bg-slate-800/40"></span>
        <span className="absolute right-4 top-2 rounded-md bg-slate-600/40 px-3 py-1 text-sm capitalize text-gray-200 backdrop-blur">
          {post.category}
        </span>
      </span>
      <div className="flex flex-col gap-4 px-2">
        <div className="space-y-1">
          {/* day */}
          <span className="text-sm text-gray-400">
            {dayjs(post.date).format("DD.MMM.YYYY")}
          </span>
          {/* title */}
          <h2 className="line-clamp-2 text-xl font-bold">{post.title}</h2>
        </div>
        {/* description */}
        <p className="line-clamp-3 text-gray-600">{post.excerpt}</p>
      </div>
    </div>
  );
};

export default VerticalBlogCard;
