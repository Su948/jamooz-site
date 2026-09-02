import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About JAMOOZ | Massage Device Manufacturer in Xiamen",
  description:
    "Learn about JAMOOZ, a Xiamen-based massage device manufacturer supporting global B2B brands with OEM/ODM development and manufacturing.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
