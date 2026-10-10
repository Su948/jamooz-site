import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { jmz706h } from "@/lib/preview-products/planned-products";

export const metadata: Metadata = {
  title: `${jmz706h.model} ${jmz706h.name} | JAMOOZ Preview`,
  description: jmz706h.seoDescription,
  robots: { index: false, follow: false },
};

export default function Jmz706hPreviewPage() {
  return <ProductDetailTemplate product={jmz706h} />;
}
