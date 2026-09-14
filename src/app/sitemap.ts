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
    {
      url: `${companyFacts.website}/products`,
      lastModified: "2026-09-14",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...["jmz-906", "jmz-702", "jmz-r006"].map((slug) => ({
      url: `${companyFacts.website}/products/${slug}`,
      lastModified: "2026-09-14",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return indexablePages;
}
