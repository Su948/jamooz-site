import { companyFacts } from "@/lib/company";

export type ProductJsonLdProps = {
  /** Manufacturer model number, used for both `sku` and `mpn`. */
  model: string;
  /** Published product name, without the model prefix. */
  name: string;
  /** Published product summary copy already shown on the page. */
  description: string;
  /** Root-relative paths of the product photography already published on the page. */
  images: readonly string[];
  /** Root-relative product page path, e.g. "/products/jmz-901". */
  path: string;
  /** Published USD price strings used to build an AggregateOffer. */
  prices?: readonly string[];
};

const absolute = (path: string) =>
  path.startsWith("http") ? path : `${companyFacts.website}${path}`;

const parseUsdPrice = (price: string) => {
  const match = price.match(/(?:US\$|\$)\s*([0-9]+(?:\.[0-9]+)?)/);
  return match ? Number(match[1]) : null;
};

/**
 * Product structured data for pages with published commercial terms.
 *
 * Google requires a Product entity to include offers, review or aggregateRating
 * for product rich results. We do not manufacture reviews or ratings. Instead,
 * pages with confirmed price tiers emit an AggregateOffer based only on the
 * prices already visible on the page. Custom-quote pages emit no Product entity
 * until a publishable price is available.
 */
export default function ProductJsonLd({
  model,
  name,
  description,
  images,
  path,
  prices = [],
}: ProductJsonLdProps) {
  const priceValues = prices
    .map(parseUsdPrice)
    .filter((price): price is number => price !== null && Number.isFinite(price));

  if (priceValues.length === 0) return null;

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${model} ${name}`,
    sku: model,
    mpn: model,
    brand: { "@type": "Brand", name: companyFacts.brandName },
    description,
    image: images.map((image) => absolute(image)),
    url: absolute(path),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: Math.min(...priceValues).toFixed(2),
      highPrice: Math.max(...priceValues).toFixed(2),
      offerCount: priceValues.length,
      availability: "https://schema.org/InStock",
      url: absolute(path),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(product).replace(/</g, "\\u003c") }}
    />
  );
}
