import Image from "next/image";
import Link from "next/link";
import AboutProofSections from "@/components/AboutProofSections";
import Breadcrumbs from "@/components/Breadcrumbs";
import { companyFacts } from "@/lib/company";

const trustFacts = [
  {
    value: "20+ years",
    label: "Manufacturing experience",
    detail: "Experience supporting product development and manufacturing projects.",
  },
  {
    value: companyFacts.location.label,
    label: "Business location",
    detail: "A coastal manufacturing and export hub with established supply-chain access.",
  },
  {
    value: "OEM / ODM",
    label: "Project scope",
    detail: "From product definition and prototyping to controlled production and delivery support.",
  },
] as const;

const projectDisciplines = [
  {
    number: "01",
    title: "Business & product definition",
    detail: "Clarify target users, sales channel, functions, quantity, target cost and launch requirements before decisions are locked.",
  },
  {
    number: "02",
    title: "Design & engineering coordination",
    detail: "Translate the approved brief into product concepts, ergonomics, structure, electronics, materials and a buildable specification.",
  },
  {
    number: "03",
    title: "Supply & production coordination",
    detail: "Review manufacturability, component readiness, pilot production, packaging and order-specific production preparation.",
  },
  {
    number: "04",
    title: "Quality & delivery follow-through",
    detail: "Confirm agreed inspection points, applicable testing, packing information and dispatch documents for the selected order.",
  },
] as const;

const buyerGroups = [
  {
    title: "Wellness brands",
    detail: "Develop a new device or adapt an existing platform with agreed functions, appearance, branding and packaging.",
  },
  {
    title: "Distributors & importers",
    detail: "Compare product fit, commercial scope and destination-market requirements before placing an order.",
  },
  {
    title: "Sourcing & product teams",
    detail: "Work from a structured brief with review points, open-item tracking and project-specific records.",
  },
] as const;

const productImages = [
  {
    src: "/products/jmz-901/01-hero.webp",
    alt: "JMZ-901 scalp massager developed for brand and distribution projects",
  },
  {
    src: "/products/jmz-r006/JMZ-R006-01-home-card.png",
    alt: "JMZ-R006 neck and shoulder massager from the JAMOOZ product range",
  },
  {
    src: "/products/jmz-cspl002/01-hero.webp",
    alt: "JMZ-CSPL002 neck massage pillow from the JAMOOZ product range",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#3d2758]">
      <section className="overflow-hidden border-b border-violet-100 bg-[#faf9ff]">
        <div className="mx-auto max-w-[1320px] px-5 pb-20 pt-8 sm:px-8 lg:pb-28 lg:pt-10">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "About JAMOOZ", href: "/about" },
            ]}
          />

          <div className="mt-9 grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">About JAMOOZ</p>
              <h1 className="mt-5 max-w-3xl text-[42px] font-semibold leading-[1.03] tracking-[-0.045em] text-[#3d2758] sm:text-6xl">
                A practical partner for massage-device development
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600">
                Based in {companyFacts.location.label}, JAMOOZ supports international B2B product teams with massage-device development, customisation and manufacturing coordination. Each project begins with the buyer&apos;s market, product and commercial requirements.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/oem-odm" className="inline-flex min-h-12 items-center justify-center rounded-full bg-violet-700 px-7 py-3.5 text-sm font-black tracking-[0.05em] text-white transition hover:-translate-y-0.5 hover:bg-violet-800">
                  VIEW THE OEM / ODM PROCESS
                </Link>
                <Link href="/products" className="inline-flex min-h-12 items-center justify-center rounded-full border border-violet-200 bg-white px-7 py-3.5 text-sm font-bold text-violet-800 transition hover:border-violet-500 hover:bg-violet-50">
                  Explore products
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-[32px] border border-violet-100 bg-white p-4 shadow-2xl shadow-violet-900/8 sm:p-6">
              <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl bg-[#f7f5fb]">
                <Image src={productImages[0].src} alt={productImages[0].alt} fill priority sizes="(min-width: 1024px) 44vw, 100vw" className="object-contain p-2" />
              </div>
              {productImages.slice(1).map((image) => (
                <div key={image.src} className="relative aspect-square overflow-hidden rounded-2xl bg-[#f7f5fb]">
                  <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 21vw, 48vw" className="object-contain p-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-violet-100 bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-[1320px] gap-5 px-5 sm:px-8 md:grid-cols-3">
          {trustFacts.map((fact) => (
            <article key={fact.label} className="rounded-3xl border border-violet-100 bg-[#faf9ff] p-7">
              <p className="text-3xl font-black tracking-[-0.035em] text-violet-800">{fact.value}</p>
              <h2 className="mt-3 text-sm font-black uppercase tracking-[0.12em] text-[#3d2758]">{fact.label}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{fact.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <header className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">How the team works</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#3d2758] sm:text-5xl">One project, connected disciplines</h2>
            <p className="mt-5 text-base leading-8 text-zinc-600">
              Buyers should not have to bridge the gaps between a sales conversation, product definition and production follow-through. JAMOOZ structures those handoffs around the approved brief and review points.
            </p>
          </header>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projectDisciplines.map((item) => (
              <article key={item.number} className="grid gap-5 rounded-3xl border border-violet-100 bg-[#faf9ff] p-7 sm:grid-cols-[56px_1fr] sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-700 text-xs font-black tracking-[0.08em] text-white">{item.number}</div>
                <div>
                  <h3 className="text-xl font-black text-[#3d2758]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-violet-100 bg-[#faf9ff] py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[.76fr_1.24fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">Who we support</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#3d2758] sm:text-5xl">Built for B2B product decisions</h2>
            <p className="mt-6 text-base leading-8 text-zinc-600">
              The same product can require a different specification, documentation set, packaging plan or commercial approach in a different market. Those requirements are reviewed as part of the project rather than presented as universal promises.
            </p>
          </div>

          <div className="grid gap-4">
            {buyerGroups.map((group, index) => (
              <article key={group.title} className="grid gap-4 rounded-2xl border border-violet-100 bg-white p-6 sm:grid-cols-[44px_1fr] sm:items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-xs font-black text-violet-800">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="text-lg font-black text-[#3d2758]">{group.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">{group.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AboutProofSections />

      <section className="bg-[#3d2758] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-200">Evidence before claims</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">What buyers can review</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/72">
              Product specifications, project records and compliance requirements are handled at the appropriate stage. Certificate, test-report and market-access availability is confirmed for the selected model and destination market—not assumed across every product.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.08]">
            {[
              ["Published product information", "Model-specific functions, confirmed specifications, available customisation and open items."],
              ["Project review records", "Brief, concept or sample approvals, engineering open items and applicable production records."],
              ["Order-specific confirmation", "Testing scope, compliance documents, MOQ, pricing, lead time, packaging and shipping terms."],
            ].map(([title, detail], index) => (
              <div key={title} className={`px-6 py-6 sm:px-8 ${index ? "border-t border-white/[0.12]" : ""}`}>
                <h3 className="text-base font-black text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/65">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1080px] px-5 text-center sm:px-8">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">Start with context</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#3d2758] sm:text-5xl">Tell us what you are building</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600">
            Share your product direction, target market, quantity, functions, branding and packaging needs. The first review can then focus on feasibility and the right next step.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/rfq" className="inline-flex min-h-12 items-center justify-center rounded-full bg-violet-700 px-7 py-3.5 text-sm font-black tracking-[0.05em] text-white transition hover:bg-violet-800">
              CONTACT THE PROJECT TEAM
            </Link>
            <Link href="/oem-odm" className="inline-flex min-h-12 items-center justify-center rounded-full border border-violet-200 px-7 py-3.5 text-sm font-bold text-violet-800 transition hover:border-violet-500 hover:bg-violet-50">
              Review the full process
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
