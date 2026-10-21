import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { jmz729s, jmz801, jmzCspl002 } from '@/lib/preview-products/new-products';
import { jmz807p, jmz706w, jmz706h } from '@/lib/preview-products/planned-products';
import { jmzCspl003 } from '@/lib/october-products';
import { jmzR006Gallery, jmzR006Specs } from '@/lib/preview-products/jmz-r006';

export const metadata: Metadata = {
  title: 'Neck & Shoulder Massagers — Category Preview | JAMOOZ',
  robots: { index: false, follow: false },
};

const previewImages: Record<string, string> = {
  'jmz-r006': '/products/category-preview/r006-studio-v1.jpg',
  'jmz-807p': '/products/category-preview/807p-studio-v1.jpg',
  'jmz-801': '/products/category-preview/801-studio-v1.jpg',
  'jmz-cspl002': '/products/category-preview/cspl002-studio-v1.jpg',
  'jmz-cspl003': '/products/category-preview/cspl003-studio-v1.jpg',
};
const products = [
  { slug:'jmz-r006', model:'JMZ-R006', name:'3D Kneading Neck & Shoulder Massager', gallery:jmzR006Gallery, badges:['3D Kneading','Heating','Type-C'], priceRange:'US$20.90–22.50 / pc', specs:jmzR006Specs, customPricing:false },
  jmz729s, jmz807p, jmz706h, jmz706w, jmz801, jmzCspl002, jmzCspl003,
];
const spec = (p: typeof products[number], names: string[]) => p.specs.find(s => names.includes(s.item) && s.status === 'Confirmed')?.value ?? 'Confirm with sample';
const price = (p: typeof products[number]) => p.customPricing ? 'Custom Quote' : p.priceRange;
const faqs = [
  ['Which model should I start with?', 'Start with the wearing position and contact structure. R006 offers a U-shaped wearable format; the pillow models provide different contact layouts, sizes and controls. Compare a physical sample before final selection.'],
  ['What is the minimum order quantity?', 'Orders start from 50 pieces. Logo, color, packaging and functional customization are reviewed separately; the applicable minimum and final price are confirmed in your quotation.'],
  ['Can I order samples?', 'Samples are available. Tell us the model and delivery destination so we can confirm sample cost, shipping and availability.'],
  ['Can I add my brand and packaging?', 'Custom branding and packaging are available. Share your artwork and requirements; see our OEM/ODM page for the development process rather than assuming every option has the same minimum quantity.'],
  ['Which certificates and reports can you provide?', 'Available documentation depends on the model, configuration and destination market. Tell us where you plan to sell so we can confirm the relevant certificate scope and test reports.'],
  ['What is the delivery time?', 'Delivery follows the selected product and order requirements. Sample timing and bulk lead time are confirmed with the quotation; custom packaging or development may require a separate schedule.'],
];

export default function NeckCategoryPreview({ showPreviewNotice = true }: { showPreviewNotice?: boolean } = {}) {
  return <main className="bg-[#faf9fd] text-[#3d2758]">
    {showPreviewNotice && <div className="bg-violet-100 px-5 py-2 text-center text-xs text-violet-800">肩颈分类页预览 · 未上线 · 不改变正式导航及首页四款展示</div>}
    <section className="border-b border-violet-100 bg-white">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
        <div>
          <nav aria-label="Breadcrumb" className="mb-7 text-xs text-zinc-500"><Link href="/">Home</Link> / <Link href="/products">Products</Link> / Neck &amp; Shoulder</nav>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-violet-600">Wholesale · Private label · OEM / ODM</p>
          <h1 className="mt-4 max-w-2xl text-[32px] font-semibold leading-[1.12] tracking-tight sm:text-[42px] lg:text-[48px]">Neck &amp; Shoulder<br/><span className="text-violet-600">Massager Manufacturer</span></h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base">Compare eight JAMOOZ models for your next product range. Explore wearable kneading and massage pillow designs, then confirm the right sample for your brand.</p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">{['MOQ from 50 pcs','Samples available','Custom branding & packaging'].map(t=><span key={t} className="rounded-full border border-violet-200 bg-violet-50 px-3 py-2">{t}</span>)}</div>
          <div className="mt-7 flex flex-wrap gap-3"><a href="#range" className="rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white">Explore 8 Models ↓</a><a href="#compare" className="rounded-full border border-violet-200 px-5 py-3 text-sm font-semibold">Compare Models</a></div>
        </div>
        <div className="relative overflow-hidden rounded-[28px] bg-[#f1eff7] p-6"><Image src={previewImages['jmz-807p']} alt={jmz807p.gallery[0].alt} width={700} height={500} priority className="aspect-[7/5] w-full object-contain mix-blend-multiply"/><div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-violet-200 pt-4 text-xs"><span>JMZ-807P · Rechargeable heated pillow</span><Link href="/products/jmz-807p" className="font-bold text-violet-700">View model →</Link></div></div>
      </div>
    </section>

    <section id="range" className="mx-auto max-w-[1280px] scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-widest text-violet-600">The collection</p><h2 className="mt-2 text-3xl font-semibold tracking-tight">Find your next neck-care product.</h2></div><span className="text-sm text-zinc-500">8 models · Confirmed product information</span></div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{products.map(p=><article key={p.slug} className="flex overflow-hidden rounded-2xl border border-violet-100 bg-white flex-col"><Link href={`/products/${p.slug}`} className="block bg-[#f3f2f6] p-4"><Image src={previewImages[p.slug] ?? p.gallery[0].src} alt={p.gallery[0].alt} width={520} height={390} className="aspect-[4/3] w-full object-contain mix-blend-multiply"/></Link><div className="flex flex-1 flex-col p-5"><p className="text-[11px] font-bold tracking-wider text-violet-600">{p.model}</p><h3 className="mt-2 text-lg font-semibold leading-6">{p.name}</h3><p className="mt-3 text-xs leading-6 text-zinc-500">{p.badges.slice(0,3).join(' · ')}</p><div className="mt-auto pt-5"><p className="text-sm font-semibold">{price(p)}</p><Link href={`/products/${p.slug}`} className="mt-4 flex min-h-11 items-center justify-between border-t border-violet-100 pt-3 text-sm font-semibold text-violet-700">View Product <span aria-hidden="true">→</span></Link></div></div></article>)}</div>
    </section>

    <section className="border-y border-violet-100 bg-[#f0ebfa]"><div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8"><p className="text-xs font-bold uppercase tracking-widest text-violet-600">Start with the structure</p><h2 className="mt-2 text-3xl font-semibold tracking-tight">Choose the fit. Then compare the functions.</h2><div className="mt-7 grid gap-6 md:grid-cols-3">{[
      ['01','Wearable kneading','JMZ-R006','A U-shaped format with double lanyards. Evaluate contact position, fit and access to the controls.'],
      ['02','Contact & control','JMZ-706W / JMZ-706H','Both use four-point kneading. Compare speed control on 706W with intensity control and the chair strap on 706H.'],
      ['03','Pillow formats','729S / 807P / 801 / CSPL002 / CSPL003','Compare pillow dimensions, contact layout and support. A smaller format or larger battery alone does not establish a better experience.'],
    ].map(([n,title,models,copy])=><div key={n} className="border-t border-violet-300 pt-5"><span className="text-xs text-violet-600">{n}</span><h3 className="mt-3 text-xl font-semibold">{title}</h3><p className="mt-2 text-xs font-semibold text-violet-600">{models}</p><p className="mt-3 text-sm leading-7 text-zinc-600">{copy}</p></div>)}</div></div></section>

    <section id="compare" className="mx-auto max-w-[1280px] scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16"><p className="text-xs font-bold uppercase tracking-widest text-violet-600">Side by side</p><h2 className="mt-2 text-3xl font-semibold tracking-tight">A clearer shortlist.</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600">Use the confirmed specifications below to shortlist samples. Unlisted details require confirmation and do not mean that a function is absent.</p>
      <div className="mt-7 grid gap-3 md:grid-cols-2">{products.map(p=><div key={p.slug} className="rounded-2xl border border-violet-100 bg-white p-5"><Link href={`/products/${p.slug}`} className="text-sm font-bold text-violet-700">{p.model} →</Link><dl className="mt-4 grid grid-cols-[90px_1fr] gap-x-4 gap-y-3 text-xs leading-6"><dt className="text-zinc-500">Functions</dt><dd>{p.badges.slice(0,3).join(' / ')}</dd><dt className="text-zinc-500">Controls</dt><dd>{spec(p,['Controls','Control','Control Method'])}</dd><dt className="text-zinc-500">Product size</dt><dd>{spec(p,['Product Size','Product Dimensions','Dimensions'])}</dd></dl></div>)}</div>
    </section>

    <section className="bg-white border-y border-violet-100"><div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs font-bold uppercase tracking-widest text-violet-600">Buyer essentials</p><h2 className="mt-3 text-3xl font-semibold">Before you order.</h2><p className="mt-4 text-sm leading-7 text-zinc-600">Short answers for your shortlist. Project-specific terms are confirmed with your quotation.</p><Link href="/oem-odm" className="mt-5 block text-sm font-semibold text-violet-700">Explore OEM / ODM →</Link><Link href="/oem-odm#manufacturing-evidence" className="mt-4 block text-sm font-semibold text-violet-700">Review credentials →</Link></div><div>{faqs.map(([q,a])=><details key={q} className="group border-b border-violet-100 py-4"><summary className="cursor-pointer text-sm font-semibold leading-6">{q}</summary><p className="mt-3 text-sm leading-7 text-zinc-600">{a}</p></details>)}</div></div></section>
<section id="inquiry" className="scroll-mt-24 mx-auto max-w-[1280px] px-5 py-12 sm:px-8"><div className="rounded-[28px] bg-[#3d2758] p-7 text-white sm:p-10"><p className="text-xs uppercase tracking-widest text-violet-200">Build your shortlist with JAMOOZ</p><h2 className="mt-3 text-3xl font-semibold">Which models fit your next range?</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">Send the models, quantity and destination market. We will confirm sample availability, documentation and product-specific lead time.</p><Link href="/rfq?product=Neck%20%26%20Shoulder%20Massagers%20%E2%80%94%20sample%20and%20quotation%20request" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-violet-800">Request Samples &amp; Pricing →</Link></div></section>
  </main>;
}
