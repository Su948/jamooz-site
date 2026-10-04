import type { Metadata } from "next";
import { jmz908 } from "@/lib/preview-products/new-products";

export const metadata: Metadata = {
  title: `${jmz908.model} ${jmz908.name} | JAMOOZ`,
  description: jmz908.seoDescription,
  alternates: { canonical: "/products/jmz-908" },
};

export { default } from "../../preview/products/jmz-908/page";
