"use client";

import { usePathname } from "next/navigation";
import InquiryForm from "@/components/InquiryForm";
import { companyFacts, contactLinks } from "@/lib/company";
import { operationalClaims } from "@/lib/operational-claims";
import { buildWhatsAppInquiryMessage } from "@/lib/whatsapp";

export default function PreviewContactSection() {
  const pathname = usePathname();
  if (pathname !== "/" && !pathname.startsWith("/preview") && pathname !== "/products") return null;
  if (pathname.startsWith("/preview/products/") || pathname.startsWith("/products/jmz-")) return null;
  const whatsappUrl = contactLinks.whatsapp(buildWhatsAppInquiryMessage({ sourcePage: pathname }));

  return (
    <section id="inquiry" className="scroll-mt-24 bg-gradient-to-br from-[#151028] via-[#211345] to-[#3d1a6d] py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.45fr_.75fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-300">Inquiry / Request A Quote</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Tell us what you want to build.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/65">Share your product, volume and customization requirements. Your inquiry will be sent securely to the JAMOOZ sales team.</p>
          <div className="mt-10">
            <InquiryForm id="homepage-inquiry-form" sourcePage={pathname} theme="dark" />
          </div>
        </div>

        <aside className="h-fit min-w-0 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-8 lg:mt-20">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-300">Contact JAMOOZ</p>
          <a href={contactLinks.email} data-analytics-location="inquiry_sidebar" className="mt-7 block break-all text-xl font-bold hover:text-violet-200 sm:text-2xl">{companyFacts.contact.email}</a>
          <a href={whatsappUrl} data-analytics-location="inquiry_sidebar" target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"><span aria-hidden className="text-lg">●</span>Chat on WhatsApp</a>
          <p className="mt-3 text-sm text-white/65">{companyFacts.contact.whatsappDisplay}</p>
          <div className="mt-8 space-y-5 border-t border-white/15 pt-8 text-sm text-white/70">
            <p><span className="block text-xs font-bold uppercase tracking-wider text-white/40">Location</span><span className="mt-1 block text-lg text-white">{companyFacts.location.label}</span></p>
            <p><span className="block text-xs font-bold uppercase tracking-wider text-white/40">Response</span><span className="mt-1 block text-lg text-white">{operationalClaims.responseShort}</span></p>
          </div>
          <p className="mt-8 rounded-2xl bg-black/15 p-4 text-xs leading-6 text-white/65">Online form, email and WhatsApp are available for product, quotation and OEM/ODM inquiries.</p>
        </aside>
      </div>

    </section>
  );
}
