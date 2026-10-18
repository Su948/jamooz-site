"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { contactLinks } from "@/lib/company";
import { buildWhatsAppInquiryMessage } from "@/lib/whatsapp";

export default function FloatingContactActions() {
  const pathname = usePathname();

  if (pathname.startsWith("/preview") || pathname === "/analytics-test") {
    return null;
  }

  const whatsappUrl = contactLinks.whatsapp(
    buildWhatsAppInquiryMessage({ sourcePage: pathname }),
  );
  const showQuoteButton = pathname !== "/rfq";

  return (
    <div
      className="pointer-events-none fixed inset-x-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 flex items-end justify-between gap-3 sm:inset-x-6 sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))]"
      aria-label="Quick contact actions"
    >
      <a
        href={whatsappUrl}
        data-analytics-location="floating_contact"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with JAMOOZ on WhatsApp"
        title="Chat with JAMOOZ on WhatsApp"
        className="pointer-events-auto inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(19,119,61,0.35)] ring-4 ring-white/85 transition duration-200 hover:-translate-y-1 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-300"
      >
        <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7 fill-current">
          <path d="M16 3a12.5 12.5 0 0 0-10.7 19L3.7 28l6.2-1.6A12.5 12.5 0 1 0 16 3Zm0 22.7a10.2 10.2 0 0 1-5.2-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A10.2 10.2 0 1 1 16 25.7Zm5.6-7.6c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1a8.3 8.3 0 0 1-2.5-1.5 9.2 9.2 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2.8.3 1.5.5 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.2-.2-.5-.3-.8-.5Z" />
        </svg>
        <span className="sr-only">WhatsApp</span>
      </a>

      {showQuoteButton ? (
        <Link
          href="/rfq"
          data-analytics-location="floating_contact"
          aria-label="Request a free quote"
          className="pointer-events-auto inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-black text-white shadow-[0_12px_30px_rgba(101,45,190,0.32)] ring-1 ring-white/70 transition duration-200 hover:-translate-y-1 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-300 sm:px-7 sm:text-base"
        >
          <span className="sm:hidden">Get a Quote</span>
          <span className="hidden sm:inline">Get a Free Quote</span>
          <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </div>
  );
}
