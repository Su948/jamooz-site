'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

const painZones = [
  {
    id: 'head',
    label: 'Head',
    title: 'Head & Scalp Relief',
    description: 'Hover or tap the head area to switch the recommended products.',
    products: [
      { name: 'Scalp Care Massager', image: '/images/wellness/scalp_s1.png' },
      { name: 'Dual-head Massager', image: '/images/wellness/duo_v2.png' },
    ],
    dot: 'left-[49%] top-[9%]',
  },
  {
    id: 'neck',
    label: 'Neck & Shoulder',
    title: 'Neck & Shoulder Relief',
    description: 'Move to the neck and shoulder area to see the matching product set.',
    products: [
      { name: 'Neck & Shoulder Massager', image: '/images/wellness/neck_m5.png' },
      { name: 'Percussion Massage Gun', image: '/images/wellness/pro_x7.png' },
    ],
    dot: 'left-[49%] top-[20%]',
  },
  {
    id: 'back',
    label: 'Back',
    title: 'Back & Muscle Recovery',
    description: 'Back-focused tools are shown when this zone is selected.',
    products: [
      { name: 'Percussion Massage Gun', image: '/images/wellness/pro_x7.png' },
      { name: 'Dual-head Massager', image: '/images/wellness/duo_v2.png' },
    ],
    dot: 'left-[49%] top-[39%]',
  },
  {
    id: 'legs',
    label: 'Legs',
    title: 'Leg & Recovery Support',
    description: 'Select the lower-body zone to switch to recovery-focused products.',
    products: [
      { name: 'Percussion Massage Gun', image: '/images/wellness/pro_x7.png' },
      { name: 'Neck & Shoulder Massager', image: '/images/wellness/neck_m5.png' },
    ],
    dot: 'left-[47%] top-[70%]',
  },
];

const customProducts = [
  {
    id: 'scalp',
    name: 'Scalp Massager',
    image: '/images/wellness/scalp_s1.png',
    colors: ['White', 'Black', 'Green', 'Purple'],
  },
  {
    id: 'neck',
    name: 'Neck Massager',
    image: '/images/wellness/neck_m5.png',
    colors: ['White', 'Blue', 'Black', 'Purple'],
  },
  {
    id: 'gun',
    name: 'Massage Gun',
    image: '/images/wellness/pro_x7.png',
    colors: ['Black', 'White', 'Red', 'Blue'],
  },
  {
    id: 'duo',
    name: 'Dual-head Massager',
    image: '/images/wellness/duo_v2.png',
    colors: ['White', 'Black', 'Pink', 'Purple'],
  },
];

const colorClass: Record<string, string> = {
  White: 'bg-white', Black: 'bg-zinc-900', Green: 'bg-green-700', Purple: 'bg-violet-400',
  Blue: 'bg-sky-500', Red: 'bg-red-500', Pink: 'bg-pink-400',
};

export function PainReliefSelector() {
  const [active, setActive] = useState('head');
  const current = useMemo(() => painZones.find((z) => z.id === active) ?? painZones[0], [active]);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-violet-700">Interactive Solution Finder</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">Move Your Mouse To Find Your Targeted Pain Relief</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">Desktop: hover over a body zone. Mobile: tap a zone. The recommended product cards update instantly.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative min-h-[560px] overflow-hidden rounded-[32px] border border-violet-100 bg-gradient-to-br from-[#fbf9ff] to-white p-6 shadow-sm">
            <div className="absolute inset-x-0 top-5 text-center text-sm font-semibold text-violet-800">Selected zone: {current.label}</div>
            <div className="absolute inset-0 flex items-center justify-center pt-10">
              <div className="relative h-[470px] w-[220px]">
                <div className="absolute left-1/2 top-8 h-[72px] w-[62px] -translate-x-1/2 rounded-[44%] border border-zinc-300 bg-gradient-to-b from-zinc-100 to-white shadow-inner" />
                <div className="absolute left-1/2 top-[98px] h-[185px] w-[120px] -translate-x-1/2 rounded-[42%_42%_30%_30%] border border-zinc-300 bg-gradient-to-b from-white to-zinc-100 shadow-inner" />
                <div className="absolute left-[58px] top-[118px] h-[170px] w-[28px] rotate-[7deg] rounded-full border border-zinc-300 bg-zinc-50" />
                <div className="absolute right-[58px] top-[118px] h-[170px] w-[28px] -rotate-[7deg] rounded-full border border-zinc-300 bg-zinc-50" />
                <div className="absolute left-[82px] top-[265px] h-[200px] w-[34px] rounded-full border border-zinc-300 bg-zinc-50" />
                <div className="absolute right-[82px] top-[265px] h-[200px] w-[34px] rounded-full border border-zinc-300 bg-zinc-50" />
                {painZones.map((zone) => (
                  <button
                    key={zone.id}
                    onMouseEnter={() => setActive(zone.id)}
                    onFocus={() => setActive(zone.id)}
                    onClick={() => setActive(zone.id)}
                    aria-label={`Show products for ${zone.label}`}
                    className={`absolute z-20 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white shadow-lg transition ${zone.dot} ${active === zone.id ? 'scale-125 bg-fuchsia-500 ring-8 ring-fuchsia-300/30' : 'bg-violet-600 hover:scale-110'}`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {painZones.map((zone) => (
                <button key={zone.id} onMouseEnter={() => setActive(zone.id)} onClick={() => setActive(zone.id)} className={`rounded-2xl border px-3 py-3 text-xs font-bold transition ${active === zone.id ? 'border-violet-500 bg-violet-600 text-white' : 'border-violet-100 bg-white text-zinc-600 hover:border-violet-300'}`}>{zone.label}</button>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-violet-100 bg-white p-6 shadow-sm md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">Recommended for {current.label}</p>
            <h3 className="mt-3 text-3xl font-semibold text-zinc-900">{current.title}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-500">{current.description}</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {current.products.map((product) => (
                <div key={product.name} className="group rounded-3xl border border-zinc-100 bg-[#fcfbff] p-5 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="aspect-square overflow-hidden rounded-2xl bg-white p-4">
                    <img src={product.image} alt={product.name} className="h-full w-full object-contain transition duration-300 group-hover:scale-105" />
                  </div>
                  <h4 className="mt-4 text-base font-bold text-zinc-900">{product.name}</h4>
                  <Link href="/products" className="mt-4 inline-flex rounded-full border border-violet-300 px-4 py-2 text-xs font-bold text-violet-700 hover:bg-violet-700 hover:text-white">View Product</Link>
                </div>
              ))}
            </div>
            <Link href="/rfq" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-violet-700 px-6 py-4 text-sm font-bold text-white hover:bg-violet-800">Get Quote For These Products</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductCustomizer() {
  const [productId, setProductId] = useState('scalp');
  const product = useMemo(() => customProducts.find((p) => p.id === productId) ?? customProducts[0], [productId]);
  const [selectedColor, setSelectedColor] = useState('White');

  const chooseProduct = (id: string) => {
    const next = customProducts.find((p) => p.id === id) ?? customProducts[0];
    setProductId(id);
    setSelectedColor(next.colors[0]);
  };

  return (
    <section className="bg-[#faf8ff] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[36px] border border-violet-100 bg-white shadow-xl shadow-violet-100/40 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative flex min-h-[620px] flex-col justify-between bg-gradient-to-br from-white via-[#fbf8ff] to-[#f4efff] p-8 md:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-700">Live OEM / ODM Preview</p>
              <h2 className="mt-4 max-w-md text-4xl font-semibold leading-tight text-zinc-900 md:text-5xl">Interactive Product Customization</h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-zinc-500">Choose a product and then select a color. The selected configuration updates immediately.</p>
            </div>
            <div className="relative mx-auto mt-6 w-full max-w-md">
              <div className="rounded-[30px] bg-white/80 p-8 shadow-sm ring-1 ring-violet-100">
                <div className="aspect-square">
                  <img src={product.image} alt={product.name} className="h-full w-full object-contain transition-all duration-300" />
                </div>
              </div>
              <div className="absolute -bottom-5 -left-3 rounded-2xl border border-violet-100 bg-white px-5 py-4 shadow-lg">
                <p className="text-[10px] font-bold uppercase tracking-widest text-violet-600">Preview</p>
                <p className="mt-1 text-sm font-bold text-zinc-900">{product.name}</p>
                <p className="text-xs text-zinc-500">Color: {selectedColor}</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="rounded-[28px] border border-zinc-100 bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm font-bold text-zinc-800">Product Type</p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {customProducts.map((item) => (
                  <button key={item.id} onMouseEnter={() => chooseProduct(item.id)} onFocus={() => chooseProduct(item.id)} onClick={() => chooseProduct(item.id)} className={`rounded-2xl border p-3 transition ${productId === item.id ? 'border-fuchsia-400 bg-fuchsia-50 ring-2 ring-fuchsia-100' : 'border-zinc-100 bg-white hover:border-violet-300'}`}>
                    <div className="aspect-square"><img src={item.image} alt={item.name} className="h-full w-full object-contain" /></div>
                    <p className="mt-2 text-[11px] font-bold text-zinc-700">{item.name}</p>
                  </button>
                ))}
              </div>

              <p className="mt-9 text-sm font-bold text-zinc-800">Select Color</p>
              <div className="mt-4 flex flex-wrap gap-4">
                {product.colors.map((color) => (
                  <button key={color} onClick={() => setSelectedColor(color)} className={`h-10 w-10 rounded-full border-4 shadow-sm ${colorClass[color] ?? 'bg-zinc-300'} ${selectedColor === color ? 'border-fuchsia-400 ring-4 ring-fuchsia-100' : 'border-white ring-1 ring-zinc-200'}`} aria-label={`Select ${color}`} />
                ))}
              </div>

              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                {['Custom Logo', 'Custom Packaging', 'Laser / Screen Printing'].map((x) => (
                  <div key={x} className="rounded-2xl bg-[#faf8ff] p-4 text-center text-xs font-bold text-violet-800">{x}</div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-violet-50 p-5">
                <p className="text-xs uppercase tracking-widest text-violet-600">Your Configuration</p>
                <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-lg font-bold text-zinc-900">{product.name} <span className="font-normal text-zinc-400">/</span> {selectedColor}</p>
                  <Link href="/rfq" className="inline-flex rounded-full bg-violet-700 px-6 py-3 text-xs font-bold text-white hover:bg-violet-800">Request Quote →</Link>
                </div>
              </div>
              <p className="mt-4 text-xs leading-6 text-zinc-400">Preview behavior is live. Final color switching should use the exact real product image for each available color, not CSS recoloring.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
