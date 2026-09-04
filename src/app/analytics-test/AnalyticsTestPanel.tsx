"use client";

import {
  conversionEventNames,
  trackConversionEvent,
  type ConversionEventName,
} from "@/lib/analytics";

const eventParameters: Record<
  ConversionEventName,
  NonNullable<Parameters<typeof trackConversionEvent>[1]>
> = {
  form_submit: {
    form_id: "analytics-preview-test",
    form_method: "online",
  },
  whatsapp_click: { link_location: "analytics-preview-test" },
  email_click: { link_location: "analytics-preview-test" },
  phone_click: { link_location: "analytics-preview-test" },
  catalog_download: { link_location: "analytics-preview-test" },
};

export default function AnalyticsTestPanel() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold text-slate-900">
        Analytics preview test
      </h1>
      <p className="mt-4 text-slate-600">
        Preview-only controls for validating JAMOOZ conversion events. These
        buttons do not contact anyone, submit a form, or download a file.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {conversionEventNames.map((eventName) => (
          <button
            key={eventName}
            type="button"
            className="rounded-lg bg-slate-900 px-5 py-4 text-left font-medium text-white hover:bg-slate-700"
            onClick={() =>
              trackConversionEvent(eventName, eventParameters[eventName])
            }
          >
            Test {eventName}
          </button>
        ))}
      </div>
    </main>
  );
}
