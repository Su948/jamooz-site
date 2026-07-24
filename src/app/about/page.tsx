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
            <h2 className="serif-display text-4xl font-semibold mb-8">Certified Excellence</h2>
            <p className="text-muted leading-8 text-lg mb-10">
              Founded on the principle of effective recovery, Jamooz has grown into a leading manufacturer of professional massage equipment. 
              Our factory is ISO 9001 certified, and all products undergo rigorous testing to meet international safety standards including CE, FCC, and RoHS.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {['CE Certified', 'FCC Compliant', 'RoHS Tested'].map((cert) => (
                <div key={cert} className="premium-card p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 bg-navy text-white flex items-center justify-center mb-4 rounded-full font-bold">✓</div>
                  <p className="font-bold text-navy text-sm uppercase tracking-wider">{cert}</p>
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
