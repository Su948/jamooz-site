export const conversionEventNames = [
  "form_submit",
  "whatsapp_click",
  "email_click",
  "phone_click",
  "catalog_download",
] as const;

export type ConversionEventName = (typeof conversionEventNames)[number];

type ConversionEventParameters = {
  form_id?: string;
  form_method?: "mailto" | "online";
  link_location?: string;
};

type DataLayerEvent = ConversionEventParameters & {
  event: ConversionEventName;
  event_category: "conversion";
  event_source: "website";
  page_path: string;
};

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

/**
 * Push a conversion intent to GTM without including form values or contact data.
 */
export function trackConversionEvent(
  event: ConversionEventName,
  parameters: ConversionEventParameters = {},
) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    event_category: "conversion",
    event_source: "website",
    page_path: window.location.pathname,
    ...parameters,
  });
}
