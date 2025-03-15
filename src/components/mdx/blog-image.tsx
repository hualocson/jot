"use client";

import Image from "next/image";

import { Components } from "react-markdown";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const BlogImage: Components["img"] = ({ src, alt }) => {
  return (
    <span className="flex flex-col items-center justify-center gap-1 bg-background py-4">
      <span className="overflow-hidden rounded-[16px]">
        <PhotoProvider bannerVisible={false}>
          <PhotoView
            src={src}
            render={() => (
              <Image
                src={src ?? ""}
                alt={alt ?? ""}
                className="origin-center object-cover"
                width={0}
                height={0}
                sizes="50vw"
                style={{ width: "100%", height: "auto" }}
                priority
              />
            )}
          >
            <Image
              src={src ?? ""}
              alt={alt ?? ""}
              className="origin-center cursor-pointer object-cover"
              width={0}
              height={0}
              sizes="50vw"
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </PhotoView>
        </PhotoProvider>
      </span>
      <span className="text-sm italic">{alt}</span>
    </span>
  );
};

export default BlogImage;
