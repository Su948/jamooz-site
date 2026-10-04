import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { jmz908 } from "@/lib/preview-products/new-products";

export const metadata: Metadata = {
  title: `${jmz908.model} ${jmz908.name} | JAMOOZ Preview`,
  description: jmz908.seoDescription,
  robots: { index: false, follow: false },
};

export default function Jmz908PreviewPage() {
  return <ProductDetailTemplate product={jmz908} />;
}
