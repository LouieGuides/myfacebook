import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import "./globals.css";
import { Providers } from "@/app/providers";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "myFacebookai | Initial Concept Demo",
  description:
    "A clickable demo for local and niche community experiences, powered by Louie Guides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
