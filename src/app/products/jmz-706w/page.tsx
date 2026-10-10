import type { Metadata } from "next";
import { jmz706w } from "@/lib/preview-products/planned-products";

export const metadata: Metadata = {
  title: `${jmz706w.model} ${jmz706w.name} | JAMOOZ`,
  description: jmz706w.seoDescription,
  alternates: { canonical: "/products/jmz-706w" },
};

export { default } from "../../preview/products/jmz-706w/page";
