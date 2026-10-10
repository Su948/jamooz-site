import type { Metadata } from "next";
import { jmz807p } from "@/lib/preview-products/planned-products";

export const metadata: Metadata = {
  title: `${jmz807p.model} ${jmz807p.name} | JAMOOZ`,
  description: jmz807p.seoDescription,
  alternates: { canonical: "/products/jmz-807p" },
};

export { default } from "../../preview/products/jmz-807p/page";
