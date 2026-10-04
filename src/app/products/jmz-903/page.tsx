import type { Metadata } from "next";
import { jmz903 } from "@/lib/preview-products/new-products";

export const metadata: Metadata = {
  title: `${jmz903.model} ${jmz903.name} | JAMOOZ`,
  description: jmz903.seoDescription,
  alternates: { canonical: "/products/jmz-903" },
};

export { default } from "../../preview/products/jmz-903/page";
