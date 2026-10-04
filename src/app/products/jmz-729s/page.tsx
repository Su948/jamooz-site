import type { Metadata } from "next";
import { jmz729s } from "@/lib/preview-products/new-products";

export const metadata: Metadata = {
  title: `${jmz729s.model} ${jmz729s.name} | JAMOOZ`,
  description: jmz729s.seoDescription,
  alternates: { canonical: "/products/jmz-729s" },
};

export { default } from "../../preview/products/jmz-729s/page";
