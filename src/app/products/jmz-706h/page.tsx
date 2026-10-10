import type { Metadata } from "next";
import { jmz706h } from "@/lib/preview-products/planned-products";

export const metadata: Metadata = {
  title: `${jmz706h.model} ${jmz706h.name} | JAMOOZ`,
  description: jmz706h.seoDescription,
  alternates: { canonical: "/products/jmz-706h" },
};

export { default } from "../../preview/products/jmz-706h/page";
