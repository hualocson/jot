"use client";

import Link from "next/link";

import Markdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";

import BlogCodeBlock from "./blog-codeblock";
import BlogImage from "./blog-image";
import VideoNews from "./blog-video";

const components: Components = {
  p: ({ children, ...props }) => (
    <p
      className="text-grayscale-200 mb-4 mt-0 text-base leading-relaxed"
      {...props}
    >
      {children}
    </p>
  ),
  h1: ({ children, ...props }) => (
    <h1 className="my-4 pb-2 text-4xl font-bold text-primary-800" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="my-4 pb-2 text-2xl font-semibold text-primary-800"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="my-4 pt-8 text-xl font-semibold text-primary-800" {...props}>
      {children}
    </h3>
  ),
  ul: ({ children, ...props }) => (
    <ul className="mb-3 list-disc" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mb-3 list-decimal space-y-4" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="ml-8 has-[a]:marker:text-primary" {...props}>
      {children}
    </li>
  ),
  a: ({ children, href, ...props }) => (
    <Link
      className="italic text-primary-500 decoration-primary-500 decoration-2 underline-offset-4 hover:underline"
      href={href ?? "#"}
      {...props}
    >
      {children}
    </Link>
  ),
  img: BlogImage,
  table: ({ children, ...props }) => (
    <table className="my-4 rounded shadow-lg" {...props}>
      {children}
    </table>
  ),
  tr: ({ children, ...props }) => (
    <tr
      className="divide-x divide-slate-600/15 bg-card/30 odd:bg-muted/30 odd:ring odd:ring-inset odd:ring-background odd:ring-offset-4 odd:ring-offset-background"
      {...props}
    >
      {children}
    </tr>
  ),
  th: ({ children, ...props }) => (
    <th className="p-4 font-semibold text-primary-500" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="p-4" {...props}>
      {children}
    </td>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-2 rounded-md border-gray-300 bg-primary-200 p-4 pb-2 italic text-gray-700"
      {...props}
    >
      {children}
    </blockquote>
  ),
  hr: (props) => <hr className="border-1 my-4 border-slate-200" {...props} />,
  span: ({ children, ...props }) => (
    <span className="text-gray-400" {...props}>
      {children}
    </span>
  ),
  iframe: VideoNews,
  code: BlogCodeBlock,
};

type MDXRerenderProps = {
  source: string;
};

export const MDXRerender = ({ source }: MDXRerenderProps) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm, remarkParse]}
      rehypePlugins={[rehypeRaw]}
      components={components}
    >
      {source}
    </Markdown>
  );
};

export default function MarkdownPreview({ source }: MDXRerenderProps) {
  return (
    <div className="">
      <MDXRerender source={source} />
    </div>
  );
}
