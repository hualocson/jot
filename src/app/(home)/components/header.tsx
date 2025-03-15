"use client";

import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Logo from "@/components/logo";

import avatarImage from "@/resources/images/avatar.svg";

const Header = () => {
  const router = useRouter();
  const handleOnLogoClick = () => {
    router.push("/");
  };
  return (
    <header className="container fixed inset-x-0 top-0 z-50 bg-background/30 pt-2 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-md items-center justify-between rounded-lg bg-card/30 p-2 px-4 shadow">
        <button onClick={handleOnLogoClick} className="flex items-center gap-3">
          <Logo />
          <span className="text-xl font-bold">Jot</span>
        </button>
        <span className="text-gray-500">
          A daily journal of life and code – where experiences meet syntax.
        </span>

        <span className="relative aspect-square w-12 rounded-full bg-primary-200/30">
          <Image
            src={avatarImage}
            alt="Avatar"
            className="object-contain"
            priority
            fill
            sizes="10vw"
          />
        </span>
      </div>
    </header>
  );
};

export default Header;
