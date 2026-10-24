"use client";

import { saveAnalyticsConsent, useAnalyticsConsent } from "@/lib/analytics-consent";

export default function CookieConsent() {
  const consent = useAnalyticsConsent();

  if (consent !== "unset") return null;

  return (
    <aside
      aria-label="Analytics cookie preference"
      className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-3xl rounded-2xl border border-violet-200 bg-white/95 p-4 shadow-2xl shadow-violet-950/20 backdrop-blur sm:flex sm:items-center sm:gap-5 sm:p-5"
    >
      <div className="min-w-0 flex-1">
        <p className="text-sm font-black text-[#3d2758]">Your privacy choice</p>
        <p className="mt-1 text-xs leading-5 text-zinc-600 sm:text-sm">
          We use optional analytics to understand site usage and improve our product information. Essential site functions work without them. <a href="/privacy" className="underline underline-offset-4">Privacy information</a>
        </p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-0 sm:flex sm:shrink-0">
        <button
          type="button"
          onClick={() => saveAnalyticsConsent("denied")}
          className="min-h-11 rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-bold text-violet-800 transition hover:bg-violet-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          Essential only
        </button>
        <button
          type="button"
          onClick={() => saveAnalyticsConsent("granted")}
          className="min-h-11 rounded-full bg-violet-700 px-4 py-2 text-xs font-bold text-white transition hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
        >
          Allow analytics
        </button>
      </div>
    </aside>
  );
}
