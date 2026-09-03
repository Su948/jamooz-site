import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnalyticsTestPanel from "./AnalyticsTestPanel";

export const metadata: Metadata = {
  title: "Analytics Preview Test | JAMOOZ",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AnalyticsTestPage() {
  if (process.env.VERCEL_ENV !== "preview") {
    notFound();
  }

  return <AnalyticsTestPanel />;
}
