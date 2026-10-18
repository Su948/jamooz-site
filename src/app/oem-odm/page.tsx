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

const productionQualityCheckpoints = [
  {
    code: "IQC",
    title: "Incoming materials",
    detail: "Check applicable components, materials and appearance against the approved product specification before production use.",
  },
  {
    code: "IPQC",
    title: "In-process inspection",
    detail: "Monitor defined assembly and appearance checkpoints during production so issues can be identified before final assembly.",
  },
  {
    code: "FUNCTION",
    title: "Functional testing",
    detail: "Verify agreed functions, controls, charging behaviour and applicable safety items for the selected model.",
  },
  {
    code: "RELIABILITY",
    title: "Aging & reliability",
    detail: "Apply the agreed powered-operation, cycle or reliability checks when they are included in the product or order plan.",
  },
  {
    code: "OQC",
    title: "Packing & shipment",
    detail: "Check product appearance, quantity, accessories, labels, packaging and carton information before shipment release.",
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
    <div className="min-h-screen bg-white text-[#3d2758]">
      <section className="relative overflow-hidden border-b border-violet-100 bg-[#faf9ff]">
        <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.12),transparent_66%)] lg:block" />

        <figure className="relative border-b border-violet-100 bg-white">
          <div className="mx-auto max-w-[1600px] sm:px-6 sm:py-6">
            <Image
              src="/images/oem-odm/oem-odm-concept-to-market-v1.jpg"
              alt="JAMOOZ OEM and ODM massage device development from market requirements and industrial design through engineering, prototype validation, pilot production, quality control, packaging and global delivery"
              width={2172}
              height={724}
              priority
              unoptimized
              className="h-auto w-full sm:rounded-[28px]"
              sizes="(min-width: 1600px) 1552px, 100vw"
            />
          </div>
        </figure>

        <div className="relative mx-auto max-w-[1320px] px-5 pb-20 pt-8 sm:px-8 lg:pb-28 lg:pt-10">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "OEM/ODM Services", href: "/oem-odm" },
            ]}
          />

          <div className="mt-8 grid items-end gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">OEM/ODM massage device development</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#3d2758] sm:text-6xl">
                Build your massage product with JAMOOZ
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600">
                From brief and engineering to validation, controlled production and delivery, JAMOOZ helps turn your concept into a production-ready device. Scope, timing and cost are confirmed for each project.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="#project-brief" className="inline-flex min-h-12 items-center justify-center rounded-full bg-violet-700 px-7 py-3.5 text-sm font-black tracking-[0.06em] text-white transition hover:-translate-y-0.5 hover:bg-violet-800">
                  SEND A PROJECT BRIEF
                </Link>
                <Link href="/custom" className="inline-flex min-h-12 items-center justify-center rounded-full border border-violet-200 bg-white px-7 py-3.5 text-sm font-bold text-violet-800 transition hover:border-violet-500 hover:bg-violet-50">
                  Explore standard customisation
                </Link>
              </div>
            </div>

            <aside className="rounded-3xl border border-violet-100 bg-white p-7 shadow-xl shadow-violet-900/5 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-700">Start with a useful brief</p>
              <p className="mt-3 text-sm leading-6 text-zinc-500">The following information lets the team review feasibility without guessing:</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {buyerInputs.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-zinc-700">
                    <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section id="workflow" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">End-to-end workflow</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#3d2758] sm:text-5xl">Ten stages, five buyer review gates</h2>
            <p className="mt-5 text-base leading-7 text-zinc-600">The project moves from definition and engineering through controlled production, final inspection and delivery. The exact sequence and records are adjusted to the product, customisation depth and destination-market requirements.</p>
          </header>
        </div>
      </section>

      <section className="border-y border-violet-100 bg-[#faf9ff] py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {[
              ["01–02", "Define", "Feasibility, product definition and industrial design"],
              ["03", "Engineer", "3D engineering, structure, electronics and preliminary BOM"],
              ["04–05", "Prototype & validate", "Functional sample, verification and compliance plan"],
              ["06–07", "Prepare production", "DFM, supply readiness, pilot run and approved sample"],
              ["08–10", "Produce & deliver", "Process QC, final inspection, packaging and dispatch"],
            ].map(([number, title, result]) => (
              <article key={number} className="rounded-2xl border border-violet-100 bg-white p-6">
                <p className="text-xs font-black tracking-[0.16em] text-violet-600">{number}</p>
                <h3 className="mt-3 text-xl font-black text-[#3d2758]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <header className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">Stage-by-stage review</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#3d2758] sm:text-5xl">What happens, and what can be checked</h2>
            <p className="mt-5 text-base leading-7 text-zinc-600">Each stage is tied to a practical project record or buyer approval point. This keeps the process specific without publishing unconfirmed lead times, capacity or certification claims.</p>
          </header>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projectStages.map((stage) => (
              <article key={stage.number} className="grid gap-5 rounded-3xl border border-violet-100 bg-[#faf9ff] p-6 sm:grid-cols-[64px_1fr] sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-700 text-sm font-black tracking-[0.08em] text-white">{stage.number}</div>
                <div>
                  <h3 className="text-xl font-black text-[#3d2758]">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{stage.detail}</p>
                  <p className="mt-5 border-l-2 border-violet-500 pl-4 text-xs font-bold uppercase tracking-[0.08em] text-violet-900">
                    Review record: <span className="normal-case tracking-normal text-zinc-500">{stage.evidence}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-violet-100 bg-[#faf9ff] py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
            <header>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">Quality control during production</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#3d2758] sm:text-5xl">Quality checks sit inside the same workflow</h2>
              <p className="mt-6 text-base leading-8 text-zinc-600">After the product and approved sample are confirmed, quality checkpoints continue through incoming materials, production, applicable testing, packing and shipment release.</p>
              <p className="mt-5 rounded-2xl border border-violet-100 bg-white p-5 text-sm leading-7 text-zinc-600">The exact test items, conditions, sampling approach and available records are confirmed for the selected model, order and destination market.</p>
            </header>

            <div className="grid gap-4 sm:grid-cols-2">
              {productionQualityCheckpoints.map((item, index) => (
                <article key={item.code} className={`rounded-2xl border border-violet-100 bg-white p-6 ${index === productionQualityCheckpoints.length - 1 ? "sm:col-span-2" : ""}`}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-700 text-xs font-black text-white">{index + 1}</span>
                    <span className="text-[10px] font-black tracking-[0.13em] text-violet-600">{item.code}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-black text-[#3d2758]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#3d2758] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-200">Confirmed standard options</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Customisation without invented promises</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/70">Standard branding and packaging minimums are published below. Product structure, functions, tooling, sampling, lead time and payment terms are reviewed project by project.</p>
            <Link href="/custom" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#3d2758]">
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

      <section id="project-brief" className="scroll-mt-28 bg-[#faf9ff] py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">Context-ready inquiry</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#3d2758] sm:text-5xl">Send the project brief</h2>
            <p className="mt-6 text-base leading-8 text-zinc-600">The form is already labelled as an OEM/ODM development project. Add your target market, estimated quantity, key functions and packaging needs so the first reply can address the right scope.</p>
            <div className="mt-8 rounded-2xl border border-violet-100 bg-white p-6 text-sm leading-7 text-zinc-600">
              <strong className="block text-[#3d2758]">Commercial details are confirmed per project.</strong>
              Sample availability, cost, development timing, production lead time, testing scope and payment terms are not presented as fixed until the selected product and requirements have been reviewed.
            </div>
          </div>

          <div className="rounded-[30px] border border-violet-100 bg-white p-6 shadow-2xl shadow-violet-900/5 sm:p-9">
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
