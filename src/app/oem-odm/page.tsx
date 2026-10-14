import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "OEM/ODM Massage Device Development Process | JAMOOZ",
  description:
    "See how JAMOOZ structures an OEM/ODM massage device project from requirements and industrial design through prototyping, testing, production, packaging and delivery.",
  alternates: {
    canonical: "/oem-odm",
  },
};

const projectStages = [
  {
    number: "01",
    title: "Project brief & feasibility",
    detail: "Define the target market, intended users, core requirements, expected quantity and project constraints before product decisions begin.",
    evidence: "Approved project brief and feasibility review",
  },
  {
    number: "02",
    title: "Product definition & industrial design",
    detail: "Translate the approved brief into product concepts, ergonomics, appearance, colours, materials and finishes.",
    evidence: "Approved concept, ergonomics and CMF direction",
  },
  {
    number: "03",
    title: "Engineering design & 3D modelling",
    detail: "Develop the 3D model, product structure, electronics layout and preliminary bill of materials required for a buildable design.",
    evidence: "Reviewed CAD, structure, electronics and preliminary BOM",
  },
  {
    number: "04",
    title: "Functional prototype",
    detail: "Build a functional prototype, evaluate key functions and ergonomics, and record the revisions needed before validation.",
    evidence: "Prototype build, buyer feedback and revision list",
  },
  {
    number: "05",
    title: "Engineering validation & compliance",
    detail: "Run the agreed performance, safety and reliability checks and confirm the compliance plan for the destination market.",
    evidence: "Verification plan, applicable results and open-issue record",
  },
  {
    number: "06",
    title: "DFM, tooling & supply chain",
    detail: "Review manufacturability, tooling or fixtures, component availability and supplier readiness before trial production.",
    evidence: "DFM review, tooling status and supplier-readiness record",
  },
  {
    number: "07",
    title: "Pilot run & pre-production approval",
    detail: "Run a controlled small batch to verify the process, product consistency and approved reference sample before mass production.",
    evidence: "Pilot-run results and approved pre-production sample",
  },
  {
    number: "08",
    title: "Mass production & process QC",
    detail: "Produce against the approved specification with incoming, in-process and traceability controls defined for the order.",
    evidence: "Production plan and applicable IQC/IPQC records",
  },
  {
    number: "09",
    title: "Final inspection & packaging",
    detail: "Complete the agreed final inspection or sampling checks, then pack products using the artwork and packaging approved before production.",
    evidence: "Final-inspection record and approved packing specification",
  },
  {
    number: "10",
    title: "Warehouse & delivery support",
    detail: "Confirm finished-goods storage, carton information, shipping terms, destination and dispatch arrangements for the order.",
    evidence: "Carton, shipping and dispatch documents",
  },
] as const;

const buyerInputs = [
  "Target market and sales channel",
  "Product type or reference model",
  "Required functions and user scenario",
  "Estimated order quantity or forecast",
  "Target cost or market position",
  "Logo, colour and packaging needs",
  "Required compliance documents or tests",
  "Target launch or delivery window",
] as const;

const customisationMinimums = [
  ["Custom logo", "500 pcs"],
  ["Custom colour", "500 pcs per colour"],
  ["Custom colour box", "500 pcs"],
  ["Custom corrugated box", "300 pcs"],
] as const;

const rfqContext =
  "OEM/ODM massage device development project — please confirm product direction, functions, target market, order quantity, branding, packaging and project timing.";

export default function OemOdmPage() {
  return (
    <div className="min-h-screen bg-white text-[#18243a]">
      <section className="relative overflow-hidden border-b border-[#d9e3f1] bg-[#f5f8fc]">
        <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[radial-gradient(circle_at_center,rgba(255,102,0,0.14),transparent_66%)] lg:block" />
        <div className="relative mx-auto max-w-[1320px] px-5 pb-20 pt-10 sm:px-8 lg:pb-28 lg:pt-14">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "OEM/ODM Services", href: "/oem-odm" },
            ]}
          />

          <div className="mt-14 grid items-end gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ea5b16]">OEM/ODM massage device development</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#0f2f63] sm:text-6xl lg:text-7xl">
                From product brief to production-ready device
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#52627a]">
                JAMOOZ structures custom massage-device projects around clear review points: feasibility, product definition, engineering, functional prototypes, validation, production readiness, controlled production, final inspection and delivery. Scope, timing and cost are confirmed for each model and target market.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="#project-brief" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0f4c91] px-7 py-3.5 text-sm font-black tracking-[0.06em] text-white transition hover:-translate-y-0.5 hover:bg-[#0b3c75]">
                  SEND A PROJECT BRIEF
                </Link>
                <Link href="/custom" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#94a8c2] bg-white px-7 py-3.5 text-sm font-bold text-[#173e72] transition hover:border-[#0f4c91] hover:bg-[#edf4fc]">
                  Explore standard customisation
                </Link>
              </div>
            </div>

            <aside className="rounded-3xl border border-[#d8e3f1] bg-white p-7 shadow-xl shadow-[#274c77]/8 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0f4c91]">Start with a useful brief</p>
              <p className="mt-3 text-sm leading-6 text-[#64748b]">The following information lets the team review feasibility without guessing:</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {buyerInputs.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-[#253956]">
                    <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff6a00]" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ea5b16]">End-to-end workflow</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#0f2f63] sm:text-5xl">Ten stages, five buyer review gates</h2>
            <p className="mt-5 text-base leading-7 text-[#607089]">The diagram below is the revised JAMOOZ process overview. The exact sequence and records are adjusted to the product, customisation depth and destination-market requirements.</p>
          </header>

          <figure className="mt-12 overflow-hidden rounded-[28px] border border-[#dbe5f1] bg-white p-3 shadow-2xl shadow-[#173e72]/10 sm:p-6">
            <Image
              src="/images/oem-odm/manufacturing-process-v2.png"
              alt="JAMOOZ ten-stage OEM and ODM massage device process from project feasibility through pilot production, process quality control, final inspection and delivery support"
              width={1254}
              height={1254}
              priority
              unoptimized
              className="h-auto w-full rounded-2xl"
              sizes="(min-width: 1320px) 1260px, 96vw"
            />
            <figcaption className="px-3 pb-2 pt-5 text-center text-xs leading-5 text-[#718096]">
              Illustrated process overview. Project scope, timing, tests and commercial terms are confirmed in the quotation and order documents.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-[#dce6f1] bg-[#f7f9fc] py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {[
              ["01–02", "Define", "Feasibility, product definition and industrial design"],
              ["03", "Engineer", "3D engineering, structure, electronics and preliminary BOM"],
              ["04–05", "Prototype & validate", "Functional sample, verification and compliance plan"],
              ["06–07", "Prepare production", "DFM, supply readiness, pilot run and approved sample"],
              ["08–10", "Produce & deliver", "Process QC, final inspection, packaging and dispatch"],
            ].map(([number, title, result]) => (
              <article key={number} className="rounded-2xl border border-[#d8e3f0] bg-white p-6">
                <p className="text-xs font-black tracking-[0.16em] text-[#ff6a00]">{number}</p>
                <h3 className="mt-3 text-xl font-black text-[#123b72]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#64748b]">{result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <header className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ea5b16]">Stage-by-stage review</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#0f2f63] sm:text-5xl">What happens, and what can be checked</h2>
            <p className="mt-5 text-base leading-7 text-[#607089]">Each stage is tied to a practical project record or buyer approval point. This keeps the process specific without publishing unconfirmed lead times, capacity or certification claims.</p>
          </header>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projectStages.map((stage) => (
              <article key={stage.number} className="grid gap-5 rounded-3xl border border-[#d9e4f0] bg-[#fbfcfe] p-6 sm:grid-cols-[64px_1fr] sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f4c91] text-sm font-black tracking-[0.08em] text-white">{stage.number}</div>
                <div>
                  <h3 className="text-xl font-black text-[#153d70]">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f6f86]">{stage.detail}</p>
                  <p className="mt-5 border-l-2 border-[#ff6a00] pl-4 text-xs font-bold uppercase tracking-[0.08em] text-[#40536d]">
                    Review record: <span className="normal-case tracking-normal text-[#64748b]">{stage.evidence}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0e2f5d] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ff8b45]">Confirmed standard options</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Customisation without invented promises</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/70">Standard branding and packaging minimums are published below. Product structure, functions, tooling, sampling, lead time and payment terms are reviewed project by project.</p>
            <Link href="/custom" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#0e2f5d]">
              Open the customisation configurator
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.08]">
            {customisationMinimums.map(([option, minimum], index) => (
              <div key={option} className={`flex items-center justify-between gap-6 px-6 py-5 sm:px-8 ${index ? "border-t border-white/[0.12]" : ""}`}>
                <span className="text-sm font-semibold text-white/72">{option}</span>
                <span className="text-right text-base font-black text-white">{minimum}</span>
              </div>
            ))}
            <div className="border-t border-white/[0.12] px-6 py-5 text-sm leading-6 text-white/62 sm:px-8">
              Smaller customised runs may be discussed with an additional charge. MOQ and volume pricing for standard products remain model-specific.
            </div>
          </div>
        </div>
      </section>

      <section id="project-brief" className="scroll-mt-28 bg-[#f4f7fb] py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ea5b16]">Context-ready inquiry</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#0f2f63] sm:text-5xl">Send the project brief</h2>
            <p className="mt-6 text-base leading-8 text-[#607089]">The form is already labelled as an OEM/ODM development project. Add your target market, estimated quantity, key functions and packaging needs so the first reply can address the right scope.</p>
            <div className="mt-8 rounded-2xl border border-[#d8e3ef] bg-white p-6 text-sm leading-7 text-[#52627a]">
              <strong className="block text-[#153d70]">Commercial details are confirmed per project.</strong>
              Sample availability, cost, development timing, production lead time, testing scope and payment terms are not presented as fixed until the selected product and requirements have been reviewed.
            </div>
          </div>

          <div className="rounded-[30px] border border-[#d7e2ef] bg-white p-6 shadow-2xl shadow-[#173e72]/8 sm:p-9">
            <InquiryForm
              id="oem-odm-project-brief"
              sourcePage="/oem-odm"
              initialProduct={rfqContext}
              submitLabel="SEND OEM/ODM BRIEF →"
              detailsOpen
              includeTargetMarket
            />
          </div>
        </div>
      </section>
    </div>
  );
}
