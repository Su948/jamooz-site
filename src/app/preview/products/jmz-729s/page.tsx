import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { jmz729s } from "@/lib/preview-products/new-products";

export const metadata: Metadata = {
  title: `${jmz729s.model} ${jmz729s.name} | JAMOOZ Preview`,
  description: jmz729s.seoDescription,
  robots: { index: false, follow: false },
};

export default function Jmz729sPreviewPage() {
  return <ProductDetailTemplate product={jmz729s} />;
}
