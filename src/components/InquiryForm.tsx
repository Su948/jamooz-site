"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { trackConversionEvent } from "@/lib/analytics";
import { oemOptions } from "@/lib/rfq";

const fields = [
  { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
  { name: "company", label: "Company", type: "text", required: true, autoComplete: "organization" },
  { name: "email", label: "Business Email", type: "email", required: true, autoComplete: "email" },
  { name: "phone", label: "WhatsApp / Phone", type: "tel", required: false, autoComplete: "tel" },
  { name: "product", label: "Product Interested In", type: "text", required: true, autoComplete: "off" },
  { name: "quantity", label: "Estimated Quantity", type: "text", required: false, autoComplete: "off" },
] as const;

type InquiryFormProps = { id: string; sourcePage: string; theme?: "dark" | "light" };
type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; reference: string }
  | { status: "error"; message: string };

export default function InquiryForm({ id, sourcePage, theme = "light" }: InquiryFormProps) {
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
    ? "mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3.5 text-sm font-normal normal-case tracking-normal text-white outline-none focus:border-violet-300 focus:bg-white/15"
    : "mt-2 w-full rounded-xl border border-border-warm bg-white px-4 py-3.5 text-sm font-normal normal-case tracking-normal text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/15";
  const labelClass = isDark ? "text-xs font-bold uppercase tracking-wider text-white/70" : "text-xs font-bold uppercase tracking-wider text-muted";

  return (
    <form id={id} onSubmit={handleSubmit} className="relative grid gap-5 sm:grid-cols-2">
      {fields.map((field) => (
        <label key={field.name} className={labelClass}>
          {field.label}{field.required && " *"}
          <input name={field.name} type={field.type} required={field.required} autoComplete={field.autoComplete} maxLength={field.name === "email" ? 254 : 180} data-clarity-mask="true" className={inputClass} />
        </label>
      ))}

      <label className={`${labelClass} sm:col-span-2`}>
        OEM / ODM Requirement
        <select name="oem" defaultValue={oemOptions[0]} data-clarity-mask="true" className={`${inputClass} ${isDark ? "bg-[#2b1852]" : "bg-white"}`}>
          {oemOptions.map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>

      <label className={`${labelClass} sm:col-span-2`}>
        Message
        <textarea name="message" rows={5} maxLength={3000} data-clarity-mask="true" className={`${inputClass} resize-y`} />
      </label>

      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="sm:col-span-2">
        <button type="submit" disabled={state.status === "submitting"} className={isDark
          ? "w-full rounded-full bg-white px-7 py-4 text-sm font-black tracking-[0.08em] text-violet-800 transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
          : "btn-primary w-full justify-center py-4 text-sm disabled:cursor-wait disabled:opacity-60 sm:w-auto"}>
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
