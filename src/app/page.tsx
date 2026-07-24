import Link from 'next/link';

const bestSellers = [
  { model: 'JAMOOZ PRO X7', name: 'Percussion Massage Gun', price: '$24.90 - $32.50', colorA: '#17191b', colorB: '#46494c', light: '#4da0cc' },
  { model: 'JAMOOZ DUO V2', name: 'Dual-head Massager', price: '$18.80 - $25.60', colorA: '#202224', colorB: '#4b4d4f', light: '#d9d1c6' },
  { model: 'JAMOOZ SCALP S1', name: 'Scalp Care Massager', price: '$17.90 - $21.90', colorA: '#f4efe5', colorB: '#d7cfc2', light: '#f26322' },
  { model: 'JAMOOZ NECK M5', name: 'Neck & Shoulder Massager', price: '$20.90 - $24.90', colorA: '#d9d3c8', colorB: '#aba69f', light: '#9a7a5a' },
];

const solutions = [
  ['Fitness & Recovery', 'Enhance performance and accelerate recovery', 'https://sc02.alicdn.com/kf/Haa0fba01a3bf46ad9e69a65bbbc953e36.jpg'],
  ['Scalp & Hair Wellness', 'Promote scalp health and revitalize hair', 'https://sc02.alicdn.com/kf/H1768d0330bc6448eaafcfb3d7ca51ec0I.jpg'],
  ['Wellness & Therapy', 'Relieve tension and support daily well-being', 'https://sc02.alicdn.com/kf/He0fbe84fafee43ec86aa3246773e9a47W.jpg'],
];

const scienceStats = [
  ['660 nm', 'Red light wavelength'],
  ['10M+', 'Negative ions/cm³'],
  ['72', 'Massage nodes'],
  ['3', 'Intensity levels'],
  ['IPX7', 'Waterproof rating'],
];

function MiniProduct({ colorA, colorB, light }: { colorA: string; colorB: string; light: string }) {
  return (
    <div className="product-visual h-52 rounded-t-xl" style={{ '--product-a': colorA, '--product-b': colorB, '--product-light': light } as React.CSSProperties}>
      <div className="product-handle" />
      <div className="product-shell" />
      <div className="product-band" />
      <div className="product-nodes">
        {Array.from({ length: 7 }).map((_, index) => <span key={index} />)}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden border-b border-border-warm bg-cream-soft" data-component="home-hero">
        <div className="mx-auto grid min-h-[680px] max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="mono-label mb-5 text-xs font-bold text-navy">Smart technology. Human recovery.</p>
            <h1 className="serif-display max-w-3xl text-[54px] font-semibold leading-[0.92] text-foreground md:text-[78px] lg:text-[88px]">
              Professional Recovery & Wellness Technology
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted">
              Jamooz delivers science-backed recovery and scalp care devices for professionals who demand real results, reliable manufacturing, and flexible OEM/ODM programs.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/rfq" className="btn-primary">Request Quote</Link>
              <Link href="/products" className="btn-secondary">Explore Solutions</Link>
            </div>

            <div className="mt-12 grid max-w-3xl grid-cols-2 gap-5 md:grid-cols-4">
              {['Medical-grade quality', 'Science-backed performance', 'Trusted worldwide', 'OEM/ODM expertise'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-navy">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-border-warm bg-white">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-2xl bg-[#e8d8c5] shadow-2xl shadow-black/10">
            <img
              src="https://sc02.alicdn.com/kf/Haa0fba01a3bf46ad9e69a65bbbc953e36.jpg"
              alt="Jamooz professional wellness technology homepage reference"
              className="h-full min-h-[520px] w-full object-cover object-right"
            />
            <div className="absolute bottom-8 right-8 rounded-xl border border-white/25 bg-black/65 p-6 text-white backdrop-blur-md">
              <p className="text-sm text-white/80">Engineered for professionals. Trusted by experts.</p>
              <div className="mt-5 grid grid-cols-3 gap-7">
                {['50+\nCountries', '300+\nPartners', '10+\nYears Experience'].map((stat) => {
                  const [num, label] = stat.split('\n');
                  return <div key={num}><p className="serif-display text-3xl">{num}</p><p className="text-xs text-white/70">{label}</p></div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_1.1fr] lg:px-8" data-component="home-product-science-preview">
        <div className="lg:col-span-1">
          <div className="mb-5 flex items-center justify-between">
            <p className="mono-label text-xs font-bold text-navy">Best sellers</p>
            <Link href="/products" className="text-sm font-bold text-navy hover:text-accent">View all products →</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {bestSellers.map((item) => (
              <Link href="/products" key={item.model} className="premium-card overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
                <MiniProduct colorA={item.colorA} colorB={item.colorB} light={item.light} />
                <div className="p-4">
                  <p className="text-xs font-bold text-navy">{item.model}</p>
                  <p className="mt-1 text-xs text-muted">{item.name}</p>
                  <p className="mt-3 text-sm font-bold text-navy">{item.price} / pcs</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="premium-card p-8">
          <p className="mono-label text-xs font-bold text-navy">Science-backed. Performance-proven.</p>
          <p className="mt-4 text-sm leading-7 text-muted">Every Jamooz device is developed with research, tested for safety, and validated for performance.</p>
          <div className="mt-8 space-y-6">
            {[
              ['Clinical-informed design', 'Developed with healthcare insights'],
              ['Rigorous testing', 'Safety, durability & performance validated'],
              ['Effective results', 'Supports recovery and daily well-being'],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream-soft text-navy">✧</span>
                <div><p className="font-bold text-navy">{title}</p><p className="text-sm text-muted">{desc}</p></div>
              </div>
            ))}
          </div>
          <Link href="#science" className="mt-8 inline-flex text-sm font-bold text-navy hover:text-accent">Explore the science →</Link>
        </div>

        <div id="solutions">
          <p className="mono-label mb-5 text-xs font-bold text-navy">Solutions for every need</p>
          <div className="grid gap-4">
            {solutions.map(([title, desc, image]) => (
              <div key={title} className="premium-card grid grid-cols-[116px_1fr] overflow-hidden">
                <img src={image} alt={`${title} Jamooz solution`} className="h-full min-h-[118px] w-full object-cover" />
                <div className="p-5">
                  <p className="font-bold text-navy">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8" data-component="oem-partner-strip">
        <div className="premium-card grid grid-cols-1 items-center gap-8 p-7 md:grid-cols-[1.4fr_repeat(4,1fr)_1.2fr]">
          <div>
            <p className="mono-label text-[10px] font-bold text-muted">Built together. Grow together.</p>
            <h2 className="serif-display mt-2 text-3xl font-semibold text-foreground">Your Trusted OEM/ODM Partner</h2>
            <p className="mt-3 text-sm leading-6 text-muted">From concept to production, Jamooz delivers end-to-end manufacturing solutions tailored to your brand.</p>
            <Link href="/custom" className="mt-4 inline-flex text-sm font-bold text-accent">Learn about OEM/ODM →</Link>
          </div>
          {['Custom design', 'Advanced manufacturing', 'Flexible solutions', 'Global support'].map((item) => (
            <div key={item} className="text-center text-sm font-semibold text-navy">
              <span className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full border border-border-warm bg-cream-soft">◇</span>
              {item}
            </div>
          ))}
          <div className="rounded-xl bg-gradient-to-br from-[#dce6ec] to-[#93a6b4] p-8 text-sm font-bold text-navy">Jamooz factory direct quality system</div>
        </div>
      </section>

      <section id="science" className="bg-cream-soft" data-component="science-backed-module">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="min-h-[420px] overflow-hidden">
            <img src="https://sc02.alicdn.com/kf/H1768d0330bc6448eaafcfb3d7ca51ec0I.jpg" alt="Science-backed red light scalp massage technology" className="h-full w-full object-cover object-left" />
          </div>
          <div className="p-8 md:p-14 lg:p-20">
            <h2 className="serif-display text-[48px] font-semibold leading-[0.98] md:text-[64px]">Science-backed recovery technology</h2>
            <p className="mt-6 max-w-2xl leading-7 text-muted">Jamooz intelligent scalp massager combines massage, red light, and negative ion technology in a single precision-engineered device designed to support everyday recovery.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                ['Red light (650 nm)', 'Low-level red light technology integrated into the brush head.'],
                ['Negative ions', '200M negative ions released during use.'],
                ['Intelligent massage', 'Dynamic 3D scalp massage with consistent rhythm.'],
              ].map(([title, desc]) => (
                <div key={title} className="border-l border-border-warm pl-6">
                  <p className="font-bold text-navy">{title}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
              {scienceStats.map(([num, label]) => (
                <div key={num} className="rounded-lg border border-border-warm bg-white/70 p-4">
                  <p className="serif-display text-2xl font-semibold text-navy">{num}</p>
                  <p className="mt-1 text-[11px] text-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-surface-dark px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div>
              <h2 className="serif-display text-[48px] font-semibold leading-none">Research-grade product standards</h2>
              <p className="mt-6 leading-7 text-white/65">Every Jamooz device is built with rigorous engineering and controlled-condition tests for quality, safety, and reliability.</p>
              <div className="mt-8 grid grid-cols-2 gap-5">
                {['12\nWeek durability testing', '50+\nEngineering validations', '1,000+\nQuality checkpoints', '3,000+\nDevice usage hours', 'IPX7\nWaterproof standard', 'RoHS\nMaterials compliance'].map((item) => {
                  const [num, label] = item.split('\n');
                  return <div key={num} className="border-t border-white/15 pt-4"><p className="text-3xl font-bold text-accent">{num}</p><p className="mt-1 text-xs text-white/65">{label}</p></div>;
                })}
              </div>
            </div>

            <div className="science-glow relative min-h-[440px] overflow-hidden rounded-xl border border-white/10">
              <div className="absolute inset-x-12 bottom-0 h-[70%] rounded-t-full bg-black/65" />
              <div className="absolute left-1/2 top-[38%] h-28 w-[62%] -translate-x-1/2 rounded-full border border-red-400/30 bg-red-500/20 blur-sm" />
              <div className="absolute left-1/2 top-[18%] h-20 w-[52%] -translate-x-1/2 rounded-full bg-[#1d2022] shadow-2xl" />
              <div className="absolute left-1/2 top-[35%] grid w-[58%] -translate-x-1/2 grid-cols-9 gap-2">
                {Array.from({ length: 27 }).map((_, index) => <span key={index} className="h-20 rounded-full bg-red-500/45 shadow-[0_0_18px_rgba(242,99,34,.55)]" />)}
              </div>
              <p className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/10 bg-black/45 p-4 text-sm text-white/80">Safety first · Consistent performance · Engineered for daily use</p>
            </div>

            <div>
              <h3 className="serif-display text-2xl font-semibold">Product structure</h3>
              <div className="mt-8 space-y-6">
                {['Ergonomic body', 'Control & power module', 'Red light module (660 nm)', 'Massage node array', 'Base & waterproof seal'].map((part) => (
                  <div key={part} className="border-l border-white/15 pl-5">
                    <p className="font-bold text-white">{part}</p>
                    <p className="mt-1 text-sm leading-6 text-white/58">Medical-grade component system for scalable OEM/ODM production.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
</div>
  );
}
