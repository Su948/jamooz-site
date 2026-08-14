'use client';

import Link from 'next/link';
import { useState } from 'react';

const products = {
  scalp: { name: 'Scalp Care Massager', image: '/images/wellness/scalp_s1.png' },
  neck: { name: 'Neck & Shoulder Massager', image: '/images/wellness/neck_m5.png' },
  gun: { name: 'Percussion Massage Gun', image: '/images/wellness/pro_x7.png' },
  duo: { name: 'Dual-head Massager', image: '/images/wellness/duo_v2.png' },
};

const painZones = [
  { id: 'head', label: 'Head', title: 'Head & Scalp Relief', products: [products.scalp, products.duo] },
  { id: 'neck', label: 'Neck & Shoulder', title: 'Neck & Shoulder Relief', products: [products.neck, products.gun] },
  { id: 'back', label: 'Back', title: 'Back & Muscle Recovery', products: [products.gun, products.duo] },
  { id: 'legs', label: 'Legs', title: 'Leg & Recovery Support', products: [products.gun, products.neck] },
] as const;

const customProducts = [
  { id: 'scalp', name: 'Scalp Massager', image: '/images/wellness/scalp_s1.png', colors: ['White', 'Black', 'Green', 'Purple'] },
  { id: 'neck', name: 'Neck Massager', image: '/images/wellness/neck_m5.png', colors: ['White', 'Blue', 'Black', 'Purple'] },
  { id: 'gun', name: 'Massage Gun', image: '/images/wellness/pro_x7.png', colors: ['Black', 'White', 'Red', 'Blue'] },
  { id: 'duo', name: 'Dual-head Massager', image: '/images/wellness/duo_v2.png', colors: ['White', 'Black', 'Pink', 'Purple'] },
] as const;

const colorMap: Record<string, string> = {
  White: '#ffffff', Black: '#18181b', Green: '#3f6f4b', Purple: '#a78bfa',
  Blue: '#60a5fa', Red: '#ef4444', Pink: '#f472b6',
};

export default function HomepagePreview() {
  const [zoneId, setZoneId] = useState('head');
  const [productId, setProductId] = useState('scalp');
  const [color, setColor] = useState('White');

  const zone = painZones.find((item) => item.id === zoneId) ?? painZones[0];
  const customProduct = customProducts.find((item) => item.id === productId) ?? customProducts[0];

  function chooseProduct(id: string) {
    const next = customProducts.find((item) => item.id === id) ?? customProducts[0];
    setProductId(id);
    setColor(next.colors[0]);
  }

  return (
    <div className="bg-white text-zinc-900">
      <section className="relative overflow-hidden border-b border-violet-100 bg-[#f8f5ff]">
        <div className="absolute inset-0">
          <img src="/images/wellness/hero_banner_clean.png" alt="JAMOOZ massage products" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/25" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-2xl rounded-[32px] bg-white/75 p-7 backdrop-blur-sm md:p-10">
            <span className="inline-flex rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-700">Homepage Preview V1</span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">Professional Massage Device Manufacturer</h1>
            <p className="mt-5 text-base leading-7 text-zinc-600 md:text-lg">OEM/ODM · Custom Packaging · Low MOQ · Global Export. Built for importers, distributors and private-label buyers.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/products" className="rounded-full bg-violet-700 px-6 py-3 text-sm font-bold text-white">View Products</Link>
              <Link href="/rfq" className="rounded-full border border-violet-300 bg-white px-6 py-3 text-sm font-bold text-violet-800">Get A Quote</Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[['20+','Years Experience'],['100+','Skilled Workers'],['20+','Export Countries'],['2000㎡+','Factory Area']].map(([v,l]) => (
                <div key={l} className="rounded-2xl border border-violet-100 bg-white p-4"><div className="text-2xl font-bold text-violet-800">{v}</div><div className="mt-1 text-[11px] text-zinc-500">{l}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-700">Interactive Solution Finder</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Move Your Mouse To Find Your Targeted Pain Relief</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">Desktop: hover a body zone. Mobile: tap a zone. The recommended products switch instantly.</p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-violet-100 bg-[#fbf9ff] p-6 shadow-sm">
              <div className="text-center text-sm font-bold text-violet-800">Selected zone: {zone.label}</div>
              <div className="mx-auto mt-6 flex max-w-sm flex-col items-center">
                <div className="relative h-[420px] w-[180px]">
                  <div className="absolute left-1/2 top-3 h-16 w-14 -translate-x-1/2 rounded-[45%] border border-zinc-300 bg-white shadow-inner" />
                  <div className="absolute left-1/2 top-20 h-44 w-28 -translate-x-1/2 rounded-[38%] border border-zinc-300 bg-white shadow-inner" />
                  <div className="absolute left-[38px] top-24 h-40 w-7 rotate-6 rounded-full border border-zinc-300 bg-white" />
                  <div className="absolute right-[38px] top-24 h-40 w-7 -rotate-6 rounded-full border border-zinc-300 bg-white" />
                  <div className="absolute left-[63px] top-[245px] h-40 w-7 rounded-full border border-zinc-300 bg-white" />
                  <div className="absolute right-[63px] top-[245px] h-40 w-7 rounded-full border border-zinc-300 bg-white" />
                  {[
                    ['head','50%','10%'],['neck','50%','23%'],['back','50%','43%'],['legs','50%','72%'],
                  ].map(([id,left,top]) => (
                    <button
                      key={id}
                      onMouseEnter={() => setZoneId(id)}
                      onClick={() => setZoneId(id)}
                      aria-label={`Select ${id}`}
                      style={{ left, top }}
                      className={`absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white shadow-lg transition ${zoneId === id ? 'scale-125 bg-fuchsia-500 ring-8 ring-fuchsia-200/50' : 'bg-violet-600 hover:scale-110'}`}
                    />
                  ))}
                </div>
                <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
                  {painZones.map((item) => (
                    <button key={item.id} onMouseEnter={() => setZoneId(item.id)} onClick={() => setZoneId(item.id)} className={`rounded-xl border px-3 py-3 text-xs font-bold ${zoneId === item.id ? 'border-violet-600 bg-violet-600 text-white' : 'border-violet-100 bg-white text-zinc-600'}`}>{item.label}</button>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-violet-100 bg-white p-6 shadow-sm md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">Recommended for {zone.label}</p>
              <h3 className="mt-3 text-3xl font-semibold">{zone.title}</h3>
              <div className="mt-7 grid grid-cols-2 gap-4">
                {zone.products.map((product) => (
                  <div key={product.name} className="rounded-3xl border border-zinc-100 bg-[#fcfbff] p-4">
                    <div className="aspect-square rounded-2xl bg-white p-3"><img src={product.image} alt={product.name} className="h-full w-full object-contain" /></div>
                    <h4 className="mt-4 text-sm font-bold">{product.name}</h4>
                    <Link href="/products" className="mt-3 inline-flex rounded-full border border-violet-300 px-4 py-2 text-xs font-bold text-violet-700">View Product</Link>
                  </div>
                ))}
              </div>
              <Link href="/rfq" className="mt-6 inline-flex w-full justify-center rounded-full bg-violet-700 px-6 py-4 text-sm font-bold text-white">Get Quote For These Products</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-violet-100 bg-[#fcfbff] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-700">Product Navigation</p><h2 className="mt-3 text-3xl font-semibold md:text-5xl">Shop By Category</h2></div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {Object.values(products).map((item) => (
              <Link href="/products" key={item.name} className="rounded-[28px] border border-violet-100 bg-white p-5 text-center shadow-sm"><div className="aspect-square rounded-2xl bg-white p-4"><img src={item.image} alt={item.name} className="h-full w-full object-contain" /></div><p className="mt-4 text-sm font-bold">{item.name}</p></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf8ff] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[36px] border border-violet-100 bg-white shadow-lg lg:grid-cols-2">
            <div className="bg-gradient-to-br from-white to-[#f4efff] p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-700">Live OEM / ODM Preview</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Interactive Product Customization</h2>
              <p className="mt-4 text-sm leading-7 text-zinc-500">Hover or click a product, then click a color. Product images remain your real product assets.</p>
              <div className="mt-8 rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-violet-100"><div className="aspect-square"><img src={customProduct.image} alt={customProduct.name} className="h-full w-full object-contain" /></div></div>
            </div>
            <div className="p-8 md:p-12">
              <p className="text-sm font-bold">Product Type</p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {customProducts.map((item) => (
                  <button key={item.id} onMouseEnter={() => chooseProduct(item.id)} onClick={() => chooseProduct(item.id)} className={`rounded-2xl border p-3 ${productId === item.id ? 'border-fuchsia-400 bg-fuchsia-50 ring-2 ring-fuchsia-100' : 'border-zinc-100 bg-white'}`}><div className="aspect-square"><img src={item.image} alt={item.name} className="h-full w-full object-contain" /></div><p className="mt-2 text-[11px] font-bold">{item.name}</p></button>
                ))}
              </div>
              <p className="mt-8 text-sm font-bold">Select Color</p>
              <div className="mt-4 flex flex-wrap gap-4">
                {customProduct.colors.map((itemColor) => (
                  <button key={itemColor} onClick={() => setColor(itemColor)} aria-label={`Select ${itemColor}`} style={{ backgroundColor: colorMap[itemColor] ?? '#d4d4d8' }} className={`h-10 w-10 rounded-full border-4 shadow-sm ${color === itemColor ? 'border-fuchsia-400 ring-4 ring-fuchsia-100' : 'border-white ring-1 ring-zinc-200'}`} />
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-violet-50 p-5"><p className="text-xs uppercase tracking-widest text-violet-600">Your Configuration</p><div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="text-lg font-bold">{customProduct.name} / {color}</p><Link href="/rfq" className="rounded-full bg-violet-700 px-6 py-3 text-center text-xs font-bold text-white">Request Quote →</Link></div></div>
              <p className="mt-4 text-xs leading-6 text-zinc-400">For the final version, every color option will map to the exact real image you supplied for that color. This preview does not recolor the product with CSS.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#18131f] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"><p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">Preview Status</p><h2 className="mt-4 text-3xl font-semibold md:text-5xl">Interactive Homepage V1</h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60">This route is isolated from the production homepage. Once the interaction and layout are approved, the real Alibaba storefront assets can be mapped into each section.</p></div>
      </section>
    </div>
  );
}
