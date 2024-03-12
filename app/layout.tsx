import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NextNProgressClient from "@/components/ui/next-progress";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Auth",
  description: "NextJS Auth with next-auth-v5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextNProgressClient />
        {children}
      </body>
    </html>
  );
}
