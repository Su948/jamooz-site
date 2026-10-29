export const conversionEventNames = [
  "form_start",
  "generate_lead",
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
  lead_id?: string;
};

type DataLayerEvent = ConversionEventParameters & {
  event: ConversionEventName;
  event_category: "engagement" | "conversion";
  event_source: "website";
  page_path: string;
};

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

/** Keep development hosts and test routes out of production analytics. */
export function isProductionAnalyticsPage() {
  if (typeof window === "undefined") return false;
  const { hostname, pathname } = window.location;
  return hostname === "www.jmz.global" &&
    !/^\/(?:preview|analytics-test)(?:\/|$)/.test(pathname);
}

const trackedLeads = new Set<string>();

/**
 * Push a conversion intent to GTM without including form values or contact data.
 */
export function trackConversionEvent(
  event: ConversionEventName,
  parameters: ConversionEventParameters = {},
) {
  if (!isProductionAnalyticsPage()) return;
  try {
    if (window.localStorage.getItem("jmz_analytics_consent") !== "granted") return;
  } catch {
    return;
  }

  if (event === "generate_lead") {
    // Only server-issued references qualify; never use entered contact data.
    const reference = parameters.lead_id;
    if (!reference || !/^JAM-[A-Z0-9-]+$/.test(reference) || trackedLeads.has(reference)) return;
    try {
      const key = `jmz:lead:${reference}`;
      if (window.sessionStorage.getItem(key)) return;
      window.sessionStorage.setItem(key, "1");
    } catch {
      // The in-memory guard still prevents repeats if storage is unavailable.
    }
    trackedLeads.add(reference);
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    event_category: event === "form_start" ? "engagement" : "conversion",
    event_source: "website",
    page_path: window.location.pathname,
    ...parameters,
  });
}
