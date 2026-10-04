import type { Metadata } from "next";
import { jmz802 } from "@/lib/preview-products/new-products";

export const metadata: Metadata = {
  title: `${jmz802.model} ${jmz802.name} | JAMOOZ`,
  description: jmz802.seoDescription,
  alternates: { canonical: "/products/jmz-802" },
};

export { default } from "../../preview/products/jmz-802/page";
