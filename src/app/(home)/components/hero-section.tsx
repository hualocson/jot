"use client";

import React from "react";

import Image from "next/image";

import { Quote } from "lucide-react";

import { Button } from "@/components/ui/button";

import heroImage from "@/resources/images/hero-image.svg";

const headline = [
  "Ctrl + Z for Mistakes",
  "Ctrl + S for Wins",
  "Coding & Life",
  "One Debug at a Time!",
];
const subHeadline = [
  "Sharing thoughts, lessons, and discoveries — one post at a time.",
  "From debugging errors to navigating life, this is my digital notebook.",
];

const SubHeadline = ({ text }: { text: string }) => (
  <div className="flex max-w-sm items-center gap-4 text-sm text-primary-700">
    <span className="h-0.5 w-16 flex-shrink-0 bg-primary-800"></span>
    <p className="font-normal text-gray-500">{text}</p>
  </div>
);

const HeroSection = () => {
  return (
    <section className="m-0 p-0">
      <div className="mt-4 flex w-full text-4xl font-bold lowercase">
        <div className="w-1/2 space-y-4">
          <div>
            <p>
              <span className="text-primary-600">{"Ctrl + Z"}</span>
              {" for Mistakes"}
            </p>
            <p>
              <span className="text-primary-800">{"Ctrl + S"}</span>
              {" for Wins"}
            </p>
          </div>
          <SubHeadline text={subHeadline[0]} />
        </div>
        <div className="w-1/2 space-y-4">
          <div className="h-[80px]" />
          <div>
            <p className="text-end">{headline[2]}</p>
            <p className="text-end">{headline[3]}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex w-full justify-end">
        <SubHeadline text={subHeadline[1]} />
      </div>

      <div className="mt-10 flex w-full items-stretch justify-between gap-8">
        <span className="relative aspect-video w-1/2 flex-shrink-0 rounded-2xl bg-primary-300/40 shadow">
          <Image
            src={heroImage}
            alt="Hero Image"
            fill
            priority
            sizes="33vw"
            className="object-contain p-4"
          />
        </span>
        <div className="flex w-1/2 flex-col justify-evenly gap-2 self-stretch">
          <div className="italic">
            <Quote className="size-8 text-gray-400" />
            <p className="text-pretty first-letter:ml-8 first-letter:text-2xl first-letter:font-bold first-letter:text-primary-800">
              {
                "Every day, I sit down to write about coding, only to realize that most of my time is spent Googling error messages. But hey, at least I document the struggle!"
              }
            </p>
          </div>
          <div className="flex items-center gap-2 *:flex-1">
            <Button>Read My Latest Mess</Button>
            <Button variant={"outline"}>Search for Wisdom</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
