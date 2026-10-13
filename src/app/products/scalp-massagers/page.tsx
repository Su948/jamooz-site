import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import InquiryForm from "@/components/InquiryForm";
import { contactLinks } from "@/lib/company";
import { buildWhatsAppInquiryMessage } from "@/lib/whatsapp";

const pagePath = "/products/scalp-massagers";

// The 56-word summary published at the top of the page doubles as the meta
// description, so the search snippet cannot drift from the page itself.
const pageSummary =
  "JAMOOZ manufactures custom scalp massagers for B2B brands and distributors, and is based in Xiamen, China. Our current scalp massager, JMZ-901, combines two-speed rotation, two EMS levels, red LED light and a refillable 5 mL ampoule tank, with volume prices from US$14.80–19.00 per piece at MOQ 50 pcs and custom logo, colour and retail packaging options.";

export const metadata: Metadata = {
  title: "Custom Scalp Massager Manufacturer | OEM & ODM Scalp Care Devices | JAMOOZ",
  description: pageSummary,
  alternates: { canonical: pagePath },
  robots: { index: true, follow: true },
};

const shell = "mx-auto w-full max-w-[1240px] px-5 sm:px-8";
const sectionLabel = "text-[11px] font-black uppercase tracking-[0.22em] text-[#315b8d]";
const sectionTitle = "mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#17243a] sm:text-4xl lg:text-[44px]";
const primaryButton = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#244f82] px-6 py-3.5 text-sm font-black tracking-[0.08em] text-white shadow-lg shadow-[#244f82]/20 transition hover:-translate-y-0.5 hover:bg-[#193d69]";
const secondaryButton = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#244f82] bg-white px-6 py-3.5 text-sm font-black tracking-[0.08em] text-[#244f82] transition hover:-translate-y-0.5 hover:bg-[#f4f8fc]";
const bodyCopy = "leading-7 text-[#607086]";
const guideLinkCls =
  "font-bold text-[#244f82] underline decoration-[#244f82]/30 underline-offset-4 transition hover:decoration-[#244f82]";

const statusStyles = {
  Confirmed: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  TBC: "bg-slate-100 text-slate-700 ring-slate-200",
} as const;

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current stroke-2"><path d="M4 10h12M11 5l5 5-5 5" /></svg>;
}

const whatsappUrl = contactLinks.whatsapp(
  buildWhatsAppInquiryMessage({ sourcePage: pagePath, product: "Scalp massagers (category)" }),
);

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Scalp & Hair Care", href: pagePath },
];

const retailChecks = [
  {
    title: "Power",
    copy: "JMZ-901 uses a 2000 mAh rechargeable battery charged over USB-C; the supplied product visual states under 4 hours.",
  },
  {
    title: "Contact head and build",
    copy: "JMZ-901 has a rotating contact head with two rotation speeds, two EMS levels and red LED light, plus a refillable 5 mL ampoule tank. Whether that combination suits your retail positioning should be checked against the model specification.",
  },
  {
    title: "Retail packaging",
    copy: "Colour boxes can be customised from 500 pcs and corrugated boxes from 300 pcs; brand logo and colour customisation both start at 500 pcs.",
  },
  {
    title: "Repeat supply",
    copy: "The current model is quoted from MOQ 50 pcs, so a first retail run can start small and scale later.",
  },
];

const confirmedSpecs = [
  { item: "Rotation", value: "2 speeds", status: "Confirmed" },
  { item: "EMS", value: "2 levels", status: "Confirmed" },
  { item: "Light", value: "Red LED", status: "Confirmed" },
  { item: "Ampoule tank", value: "Refillable 5 mL tank", status: "Confirmed" },
  { item: "Controls", value: "Two-button panel", status: "Confirmed" },
  { item: "Battery", value: "2000 mAh rechargeable battery", status: "Confirmed" },
  { item: "Charging", value: "USB-C; supplied visual states under 4 hours", status: "Confirmed" },
  { item: "Product size / rated input", value: "To be confirmed", status: "TBC" },
  { item: "Water resistance / net weight / materials and accessories", value: "To be confirmed with the business team", status: "TBC" },
] as const;

const customisationOptions = [
  { option: "Custom logo", minimum: "500 pcs" },
  { option: "Custom colour", minimum: "500 pcs per colour" },
  { option: "Colour box", minimum: "500 pcs" },
  { option: "Corrugated box", minimum: "300 pcs" },
  { option: "Smaller customised runs", minimum: "Can be discussed, with an additional charge" },
];

const supplierChecks = [
  "Confirm that the functions and structure match your retail positioning — power, contact head and controls.",
  "Confirm the customisation thresholds and packaging feasibility — logo, colour, colour box and corrugated box.",
  "Confirm the commercial terms — MOQ, volume tiers, lead time and payment terms.",
  "Confirm the compliance documents — certificates and test reports per model and destination market.",
  "Validate with a sample first — sample cost and freight are confirmed with the quotation.",
];

const faqs = [
  {
    question: "What makes a portable scalp massager suitable for retail?",
    answer: "Four checks: how it is powered, whether the contact head suits daily home use, whether the packaging can carry retail branding, and whether the supplier supports repeat orders.",
  },
  {
    question: "What is the MOQ for your scalp massager?",
    answer: "50 pcs for JMZ-901.",
  },
  {
    question: "What is the minimum order for a custom logo or colour?",
    answer: "500 pcs as standard (colour is counted per colour); smaller customised runs can be discussed with an additional charge.",
  },
  {
    question: "Is the ampoule tank refillable?",
    answer: "Yes — JMZ-901 has a refillable 5 mL ampoule tank.",
  },
  {
    question: "Can you supply the product size and rated input?",
    answer: "Product size and rated input for JMZ-901 are TBC — we will confirm them before you place an order.",
  },
  {
    question: "Do you provide certificates for the scalp massager?",
    answer: "Documentation is provided according to the model and destination market; contact us to confirm the applicable certificates and test reports before ordering.",
  },
];

const specificationFigures = [
  {
    src: "/products/jmz-901/05-detail.webp",
    alt: "Close-up of the JMZ-901 brush and contact head",
    caption: "JMZ-901 contact head and 5 mL refillable ampoule tank",
  },
  {
    src: "/products/jmz-901/07-detail.webp",
    alt: "Two-button control of the JMZ-901",
    caption: "Two-button control panel with charging port",
  },
];

export default function ScalpMassagersPage() {
  return (
    <main className="overflow-x-hidden bg-[#fbfcfe] text-[#334055]">
      <section className="border-b border-[#dfe5ee] bg-[linear-gradient(135deg,#fbfdff_0%,#eef3f8_55%,#e6edf5_100%)] py-10 sm:py-14 lg:py-20">
        <div className={shell}>
          <Breadcrumbs items={breadcrumbItems} />
          <div className="mt-6 max-w-3xl">
            <p className={sectionLabel}>Scalp &amp; Hair Care</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#17243a] sm:text-5xl lg:text-[58px]">Custom Scalp Massagers for B2B Brands and Distributors</h1>
            <p className="mt-6 text-base leading-7 text-[#607086] sm:text-lg sm:leading-8">{pageSummary}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a href="#inquiry" className={primaryButton}>REQUEST A QUOTE <ArrowIcon /></a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className={secondaryButton}>WHATSAPP US <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>Retail requirements</p>
          <h2 className={sectionTitle}>What Makes a Portable Scalp Massager Suitable for Retail?</h2>
          <p className={`mt-4 max-w-3xl ${bodyCopy}`}>Retail buyers usually assess a scalp massager on four points: how it is powered, whether the contact head suits daily home use, whether the packaging can carry retail branding, and whether the supplier can support repeat orders.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {retailChecks.map((check, index) => (
              <article key={check.title} className="rounded-3xl border border-[#dfe5ee] bg-white p-6 shadow-[0_16px_40px_rgba(38,67,105,0.05)]">
                <span className="text-xs font-black text-[#4f79a8]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-lg font-black text-[#1f3048]">{check.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#66758a]">{check.copy}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-[#66758a]">The points above describe JMZ-901 and the customisation thresholds already published on this site. Specifications and thresholds for other models are stated on their own specification sheets.</p>
        </div>
      </section>

      <section className="border-y border-[#dfe5ee] bg-[#f1f5f9] py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>Current range</p>
          <h2 className={sectionTitle}>Which Scalp Massagers Does JAMOOZ Currently Manufacture?</h2>
          <p className={`mt-4 max-w-3xl ${bodyCopy}`}>Our current scalp range covers one model, JMZ-901. All specifications below are the confirmed values published on its product page.</p>

          <article className="mt-10 grid gap-6 rounded-3xl border border-[#d4dde8] bg-white p-6 sm:grid-cols-[minmax(0,240px)_minmax(0,1fr)] sm:p-8">
            <Link href="/products/jmz-901" aria-label="View JMZ-901 Rotating EMS Scalp Massager with LED Light" className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#f7faff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244f82]">
              <Image src="/products/jmz-901/01-hero.webp" alt="JMZ-901 white handheld rotating scalp massager actual product sample" fill sizes="(min-width: 640px) 240px, 100vw" className="object-contain" />
            </Link>
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#718097]">JMZ-901 · Handheld</p>
              <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight text-[#1f3048]">
                <Link href="/products/jmz-901" className="transition hover:text-[#244f82]">Rotating EMS Scalp Massager with LED Light</Link>
              </h3>
              <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                <div><dt className="text-[11px] font-bold uppercase tracking-wider text-[#7a8799]">Price range</dt><dd className="mt-1 font-black text-[#24344b]">US$14.80–19.00 / pc</dd></div>
                <div><dt className="text-[11px] font-bold uppercase tracking-wider text-[#7a8799]">Minimum order</dt><dd className="mt-1 font-black text-[#24344b]">MOQ 50 pcs</dd></div>
              </dl>
              <Link href="/products/jmz-901" className="mt-6 inline-flex min-h-10 items-center gap-2 text-sm font-black tracking-[0.06em] text-[#244f82] transition hover:text-[#193d69]">View Product <ArrowIcon /></Link>
            </div>
          </article>

          <p className="mt-10 text-[11px] font-black uppercase tracking-[0.2em] text-[#315b8d]">Confirmed specification (JMZ-901)</p>
          <div className="mt-4 overflow-x-auto rounded-3xl border border-[#d4dde8] bg-white">
            <table className="w-full table-fixed border-collapse text-left text-sm">
              <thead className="bg-[#172b48] text-white"><tr><th className="w-[40%] px-3 py-4 font-bold lg:w-[48%] sm:px-5">Item</th><th className="w-[30%] px-3 py-4 font-bold lg:w-[32%] sm:px-5">Confirmed value</th><th className="w-[30%] px-2 py-4 font-bold lg:w-[20%] sm:px-5">Status</th></tr></thead>
              <tbody>
                {confirmedSpecs.map((spec, index) => (
                  <tr key={spec.item} className={index % 2 === 0 ? "bg-white" : "bg-[#f7faff]"}>
                    <th scope="row" className="break-words border-t border-[#e3e9f0] px-3 py-4 font-bold text-[#26364d] sm:px-5">{spec.item}</th>
                    <td className="break-words border-t border-[#e3e9f0] px-3 py-4 leading-6 text-[#607086] sm:px-5">{spec.value}</td>
                    <td className="border-t border-[#e3e9f0] px-2 py-4 sm:px-5"><span className={`inline-flex max-w-full rounded-full px-2 py-1 text-[9px] font-black uppercase tracking-wide ring-1 ring-inset sm:px-2.5 sm:text-[10px] ${statusStyles[spec.status]}`}>{spec.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-[#66758a]">This page does not publish a cross-model comparison: the scalp range currently holds one model, so a comparison would need specifications that do not exist yet.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a href="#inquiry" className={primaryButton}>REQUEST A QUOTE <ArrowIcon /></a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className={secondaryButton}>WHATSAPP US <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>Customisation</p>
          <h2 className={sectionTitle}>What Can Be Customised on a Scalp Massager?</h2>
          <div className="mt-10 overflow-x-auto rounded-3xl border border-[#d4dde8] bg-white">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-[#172b48] text-white"><tr><th className="px-3 py-4 font-bold sm:px-5">Customisation</th><th className="px-3 py-4 font-bold sm:px-5">Standard minimum order</th></tr></thead>
              <tbody>
                {customisationOptions.map((option, index) => (
                  <tr key={option.option} className={index % 2 === 0 ? "bg-white" : "bg-[#f7faff]"}>
                    <th scope="row" className="break-words border-t border-[#e3e9f0] px-3 py-4 font-bold text-[#26364d] sm:px-5">{option.option}</th>
                    <td className="break-words border-t border-[#e3e9f0] px-3 py-4 leading-6 text-[#607086] sm:px-5">{option.minimum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-[#66758a]">These are the standard thresholds published for JMZ-901. Whether the same thresholds apply to another model has to be confirmed model by model, so this page does not state one minimum for the whole category.</p>
          <p className={`mt-4 max-w-3xl ${bodyCopy}`}>OEM projects normally cover logo and packaging customisation; ODM projects cover product-level changes such as structure, colour and function combinations. The process and feasibility are described on the <Link href="/custom" className="font-bold text-[#244f82] underline decoration-[#244f82]/30 underline-offset-4 transition hover:decoration-[#244f82]">OEM &amp; ODM services page</Link>.</p>
        </div>
      </section>

      <section className="border-y border-[#dfe5ee] bg-[#f1f5f9] py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>Product views</p>
          <h2 className={sectionTitle}>How Is the JMZ-901 Specified?</h2>
          <p className={`mt-4 max-w-3xl ${bodyCopy}`}>These views show the contact head, the refillable ampoule tank and the two-button control panel of JMZ-901, next to the confirmed values listed above.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {specificationFigures.map((figure) => (
              <figure key={figure.src} className="overflow-hidden rounded-3xl border border-[#d4dde8] bg-white">
                <div className="relative aspect-[4/3] bg-[#f7faff]">
                  <Image src={figure.src} alt={figure.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-contain" />
                </div>
                <figcaption className="border-t border-[#e3e9f0] px-5 py-4 text-sm leading-6 text-[#66758a]">{figure.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-[#66758a]">No certification marks are shown on this page: certificates are issued per model and destination market, so they are confirmed with the quotation instead of being displayed as generic badges.</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>Supplier selection</p>
          <h2 className={sectionTitle}>How Do You Choose a Scalp Massager Supplier?</h2>
          <ol className="mt-10 grid gap-4">
            {supplierChecks.map((check, index) => (
              <li key={check} className="flex gap-4 rounded-3xl border border-[#dfe5ee] bg-white p-5 sm:p-6">
                <span className="text-xs font-black text-[#4f79a8]">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-[#66758a]">{check}</p>
              </li>
            ))}
          </ol>
          <p className={`mt-8 max-w-3xl ${bodyCopy}`}>
            Two guides go deeper on the decisions behind this framework —{" "}
            <Link href="/guides/choose-scalp-massager-supplier" className={guideLinkCls}>
              the scalp massager supplier checklist
            </Link>{" "}
            and{" "}
            <Link href="/guides/ems-vs-vibration-scalp-massager" className={guideLinkCls}>
              how EMS and vibration structures differ
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-y border-[#dfe5ee] bg-[#f1f5f9] py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>Compliance</p>
          <h2 className={sectionTitle}>How Does JAMOOZ Handle Quality and Compliance?</h2>
          <p className={`mt-4 max-w-3xl ${bodyCopy}`}>Compliance documentation is available according to the product model and destination market. Please contact us to confirm the applicable certificates and test reports before ordering.</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>Quotation and samples</p>
          <h2 className={sectionTitle}>How Do I Request a Quote or a Sample?</h2>
          <p className={`mt-4 max-w-3xl ${bodyCopy}`}>Tell us your target market, estimated quantity, whether the project is OEM or ODM, and whether you need a sample. We will confirm the model, customisation scope, packaging and commercial terms in one reply.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
            <a href="#inquiry" className={primaryButton}>REQUEST A QUOTE <ArrowIcon /></a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className={secondaryButton}>WHATSAPP US <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="border-t border-[#dfe5ee] bg-white py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>Buyer questions</p>
          <h2 className={sectionTitle}>Scalp Massager FAQ</h2>
          <div className="mt-10 grid gap-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-3xl border border-[#dfe5ee] bg-white p-5 sm:p-6">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-base font-black text-[#1f3048]">
                  <h3 className="text-base font-black">{faq.question}</h3>
                  <span aria-hidden className="text-lg text-[#4f79a8] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-6 text-[#66758a]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-24 bg-[#172b48] py-20 text-white sm:py-24">
        <div className={`${shell} grid gap-12 lg:grid-cols-[.82fr_1.18fr]`}>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#a9c4e4]">Factory inquiry</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-[44px]">Interested in custom scalp massagers?</h2>
            <p className="mt-5 max-w-lg leading-7 text-white/68">Send your target market and estimated quantity, and we will come back with the model, customisation scope, packaging and commercial terms.</p>
            <div className="mt-8 rounded-3xl border border-white/12 bg-white/[0.06] p-6">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#a9c4e4]">Selected category</p>
              <p className="mt-3 text-2xl font-black">Scalp &amp; Hair Care</p>
              <p className="mt-2 text-sm leading-6 text-white/65">Current model: JMZ-901 Rotating EMS Scalp Massager with LED Light</p>
            </div>
          </div>
          <div className="min-w-0 rounded-3xl border border-white/12 bg-white/[0.07] p-5 backdrop-blur sm:p-8">
            <InquiryForm id="scalp-massagers-inquiry-form" sourcePage={pagePath} theme="dark" initialProduct="Scalp massagers (category)" submitLabel="REQUEST FACTORY QUOTE" detailsOpen includeTargetMarket />
          </div>
        </div>
      </section>
    </main>
  );
}
