"use client";

import { FC } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { IPreviewPost } from "@/types";
import dayjs from "dayjs";

interface IFeatureCardProps {
  post: IPreviewPost;
}

const FeatureCard: FC<IFeatureCardProps> = ({ post }) => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push(`/scribbles/${post.slug}`);
  };
  return (
    <button className="flex flex-col gap-4 text-start" onClick={handleOnClick}>
      <span className="relative aspect-video w-full rounded-3xl bg-slate-500/20 shadow">
        <Image
          src={post.coverImage}
          alt={`image - ${post.title}`}
          fill
          priority
          className="rounded-3xl object-cover"
          sizes="50vw"
        />
        <span className="absolute right-4 top-4 rounded-md bg-slate-600/40 px-3 py-1 text-sm capitalize text-gray-200 backdrop-blur">
          {post.category}
        </span>
      </span>
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          {/* day */}
          <span className="text-sm text-gray-400">
            {dayjs(post.date).format("DD.MMM.YYYY")}
          </span>
          {/* title */}
          <h2 className="line-clamp-3 text-xl font-bold">{post.title}</h2>
        </div>
        {/* description */}
        <p className="line-clamp-3 text-gray-600">{post.excerpt}</p>
      </div>
    </button>
  );
};

export default FeatureCard;
