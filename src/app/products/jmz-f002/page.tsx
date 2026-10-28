import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { jmzF002 } from "@/lib/preview-products/november-products";

export const metadata: Metadata = {
  title: "4-in-1 Pulse Stretch Waist Belt | JAMOOZ",
  description: jmzF002.seoDescription,
  alternates: { canonical: "/products/jmz-f002" },
};

export default function Page() {
  return <ProductDetailTemplate product={jmzF002} />;
}
