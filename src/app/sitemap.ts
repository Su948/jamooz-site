import type { MetadataRoute } from "next";
import { companyFacts } from "@/lib/company";

/**
 * Recency per product page. Bumped when a page's content changes; chrome-only
 * or layout-only edits leave it as it was.
 */
const productLastModified: Record<string, string> = {
  "jmz-723": "2026-10-24",
  "jmz-cspl003": "2026-10-24",
  "jmz-727": "2026-10-24",
  "jmz-818": "2026-10-24",
  "jmz-729s": "2026-10-24",
  "jmz-908": "2026-10-24",
  "jmz-802": "2026-10-24",
  "jmz-903": "2026-10-24",
  "jmz-807p": "2026-10-24",
  "jmz-706w": "2026-10-24",
  "jmz-901": "2026-10-24",
  "jmz-706h": "2026-10-24",
  "jmz-722": "2026-10-24",
  "jmz-801": "2026-10-24",
  "jmz-cspl002": "2026-10-24",
  "jmz-cspl005": "2026-10-28",
  "jmz-f002": "2026-10-28",
  "jmz-v002": "2026-10-28",
};

const defaultProductLastModified = "2026-10-24";

export default function sitemap(): MetadataRoute.Sitemap {
  const indexablePages: MetadataRoute.Sitemap = [
    { url: `${companyFacts.website}/privacy`, lastModified: "2026-10-24", changeFrequency: "yearly", priority: 0.2 },
    {
      url: companyFacts.website,
      lastModified: "2026-10-24",
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
      lastModified: "2026-10-24",
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
      lastModified: "2026-10-24",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${companyFacts.website}/products/neck-shoulder-massagers`,
      lastModified: "2026-10-24",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${companyFacts.website}/products/scalp-massagers`,
      lastModified: "2026-10-24",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${companyFacts.website}/products/cupping-gua-sha`,
      lastModified: "2026-10-28",
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
    {
      url: `${companyFacts.website}/guides/factory-audit-checklist`,
      lastModified: "2026-10-28",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${companyFacts.website}/guides/neck-shoulder-massager-selection`,
      lastModified: "2026-10-28",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...["jmz-702", "jmz-r006", "jmz-729s", "jmz-908", "jmz-802", "jmz-903", "jmz-807p", "jmz-706w", "jmz-706h", "jmz-901", "jmz-722", "jmz-801", "jmz-cspl002", "jmz-723", "jmz-cspl003", "jmz-727", "jmz-818", "jmz-cspl005", "jmz-f002", "jmz-v002"].map((slug) => ({
      url: `${companyFacts.website}/products/${slug}`,
      lastModified: productLastModified[slug] ?? defaultProductLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return indexablePages;
}
