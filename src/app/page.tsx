import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-brand-green leading-[0.9] mb-8">
              PROFESSIONAL <br />
              RECOVERY <br />
              ENGINEERED.
            </h1>
            <p className="text-xl text-gray-700 max-w-md mb-10 font-light leading-relaxed">
              Elevate your wellness brand with Jamooz. Premier B2B manufacturing for next-generation massage technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/rfq" className="btn-primary text-center">
                Start RFQ
              </Link>
              <Link href="/products" className="btn-secondary text-center">
                View Collection
              </Link>
            </div>
          </div>
          <div className="relative aspect-square bg-white/30 rounded-full flex items-center justify-center overflow-hidden border border-white/50 shadow-2xl">
            <div className="text-brand-green/10 text-9xl font-black rotate-12">JAMOOZ</div>
            {/* Placeholder for high-quality product image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/5 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* B2B Trust Bar */}
      <section className="bg-brand-green py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-8 text-white/70 uppercase tracking-widest text-[10px] font-bold">
          <span>ISO 9001:2015 Plant</span>
          <span>CE / FCC / RoHS Certified</span>
          <span>500k+ Monthly Capacity</span>
          <span>Global Shipping (DDP/DDU)</span>
        </div>
      </section>

      {/* Solutions / Scenario Section */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-xs font-semibold text-brand-green/60 uppercase tracking-[0.3em] mb-4">Targeted Solutions</h2>
            <p className="text-4xl font-bold tracking-tight text-brand-green max-w-2xl">
              Wellness solutions designed for every environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-brand-green/10 border border-brand-green/10">
            {[
              { title: 'Office Productivity', desc: 'Compact neck and back massagers for professional desk setups.' },
              { title: 'Post-Sport Recovery', desc: 'Deep tissue therapy devices for athletic recovery brands.' },
              { title: 'Home Relaxation', desc: 'Premium heat pads and pillows for consumer wellness lines.' }
            ].map((sol) => (
              <div key={sol.title} className="bg-background p-12 hover:bg-white transition-colors">
                <div className="w-12 h-12 bg-brand-green/5 flex items-center justify-center mb-8 rounded-full">
                  <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-brand-green mb-4">{sol.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Endorsement / Strength */}
      <section className="bg-white section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 aspect-video bg-gray-50 flex items-center justify-center">
            <span className="text-gray-200 font-bold uppercase tracking-widest">Factory Video / Photo</span>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold tracking-tight text-brand-green mb-8">Your Trusted Manufacturing Partner</h2>
            <div className="space-y-8">
              {[
                { label: 'OEM/ODM Capability', text: 'Full custom tooling and private labeling for global brands.' },
                { label: 'Quality Assurance', text: '4-stage inspection process from raw material to shipping.' },
                { label: 'B2B Logistics', text: 'Expert handling of bulk freight, customs, and documentation.' }
              ].map((item) => (
                <div key={item.label} className="flex gap-6">
                  <div className="shrink-0 font-mono text-brand-green/30 font-bold text-xl pt-1">/0{item.label[0]}</div>
                  <div>
                    <h4 className="font-bold text-brand-green mb-1">{item.label}</h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RFQ Call to Action */}
      <section className="section-spacing bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-green mb-10 leading-tight">
            READY TO <br />
            PARTNER WITH US?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/rfq" className="btn-primary px-16">
              Get A Custom Quote
            </Link>
            <span className="text-brand-green/40 text-sm font-mono tracking-tighter">MOQ 500 UNITS</span>
          </div>
        </div>
      </section>
    </div>
  );
}
