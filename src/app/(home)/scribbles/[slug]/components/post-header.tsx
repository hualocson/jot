"use client";

import type { FC } from "react";

import Image from "next/image";

import formatPostDate from "@/lib/format-date";
import { IPreviewPost } from "@/types";
import { Clock } from "lucide-react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

interface IHeaderProps extends IPreviewPost {
  readingTime: number;
}

const PostHeader: FC<IHeaderProps> = ({
  title,
  date,
  coverImage: src,
  readingTime,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <PhotoProvider bannerVisible={false}>
        <PhotoView
          src={src}
          render={() => (
            <Image
              src={src ?? ""}
              alt={`${title} cover image`}
              className="origin-center object-cover"
              width={0}
              height={0}
              sizes="50vw"
              style={{ width: "100%", height: "auto" }}
              priority
            />
          )}
        >
          <span className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-[16px] bg-card">
            <Image
              src={src}
              fill
              sizes="50vw"
              className="object-contain"
              alt="cover-post-image"
            />
          </span>
        </PhotoView>
      </PhotoProvider>
      <div className="my-4 flex flex-col gap-6">
        <h2 className="font-bold text-primary ~/lg:~text-3xl/5xl">{title}</h2>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center divide-x">
            <p className="pl-2">{formatPostDate(date)}</p>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Clock className="size-4" />
            <p>{readingTime} min read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
