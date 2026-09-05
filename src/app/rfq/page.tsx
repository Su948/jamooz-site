import InquiryForm from "@/components/InquiryForm";
import { companyFacts, contactLinks } from "@/lib/company";
import { operationalClaims } from "@/lib/operational-claims";
import { buildWhatsAppInquiryMessage } from "@/lib/whatsapp";

type RFQPageProps = {
  searchParams: Promise<{ product?: string | string[] }>;
};

export default async function RFQPage({ searchParams }: RFQPageProps) {
  const productParam = (await searchParams).product;
  const initialProduct = (Array.isArray(productParam) ? productParam[0] : productParam)?.trim().slice(0, 180) || "";
  const sourcePage = initialProduct ? `/rfq?product=${encodeURIComponent(initialProduct)}` : "/rfq";
  const whatsappUrl = contactLinks.whatsapp(buildWhatsAppInquiryMessage({ product: initialProduct, sourcePage }));
  return (
    <div className="min-h-screen bg-background pb-32 pt-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:px-8">
        <div className="h-fit lg:sticky lg:top-40">
          <p className="mono-label text-xs font-bold uppercase tracking-widest text-navy">Connect with us</p>
          <h1 className="serif-display mt-6 text-[54px] font-semibold leading-none text-foreground md:text-[64px]">Request a Quote</h1>
          <p className="mt-8 text-lg leading-relaxed text-muted">Partner with our manufacturing experts. Whether it&apos;s a bulk order or a custom project, share the details and we will respond with the relevant product and quotation information.</p>

          <div className="mt-16 space-y-12">
            <div><h2 className="mono-label mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Response Time</h2><p className="text-xl font-bold tracking-tight text-navy">{operationalClaims.response}</p></div>
            <div><h2 className="mono-label mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Sampling Policy</h2><p className="leading-relaxed text-muted">Sample availability, cost, and delivery time are confirmed according to the selected product and customization requirements.</p></div>
            <div className="border-t border-border-warm pt-10"><h2 className="mono-label mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Direct Contact</h2><a href={contactLinks.email} data-analytics-location="rfq_direct_contact" className="block text-lg font-bold text-navy hover:text-accent">{companyFacts.contact.email}</a><a href={whatsappUrl} data-analytics-location="rfq_direct_contact" target="_blank" rel="noopener noreferrer" className="mt-3 block text-lg text-muted hover:text-accent">WhatsApp: {companyFacts.contact.whatsappDisplay}</a></div>
          </div>
        </div>

        <div className="premium-card bg-white p-8 shadow-2xl shadow-black/5 md:p-12 lg:p-16">
          <p className="mono-label text-xs font-bold uppercase tracking-widest text-navy">Secure online inquiry</p>
          <h2 className="serif-display mt-6 text-4xl font-semibold text-foreground">Tell us about your project</h2>
          <p className="mb-10 mt-5 text-muted">Required fields are marked with an asterisk. Your details are sent directly to the JAMOOZ sales team.</p>
          <InquiryForm id="rfq-page-form" sourcePage={sourcePage} initialProduct={initialProduct} />
        </div>
      </div>
    </div>
  );
}
