"use client";

import { useEffect, useState } from "react";

export type AnalyticsConsent = "loading" | "unset" | "granted" | "denied";

const storageKey = "jmz_analytics_consent";
const consentEvent = "jmz:analytics-consent";

function readStoredConsent(): AnalyticsConsent {
  try {
    const stored = window.localStorage.getItem(storageKey);
    return stored === "granted" || stored === "denied" ? stored : "unset";
  } catch {
    return "unset";
  }
}

export function useAnalyticsConsent() {
  const [consent, setConsent] = useState<AnalyticsConsent>("loading");

  useEffect(() => {
    const syncConsent = () => setConsent(readStoredConsent());
    syncConsent();
    window.addEventListener(consentEvent, syncConsent);
    return () => window.removeEventListener(consentEvent, syncConsent);
  }, []);

  return consent;
}

export function saveAnalyticsConsent(consent: "granted" | "denied") {
  try {
    window.localStorage.setItem(storageKey, consent);
  } catch {
    // The visitor's choice still applies for this page view when storage is unavailable.
  }
  window.dispatchEvent(new Event(consentEvent));
}
