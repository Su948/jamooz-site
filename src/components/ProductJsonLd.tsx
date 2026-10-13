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
};

const absolute = (path: string) =>
  path.startsWith("http") ? path : `${companyFacts.website}${path}`;

/**
 * Product structured data for a single product page.
 *
 * Only values that are already published on the page are emitted: model number,
 * name, summary copy, product photography and the page URL. Commercial terms and
 * every specification still marked TBC are left out, and no rating or review
 * markup is added because no review data exists.
 */
export default function ProductJsonLd({
  model,
  name,
  description,
  images,
  path,
}: ProductJsonLdProps) {
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(product).replace(/</g, "\\u003c") }}
    />
  );
}
