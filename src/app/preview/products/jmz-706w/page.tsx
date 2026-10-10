import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { jmz706w } from "@/lib/preview-products/planned-products";

export const metadata: Metadata = {
  title: `${jmz706w.model} ${jmz706w.name} | JAMOOZ Preview`,
  description: jmz706w.seoDescription,
  robots: { index: false, follow: false },
};

export default function Jmz706wPreviewPage() {
  return <ProductDetailTemplate product={jmz706w} />;
}
