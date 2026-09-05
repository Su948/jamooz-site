"use client";

import { usePathname } from "next/navigation";
import InquiryForm from "@/components/InquiryForm";
import { companyFacts, contactLinks } from "@/lib/company";
import { operationalClaims } from "@/lib/operational-claims";

const whatsappMessage = "Hello JAMOOZ, I am interested in your massage products and OEM/ODM services. Please share more information.";
const whatsappUrl = contactLinks.whatsapp(whatsappMessage);

export default function PreviewContactSection() {
  const pathname = usePathname();
  if (pathname !== "/" && !pathname.startsWith("/preview")) return null;

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

        <aside className="h-fit rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-sm lg:mt-20">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-300">Contact JAMOOZ</p>
          <a href={contactLinks.email} data-analytics-location="inquiry_sidebar" className="mt-7 block break-all text-2xl font-bold hover:text-violet-200">{companyFacts.contact.email}</a>
          <a href={whatsappUrl} data-analytics-location="inquiry_sidebar" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><span aria-hidden className="text-lg">●</span>Chat on WhatsApp</a>
          <p className="mt-3 text-sm text-white/65">{companyFacts.contact.whatsappDisplay}</p>
          <div className="mt-8 space-y-5 border-t border-white/15 pt-8 text-sm text-white/70">
            <p><span className="block text-xs font-bold uppercase tracking-wider text-white/40">Location</span><span className="mt-1 block text-lg text-white">{companyFacts.location.label}</span></p>
            <p><span className="block text-xs font-bold uppercase tracking-wider text-white/40">Response</span><span className="mt-1 block text-lg text-white">{operationalClaims.responseShort}</span></p>
          </div>
          <p className="mt-8 rounded-2xl bg-black/15 p-4 text-xs leading-6 text-white/65">Online form, email and WhatsApp are available for product, quotation and OEM/ODM inquiries.</p>
        </aside>
      </div>

      <a href={whatsappUrl} data-analytics-location="floating_button" target="_blank" rel="noreferrer" aria-label="Chat with JAMOOZ on WhatsApp" title="Chat with JAMOOZ on WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl ring-4 ring-white/70 transition hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-300">
        <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7 fill-current"><path d="M16 3a12.5 12.5 0 0 0-10.7 19L3.7 28l6.2-1.6A12.5 12.5 0 1 0 16 3Zm0 22.7a10.2 10.2 0 0 1-5.2-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A10.2 10.2 0 1 1 16 25.7Zm5.6-7.6c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1a8.3 8.3 0 0 1-2.5-1.5 9.2 9.2 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2.8.3 1.5.5 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.2-.2-.5-.3-.8-.5Z" /></svg>
        <span className="sr-only">WhatsApp</span>
      </a>
    </section>
  );
}
