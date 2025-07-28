import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import 'remixicon/fonts/remixicon.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={` antialiased cursor-none bg-amber-50 text-black dark:bg-black dark:text-white transition-colors duration-500`}
      >
        <Navbar />
        {children}
        <SmoothCursor />
      </body>
    </html>
  );
}
