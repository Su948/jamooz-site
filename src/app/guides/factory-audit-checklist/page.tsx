import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const pagePath = "/guides/factory-audit-checklist";

export const metadata: Metadata = {
  title: "SGS-Assessed Supplier & Factory Audit Checklist | JAMOOZ",
  description:
    "Review JAMOOZ supplier-assessment evidence and a practical six-step factory audit checklist for massage-device sourcing projects.",
  alternates: { canonical: pagePath },
  robots: { index: true, follow: true },
  openGraph: {
    title: "SGS-Assessed Supplier & Factory Audit Checklist | JAMOOZ",
    description: "Supplier-assessment evidence and a practical verification checklist for massage-device sourcing teams.",
    url: pagePath,
    type: "article",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "JAMOOZ massage-device OEM and ODM sourcing" }],
  },
};

const trustFacts = [
  ["SGS Assessed", "Third-party supplier assessment record"],
  ["2,732 m²", "Combined operating area"],
  ["Trade", "Trade assessment record available"],
  ["Buyer Review", "Report available for due diligence"],
] as const;

const auditSteps = [
  ["01", "Verify the contracting entity", "Match the supplier name, business licence and third-party report number. Confirm the entity that signs the contract and the production arrangement for the order."],
  ["02", "Match the exact model", "Confirm the model, configuration and destination market before associating a CE, FCC, RoHS or test document with the product."],
  ["03", "Review process controls", "Check incoming inspection, assembly, functional testing, nonconforming-product isolation and corrective-action records relevant to the order."],
  ["04", "Check relevant equipment", "Review only the equipment and records relevant to the selected product, such as environmental, vibration, cable-bending or battery testing."],
  ["05", "Confirm transport documents", "For products containing lithium batteries, verify current transport documentation for the selected cell and finished configuration."],
  ["06", "Approve the final specification", "Freeze the approved sample, packaging, labelling and inspection criteria before the production order starts."],
] as const;

export default function FactoryAuditChecklistPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "SGS-Assessed Supplier Evidence and Factory Audit Checklist",
    description: metadata.description,
    author: { "@type": "Organization", name: "JAMOOZ" },
    publisher: { "@type": "Organization", name: "JAMOOZ" },
    mainEntityOfPage: `https://www.jmz.global${pagePath}`,
  };

  return (
    <main className="bg-white text-[#2d2047]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="overflow-hidden bg-[radial-gradient(circle_at_88%_8%,#7130ef_0%,transparent_30%),linear-gradient(135deg,#150b28,#2f174f_68%,#1b1030)] text-white">
        <div className="mx-auto max-w-[1320px] px-5 pb-20 pt-8 sm:px-8 lg:pb-28 lg:pt-10">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Factory Audit Checklist", href: pagePath }]} />
          <div className="mt-12 max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-200">Manufacturing evidence</p>
            <h1 className="mt-5 text-[42px] font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-[70px]">
              SGS-Assessed Business Operations
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75">
              An independent supplier assessment and a practical verification process for massage-device sourcing teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["SGS-assessed company", "Massage-device OEM/ODM support", "Assessment report available"].map((item) => (
                <span key={item} className="rounded-full border border-violet-300/55 bg-white/[0.07] px-4 py-2.5 text-sm font-bold">{item}</span>
              ))}
            </div>
            <Link href="/rfq" className="mt-9 inline-flex min-h-12 items-center justify-center rounded-xl bg-violet-600 px-7 py-3.5 text-sm font-black text-white transition hover:bg-violet-500">
              REQUEST DOCUMENTS &amp; DISCUSS YOUR PROJECT
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-violet-100 bg-[#f8f5ff] py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">Independent assessment record</h2>
          <p className="mt-5 max-w-3xl leading-8 text-zinc-600">
            The report identifies the assessed JAMOOZ legal entity and assessment scope. The area figure combines the business and production sections operating within the same group structure.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {trustFacts.map(([value, label]) => (
              <article key={value} className="rounded-3xl border border-violet-100 bg-white p-7 shadow-sm">
                <p className="text-3xl font-black tracking-[-0.04em] text-violet-700">{value}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-700">Assessment record</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">JAMOOZ supplier assessment</h2>
            <p className="mt-5 leading-8 text-zinc-600">The report applies to the named JAMOOZ legal entity and its stated assessment scope.</p>
          </div>
          <article className="mt-9 max-w-3xl rounded-3xl border border-violet-100 bg-white p-7 shadow-xl shadow-violet-950/5 sm:p-9">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700">Trade assessment</p>
            <h3 className="mt-3 text-2xl font-black">Jamooz (Xiamen) Technology Co., Ltd.</h3>
            <dl className="mt-7 grid gap-5 text-sm sm:grid-cols-3">
              <div><dt className="font-black text-[#2d2047]">Report</dt><dd className="mt-1 text-zinc-600">493389441_T</dd></div>
              <div><dt className="font-black text-[#2d2047]">Issued</dt><dd className="mt-1 text-zinc-600">July 24, 2026</dd></div>
              <div><dt className="font-black text-[#2d2047]">Buyer access</dt><dd className="mt-1 text-zinc-600">Available for due diligence</dd></div>
            </dl>
          </article>
          <p className="mt-7 max-w-4xl text-sm leading-7 text-zinc-500">
            The 2,732 m² figure combines the areas recorded for business and production functions operating within the same group structure and assessed under separate legal entities on July 24, 2026. Assessment findings describe conditions observed at the assessment date and do not guarantee every model or production batch.
          </p>
        </div>
      </section>

      <section className="border-y border-violet-100 bg-[#f8f5ff] py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-700">Buyer verification</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">A practical factory audit checklist</h2>
          <p className="mt-5 max-w-3xl leading-8 text-zinc-600">Use this framework before sampling, during a video or on-site audit, and before mass production.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {auditSteps.map(([number, title, copy]) => (
              <article key={number} className="rounded-3xl border border-violet-100 bg-white p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-700 text-xs font-black text-white">{number}</span>
                <h3 className="mt-5 text-lg font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-7 rounded-[32px] border border-violet-100 bg-[linear-gradient(135deg,#efe7ff,#faf8ff)] px-7 py-10 sm:px-10 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Need documents for a specific model?</h2>
            <p className="mt-4 max-w-3xl leading-7 text-zinc-600">Send us the model, target market and customisation requirements. We will confirm the available certificates and test reports for that exact configuration.</p>
          </div>
          <Link href="/rfq" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-violet-700 px-7 py-3.5 text-sm font-black text-white transition hover:bg-violet-800">CHECK AVAILABLE DOCUMENTS</Link>
        </div>
      </section>
    </main>
  );
}
