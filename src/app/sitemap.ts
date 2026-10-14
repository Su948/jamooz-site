import type { MetadataRoute } from "next";
import { companyFacts } from "@/lib/company";

/**
 * Recency per product page. Bumped when a page's content changes; chrome-only
 * or layout-only edits leave it as it was.
 */
const productLastModified: Record<string, string> = {
  "jmz-729s": "2026-10-13",
  "jmz-908": "2026-10-13",
  "jmz-802": "2026-10-13",
  "jmz-903": "2026-10-13",
  "jmz-807p": "2026-10-13",
  "jmz-706w": "2026-10-13",
  "jmz-901": "2026-10-13",
  "jmz-706h": "2026-10-10",
};

const defaultProductLastModified = "2026-10-04";

export default function sitemap(): MetadataRoute.Sitemap {
  const indexablePages: MetadataRoute.Sitemap = [
    {
      url: companyFacts.website,
      lastModified: "2026-10-13",
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
      lastModified: "2026-10-13",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${companyFacts.website}/oem-odm`,
      lastModified: "2026-10-14",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${companyFacts.website}/products`,
      lastModified: "2026-10-13",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${companyFacts.website}/products/scalp-massagers`,
      lastModified: "2026-10-13",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${companyFacts.website}/guides/ems-vs-vibration-scalp-massager`,
      lastModified: "2026-10-13",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${companyFacts.website}/guides/choose-scalp-massager-supplier`,
      lastModified: "2026-10-13",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...["jmz-702", "jmz-r006", "jmz-729s", "jmz-908", "jmz-802", "jmz-903", "jmz-807p", "jmz-706w", "jmz-706h", "jmz-901"].map((slug) => ({
      url: `${companyFacts.website}/products/${slug}`,
      lastModified: productLastModified[slug] ?? defaultProductLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return indexablePages;
}
