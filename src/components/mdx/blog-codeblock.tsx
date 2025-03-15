"use client";

import { cn } from "@/lib/utils";
import { type Components } from "react-markdown";

import { CodeBlock } from "./code-block";

const BlogCodeBlock: Components["code"] = ({
  children,
  className,
  node,
  ...rest
}) => {
  const match = /language-(\w+)/.exec(className || "");
  const lang = match ? match[1] : "bash";
  const content = String(children).replace(/\n$/, "");
  const fileName = "." + lang;
  return match ? (
    <CodeBlock language={lang} code={content} filename={fileName} />
  ) : (
    <code
      {...rest}
      className={cn(
        "rounded bg-gray-300/30 px-1 py-0.5 font-mono text-sm text-rose-500",
        className
      )}
    >
      {children}
    </code>
  );
};

export default BlogCodeBlock;
