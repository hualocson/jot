"use client";

import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { type Components } from "react-markdown";

const VideoNews: Components["iframe"] = ({ src, title }) => {
  return (
    <div className="my-2 flex flex-col items-center justify-center gap-2">
      <div className="w-full overflow-hidden rounded-[16px]">
        <AspectRatio.Root ratio={16 / 9}>
          <iframe
            width="100%"
            height={"100%"}
            src={src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            title="Embedded YouTube Video"
          />
        </AspectRatio.Root>
      </div>
      <span className="line-clamp-2 w-full px-2 text-center text-sm italic">
        {title}
      </span>
    </div>
  );
};

export default VideoNews;
