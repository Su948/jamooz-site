import type { MetadataRoute } from "next";
import { companyFacts } from "@/lib/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["Googlebot", "Bingbot", "OAI-SearchBot"],
        allow: "/",
        disallow: "/api/",
      },
      {
        // GPTBot is for model training, not ChatGPT search. Keep that
        // authorization separate from search crawling and opt out by default.
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: `${companyFacts.website}/sitemap.xml`,
    host: companyFacts.website,
  };
}
