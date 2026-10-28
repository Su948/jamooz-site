import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { jmzV002 } from "@/lib/preview-products/november-products";

export const metadata: Metadata = {
  title: "4-Mode EMS Hip & Body Pad | Regional Pricing | JAMOOZ",
  description: jmzV002.seoDescription,
  alternates: { canonical: "/products/jmz-v002" },
};

export default function Page() {
  return <ProductDetailTemplate product={jmzV002} />;
}
