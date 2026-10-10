import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { jmz901 } from "@/lib/preview-products/planned-products";

export const metadata: Metadata = {
  title: `${jmz901.model} ${jmz901.name} | JAMOOZ Preview`,
  description: jmz901.seoDescription,
  robots: { index: false, follow: false },
};

export default function Jmz901PreviewPage() {
  return <ProductDetailTemplate product={jmz901} />;
}
