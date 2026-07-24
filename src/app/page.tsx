import Link from 'next/link';

const bestSellers = [
  { model: 'JAMOOZ PRO X7', name: 'Percussion Massage Gun', price: '$24.90 - $32.50', image: '/images/wellness/pro_x7.png' },
  { model: 'JAMOOZ DUO V2', name: 'Dual-head Massager', price: '$18.80 - $25.60', image: '/images/wellness/duo_v2.png' },
  { model: 'JAMOOZ SCALP S1', name: 'Scalp Care Massager', price: '$17.90 - $21.90', image: '/images/wellness/scalp_s1.png' },
  { model: 'JAMOOZ NECK M5', name: 'Neck & Shoulder Massager', price: '$20.90 - $24.90', image: '/images/wellness/neck_m5.png' },
];

const solutions = [
  { title: 'Recovery & Relaxation', desc: 'Market-ready massage products with compliance support', image: '/images/wellness/cat_recovery.png' },
  { title: 'Sleep & Stress Relief', desc: 'Promote scalp health and revitalize hair for wellness channels', image: '/images/wellness/cat_sleep.png' },
  { title: 'Corporate Wellness Gifts', desc: 'Branded wellness gifts for corporate programs and client projects', image: '/images/wellness/cat_wellness.png' },
];

const buyerTypes = [
  { type: 'Importers', desc: 'Market-ready products with compliance support' },
  { type: 'Distributors', desc: 'Stable product lines for wholesale channels' },
  { type: 'Private Label', desc: 'OEM/ODM products for your own brand' },
  { type: 'Gift Companies', desc: 'Branded wellness gifts for corporate programs' },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden border-b border-border-warm bg-cream-soft" data-component="home-hero">
        <div className="mx-auto grid min-h-[720px] max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="mono-label mb-5 text-xs font-bold text-navy">B2B Massage Wellness Solutions</p>
            <h1 className="serif-display max-w-3xl text-[54px] font-semibold leading-[0.92] text-foreground md:text-[78px] lg:text-[88px]">
              Massage Wellness Products Built for Global Buyers
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
              Custom massage pillows, neck massagers and wellness gift products for importers, distributors and private-label brands. Science-backed recovery technology for professional results.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/rfq" className="btn-primary">Send RFQ</Link>
              <Link href="/products" className="btn-secondary">View Product Range</Link>
            </div>
            <div className="mt-12 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-3">
              {['CE / FCC / RoHS Support', 'Factory Direct Quality', 'Global Export Experience'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-navy">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-border-warm bg-white text-xs">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#e8d8c5] shadow-2xl">
            <img
              src="/images/wellness/hero_banner.png"
              alt="Jamooz professional wellness technology hero"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-8 right-8 left-8 rounded-xl border border-white/25 bg-black/65 p-6 text-white backdrop-blur-md">
              <p className="text-sm text-white/80 font-medium">B2B Wellness Technology Partner</p>
              <div className="mt-5 flex justify-between gap-4">
                {['50+ Countries', '300+ Partners', '10+ Years'].map((stat) => (
                  <div key={stat}><p className="serif-display text-2xl">{stat.split(' ')[0]}</p><p className="text-[10px] uppercase tracking-wider text-white/70">{stat.split(' ').slice(1).join(' ')}</p></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BUYER TYPES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="mono-label text-xs font-bold text-navy">Partnering with</p>
          <h2 className="serif-display mt-4 text-4xl font-semibold md:text-5xl">Solutions for Every Buyer Type</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {buyerTypes.map((item) => (
            <div key={item.type} className="premium-card p-8 text-center transition hover:-translate-y-1">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cream-soft text-navy">
                <span className="text-2xl">◇</span>
              </div>
              <h3 className="text-xl font-bold text-navy">{item.type}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: SOLUTIONS */}
      <section className="bg-cream-soft py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-end justify-between gap-6 mb-16 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="mono-label text-xs font-bold text-navy">Categorized by need</p>
              <h2 className="serif-display mt-4 text-4xl font-semibold md:text-5xl">Science-Backed Solutions</h2>
            </div>
            <Link href="/products" className="text-sm font-bold text-navy hover:text-accent">View all solutions →</Link>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {solutions.map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-8 text-white">
                  <h3 className="serif-display text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm text-white/80 leading-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="mono-label text-xs font-bold text-navy">Catalog preview</p>
          <h2 className="serif-display mt-4 text-4xl font-semibold md:text-5xl">Bestselling Wellness Devices</h2>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((item) => (
            <div key={item.model} className="premium-card flex flex-col h-full overflow-hidden group">
              <div className="aspect-square bg-white p-6 overflow-hidden">
                <img src={item.image} alt={item.model} className="h-full w-full object-contain transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="mono-label text-[10px] text-muted">{item.model}</p>
                <h3 className="mt-2 text-lg font-bold text-navy leading-tight">{item.name}</h3>
                <div className="mt-6 pt-6 border-t border-border-warm flex items-center justify-between">
                  <p className="text-sm font-bold text-navy">{item.price}</p>
                  <Link href="/rfq" className="text-xs font-bold text-accent uppercase tracking-widest">Inquire</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: OEM/ODM */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="premium-card grid grid-cols-1 overflow-hidden lg:grid-cols-2">
          <div className="p-10 md:p-16 lg:p-20">
            <p className="mono-label text-xs font-bold text-navy">Manufacturing Excellence</p>
            <h2 className="serif-display mt-6 text-4xl font-semibold leading-tight md:text-5xl">Professional OEM/ODM Customization</h2>
            <p className="mt-8 text-lg leading-8 text-muted">
              From logo branding and custom colors to unique packaging and gift set development, Jamooz delivers end-to-end manufacturing solutions tailored to your brand's specific needs.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8">
              {[
                ['Logo Branding', 'Laser engrave or silk-screen'],
                ['Custom Packaging', 'Gift box and manual design'],
                ['Color Variants', 'Pantone matching support'],
                ['Sample Support', '7-day rapid prototyping'],
              ].map(([title, desc]) => (
                <div key={title}>
                  <p className="font-bold text-navy">{title}</p>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <Link href="/custom" className="mt-12 btn-secondary">Learn about customization</Link>
          </div>
          <div className="relative min-h-[500px] bg-cream-soft">
            <img src="/images/wellness/oem_customization.png" alt="OEM Customization" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 6: TRUST & CERTS */}
      <section className="bg-surface-dark py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="mono-label text-xs font-bold text-accent">Quality & Compliance</p>
              <h2 className="serif-display mt-6 text-4xl font-semibold leading-tight md:text-5xl">Export-Grade Quality Standards</h2>
              <p className="mt-8 text-lg leading-8 text-white/60">
                Every Jamooz device undergoes rigorous durability testing and engineering validation to ensure it meets the highest global standards for safety and performance.
              </p>
              <div className="mt-12 grid grid-cols-2 gap-8">
                {['CE / FCC / RoHS', 'IPX7 Waterproof', 'RoHS Materials', 'ISO Certified QC'].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-sm font-semibold text-white/80 uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                ['12-Week', 'Durability Testing'],
                ['50+', 'Engineering Validations'],
                ['1,000+', 'Quality Checkpoints'],
                ['IPX7', 'Waterproof Standard'],
              ].map(([val, label]) => (
                <div key={label} className="premium-card bg-white/5 border-white/10 p-10 text-center backdrop-blur-sm">
                  <p className="serif-display text-4xl font-bold text-accent">{val}</p>
                  <p className="mt-3 text-xs text-white/60 uppercase tracking-widest font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: RFQ */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="serif-display text-4xl font-semibold md:text-5xl">Ready to Start Your Project?</h2>
          <p className="mt-8 text-lg text-muted">Submit your requirements and our project manager will get back to you with a customized quote within 24 hours.</p>
          <div className="mt-12">
            <Link href="/rfq" className="btn-primary px-12 py-5 text-base">Request a Customized Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
