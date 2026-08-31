const whatsappNumber = "8615659835571";
const whatsappMessage = "Hello JAMOOZ, I would like to discuss a product inquiry.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function RFQPage() {
  return (
    <div className="bg-background min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20">
        <div className="lg:sticky lg:top-40 h-fit">
          <p className="mono-label text-xs font-bold text-navy uppercase tracking-widest">Connect with us</p>
          <h1 className="serif-display mt-6 text-[54px] font-semibold leading-none text-foreground md:text-[64px]">Request a Quote</h1>
          <p className="mt-8 text-lg text-muted leading-relaxed">
            Partner with our manufacturing experts. Whether it&apos;s a bulk order or a custom project, we provide precise technical support and competitive pricing for global wellness brands.
          </p>

          <div className="mt-16 space-y-12">
            <div>
              <h4 className="mono-label text-[10px] font-bold text-muted uppercase tracking-[0.2em] mb-4">Response Time</h4>
              <p className="text-xl font-bold text-navy tracking-tight">Guaranteed 24-hour turnaround on all formal inquiries.</p>
            </div>
            <div>
              <h4 className="mono-label text-[10px] font-bold text-muted uppercase tracking-[0.2em] mb-4">Sampling Policy</h4>
              <p className="text-muted leading-relaxed">Fast prototyping and sample delivery via DHL/FedEx available upon request for qualified buyers.</p>
            </div>
            <div className="pt-10 border-t border-border-warm flex gap-8">
              {['CE', 'FCC', 'RoHS', 'ISO 9001'].map((cert) => (
                <span key={cert} className="text-xs font-bold text-muted uppercase tracking-widest">{cert}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="premium-card bg-white p-10 md:p-16 lg:p-20 shadow-2xl shadow-black/5">
          <p className="mono-label text-xs font-bold text-navy uppercase tracking-widest">Online form status</p>
          <h2 className="serif-display mt-6 text-4xl font-semibold text-foreground">Online Inquiry Form Coming Soon</h2>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            Our online submission service is being prepared. Until it is ready, please contact the JAMOOZ team directly by email or WhatsApp for product details, quotations, and OEM/ODM requests.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <a href="mailto:lee@jamooz.cn" className="btn-primary py-5 text-center text-sm font-bold">
              Email JAMOOZ
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary py-5 text-center text-sm font-bold"
            >
              Contact via WhatsApp
            </a>
          </div>

          <div className="mt-12 border-t border-border-warm pt-10">
            <p className="mono-label text-[10px] font-bold text-muted uppercase tracking-[0.2em]">Direct contact</p>
            <a href="mailto:lee@jamooz.cn" className="mt-4 block text-xl font-bold text-navy hover:text-accent">
              lee@jamooz.cn
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-lg text-muted hover:text-accent"
            >
              WhatsApp: +86 156 5983 5571
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
