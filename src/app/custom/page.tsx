'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type Choice = {
  label: string;
  value: string;
  colorA?: string;
  colorB?: string;
};

const colors: Choice[] = [
  { label: 'Warm Cream', value: 'Warm Cream', colorA: '#f6f1e8', colorB: '#e6ded2' },
  { label: 'Deep Navy', value: 'Deep Navy', colorA: '#10284a', colorB: '#07172b' },
  { label: 'Matte Black', value: 'Matte Black', colorA: '#191a1b', colorB: '#050607' },
  { label: 'Soft Silver', value: 'Soft Silver', colorA: '#f0efec', colorB: '#c8c8c4' },
];

const finishes = ['Premium Matte', 'Soft-touch Silicone', 'Metallic Pearl', 'Glossy Mirror'];
const nodes = ['Medical Silicone', 'Firm TPR Nodes', 'Hybrid Comfort Nodes'];
const branding = ['Laser Engraving', 'Silk-screen Print', 'Metal Badge'];
const packaging = ['Luxury Gift Box', 'Eco-friendly Kraft', 'Retail Window Box'];
const steps = ['Body Color & Finish', 'Function & Nodes', 'Branding & Logo', 'Packaging Options', 'Review & Quote'];

function ProductPreview({ selectedColor }: { selectedColor: Choice }) {
  return (
    <div className="relative group">
      <div className="product-visual min-h-[580px] rounded-3xl shadow-2xl transition-all duration-700" style={{ '--product-a': selectedColor.colorA, '--product-b': selectedColor.colorB, '--product-light': '#f26322' } as React.CSSProperties}>
        <div className="product-handle" />
        <div className="product-shell" />
        <div className="product-band" />
        <div className="product-nodes">
          {Array.from({ length: 7 }).map((_, index) => <span key={index} />)}
        </div>
        <div className="absolute left-1/2 top-[43%] -translate-x-1/2 -rotate-6 opacity-40 mix-blend-overlay">
          <span className="serif-display text-4xl font-bold tracking-tighter text-black">JAMOOZ</span>
        </div>
      </div>
      
      {/* Floating detail thumbnails */}
      <div className="absolute -left-6 top-12 space-y-4 hidden md:block">
        {[0, 1, 2].map((item) => (
          <div key={item} className="h-24 w-24 rounded-2xl border border-border-warm bg-white/60 p-2 backdrop-blur-md shadow-lg transition hover:scale-110">
            <div className="product-visual h-full rounded-xl scale-[0.6] origin-center" style={{ '--product-a': selectedColor.colorA, '--product-b': selectedColor.colorB, '--product-light': '#f26322' } as React.CSSProperties}>
              <div className="product-handle" /><div className="product-shell" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CustomPage() {
  const [color, setColor] = useState(colors[0]);
  const [finish, setFinish] = useState(finishes[0]);
  const [node, setNode] = useState(nodes[0]);
  const [brand, setBrand] = useState(branding[0]);
  const [pack, setPack] = useState(packaging[0]);

  const summary = useMemo(() => [
    ['Base Color', color.value],
    ['Surface Finish', finish],
    ['Massage Nodes', node],
    ['Branding Method', brand],
    ['Packaging Type', pack],
  ], [color, finish, node, brand, pack]);

  return (
    <div className="min-h-screen bg-background" data-component="oem-odm-configurator">
      {/* Header */}
      <header className="border-b border-border-warm bg-white sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-12">
            <Link href="/" className="serif-display text-[32px] font-semibold text-foreground tracking-tighter">Jamooz</Link>
            <nav className="hidden lg:flex gap-8 text-xs font-bold uppercase tracking-widest text-muted">
              <span className="text-navy">Configurator</span>
              <span className="hover:text-navy cursor-pointer">Quality Standards</span>
              <span className="hover:text-navy cursor-pointer">Export Support</span>
            </nav>
          </div>
          <div className="flex items-center gap-6">
             <p className="mono-label text-[10px] text-muted hidden md:block">OEM/ODM Manufacturing Portal</p>
             <Link href="/rfq" className="btn-primary py-3 px-6 text-[10px]">Contact Sales</Link>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-[1fr_580px]">
        {/* Visualizer Side */}
        <div className="bg-cream-soft p-6 md:p-12 lg:p-20 flex flex-col min-h-[calc(100vh-88px)]">
          <div className="max-w-3xl mb-12">
             <p className="mono-label text-xs font-bold text-navy uppercase tracking-widest">Interactive Design</p>
             <h1 className="serif-display mt-6 text-[48px] font-semibold leading-tight text-foreground md:text-[64px]">Custom Scalp Care Series</h1>
             <p className="mt-6 text-lg text-muted max-w-xl">Tailor every detail of our professional scalp massager to align with your brand's aesthetic and target market needs.</p>
          </div>
          
          <div className="flex-grow flex items-center justify-center py-12">
             <div className="w-full max-w-xl">
               <ProductPreview selectedColor={color} />
             </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border-warm">
            {['Ergonomic Form', 'Precision Nodes', 'IPX7 Waterproof', '360° Inspection'].map((feature) => (
              <div key={feature} className="text-center">
                <span className="text-2xl mb-2 block">✧</span>
                <p className="text-[11px] font-bold uppercase tracking-widest text-navy">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Controls Side */}
        <aside className="bg-white border-l border-border-warm flex flex-col h-[calc(100vh-88px)] overflow-hidden">
          <div className="flex-grow overflow-y-auto p-8 md:p-12">
            <div className="space-y-12 pb-24">
              {/* Step 1: Color */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white text-sm font-bold">1</span>
                  <h2 className="serif-display text-2xl font-semibold">Body Color & Finish</h2>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <label className="mono-label text-[10px] font-bold text-muted uppercase tracking-widest mb-4 block">Select Base Color</label>
                    <div className="grid grid-cols-4 gap-4">
                      {colors.map((item) => (
                        <button key={item.value} onClick={() => setColor(item)} className={`group relative flex flex-col items-center gap-3`}>
                          <div className={`h-14 w-14 rounded-full border-2 p-1 transition-all ${color.value === item.value ? 'border-navy scale-110 shadow-lg' : 'border-transparent'}`}>
                             <div className="h-full w-full rounded-full" style={{ background: `linear-gradient(135deg, ${item.colorA}, ${item.colorB})` }} />
                          </div>
                          <span className={`text-[10px] font-bold tracking-wider uppercase transition-colors ${color.value === item.value ? 'text-navy' : 'text-muted group-hover:text-navy'}`}>{item.label.split(' ')[0]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mono-label text-[10px] font-bold text-muted uppercase tracking-widest mb-4 block">Surface Treatment</label>
                    <div className="grid grid-cols-2 gap-3">
                      {finishes.map((item) => (
                        <button key={item} onClick={() => setFinish(item)} className={`rounded-xl border-2 px-6 py-4 text-sm font-bold transition-all ${finish === item ? 'border-navy bg-navy text-white' : 'border-border-warm hover:border-navy'}`}>{item}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Step 2-4: Other Options */}
              {[
                { title: 'Function & Massage Nodes', list: nodes, current: node, setter: setNode, num: 2 },
                { title: 'Branding & Logo Methods', list: branding, current: brand, setter: setBrand, num: 3 },
                { title: 'Packaging & Gift Programs', list: packaging, current: pack, setter: setPack, num: 4 },
              ].map((step) => (
                <section key={step.title} className="pt-12 border-t border-border-warm">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-border-warm text-muted text-sm font-bold">{step.num}</span>
                    <h2 className="serif-display text-2xl font-semibold">{step.title}</h2>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {step.list.map((item) => (
                      <button key={item} onClick={() => step.setter(item)} className={`rounded-xl border-2 px-8 py-5 text-left text-sm font-bold flex items-center justify-between transition-all ${step.current === item ? 'border-accent bg-orange-50/30 text-accent' : 'border-border-warm hover:border-navy'}`}>
                        {item}
                        {step.current === item && <span className="text-xl">✓</span>}
                      </button>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* Bottom Summary Bar */}
          <div className="bg-cream-soft border-t border-border-warm p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex-grow">
                 <p className="mono-label text-[10px] font-bold text-muted uppercase tracking-widest mb-3">Target Configuration</p>
                 <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {summary.map(([label, value]) => (
                      <div key={label} className="text-[11px]"><span className="text-muted">{label}:</span> <span className="font-bold text-navy uppercase">{value}</span></div>
                    ))}
                 </div>
              </div>
              <div className="flex items-center gap-8 shrink-0">
                 <div className="text-right">
                    <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Base MOQ</p>
                    <p className="serif-display text-2xl font-bold text-navy">500 units</p>
                 </div>
                 <Link href="/rfq" className="btn-primary px-10 py-5 text-xs shadow-xl">Get Final Quote</Link>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
