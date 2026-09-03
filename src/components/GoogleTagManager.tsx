"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  trackConversionEvent,
  type ConversionEventName,
} from "@/lib/analytics";

const gtmId =
  process.env.NEXT_PUBLIC_GTM_ID?.trim() || "GTM-MXCQZ9VF";
const validGtmId = Boolean(gtmId && /^GTM-[A-Z0-9]+$/.test(gtmId));

function inferConversionEvent(anchor: HTMLAnchorElement): ConversionEventName | null {
  const explicitEvent = anchor.dataset.analyticsEvent;
  if (
    explicitEvent === "form_submit" ||
    explicitEvent === "whatsapp_click" ||
    explicitEvent === "email_click" ||
    explicitEvent === "phone_click" ||
    explicitEvent === "catalog_download"
  ) {
    return explicitEvent;
  }

  const href = anchor.getAttribute("href") || "";
  if (/^mailto:/i.test(href)) return "email_click";
  if (/^tel:/i.test(href)) return "phone_click";
  if (/^(https?:\/\/)?(wa\.me|api\.whatsapp\.com)\//i.test(href)) {
    return "whatsapp_click";
  }
  if (
    anchor.hasAttribute("download") ||
    /(?:catalog|catalogue|brochure)/i.test(href) ||
    /\.(?:pdf|zip)(?:$|[?#])/i.test(href)
  ) {
    return "catalog_download";
  }

  return null;
}

export default function GoogleTagManager() {
  useEffect(() => {
    if (!validGtmId) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const conversionEvent = inferConversionEvent(anchor);
      if (!conversionEvent) return;

      trackConversionEvent(conversionEvent, {
        link_location: anchor.dataset.analyticsLocation || "site",
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!validGtmId) return null;

  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          className="invisible hidden"
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}
