import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { jmz802 } from "@/lib/preview-products/new-products";

export const metadata: Metadata = {
  title: `${jmz802.model} ${jmz802.name} | JAMOOZ Preview`,
  description: jmz802.seoDescription,
  robots: { index: false, follow: false },
};

export default function Jmz802PreviewPage() {
  return <ProductDetailTemplate product={jmz802} />;
}
