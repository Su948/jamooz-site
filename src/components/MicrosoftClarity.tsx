"use client";

import Script from "next/script";
import { useAnalyticsConsent } from "@/lib/analytics-consent";
import { isProductionAnalyticsPage } from "@/lib/analytics";

const clarityProjectId =
  process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim() || "ycuqa9xing";
const validClarityProjectId = /^[a-z0-9]+$/i.test(clarityProjectId);

export default function MicrosoftClarity() {
  const consent = useAnalyticsConsent();

  if (!validClarityProjectId || consent !== "granted" || !isProductionAnalyticsPage()) return null;

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script","${clarityProjectId}");`}
    </Script>
  );
}
