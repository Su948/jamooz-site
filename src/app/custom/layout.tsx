import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Custom Scalp Massager | Branding & Packaging | JAMOOZ",
  description:
    "Explore JAMOOZ OEM/ODM options for massage devices, including product configuration, branding, finishes, packaging, and quotation support.",
  alternates: {
    canonical: "/custom",
  },
};

export default function CustomLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
