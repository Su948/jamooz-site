"use client";

import { useEffect, useMemo, useState } from "react";
import type { RegionalPricingConfig } from "@/lib/product-detail";

type MarketResponse = {
  country: string | null;
  source: "ip" | "unavailable";
};

const marketNames: Record<string, string> = {
  JP: "Japan",
  KR: "South Korea",
  CN: "Mainland China",
  HK: "Hong Kong",
  MO: "Macao",
  TW: "Taiwan",
  OTHER: "All other markets",
};

export default function RegionalPricingCard({ config }: { config: RegionalPricingConfig }) {
  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);
  const [selectedMarket, setSelectedMarket] = useState<string>("AUTO");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem("jmz-market-override");
    if (stored) queueMicrotask(() => setSelectedMarket(stored));

    fetch("/api/market", { cache: "no-store" })
      .then((response) => response.json() as Promise<MarketResponse>)
      .then((data) => setDetectedCountry(data.country))
      .catch(() => setDetectedCountry(null))
      .finally(() => setLoading(false));
  }, []);

  const effectiveMarket = selectedMarket === "AUTO" ? detectedCountry : selectedMarket;
  const special = effectiveMarket ? config.specialMarkets.includes(effectiveMarket) : false;
  const marketLabel = effectiveMarket ? (marketNames[effectiveMarket] ?? effectiveMarket) : "Market not detected";
  const priceTiers = special ? config.specialPriceTiers : config.defaultPriceTiers;
  const prices = priceTiers?.map((tier) => Number(tier.price)).filter(Number.isFinite) ?? [];
  const priceRange = prices.length
    ? `${config.currency} ${Math.min(...prices).toFixed(2)}–${Math.max(...prices).toFixed(2)} / pc`
    : "Price pending confirmation";

  const detectionCopy = useMemo(() => {
    if (loading) return "Detecting your market…";
    if (selectedMarket !== "AUTO") return `Manual market selection: ${marketLabel}`;
    return detectedCountry ? `Detected market: ${marketLabel}` : "Automatic market detection is unavailable in local preview.";
  }, [detectedCountry, loading, marketLabel, selectedMarket]);

  const updateMarket = (value: string) => {
    setSelectedMarket(value);
    if (value === "AUTO") window.localStorage.removeItem("jmz-market-override");
    else window.localStorage.setItem("jmz-market-override", value);
  };

  return (
    <div className="mt-8 rounded-2xl border border-white/85 bg-white/82 p-5 shadow-[0_20px_55px_rgba(38,67,105,0.09)] backdrop-blur sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#718097]">Regional price</p>
          <p className="mt-2 text-3xl font-black tracking-tight text-[#244f82]">
            {priceRange}
          </p>
          <p className="mt-2 text-xs font-bold text-[#52637a]">{detectionCopy}</p>
        </div>
        <label className="min-w-[220px] text-xs font-bold uppercase tracking-[0.1em] text-[#718097]">
          Market / region
          <select
            value={selectedMarket}
            onChange={(event) => updateMarket(event.target.value)}
            className="mt-2 min-h-11 w-full rounded-xl border border-[#ccd8e6] bg-white px-3 text-sm font-bold normal-case tracking-normal text-[#24344b]"
          >
            <option value="AUTO">Automatic detection</option>
            {config.specialMarkets.map((country) => <option key={country} value={country}>{marketNames[country] ?? country}</option>)}
            <option value="OTHER">All other markets</option>
          </select>
        </label>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className={`rounded-xl border p-4 ${special ? "border-[#315b8d] bg-[#eef5fc]" : "border-[#dfe5ee] bg-[#f7faff]"}`}>
          <p className="text-xs font-black uppercase tracking-[0.1em] text-[#315b8d]">Regional group</p>
          <p className="mt-2 text-sm leading-6 text-[#52637a]">{config.specialMarketLabel}</p>
        </div>
        <div className={`rounded-xl border p-4 ${!special ? "border-[#315b8d] bg-[#eef5fc]" : "border-[#dfe5ee] bg-[#f7faff]"}`}>
          <p className="text-xs font-black uppercase tracking-[0.1em] text-[#315b8d]">Default group</p>
          <p className="mt-2 text-sm leading-6 text-[#52637a]">{config.defaultMarketLabel}</p>
        </div>
      </div>

      {priceTiers?.length ? (
        <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-xl border border-[#dfe5ee] sm:grid-cols-4">
          {priceTiers.map((tier, index) => (
            <div key={tier.quantity} className={`p-3 ${index % 2 === 0 ? "bg-[#f7faff]" : "bg-white"} ${index > 0 ? "border-l border-[#dfe5ee]" : ""}`}>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#7a8799]">{tier.quantity}</p>
              <p className="mt-1 text-sm font-black text-[#24344b]">US${tier.price} / pc</p>
            </div>
          ))}
        </div>
      ) : null}

      <p className="mt-4 text-xs leading-5 text-[#718097]">
        IP detection sets the initial market only. Buyers can correct the market when a VPN, corporate network or mobile carrier produces the wrong location. Final pricing is confirmed in the quotation.
      </p>
    </div>
  );
}
