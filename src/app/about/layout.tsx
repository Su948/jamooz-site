import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About JAMOOZ | OEM/ODM Massage Device Partner in Xiamen",
  description:
    "Learn how JAMOOZ supports international B2B product teams with massage-device development, customisation and manufacturing coordination from Xiamen, China.",
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
