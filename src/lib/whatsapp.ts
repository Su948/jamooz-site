import { companyFacts } from "@/lib/company";

type WhatsAppInquiryContext = {
  product?: string;
  sourcePage: string;
};

function cleanContext(value: string | undefined, fallback: string) {
  const cleaned = value?.replace(/\s+/g, " ").trim();
  return cleaned ? cleaned.slice(0, 180) : fallback;
}

export function buildWhatsAppInquiryMessage({
  product,
  sourcePage,
}: WhatsAppInquiryContext) {
  const productContext = cleanContext(
    product,
    "JAMOOZ massage products and OEM/ODM services",
  );
  const pagePath = sourcePage.startsWith("/") ? sourcePage : "/";

  return [
    "Hello JAMOOZ,",
    `I am interested in: ${productContext}`,
    `Source page: ${companyFacts.website}${pagePath}`,
    "Please share available models, MOQ, pricing, customization options and lead time.",
  ].join("\n");
}
