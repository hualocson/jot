"use client";

import { FC } from "react";

import Image from "next/image";

import logo from "@/resources/images/logo.png";

interface ILogoProps {}

const Logo: FC<ILogoProps> = () => {
  return (
    <span className="relative size-12 rounded-lg bg-[#D3D9BC]/50 shadow">
      <Image
        src={logo}
        alt="Logo"
        fill
        sizes="30vw"
        className="object-contain p-2"
      />
    </span>
  );
};

export default Logo;
