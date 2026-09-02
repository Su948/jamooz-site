import type { MetadataRoute } from "next";
import { companyFacts } from "@/lib/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${companyFacts.website}/sitemap.xml`,
    host: companyFacts.website,
  };
}
