import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import {auth} from "@/auth";
import NextNProgressClient from "@/components/ui/next-progress";

import "./globals.css";
import {SessionProvider} from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Auth",
  description: "NextJS Auth with next-auth-v5",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const session = await auth();

  return (
      <SessionProvider session={session}>
        <html lang="en">
          <body className={inter.className}>
            <NextNProgressClient />
            {children}
          </body>
        </html>
      </SessionProvider>
  );
}
