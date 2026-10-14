import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { jmz801 } from "@/lib/preview-products/new-products";

export const metadata: Metadata = {
  title: "Neck Support Pillow Manufacturer | OEM & ODM | JAMOOZ",
  description: jmz801.seoDescription,
  alternates: { canonical: "/products/jmz-801" },
};

export default function Jmz801Page() {
  return <ProductDetailTemplate product={jmz801} />;
}
