"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export type CatalogProduct = {
  model: string;
  category: string;
  categoryLabel: string;
  name: string;
  description: string;
  image: string;
  href: string;
  price: string;
  moq: string;
  features: readonly string[];
};

export type CatalogDirectoryGroup = {
  category: string;
  label: string;
  items: readonly CatalogProduct[];
};

const faqs = [
  {
    question: "What is the minimum order quantity for JAMOOZ products?",
    answer: "Orders start from 50 pieces. The applicable minimum for custom colors, packaging, branding or functional changes is confirmed with the selected model and quotation.",
  },
  {
    question: "Can I order samples before a bulk order?",
    answer: "Yes. Samples are available so you can review the product structure, controls, contact position and finish before confirming a bulk order.",
  },
  {
    question: "Which OEM and private-label options are available?",
    answer: "Logo, color and packaging customization are available. Product-level changes are reviewed separately according to the model, quantity and development requirements.",
  },
  {
    question: "Which certificates and test reports can you provide?",
    answer: "Available documentation depends on the product model, configuration and destination market. Tell us where the product will be sold so we can confirm the applicable scope and reports.",
  },
  {
    question: "How long does production and delivery take?",
    answer: "Sample timing and bulk lead time follow the selected product, order quantity and customization requirements. The applicable schedule is confirmed with your quotation.",
  },
  {
    question: "How do I choose the right massage device for my range?",
    answer: "Start with the target body area, product format and required functions. Shortlist the relevant models, then compare samples before final selection.",
  },
] as const;

export default function ProductCatalogDirectory({ groups }: { groups: readonly CatalogDirectoryGroup[] }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const products = useMemo(
    () => activeCategory === "all" ? groups.flatMap((group) => group.items) : groups.find((group) => group.category === activeCategory)?.items ?? [],
    [activeCategory, groups],
  );

  return (
    <main className="min-h-screen bg-[#faf9fd] text-[#302050]">
      <section className="border-b border-violet-100 bg-[#f3effa]">
        <div className="mx-auto max-w-[1240px] px-4 py-9 sm:px-8 md:py-20">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">Full product catalog</p>
          <h1 className="mt-3 max-w-5xl text-[32px] font-semibold leading-[1.08] tracking-tight md:mt-4 md:text-[52px] lg:text-[58px]">
            Wholesale Massage Devices<br />
            <span className="text-violet-700">OEM / ODM · MOQ from 50 pcs</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-600 md:mt-6 md:text-base md:leading-7">
            Compare massage devices by application, function and format. Samples, private-label branding and OEM/ODM support are available for global wellness brands and distributors.
          </p>
        </div>
      </section>

      <section className="border-b border-violet-100 bg-white">
        <div className="mx-auto max-w-[1240px] px-4 py-3 sm:px-8 md:py-5">
          <div className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0" role="tablist" aria-label="Filter products by category">
            <div className="flex w-max min-w-full gap-2 sm:w-full sm:flex-wrap sm:justify-center">
              <button type="button" role="tab" aria-controls="product-catalog" aria-selected={activeCategory === "all"} onClick={() => setActiveCategory("all")} className={`min-h-10 rounded-full border px-4 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 md:min-h-11 ${activeCategory === "all" ? "border-violet-700 bg-violet-700 text-white" : "border-violet-200 bg-white hover:border-violet-400 hover:bg-violet-50"}`}>
                All Products
              </button>
              {groups.map((group) => (
                <button key={group.category} type="button" role="tab" aria-controls="product-catalog" aria-selected={activeCategory === group.category} onClick={() => setActiveCategory(group.category)} className={`min-h-10 whitespace-nowrap rounded-full border px-4 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 md:min-h-11 ${activeCategory === group.category ? "border-violet-700 bg-violet-700 text-white" : "border-violet-200 bg-white hover:border-violet-400 hover:bg-violet-50"}`}>
                  {group.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="product-catalog" className="mx-auto max-w-[1240px] scroll-mt-[145px] px-3 py-6 sm:px-6 md:scroll-mt-[165px] md:px-8 md:py-14" role="tabpanel">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.model} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-lg shadow-violet-900/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-900/10 md:rounded-3xl md:shadow-xl">
              <Link href={product.href} aria-label={`View ${product.model} ${product.name}`} className="relative aspect-square overflow-hidden bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500 md:aspect-[4/3]">
                <Image src={product.image} alt={`${product.model} ${product.name} actual product sample`} fill sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 50vw" className="object-contain transition duration-500 group-hover:scale-[1.025]" />
              </Link>
              <div className="flex flex-1 flex-col p-3 md:p-6">
                <p className="text-[9px] font-black uppercase tracking-[0.14em] text-violet-700 md:text-xs md:tracking-[0.18em]">{product.model}</p>
                <h2 className="mt-2 min-h-[2.7rem] text-[15px] font-semibold leading-[1.35] tracking-tight md:mt-3 md:min-h-0 md:text-2xl md:leading-tight">{product.name}</h2>
                <p className="mt-3 hidden text-sm leading-6 text-zinc-600 md:block">{product.description}</p>
                <div className="mt-4 hidden flex-wrap gap-2 md:flex">
                  {product.features.map((feature) => <span key={feature} className="rounded-full border border-violet-100 bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-800">{feature}</span>)}
                </div>
                <div className="mt-auto border-t border-violet-100 pt-3 md:mt-4 md:flex md:flex-wrap md:items-end md:justify-between md:gap-4 md:pt-5">
                  <div><p className="text-xs font-black leading-5 md:text-lg">{product.price}</p><p className="mt-1 hidden text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500 md:block">{product.moq}</p></div>
                  <Link href={product.href} className="mt-2 inline-flex min-h-9 items-center text-xs font-bold text-violet-700 transition hover:text-violet-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 md:mt-0 md:min-h-10 md:justify-center md:rounded-full md:bg-violet-700 md:px-5 md:py-2.5 md:text-sm md:text-white md:hover:bg-violet-800 md:hover:text-white md:focus-visible:ring-offset-2">View Product →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-violet-100 bg-white">
        <div className="mx-auto max-w-[1100px] px-5 py-12 sm:px-8 md:py-20">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">Catalog questions</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Frequently Asked Questions About Wholesale Massage Devices</h2>
          <dl className="mt-7 border-t border-violet-100 md:mt-9">
            {faqs.map((faq) => (
              <div key={faq.question} className="grid gap-2 border-b border-violet-100 py-4 md:grid-cols-[0.85fr_1.15fr] md:gap-10 md:py-6">
                <dt className="font-semibold leading-6">{faq.question}</dt>
                <dd className="text-sm leading-7 text-zinc-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/rfq?product=Massage%20device%20catalog%20consultation" className="inline-flex min-h-12 items-center rounded-full bg-violet-700 px-6 text-sm font-bold text-white transition hover:bg-violet-800">Request Consultation &amp; Quote →</Link>
            <Link href="/oem-odm" className="text-sm font-bold text-violet-700 underline decoration-violet-200 underline-offset-4 hover:decoration-violet-700">Review OEM / ODM capabilities</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
