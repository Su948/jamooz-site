import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Anonymous Scalp Massage Device Development Case | JAMOOZ Preview",
  description:
    "Review an evidence-limited, anonymous scalp massage device development example covering product definition, engineering review, prototype validation and production preparation.",
  robots: { index: false, follow: false },
};

const verifiedProductFacts = [
  ["Product category", "Handheld scalp massager"],
  ["Public reference model", "JMZ-901"],
  ["Confirmed functions", "2-speed rotation, 2 EMS levels and red LED"],
  ["Reservoir", "Refillable 5 mL tank"],
] as const;

const caseStages = [
  {
    number: "01",
    title: "Define the product direction",
    detail:
      "Start from the intended user, sales channel, target market, required functions, estimated quantity and commercial constraints.",
    record: "Approved project brief and open-item list",
  },
  {
    number: "02",
    title: "Translate needs into a buildable concept",
    detail:
      "Review ergonomics, appearance, contact structure, controls, refill concept and the functions that must be evaluated in a working sample.",
    record: "Concept review, structure direction and preliminary specification",
  },
  {
    number: "03",
    title: "Build and review the prototype",
    detail:
      "Use a functional sample to review operation, contact experience, controls and the revisions needed before production preparation.",
    record: "Prototype, feedback and revision log",
  },
  {
    number: "04",
    title: "Validate the agreed configuration",
    detail:
      "Confirm the applicable performance, charging, reliability and destination-market checks for the selected configuration.",
    record: "Verification plan, applicable results and unresolved items",
  },
  {
    number: "05",
    title: "Prepare controlled production",
    detail:
      "Review manufacturability, components, pilot production, approved reference sample, packaging and the order-specific inspection plan.",
    record: "Pilot-run review and approved pre-production reference",
  },
] as const;

const evidenceBoundary = [
  "The public product reference confirms the model and functions listed on this page.",
  "The development sequence follows the current JAMOOZ OEM/ODM review workflow.",
  "Buyer name, project dates, order volume and commercial outcome are not published in this preview.",
  "No sales uplift, market-share result or fixed development lead time is claimed.",
] as const;

const inquiryContext =
  "Scalp massage device development — please review a project with rotation, EMS, LED, liquid-reservoir, branding or packaging requirements.";

export default function ScalpMassageDeviceCasePage() {
  return (
    <div className="min-h-screen bg-white text-[#3d2758]">
      <section className="overflow-hidden border-b border-violet-100 bg-[#faf9ff]">
        <div className="mx-auto max-w-[1320px] px-5 pb-20 pt-8 sm:px-8 lg:pb-24 lg:pt-10">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Case preview", href: "/cases/scalp-massage-device-development" },
            ]}
          />

          <div className="mt-9 grid items-center gap-12 lg:grid-cols-[1.03fr_.97fr]">
            <div>
              <div className="inline-flex rounded-full border border-violet-200 bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-violet-700">
                Anonymized project example · evidence limited
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#3d2758] sm:text-6xl">
                Turning a scalp-care direction into a reviewable product
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600">
                This preview shows how a scalp massage device can move from product definition through engineering, prototype review and production preparation. It separates verified product evidence from details that still require business approval.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="#case-path" className="inline-flex min-h-12 items-center justify-center rounded-full bg-violet-700 px-7 py-3.5 text-sm font-black tracking-[0.05em] text-white transition hover:-translate-y-0.5 hover:bg-violet-800">
                  REVIEW THE CASE PATH
                </Link>
                <Link href="/products/jmz-901" className="inline-flex min-h-12 items-center justify-center rounded-full border border-violet-200 bg-white px-7 py-3.5 text-sm font-bold text-violet-800 transition hover:border-violet-500 hover:bg-violet-50">
                  View the product evidence
                </Link>
              </div>
            </div>

            <figure className="relative overflow-hidden rounded-[32px] border border-violet-100 bg-white shadow-2xl shadow-violet-950/10">
              <Image
                src="/products/jmz-901/01-hero.webp"
                alt="JMZ-901 handheld scalp massager used as the public product reference for this anonymous development case preview"
                width={1200}
                height={1200}
                priority
                className="aspect-square h-auto w-full object-contain p-5 sm:p-8"
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
              <figcaption className="border-t border-violet-100 bg-[#f7f2ff] px-6 py-4 text-xs leading-6 text-violet-900">
                Public reference: JMZ-901. The image confirms the product reference, not a named buyer or a commercial outcome.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {verifiedProductFacts.map(([label, value]) => (
              <article key={label} className="rounded-2xl border border-violet-100 bg-[#faf9ff] p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-violet-600">{label}</p>
                <p className="mt-3 text-lg font-black leading-7 text-[#3d2758]">{value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="case-path" className="scroll-mt-24 border-y border-violet-100 bg-[#faf9ff] py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <header className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">Project path</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#3d2758] sm:text-5xl">
              Five review gates from brief to production preparation
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-600">
              The sequence below is intentionally milestone-based. Calendar dates and a fixed development duration are not shown because they depend on the approved specification, tooling, test scope and buyer decisions.
            </p>
          </header>

          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {caseStages.map((stage) => (
              <article key={stage.number} className="flex flex-col rounded-3xl border border-violet-100 bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-700 text-xs font-black tracking-[0.08em] text-white">{stage.number}</span>
                <h3 className="mt-5 text-xl font-black leading-7 text-[#3d2758]">{stage.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600">{stage.detail}</p>
                <p className="mt-6 border-t border-violet-100 pt-4 text-xs font-semibold leading-6 text-violet-900">
                  Review record: <span className="font-normal text-zinc-500">{stage.record}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">Process evidence</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#3d2758] sm:text-5xl">
              The case sits inside the full OEM/ODM workflow
            </h2>
            <p className="mt-6 text-base leading-8 text-zinc-600">
              Product definition and prototype review are only part of the work. Production readiness, process quality control, final inspection, packaging and delivery records are reviewed according to the selected product and order scope.
            </p>
            <Link href="/oem-odm" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-violet-200 px-7 py-3.5 text-sm font-bold text-violet-800 transition hover:border-violet-500 hover:bg-violet-50">
              Review the complete OEM/ODM process
            </Link>
          </div>

          <figure className="overflow-hidden rounded-[28px] border border-violet-100 bg-white shadow-xl shadow-violet-950/8">
            <Image
              src="/images/oem-odm/manufacturing-process-v2.png"
              alt="JAMOOZ massage device OEM and ODM process from project brief and engineering through pilot production, quality control, packaging and delivery support"
              width={1254}
              height={1254}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </figure>
        </div>
      </section>

      <section className="border-y border-violet-200 bg-[#3d2758] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[.88fr_1.12fr] lg:items-start">
          <header>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-200">Evidence boundary</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">What this preview proves—and what it does not</h2>
            <p className="mt-6 text-base leading-8 text-white/70">
              A useful B2B case should make its evidence limits visible. This version is ready for business review, but it remains excluded from search indexing until the missing project facts are approved.
            </p>
          </header>

          <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.08]">
            {evidenceBoundary.map((item, index) => (
              <div key={item} className={`flex gap-4 px-6 py-5 text-sm leading-7 text-white/78 sm:px-8 ${index ? "border-t border-white/10" : ""}`}>
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-300" aria-hidden />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf9ff] py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">Discuss a similar project</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#3d2758] sm:text-5xl">Start with the product requirements</h2>
            <p className="mt-6 text-base leading-8 text-zinc-600">
              Share the intended user, target market, quantity, functions, branding and packaging needs. The project team can then confirm feasibility, the review sequence and the records relevant to your product.
            </p>
          </div>

          <div className="rounded-[30px] border border-violet-100 bg-white p-6 shadow-2xl shadow-violet-900/5 sm:p-9">
            <InquiryForm
              id="scalp-development-case-inquiry"
              sourcePage="/cases/scalp-massage-device-development"
              initialProduct={inquiryContext}
              submitLabel="SEND PROJECT REQUIREMENTS →"
              detailsOpen
              includeTargetMarket
            />
          </div>
        </div>
      </section>
    </div>
  );
}
