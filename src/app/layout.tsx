import type { Metadata } from "next";
import localFont from "next/font/local";

import { rootMetadata } from "@/configs/metadata";
import { cn } from "@/lib/utils";
import { ReactLenis } from "lenis/react";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "custom-ver-scrollbar antialiased"
        )}
      >
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
