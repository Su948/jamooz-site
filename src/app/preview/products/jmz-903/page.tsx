import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { jmz903 } from "@/lib/preview-products/new-products";

export const metadata: Metadata = {
  title: `${jmz903.model} ${jmz903.name} | JAMOOZ Preview`,
  description: jmz903.seoDescription,
  robots: { index: false, follow: false },
};

export default function Jmz903PreviewPage() {
  return <ProductDetailTemplate product={jmz903} />;
}
