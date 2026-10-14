import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { jmz722 } from "@/lib/preview-products/new-products";

export const metadata: Metadata = {
  title: "Elbow Massager Manufacturer | EMS & Heat OEM | JAMOOZ",
  description: jmz722.seoDescription,
  alternates: { canonical: "/products/jmz-722" },
};

export default function Jmz722Page() {
  return <ProductDetailTemplate product={jmz722} />;
}
