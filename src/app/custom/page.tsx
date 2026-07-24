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
  { label: 'Navy', value: 'Navy', colorA: '#10284a', colorB: '#07172b' },
  { label: 'Silver', value: 'Silver', colorA: '#f0efec', colorB: '#c8c8c4' },
  { label: 'Matte Black', value: 'Matte Black', colorA: '#191a1b', colorB: '#050607' },
  { label: 'Orange', value: 'Orange', colorA: '#ff7a24', colorB: '#e35013' },
];

const finishes = ['Matte', 'Mirror', 'Metallic', 'Soft-touch Silicone'];
const nodes = ['Silicone Nodes (Soft)', 'TPR Nodes (Firm)', 'Hybrid Comfort Array'];
const branding = ['Laser Engraving (Top)', 'Silk Print (Front)', 'Metal Badge'];
const packaging = ['Premium Gift Box', 'Retail Window Box', 'Eco Kraft Box'];
const steps = ['Body Color & Material', 'Massage Nodes / Functional Parts', 'Branding / Logo Preview', 'Packaging', 'Summary & RFQ'];

function ProductPreview({ selectedColor }: { selectedColor: Choice }) {
  return (
    <div className="relative">
      <div className="product-visual min-h-[540px] rounded-2xl" style={{ '--product-a': selectedColor.colorA, '--product-b': selectedColor.colorB, '--product-light': '#d9ad72' } as React.CSSProperties}>
        <div className="product-handle" />
        <div className="product-shell" />
        <div className="product-band" />
        <div className="product-nodes">
          {Array.from({ length: 7 }).map((_, index) => <span key={index} />)}
        </div>
        <span className="serif-display absolute left-1/2 top-[43%] -translate-x-1/2 -rotate-6 text-3xl font-semibold text-gold">Jamooz</span>
      </div>
      <div className="absolute left-6 top-6 space-y-4">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="h-20 w-20 rounded-lg border border-border-warm bg-white/80 shadow-sm">
            <div className="product-visual h-full rounded-lg scale-[0.72]" style={{ '--product-a': selectedColor.colorA, '--product-b': selectedColor.colorB, '--product-light': '#d9ad72' } as React.CSSProperties}>
              <div className="product-handle" /><div className="product-shell" /><div className="product-band" />
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
    ['Body Color', color.value],
    ['Material / Finish', finish],
    ['Massage Nodes', node],
    ['Branding', brand],
    ['Packaging', pack],
  ], [color, finish, node, brand, pack]);

  return (
    <div className="min-h-screen bg-cream-soft" data-component="oem-odm-configurator">
      <section className="border-b border-border-warm bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <Link href="/" className="serif-display text-4xl font-semibold text-foreground">Jamooz</Link>
          <p className="mono-label text-xs font-bold text-muted">OEM / ODM customization</p>
          <div className="hidden gap-6 text-sm font-semibold text-navy md:flex">
            <span>Quality Assurance</span><span>Factory Direct</span><span>Global Delivery</span><span>Contact Sales</span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1480px] grid-cols-1 gap-0 lg:grid-cols-[1fr_660px]">
        <div className="border-r border-border-warm bg-cream-soft p-4 sm:p-8">
          <div className="mb-6">
            <h1 className="serif-display text-[46px] font-semibold leading-none text-foreground md:text-[58px]">Scalp Massager Brush</h1>
            <p className="mt-3 text-lg text-muted">Thoughtful design. Powerful care.</p>
            <span className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm">Fully customizable for your brand</span>
          </div>
          <ProductPreview selectedColor={color} />

          <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-border-warm bg-white/72 p-4 md:grid-cols-5">
            {['Ergonomic design', 'Flexible nodes', 'Waterproof', 'Premium materials', '360° review'].map((feature) => (
              <div key={feature} className="border-border-warm py-3 text-center text-sm text-navy md:border-r last:border-r-0">
                <span className="mb-2 block text-2xl">◎</span>
                <p className="font-bold">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="bg-white">
          <div className="grid grid-cols-[170px_1fr] border-b border-border-warm">
            <div className="border-r border-border-warm bg-cream-soft/55 p-6">
              <ol className="space-y-8">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm text-muted">
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border ${index === 0 ? 'border-navy bg-navy text-white' : 'border-border-warm bg-white text-muted'}`}>{index + 1}</span>
                    <span className={index === 0 ? 'font-bold text-navy' : ''}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="p-6 md:p-8">
              <h2 className="serif-display text-3xl font-semibold text-foreground">1. Body Color & Material</h2>
              <p className="mt-2 text-sm text-muted">Choose the color and surface finish of the main body.</p>

              <div className="mt-7">
                <p className="mb-3 text-sm font-bold text-navy">Color</p>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  {colors.map((item) => (
                    <button key={item.value} onClick={() => setColor(item)} className={`rounded-lg border p-2 text-sm transition ${color.value === item.value ? 'border-navy shadow-md' : 'border-border-warm'}`}>
                      <span className="block h-16 rounded-md" style={{ background: `linear-gradient(135deg, ${item.colorA}, ${item.colorB})` }} />
                      <span className="mt-2 block text-muted">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <p className="mb-3 text-sm font-bold text-navy">Material / Finish</p>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  {finishes.map((item) => (
                    <button key={item} onClick={() => setFinish(item)} className={`rounded-lg border px-4 py-3 text-sm transition ${finish === item ? 'border-navy bg-navy text-white' : 'border-border-warm bg-white text-muted'}`}>{item}</button>
                  ))}
                </div>
              </div>

              <div className="mt-8 divide-y divide-border-warm border-t border-border-warm">
                {[
                  ['2. Massage Nodes / Functional Parts', nodes, node, setNode],
                  ['3. Branding / Logo Preview', branding, brand, setBrand],
                  ['4. Packaging', packaging, pack, setPack],
                ].map(([title, list, selected, setter]) => (
                  <details key={title as string} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-bold text-foreground">
                      {title as string}<span>›</span>
                    </summary>
                    <div className="mt-4 grid gap-3">
                      {(list as string[]).map((item) => (
                        <button key={item} onClick={() => (setter as (value: string) => void)(item)} className={`rounded-lg border px-4 py-3 text-left text-sm ${selected === item ? 'border-accent bg-orange-50 text-accent' : 'border-border-warm text-muted'}`}>{item}</button>
                      ))}
                    </div>
                  </details>
                ))}
                <details className="py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-bold text-foreground">5. Summary & RFQ<span>›</span></summary>
                </details>
              </div>
            </div>
          </div>

          <div className="sticky bottom-0 m-4 rounded-xl border border-border-warm bg-cream-soft p-5 shadow-2xl shadow-black/10">
            <div className="grid gap-5 md:grid-cols-[1fr_220px]">
              <div>
                <h3 className="serif-display text-2xl font-semibold text-foreground">Configuration Summary</h3>
                <dl className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                  {summary.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[120px_1fr] gap-3"><dt className="text-muted">{label}</dt><dd className="font-semibold text-navy">{value}</dd></div>
                  ))}
                </dl>
              </div>
              <div className="rounded-lg bg-white p-5 text-center">
                <p className="text-xs font-bold text-muted">Minimum Order Quantity (MOQ)</p>
                <p className="serif-display mt-1 text-3xl font-semibold text-foreground">500 pcs</p>
                <p className="mt-2 text-xs text-muted">MOQ may vary based on configuration.</p>
                <Link href="/rfq" className="btn-primary mt-5 w-full">Request Quote →</Link>
                <p className="mt-3 text-xs text-muted">Your information is safe with us.</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
