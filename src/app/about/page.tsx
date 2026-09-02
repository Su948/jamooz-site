export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="bg-cream-soft border-b border-border-warm py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mono-label text-xs font-bold text-navy uppercase tracking-widest">Our Story</p>
          <h1 className="serif-display mt-6 text-[58px] font-semibold leading-none text-foreground md:text-[78px]">About Jamooz</h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg leading-8 text-muted">
            Empowering global brands with science-backed massage technology and reliable B2B manufacturing solutions.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="mono-label text-xs font-bold text-navy uppercase tracking-widest">
              CERTIFICATIONS &amp; COMPLIANCE
            </p>
            <h2 className="serif-display mt-5 text-4xl font-semibold leading-tight">
              Certified Quality for Global Markets
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-8 text-muted">
              <p>
                Most JAMOOZ products are supported by CE, FCC and RoHS compliance documentation, with FDA registration available for applicable product models. Our manufacturing facility is ISO 9001 certified.
              </p>
              <p>
                We also support product testing and certification according to the buyer&apos;s target market and project requirements. Contact us to confirm the available documents for your selected product.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
              {['ISO 9001', 'CE', 'FCC', 'RoHS', 'FDA Registered', 'Custom Certification Support'].map((cert) => (
                <div key={cert} className="premium-card flex min-h-32 flex-col items-center justify-center p-4 text-center sm:p-6">
                  <div className="w-10 h-10 bg-navy text-white flex items-center justify-center mb-4 rounded-full font-bold">✓</div>
                  <p className="font-bold text-navy text-xs uppercase tracking-wider sm:text-sm">{cert}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square bg-cream-soft rounded-2xl overflow-hidden shadow-xl">
             <img src="/images/wellness/cat_wellness.png" alt="Jamooz Wellness" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-surface-dark py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="serif-display text-4xl font-semibold mb-8">Our Mission</h2>
          <p className="text-white/60 leading-8 text-xl max-w-3xl mx-auto">
            To provide global B2B clients with the most reliable, innovative, and user-friendly massage devices that enhance wellness and recovery for end-users worldwide. We bridge the gap between advanced technology and accessible human care.
          </p>
        </div>
      </section>
    </div>
  );
}
