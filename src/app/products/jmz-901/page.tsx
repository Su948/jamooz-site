import type { Metadata } from "next";
import { jmz901 } from "@/lib/preview-products/planned-products";

export const metadata: Metadata = {
  title: `${jmz901.model} ${jmz901.name} | JAMOOZ`,
  description: jmz901.seoDescription,
  alternates: { canonical: "/products/jmz-901" },
};

export { default } from "../../preview/products/jmz-901/page";
