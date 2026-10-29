import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Electric Cupping & Body Massager OEM/ODM | JAMOOZ",
  description:
    "Explore JAMOOZ JMZ-903, an electric cupping-style body massager with adjustable suction, warming and EMS for wholesale and OEM/ODM projects.",
  alternates: { canonical: "/products/cupping-gua-sha" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Electric Cupping & Body Massager OEM/ODM | JAMOOZ",
    description:
      "JMZ-903 electric cupping-style body massager with adjustable suction, warming, EMS and OEM/ODM support.",
    url: "/products/cupping-gua-sha",
    type: "website",
    images: [{ url: "/products/jmz-903/01-hero.webp", width: 1200, height: 1200, alt: "JMZ-903 electric cupping-style body massager" }],
  },
};

const confirmedSpecs = [
  ["Functions", "Adjustable suction, warming and EMS"],
  ["Control range", "0–12 suction · 0–12 heat · 0–12 EMS"],
  ["Warming range", "Approximately 41–48°C"],
  ["Operating cycle", "20 minutes with automatic shutoff"],
  ["Battery", "3.7 V / 2000mAh rechargeable battery"],
  ["Input / power", "DC 5 V / 2 A · 10 W"],
  ["Charging", "USB-C · specified under 4.5 hours"],
  ["Size / net weight", "90 × 90 × 200 mm · 300 g"],
] as const;

const buyerChecks = [
  ["Confirm the product format", "JMZ-903 is an electric suction, warming and EMS body massager. It is not a manual gua sha stone or scraping board."],
  ["Match the control functions", "Verify the suction, heat and EMS ranges required for your market and ask for a sample before placing a production order."],
  ["Define the customisation scope", "Standard minimums are 500 pcs for a logo, 500 pcs per colour, 500 pcs for a colour box and 300 pcs for a corrugated box. Send the artwork and packaging requirements with the inquiry."],
  ["Check market documents by model", "Certificates and reports must be matched to the exact model, configuration and destination market before ordering."],
] as const;

const faqs = [
  ["Is JMZ-903 a traditional manual gua sha tool?", "No. It is a rechargeable body-care device that uses controlled suction, warming and EMS. A manual gua sha tool relies on hand pressure and has no electronic controls."],
  ["How many adjustment levels does it have?", "Suction, warming and EMS each use a 0–12 control range. The specified warming range is approximately 41–48°C."],
  ["What is the standard product MOQ?", "All standard product orders start from 50 pcs. Custom logo, colour and colour-box orders start from 500 pcs; corrugated-box customisation starts from 300 pcs."],
  ["Which compliance documents are available?", "Availability depends on the exact model, configuration and destination market. Send the target market with the enquiry and the team will confirm the applicable documents."],
] as const;

export default function CuppingGuaShaPreviewPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Electric Cupping & Body Massager OEM/ODM",
    description: metadata.description,
    url: "https://www.jmz.global/products/cupping-gua-sha",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: 1,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          url: "https://www.jmz.global/products/jmz-903",
          name: "JMZ-903 Electric Cupping-Style Body Massager",
        },
      ],
    },
  };

  return (
    <main className="bg-[#fbfaff] text-[#2d2047]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="border-b border-violet-100 bg-[radial-gradient(circle_at_88%_12%,#ddcaff_0%,transparent_34%),linear-gradient(135deg,#ffffff,#f0e9ff)]">
        <div className="mx-auto max-w-[1320px] px-5 pb-16 pt-8 sm:px-8 lg:pb-24 lg:pt-10">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Products", href: "/products" }, { name: "Cupping & Body Care", href: "/products/cupping-gua-sha" }]} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.06fr_.94fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">OEM / ODM BODY CARE DEVICE</p>
              <h1 className="mt-5 text-[42px] font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-[68px]">
                Electric Cupping-Style Body Massager
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600">
                Explore JAMOOZ JMZ-903, a rechargeable body-care device combining adjustable suction, warming and EMS for wholesale, private-label and OEM/ODM projects.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["MOQ from 50 pcs", "12-level controls", "Samples available", "OEM/ODM support"].map((item) => (
                  <span key={item} className="rounded-full border border-violet-200 bg-white px-4 py-2.5 text-sm font-bold text-violet-800">{item}</span>
                ))}
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/rfq" className="inline-flex min-h-12 items-center justify-center rounded-full bg-violet-700 px-7 py-3.5 text-sm font-black text-white transition hover:bg-violet-800">REQUEST A QUOTE</Link>
                <Link href="/products/jmz-903" className="inline-flex min-h-12 items-center justify-center rounded-full border border-violet-300 bg-white px-7 py-3.5 text-sm font-black text-violet-800 transition hover:bg-violet-50">VIEW JMZ-903</Link>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[36px] border border-violet-100 bg-white shadow-2xl shadow-violet-950/10">
              <Image src="/products/jmz-903/01-hero.webp" alt="JMZ-903 suction, warming and EMS body massager" fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-contain p-6" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-700">Product terminology</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">Electric suction device or manual gua sha tool?</h2>
          <p className="mt-5 max-w-4xl leading-8 text-zinc-600">These are different product formats. This page covers JAMOOZ’s electric suction body massager and does not present JMZ-903 as a traditional stone or scraping board.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-violet-200 bg-violet-50 p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700">JAMOOZ JMZ-903</p>
              <h3 className="mt-3 text-2xl font-black">Electric cupping-style body massager</h3>
              <p className="mt-4 leading-7 text-zinc-600">Rechargeable electronic device with adjustable suction, warming and EMS, operated through buttons and a digital display.</p>
            </article>
            <article className="rounded-3xl border border-zinc-200 bg-white p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">Different product type</p>
              <h3 className="mt-3 text-2xl font-black">Manual gua sha stone or board</h3>
              <p className="mt-4 leading-7 text-zinc-600">Non-powered handheld tool controlled entirely by the user’s hand pressure and movement. It is not included in the current JAMOOZ range shown here.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-violet-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[.88fr_1.12fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-700">Confirmed model</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">JMZ-903 at a glance</h2>
              <p className="mt-5 leading-8 text-zinc-600">Only confirmed product-page specifications are shown. Packaging, customisation and market documents are confirmed with the quotation for the selected configuration.</p>
              <Link href="/products/jmz-903" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-violet-700 hover:text-violet-900">OPEN PRODUCT PAGE <span aria-hidden>→</span></Link>
            </div>
            <dl className="grid gap-3 sm:grid-cols-2">
              {confirmedSpecs.map(([item, value]) => (
                <div key={item} className="rounded-2xl border border-violet-100 bg-[#fbfaff] p-5">
                  <dt className="text-xs font-black uppercase tracking-[0.12em] text-violet-700">{item}</dt>
                  <dd className="mt-2 text-sm leading-6 text-zinc-600">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ff] py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-700">Buyer checklist</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">What should buyers confirm before ordering?</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {buyerChecks.map(([title, copy], index) => (
              <article key={title} className="rounded-3xl border border-violet-100 bg-white p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-xs font-black text-violet-800">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-lg font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-violet-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-700">Buyer questions</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">Frequently asked questions</h2>
          <div className="mt-10 divide-y divide-violet-100 overflow-hidden rounded-3xl border border-violet-100">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group bg-white p-6 sm:p-7">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 font-black">
                  <span>{question}</span><span aria-hidden className="text-xl text-violet-700 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-7 rounded-[32px] bg-[linear-gradient(135deg,#2d174d,#5f29a8)] px-7 py-10 text-white sm:px-10 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Discuss JMZ-903 for your market</h2>
            <p className="mt-4 max-w-3xl leading-7 text-white/72">Send the quantity, destination market and customisation requirements. JAMOOZ will confirm pricing, samples, branding, packaging and applicable documents with the quotation.</p>
          </div>
          <Link href="/rfq" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-black text-violet-800 transition hover:bg-violet-50">REQUEST A QUOTE</Link>
        </div>
      </section>
    </main>
  );
}
