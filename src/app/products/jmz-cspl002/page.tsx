import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { jmzCspl002 } from "@/lib/preview-products/new-products";

export const metadata: Metadata = {
  title: "Kneading Neck Massage Pillow Manufacturer | OEM | JAMOOZ",
  description: jmzCspl002.seoDescription,
  alternates: { canonical: "/products/jmz-cspl002" },
};

export default function JmzCspl002Page() {
  return <ProductDetailTemplate product={jmzCspl002} />;
}
