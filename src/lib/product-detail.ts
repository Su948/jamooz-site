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
  samplePrice?: string;
  priceTiers?: readonly ProductPriceTier[];
  customPricing?: boolean;
  featuresLabel: string;
  featuresTitle: string;
  featuresIntro: string;
  features: readonly ProductFeature[];
  specsIntro: string;
  specs: readonly ProductSpec[];
  inquiryCopy: string;
};
