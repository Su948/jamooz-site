import Link from 'next/link';
import { PainReliefSelector, ProductCustomizer } from '@/components/HomePreviewInteractive';

const categories = [
  { name: 'Scalp Massager', image: '/images/wellness/scalp_s1.png' },
  { name: 'Neck Massager', image: '/images/wellness/neck_m5.png' },
  { name: 'Massage Gun', image: '/images/wellness/pro_x7.png' },
  { name: 'Dual-head Massager', image: '/images/wellness/duo_v2.png' },
];

const hotProducts = [
  { name: 'Percussion Massage Gun', image: '/images/wellness/pro_x7.png' },
  { name: 'Dual-head Massager', image: '/images/wellness/duo_v2.png' },
  { name: 'Scalp Care Massager', image: '/images/wellness/scalp_s1.png' },
  { name: 'Neck & Shoulder Massager', image: '/images/wellness/neck_m5.png' },
];

export default function HomepagePreview() {
  return (
    <main className="bg-white text-zinc-900">
      <section className="relative min-h-[72vh] overflow-hidden border-b border-violet-100 bg-[#f8f5ff]">
        <div className="absolute inset-0">
          <img src="/images/wellness/hero_banner_clean.png" alt="JAMOOZ massage products" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/10" />
        </div>
        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-700 backdrop-blur">Homepage Preview V1</span>
            <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-tight text-zinc-950 md:text-7xl">Professional Massage Device Manufacturer</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">OEM/ODM · Custom Packaging · Low MOQ · Global Export. Built for importers, distributors and private-label buyers.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/products" className="rounded-full bg-violet-700 px-7 py-4 text-sm font-bold text-white hover:bg-violet-800">View Products</Link>
              <Link href="/rfq" className="rounded-full border border-violet-300 bg-white px-7 py-4 text-sm font-bold text-violet-800 hover:bg-violet-50">Get A Quote</Link>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-2 gap-5 sm:grid-cols-4">
              {[
                ['20+', 'Years Experience'],
                ['100+', 'Skilled Workers'],
                ['20+', 'Export Countries'],
                ['2000㎡+', 'Factory Area'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/70 bg-white/70 p-4 backdrop-blur">
                  <p className="text-2xl font-bold text-violet-800">{value}</p>
                  <p className="mt-1 text-[11px] font-semibold text-zinc-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PainReliefSelector />

      <section className="border-y border-violet-100 bg-[#fcfbff] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-700">Product Navigation</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Shop By Category</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map((item) => (
              <Link href="/products" key={item.name} className="group rounded-[28px] border border-violet-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-square overflow-hidden rounded-2xl bg-white p-4"><img src={item.image} alt={item.name} className="h-full w-full object-contain transition duration-300 group-hover:scale-105" /></div>
                <p className="mt-4 text-sm font-bold text-zinc-900">{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-700">Catalog Preview</p>
              <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Hot Products</h2>
            </div>
            <Link href="/products" className="text-sm font-bold text-violet-700">View All Products →</Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {hotProducts.map((item) => (
              <div key={item.name} className="rounded-[28px] border border-zinc-100 bg-white p-5 shadow-sm">
                <div className="aspect-square overflow-hidden rounded-2xl bg-[#fcfbff] p-4"><img src={item.image} alt={item.name} className="h-full w-full object-contain" /></div>
                <p className="mt-4 text-sm font-bold text-zinc-900">{item.name}</p>
                <Link href="/rfq" className="mt-4 inline-flex text-xs font-bold text-violet-700">Get Quote →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductCustomizer />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-700">OEM / ODM Capabilities</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Built For Your Brand</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ['Custom Logo', 'Laser engraving and screen printing'],
              ['Custom Color', 'Pantone matching for brand consistency'],
              ['Custom Packaging', 'Retail box, manual and gift packaging'],
              ['Private Label', 'Flexible B2B customization support'],
              ['Fast Sampling', 'Rapid sampling for new projects'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-3xl border border-violet-100 bg-[#fcfbff] p-6">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700">◇</div>
                <h3 className="font-bold text-zinc-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#18131f] py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">Why JAMOOZ</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Manufacturing Strength For Global B2B Buyers</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">This preview keeps the page structure separate from the live homepage. After you approve the layout and interactions, the same components can be moved into the production homepage.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ['20+', 'Years Experience'], ['100+', 'Skilled Workers'], ['20+', 'Export Countries'], ['2000㎡+', 'Factory Area'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-7"><p className="text-3xl font-bold text-violet-300">{value}</p><p className="mt-2 text-xs uppercase tracking-wider text-white/50">{label}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-700">RFQ</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Ready To Start Your Project?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500">Tell us which product, color, logo and packaging configuration you need.</p>
          <Link href="/rfq" className="mt-8 inline-flex rounded-full bg-violet-700 px-8 py-4 text-sm font-bold text-white hover:bg-violet-800">Request A Customized Quote</Link>
        </div>
      </section>
    </main>
  );
}
