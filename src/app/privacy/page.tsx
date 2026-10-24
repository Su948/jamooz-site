import type { Metadata } from "next";
import Link from "next/link";
import PrivacyChoices from "@/components/PrivacyChoices";
import { companyFacts } from "@/lib/company";
export const metadata: Metadata = { title: "Privacy & Inquiry Information | JAMOOZ", description: "How JAMOOZ uses website inquiries and optional analytics, and how to contact us about your information.", alternates: { canonical: "/privacy" } };
export default function PrivacyPage() {
  return <article className="mx-auto max-w-3xl px-5 py-16 text-[#302050] sm:px-8">
    <p className="text-sm text-zinc-500">Updated 24 October 2026</p>
    <h1 className="mt-3 text-4xl font-semibold">Privacy &amp; inquiry information</h1>
    <div className="mt-8 space-y-8 leading-7 text-zinc-700">
      <section><h2 className="text-xl font-semibold">Information you send</h2><p>Our quotation forms collect your name, company, business email, product interest and any optional phone number, order details, target market or message you provide. We use this information to respond to your inquiry and discuss the requested products or project. Please do not include payment details or sensitive personal information.</p></section>
      <section><h2 className="text-xl font-semibold">Inquiry delivery and site operation</h2><p>Inquiries are delivered to the JAMOOZ sales team using an email delivery service. Website hosting, delivery and security providers process technical information needed to operate these services. The form uses request checks and rate limiting to reduce spam. Please contact us about access, correction, deletion or retention of information associated with your inquiry.</p></section>
      <section><h2 className="text-xl font-semibold">Optional analytics</h2><p>Google analytics tools and Microsoft Clarity load only after you allow analytics. Your preference is stored in your browser. You can continue browsing and submitting inquiries with essential functions only. Changing your choice does not delete information already collected.</p><PrivacyChoices /></section>
      <section><h2 className="text-xl font-semibold">External services</h2><p>Links to WhatsApp and Alibaba take you to services with their own privacy practices. Some images and videos are hosted by third-party content services, which receive the technical requests needed to load that content.</p></section>
      <section><h2 className="text-xl font-semibold">Contact about your information</h2><p>Contact <a href={`mailto:${companyFacts.contact.email}`} className="underline">{companyFacts.contact.email}</a> and include your inquiry reference if available. JAMOOZ is based in {companyFacts.location.label}.</p></section>
      <Link href="/rfq" className="inline-block font-semibold text-violet-700 underline">Request a quote</Link>
    </div>
  </article>;
}
