/**
 * Categories that already have a live category page.
 *
 * D020 rule C-6 requires canonical, sitemap and internal links to resolve to the
 * same URL, so the category URL and its buyer-readable label (rule B-1) are
 * defined once here instead of being repeated in the navbar, the products hub
 * and the product breadcrumbs.
 */

export type CategoryGuide = {
  /** Descriptive anchor text — the guide's own published title. */
  label: string;
  href: string;
};

export type LiveProductCategory = {
  /** Category value used by the product configurations in `lib/preview-products`. */
  category: string;
  /** Buyer-readable category name used in breadcrumbs and hub group headings. */
  label: string;
  /** Live category page. */
  href: string;
  /**
   * Decision guides belonging to this cluster. Cluster content is linked from
   * the cluster's own pages, so unrelated product pages never repeat it.
   */
  guides?: readonly CategoryGuide[];
};

export const liveProductCategories: readonly LiveProductCategory[] = [
  {
    category: "Head & Scalp",
    label: "Scalp & Hair Care",
    href: "/products/scalp-massagers",
    guides: [
      {
        label: "EMS vs vibration scalp massagers: how the two mechanisms differ",
        href: "/guides/ems-vs-vibration-scalp-massager",
      },
      {
        label: "How to choose a scalp massager supplier",
        href: "/guides/choose-scalp-massager-supplier",
      },
    ],
  },
];

export function liveCategoryFor(category: string): LiveProductCategory | undefined {
  return liveProductCategories.find((entry) => entry.category === category);
}

const hubCategoryAnchors: Readonly<Record<string, string>> = {
  "Neck & Shoulder": "neck-shoulder",
  "Head & Scalp": "head-scalp",
  "Body Care": "body-care",
  "Eye Care": "eye-care",
  "Hand & Wrist": "hand-wrist",
};

export function productCategoryAnchor(category: string): string {
  return hubCategoryAnchors[category] ?? category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function productCategoryHref(category: string): string {
  return liveCategoryFor(category)?.href ?? `/products#${productCategoryAnchor(category)}`;
}

/** Display order of the groups on the /products hub. */
export const hubCategoryOrder: readonly string[] = [
  "Neck & Shoulder",
  "Head & Scalp",
  "Body Care",
  "Eye Care",
  "Hand & Wrist",
];
