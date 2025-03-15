"use client";

import React from "react";

import dayjs from "dayjs";

const BlogCard = () => {
  return (
    <div className="flex w-full items-center gap-2">
      <span className="aspect-square w-1/3 flex-shrink-0 rounded-lg bg-slate-400/30 shadow"></span>
      <div className="flex flex-col gap-2">
        <div>
          {/* day */}
          <span className="text-sm text-gray-400">
            {dayjs().format("DD.MMM.YYYY")}
          </span>
          {/* title */}
          <h2 className="line-clamp-1 text-xl font-bold">Feature Title</h2>
        </div>
        <div>
          {/* description */}
          <p className="line-clamp-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
