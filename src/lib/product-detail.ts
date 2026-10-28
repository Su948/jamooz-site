export type ProductSpecStatus = "Confirmed" | "TBC";

export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductPriceTier = {
  quantity: string;
  price: string;
};

export type ProductSpec = {
  item: string;
  value: string;
  status: ProductSpecStatus;
};

export type ProductFeature = {
  title: string;
  copy: string;
};

export type RegionalPricingConfig = {
  /** ISO 3166-1 alpha-2 markets that share the protected regional price. */
  specialMarkets: readonly string[];
  specialMarketLabel: string;
  defaultMarketLabel: string;
  currency: string;
  specialPriceTiers?: readonly ProductPriceTier[];
  defaultPriceTiers?: readonly ProductPriceTier[];
};

/**
 * Related link rendered before the inquiry block. Only reachable pages may be
 * passed: a product whose cluster has no published category page links to the
 * customisation page instead of a category URL that does not exist yet.
 */
export type ProductRelatedLink = {
  href: string;
  eyebrow: string;
  name: string;
  detail?: string;
  linkLabel: string;
};

export type ProductDetailConfig = {
  slug: string;
  model: string;
  category: string;
  name: string;
  eyebrow: string;
  description: string;
  seoDescription: string;
  badges: readonly string[];
  gallery: readonly ProductImage[];
  priceRange?: string;
  moq?: string;
  leadTime?: string;
  samplePrice?: string;
  priceTiers?: readonly ProductPriceTier[];
  customPricing?: boolean;
  regionalPricing?: RegionalPricingConfig;
  customizationOptions?: readonly { title: string; copy: string }[];
  featuresLabel: string;
  featuresTitle: string;
  featuresIntro: string;
  features: readonly ProductFeature[];
  specsIntro: string;
  specs: readonly ProductSpec[];
  relatedLinks?: readonly ProductRelatedLink[];
  inquiryCopy: string;
};
