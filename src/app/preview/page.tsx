'use client';

import { useMemo, useState } from 'react';

const R2 = 'https://pub-7c0fef674c514e7d8b3844cdeadf9c48.r2.dev/JAMOOZ_preview_web_assets';
const asset = (group: string, file: string) => `${R2}/${group}/${file}`;

const painZones = [
  { id: 'head', label: 'Head & Scalp', image: '1.1.webp' },
  { id: 'neck', label: 'Neck & Shoulder', image: '2.1.webp' },
  { id: 'back', label: 'Back & Waist', image: '3.1.webp' },
  { id: 'abdomen', label: 'Abdomen', image: '4.1.webp' },
  { id: 'legs', label: 'Legs', image: '5.1.webp' },
  { id: 'feet', label: 'Feet', image: '6.1.webp' },
] as const;

const customProducts = [
  { id: 'p1', label: 'Product 1', files: ['1.1.webp','1.2.webp','1.3.webp','1.4.webp'] },
  { id: 'p2', label: 'Product 2', files: ['2.1.webp','2.2.webp'] },
  { id: 'p3', label: 'Product 3', files: ['3.1.webp','3.2.webp','3.3.webp'] },
  { id: 'p4', label: 'Product 4', files: ['4.1.webp','4.2.webp','4.3.webp'] },
] as const;

const categories = ['1.1.webp','2.1.webp','3.1.webp','4.1.webp'];

export default function HomepagePreview() {
  const [zoneId, setZoneId] = useState<(typeof painZones)[number]['id']>('head');
  const [productId, setProductId] = useState<(typeof customProducts)[number]['id']>('p1');
  const [variantIndex, setVariantIndex] = useState(0);

  const zone = useMemo(() => painZones.find((item) => item.id === zoneId) ?? painZones[0], [zoneId]);
  const customProduct = useMemo(() => customProducts.find((item) => item.id === productId) ?? customProducts[0], [productId]);
  const customImage = customProduct.files[Math.min(variantIndex, customProduct.files.length - 1)];

  const chooseProduct = (id: (typeof customProducts)[number]['id']) => {
    setProductId(id);
    setVariantIndex(0);
  };

  return (
    <div className="bg-white text-zinc-900">
      <section className="border-b border-zinc-200 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6f43a8]">JAMOOZ Homepage Preview</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">Interactive B2B Massage Product Homepage</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600">This preview now uses the exact web-optimized images uploaded from your original storefront asset package. Images keep their original proportions and are not redrawn.</p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6f43a8]">Targeted Pain Relief</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Hover The Body Area To Switch The Original Scene</h2>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-zinc-200 bg-[#fafafa] shadow-sm">
            <div className="relative">
              <img
                src={asset('pain_points', zone.image)}
                alt={zone.label}
                className="block h-auto w-full"
                loading="eager"
              />
              <div className="absolute inset-0">
                {[
                  ['head','50%','13%','18%','14%'],
                  ['neck','50%','25%','28%','18%'],
                  ['back','50%','42%','30%','22%'],
                  ['abdomen','50%','56%','28%','20%'],
                  ['legs','50%','72%','32%','24%'],
                  ['feet','50%','91%','38%','15%'],
                ].map(([id,left,top,width,height]) => (
                  <button
                    key={id}
                    type="button"
                    aria-label={`Switch to ${id}`}
                    onMouseEnter={() => setZoneId(id as (typeof painZones)[number]['id'])}
                    onFocus={() => setZoneId(id as (typeof painZones)[number]['id'])}
                    onClick={() => setZoneId(id as (typeof painZones)[number]['id'])}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent focus:outline-none"
                    style={{ left, top, width, height }}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 border-t border-zinc-200 bg-white p-4">
              {painZones.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setZoneId(item.id)}
                  onClick={() => setZoneId(item.id)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition ${zoneId === item.id ? 'bg-[#6f43a8] text-white' : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-[#fbfaf8] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6f43a8]">Product Categories</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Original Storefront Category Assets</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {categories.map((file) => (
              <div key={file} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                <img src={asset('categories', file)} alt="JAMOOZ category" className="block h-auto w-full" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6f43a8]">Product Customization</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Switch Product And Real Color Variant</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">Every selection below swaps to the corresponding original customization image from your uploaded asset package. No CSS recoloring is used.</p>
          </div>

          <div className="grid gap-7 rounded-[30px] border border-zinc-200 bg-[#fafafa] p-5 md:grid-cols-[1.1fr_.9fr] md:p-8">
            <div className="overflow-hidden rounded-2xl bg-white">
              <img src={asset('customization', customImage)} alt={`${customProduct.label} variant ${variantIndex + 1}`} className="block h-auto w-full" />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Choose Product</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {customProducts.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => chooseProduct(item.id)}
                    onClick={() => chooseProduct(item.id)}
                    className={`rounded-2xl border p-3 text-left transition ${productId === item.id ? 'border-[#6f43a8] bg-[#f4effa]' : 'border-zinc-200 bg-white hover:border-zinc-300'}`}
                  >
                    <img src={asset('customization', item.files[0])} alt={item.label} className="block h-auto w-full rounded-xl" loading="lazy" />
                    <span className="mt-2 block text-xs font-bold">{item.label}</span>
                  </button>
                ))}
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Choose Variant / Color</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {customProduct.files.map((file, index) => (
                  <button
                    key={file}
                    type="button"
                    onClick={() => setVariantIndex(index)}
                    className={`h-12 min-w-12 rounded-full border px-4 text-xs font-bold transition ${variantIndex === index ? 'border-[#6f43a8] bg-[#6f43a8] text-white' : 'border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400'}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <div className="mt-7 rounded-2xl bg-white p-5 ring-1 ring-zinc-200">
                <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Current Selection</p>
                <p className="mt-2 text-lg font-bold">{customProduct.label} · Variant {variantIndex + 1}</p>
                <p className="mt-2 text-xs leading-6 text-zinc-500">The image shown on the left is the exact corresponding source image from your R2 asset folder.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
