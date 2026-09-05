"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { trackConversionEvent } from "@/lib/analytics";
import { oemOptions } from "@/lib/rfq";

const primaryFields = [
  { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
  { name: "company", label: "Company", type: "text", required: true, autoComplete: "organization" },
  { name: "email", label: "Business Email", type: "email", required: true, autoComplete: "email" },
  { name: "phone", label: "WhatsApp / Phone", type: "tel", required: false, autoComplete: "tel" },
  { name: "product", label: "Product Interested In", type: "text", required: true, autoComplete: "off" },
] as const;

type InquiryFormProps = {
  id: string;
  sourcePage: string;
  theme?: "dark" | "light";
  initialProduct?: string;
};
type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; reference: string }
  | { status: "error"; message: string };

export default function InquiryForm({
  id,
  sourcePage,
  theme = "light",
  initialProduct = "",
}: InquiryFormProps) {
  const [state, setState] = useState<SubmissionState>({ status: "idle" });
  const startedAt = useRef(0);
  const isDark = theme === "dark";

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setState({ status: "submitting" });

    try {
      const response = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(formData.entries()), sourcePage, startedAt: startedAt.current }),
      });
      const result = (await response.json()) as { message?: string; reference?: string };
      if (!response.ok || !result.reference) {
        throw new Error(result.message || "We could not send your inquiry. Please try again.");
      }

      trackConversionEvent("form_submit", { form_id: id, form_method: "online" });
      setState({ status: "success", reference: result.reference });
      form.reset();
      startedAt.current = Date.now();
    } catch (error) {
      setState({ status: "error", message: error instanceof Error ? error.message : "We could not send your inquiry. Please try again." });
    }
  }

  const inputClass = isDark
    ? "mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-violet-300 focus:bg-white/15 sm:text-sm"
    : "mt-2 min-h-12 w-full rounded-xl border border-border-warm bg-white px-4 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 sm:text-sm";
  const labelClass = isDark ? "text-xs font-bold uppercase tracking-wider text-white/70" : "text-xs font-bold uppercase tracking-wider text-muted";

  return (
    <form id={id} onSubmit={handleSubmit} className="relative grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5">
      <p className={`sm:col-span-2 text-sm ${isDark ? "text-white/60" : "text-muted"}`}>Only 4 required fields. Add order details now or discuss them with our sales team later.</p>
      {primaryFields.map((field) => (
        <label key={field.name} className={`${labelClass} min-w-0 ${field.name === "product" ? "sm:col-span-2" : ""}`}>
          {field.label}{field.required && " *"}
          <input name={field.name} type={field.type} required={field.required} autoComplete={field.autoComplete} defaultValue={field.name === "product" ? initialProduct : undefined} maxLength={field.name === "email" ? 254 : 180} data-clarity-mask="true" className={inputClass} />
        </label>
      ))}

      <details className={`group rounded-2xl border p-4 sm:col-span-2 ${isDark ? "border-white/15 bg-white/5" : "border-border-warm bg-cream-soft/40"}`}>
        <summary className={`flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold ${isDark ? "text-white" : "text-navy"}`}>
          Add order details <span className={`text-xs font-medium ${isDark ? "text-white/55" : "text-muted"}`}>(optional)</span>
          <span aria-hidden className="ml-auto text-lg transition group-open:rotate-45">+</span>
        </summary>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-5">
          <label className={`${labelClass} min-w-0`}>
            Estimated Quantity
            <input name="quantity" type="text" autoComplete="off" maxLength={80} inputMode="numeric" data-clarity-mask="true" className={inputClass} />
          </label>
          <label className={`${labelClass} min-w-0`}>
            OEM / ODM Requirement
            <select name="oem" defaultValue={oemOptions[0]} data-clarity-mask="true" className={`${inputClass} ${isDark ? "bg-[#2b1852]" : "bg-white"}`}>
              {oemOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
          <label className={`${labelClass} min-w-0 sm:col-span-2`}>
            Message
            <textarea name="message" rows={4} maxLength={3000} data-clarity-mask="true" className={`${inputClass} resize-y`} />
          </label>
        </div>
      </details>

      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="sm:col-span-2">
        <button type="submit" disabled={state.status === "submitting"} className={isDark
          ? "min-h-12 w-full rounded-full bg-white px-7 py-3.5 text-sm font-black tracking-[0.08em] text-violet-800 transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
          : "btn-primary min-h-12 w-full justify-center py-3.5 text-sm disabled:cursor-wait disabled:opacity-60 sm:w-auto"}>
          {state.status === "submitting" ? "SENDING…" : "SEND INQUIRY →"}
        </button>
        <div aria-live="polite" className={`mt-4 min-h-6 text-sm ${isDark ? "text-violet-100" : "text-muted"}`}>
          {state.status === "success" && <p>Thank you — your inquiry has been delivered. Reference: <strong>{state.reference}</strong></p>}
          {state.status === "error" && <p className={isDark ? "text-rose-200" : "text-red-700"}>{state.message}</p>}
        </div>
      </div>
    </form>
  );
}
