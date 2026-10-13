/**
 * Categories that already have a live category page.
 *
 * D020 rule C-6 requires canonical, sitemap and internal links to resolve to the
 * same URL, so the category URL and its buyer-readable label (rule B-1) are
 * defined once here instead of being repeated in the navbar, the products hub
 * and the product breadcrumbs.
 */

export type LiveProductCategory = {
  /** Category value used by the product configurations in `lib/preview-products`. */
  category: string;
  /** Buyer-readable category name used in breadcrumbs and hub group headings. */
  label: string;
  /** Live category page. */
  href: string;
};

export const liveProductCategories: readonly LiveProductCategory[] = [
  {
    category: "Head & Scalp",
    label: "Scalp & Hair Care",
    href: "/products/scalp-massagers",
  },
];

export function liveCategoryFor(category: string): LiveProductCategory | undefined {
  return liveProductCategories.find((entry) => entry.category === category);
}

/** Display order of the groups on the /products hub. */
export const hubCategoryOrder: readonly string[] = [
  "Neck & Shoulder",
  "Head & Scalp",
  "Body Care",
  "Eye Care",
  "Hand & Wrist",
];
