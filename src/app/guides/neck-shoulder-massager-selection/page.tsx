import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const pagePath = "/guides/neck-shoulder-massager-selection";

export const metadata: Metadata = {
  title: "Neck & Shoulder Massager Selection Guide | JAMOOZ",
  description: "Compare eight JAMOOZ neck and shoulder massagers by format, confirmed functions and buyer use case for wholesale, private label and OEM/ODM projects.",
  alternates: { canonical: pagePath },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Neck & Shoulder Massager Selection Guide | JAMOOZ",
    description: "Compare eight neck and shoulder massage-device formats for wholesale and OEM/ODM projects.",
    url: pagePath,
    type: "article",
    images: [{ url: "/products/jmz-706h/01-home-card-wide.png", width: 1200, height: 630, alt: "JAMOOZ neck and shoulder massage devices" }],
  },
};

const products = [
  { model: "JMZ-706H", name: "Cordless 4-Point Heated Neck Massage Pillow", image: "/products/jmz-706h/01-hero.webp", href: "/products/jmz-706h", tags: ["4-point kneading", "Heating", "3500mAh", "Type-C"] },
  { model: "JMZ-706W", name: "4-Point Heated Neck & Trapezius Massage Pillow", image: "/products/jmz-706w/01-hero.webp", href: "/products/jmz-706w", tags: ["4 modes", "3 speeds", "2 heat levels", "3500mAh"] },
  { model: "JMZ-729S", name: "Contoured Electric Neck Massage Pillow", image: "/products/jmz-729s/01-hero.webp", href: "/products/jmz-729s", tags: ["3 massage modes", "2 heat levels", "2000mAh", "Removable cover"] },
  { model: "JMZ-801", name: "Cloud Neck Support Pillow", image: "/products/jmz-801/01-hero.webp", href: "/products/jmz-801", tags: ["3 modes", "Cordless", "15-min auto-off", "Foldable"] },
  { model: "JMZ-807P", name: "Cloud Plus Heated Neck Massage Pillow", image: "/products/jmz-807p/01-hero.webp", href: "/products/jmz-807p", tags: ["3 massage modes", "3 heat levels", "2600mAh", "1kg"] },
  { model: "JMZ-CSPL002", name: "Neck Pinch Massage Pillow", image: "/products/jmz-cspl002/01-hero.webp", href: "/products/jmz-cspl002", tags: ["Kneading & pinching", "Heating", "2500mAh", "1.4kg"] },
  { model: "JMZ-CSPL003", name: "Mini Kneading Neck Massage Pillow", image: "/products/jmz-cspl003/01-hero.webp", href: "/products/jmz-cspl003", tags: ["4-point kneading", "2 intensity levels", "2000mAh", "1.1kg"] },
  { model: "JMZ-R006", name: "3D Kneading Neck & Shoulder Massager", image: "/products/jmz-r006/JMZ-R006-02-hero.png", href: "/products/jmz-r006", tags: ["3D kneading", "Heating", "Type-C", "USB rechargeable"] },
] as const;

const buyerChecks = [
  ["Format", "Decide whether your channel needs a pillow, compact neck support or wearable U-shaped massager."],
  ["Contact style", "Compare kneading-head layout, intensity options and how the product sits against the neck or trapezius."],
  ["Power & charging", "Confirm battery, charging interface and rated input for the exact model before ordering."],
  ["Warming options", "Check whether heat is independent, how many levels are available and how it is controlled."],
  ["Packaging & branding", "Confirm logo method, colour, retail box, accessories and the minimum quantity for each custom item."],
  ["Market documents", "Match each certificate or report to the model, configuration and destination market."],
] as const;

export default function NeckShoulderSelectionGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "JAMOOZ Neck and Shoulder Massager Selection Guide",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://www.jmz.global${product.href}`,
      name: `${product.model} ${product.name}`,
    })),
  };

  return (
    <main className="bg-[#fbfaff] text-[#2d2047]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="border-b border-violet-100 bg-[radial-gradient(circle_at_90%_10%,#e5d6ff_0%,transparent_34%),linear-gradient(135deg,#ffffff,#f1ebff)]">
        <div className="mx-auto max-w-[1320px] px-5 pb-20 pt-8 sm:px-8 lg:pb-24 lg:pt-10">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Neck & Shoulder Selection Guide", href: pagePath }]} />
          <div className="mt-10 max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">Product selection guide</p>
            <h1 className="mt-5 text-[42px] font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-[68px]">Choose the Right Neck &amp; Shoulder Massager</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600">Compare eight available formats by confirmed functions and physical design, then open the product page for detailed specifications, pricing and OEM/ODM options.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["8 available models", "MOQ from 50 pcs", "Samples available", "OEM/ODM support"].map((item) => <span key={item} className="rounded-full border border-violet-200 bg-white px-4 py-2.5 text-sm font-bold text-violet-800">{item}</span>)}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/rfq" className="inline-flex min-h-12 items-center justify-center rounded-full bg-violet-700 px-7 py-3.5 text-sm font-black text-white transition hover:bg-violet-800">REQUEST A RECOMMENDATION</Link>
              <Link href="/products/neck-shoulder-massagers" className="inline-flex min-h-12 items-center justify-center rounded-full border border-violet-300 bg-white px-7 py-3.5 text-sm font-black text-violet-800 transition hover:bg-violet-50">VIEW CATEGORY</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-700">Compare the range</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">Eight formats for different product lines</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article key={product.model} className="overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-950/8">
                <div className="relative aspect-[4/3] bg-[#f5f3f8]">
                  <Image src={product.image} alt={`${product.model} ${product.name}`} fill sizes="(min-width: 1280px) 31vw, (min-width: 768px) 48vw, 100vw" className="object-contain p-3" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700">{product.model}</p>
                  <h3 className="mt-3 text-xl font-black leading-7">{product.name}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.tags.map((tag) => <span key={tag} className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-800">{tag}</span>)}
                  </div>
                  <Link href={product.href} className="mt-7 inline-flex items-center gap-2 text-sm font-black text-violet-700 hover:text-violet-900">VIEW PRODUCT <span aria-hidden>→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-violet-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-700">Buyer checklist</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">What should you compare before requesting a quote?</h2>
          <div className="mt-10 divide-y divide-violet-100 overflow-hidden rounded-3xl border border-violet-100">
            {buyerChecks.map(([title, copy], index) => (
              <article key={title} className="grid gap-3 bg-white p-6 sm:grid-cols-[44px_220px_1fr] sm:items-start sm:p-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-xs font-black text-violet-800">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-black">{title}</h3>
                <p className="text-sm leading-7 text-zinc-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-7 rounded-[32px] bg-[linear-gradient(135deg,#2d174d,#5f29a8)] px-7 py-10 text-white sm:px-10 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Need help narrowing the range?</h2>
            <p className="mt-4 max-w-3xl leading-7 text-white/72">Tell us your channel, target price, quantity, destination market and preferred massage format. We will help identify the models worth sampling.</p>
          </div>
          <Link href="/rfq" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-black text-violet-800 transition hover:bg-violet-50">DISCUSS YOUR PRODUCT LINE</Link>
        </div>
      </section>
    </main>
  );
}
