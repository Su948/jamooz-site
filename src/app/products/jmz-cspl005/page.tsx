import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { jmzCspl005 } from "@/lib/preview-products/november-products";

export const metadata: Metadata = {
  title: "Cordless Heated Kneading Massage Pillow | JAMOOZ",
  description: jmzCspl005.seoDescription,
  alternates: { canonical: "/products/jmz-cspl005" },
};

export default function Page() {
  return <ProductDetailTemplate product={jmzCspl005} />;
}
