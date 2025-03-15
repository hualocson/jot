"use client";

import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="relative pb-6 ~/lg:~pt-4/16">
      <div className="absolute inset-0 z-0 h-full w-full -translate-x-2 -translate-y-2 border-t border-[#80808012] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:200px_80px]"></div>

      <div className="relative mx-auto flex max-w-screen-md flex-col justify-between gap-4 md:flex-row lg:items-center">
        {/* Logo */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-2xl font-bold">Jot</span>
          </div>
          <p className="max-w-xs">
            Tech, thoughts, and a touch of life – my daily notes.
          </p>
        </div>
      </div>
      <div className="relative mt-8 pt-6 text-center text-sm text-gray-400">
        <span className="absolute inset-x-0 top-0 h-[1px] bg-[#80808012]"></span>
        © 2025. All Rights Reserved.
      </div>
    </footer>
  );
}
