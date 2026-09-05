import { createHash, randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { companyFacts } from "@/lib/company";
import { escapeHtml, validateRfqSubmission, type RfqSubmission } from "@/lib/rfq";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 16 * 1024;
const MIN_COMPLETION_MS = 3_000;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1_000;
const RATE_WINDOW_MS = 10 * 60 * 1_000;
const RATE_LIMIT = 5;
const attempts = new Map<string, number[]>();

function json(message: string, status: number, reference?: string) {
  return NextResponse.json({ status: status < 400 ? "success" : "error", message, reference }, { status });
}

function requestKey(request: Request) {
  const address = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown";
  return createHash("sha256").update(address).digest("hex").slice(0, 24);
}

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((timestamp) => now - timestamp < RATE_WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  return recent.length > RATE_LIMIT;
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    const requestHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim()
      || request.headers.get("host")
      || new URL(request.url).host;
    return new URL(origin).host === requestHost;
  } catch {
    return false;
  }
}

function inquiryReference() {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  return `JAM-${date}-${randomUUID().slice(0, 8).toUpperCase()}`;
}

function textBody(data: RfqSubmission, reference: string) {
  return [
    `New JAMOOZ website inquiry — ${reference}`,
    "",
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Business email: ${data.email}`,
    `WhatsApp / Phone: ${data.phone || "Not provided"}`,
    `Product: ${data.product}`,
    `Estimated quantity: ${data.quantity || "Not provided"}`,
    `OEM / ODM: ${data.oem}`,
    `Source page: ${data.sourcePage || "Not provided"}`,
    "",
    "Message:",
    data.message || "Not provided",
  ].join("\n");
}

function htmlBody(data: RfqSubmission, reference: string) {
  const row = (label: string, value: string) => `<tr><th align="left" style="padding:7px 16px 7px 0">${label}</th><td style="padding:7px 0">${escapeHtml(value || "Not provided")}</td></tr>`;
  return `<h2>New JAMOOZ website inquiry</h2><p><strong>Reference:</strong> ${escapeHtml(reference)}</p><table>${row("Name", data.name)}${row("Company", data.company)}${row("Business email", data.email)}${row("WhatsApp / Phone", data.phone)}${row("Product", data.product)}${row("Estimated quantity", data.quantity)}${row("OEM / ODM", data.oem)}${row("Source page", data.sourcePage)}</table><h3>Message</h3><p style="white-space:pre-wrap">${escapeHtml(data.message || "Not provided")}</p>`;
}

async function deliverInquiry(data: RfqSubmission, reference: string) {
  if (process.env.NODE_ENV !== "production" && process.env.RFQ_DELIVERY_MODE === "log") {
    console.info("RFQ local delivery accepted", { reference });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RFQ_FROM_EMAIL;
  const to = process.env.RFQ_TO_EMAIL || companyFacts.contact.email;
  if (!apiKey || !from) throw new Error("Inquiry delivery is not configured.");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `JAMOOZ website inquiry — ${data.company} — ${reference}`,
      text: textBody(data, reference),
      html: htmlBody(data, reference),
    }),
  });

  if (!response.ok) {
    const failure = await response.text();
    console.error("RFQ delivery provider rejected request", { reference, status: response.status, detail: failure.slice(0, 300) });
    throw new Error("Inquiry delivery failed.");
  }
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return json("This request was blocked for security.", 403);
  if (isRateLimited(requestKey(request))) return json("Too many attempts. Please wait ten minutes and try again.", 429);

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) return json("Inquiry data is too large.", 413);

  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) return json("Inquiry data is too large.", 413);

    const validation = validateRfqSubmission(JSON.parse(rawBody));
    if (!validation.ok) return json(validation.message, 400);
    const data = validation.data;
    const reference = inquiryReference();

    // Silently accept honeypot submissions so automated senders cannot tune around it.
    if (data.website) return json("Thank you — your inquiry has been received.", 200, reference);

    const completionTime = Date.now() - data.startedAt;
    if (completionTime < MIN_COMPLETION_MS) return json("Please review the form and try again in a moment.", 429);
    if (completionTime > MAX_FORM_AGE_MS) return json("This form has expired. Please refresh the page and try again.", 400);

    await deliverInquiry(data, reference);
    console.info("RFQ delivery succeeded", { reference });
    return json("Thank you — your inquiry has been delivered.", 200, reference);
  } catch (error) {
    console.error("RFQ submission failed", { error: error instanceof Error ? error.message : "Unknown error" });
    return json(`We could not deliver your inquiry. Please email ${companyFacts.contact.email} or contact us on WhatsApp.`, 503);
  }
}
