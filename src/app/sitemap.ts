import type { MetadataRoute } from "next";
import { companyFacts } from "@/lib/company";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${companyFacts.website}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
