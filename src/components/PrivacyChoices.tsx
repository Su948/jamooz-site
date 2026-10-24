"use client";
import { saveAnalyticsConsent, useAnalyticsConsent } from "@/lib/analytics-consent";
export default function PrivacyChoices() {
  const consent = useAnalyticsConsent();
  return <div className="mt-4"><p aria-live="polite" className="text-sm">Preference: {consent === "granted" ? "Analytics allowed" : consent === "denied" ? "Essential only" : "Not selected"}</p><div className="mt-3 flex flex-wrap gap-3">{(["denied", "granted"] as const).map(choice => <button key={choice} type="button" onClick={() => { saveAnalyticsConsent(choice); window.location.reload(); }} className="min-h-11 rounded-full border border-violet-300 px-5 text-sm font-semibold">{choice === "denied" ? "Use essential only" : "Allow analytics"}</button>)}</div></div>;
}
