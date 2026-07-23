import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Massage Equipment Catalog | Jamooz Product Collection",
  description: "Browse our professional B2B massage products catalog. High-quality massage pillows, neck massagers, and heat pads from a trusted China massage manufacturer.",
  keywords: "massage products catalog, B2B massage devices, China massage supplier, wholesale massage equipment",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
