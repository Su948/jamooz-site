import type { MetadataRoute } from "next";
import { companyFacts } from "@/lib/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const indexablePages: MetadataRoute.Sitemap = [
    {
      url: companyFacts.website,
      lastModified: "2026-09-02",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${companyFacts.website}/about`,
      lastModified: "2026-09-02",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${companyFacts.website}/custom`,
      lastModified: "2026-09-02",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return indexablePages;
}
