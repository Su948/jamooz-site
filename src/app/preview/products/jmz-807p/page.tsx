import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { jmz807p } from "@/lib/preview-products/planned-products";

export const metadata: Metadata = {
  title: `${jmz807p.model} ${jmz807p.name} | JAMOOZ Preview`,
  description: jmz807p.seoDescription,
  robots: { index: false, follow: false },
};

export default function Jmz807pPreviewPage() {
  return <ProductDetailTemplate product={jmz807p} />;
}
