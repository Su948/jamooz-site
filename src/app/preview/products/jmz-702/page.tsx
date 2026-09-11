import type { Metadata } from "next";
import Image from "next/image";
import InquiryForm from "@/components/InquiryForm";
import Jmz702Gallery from "@/components/Jmz702Gallery";
import { contactLinks } from "@/lib/company";
import { jmz702Prices, jmz702Specs, type Jmz702SpecStatus } from "@/lib/preview-products/jmz-702";
import { buildWhatsAppInquiryMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "JMZ-702 Heated Vibration Egg Massage Chair | JAMOOZ Preview",
  description: "Explore the JMZ-702 compact egg massage chair with adjustable heating, three-level vibration and OEM/ODM options.",
  robots: { index: false, follow: false },
};

const shell = "mx-auto w-full max-w-[1240px] px-5 sm:px-8";
const sectionLabel = "text-[11px] font-black uppercase tracking-[0.22em] text-[#315b8d]";
const sectionTitle = "mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#17243a] sm:text-4xl lg:text-[44px]";

const statusStyles: Record<Jmz702SpecStatus, string> = {
  Confirmed: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  TBC: "bg-slate-100 text-slate-700 ring-slate-200",
};

const featureCards = [
  { number: "01", title: "Heating + vibration", copy: "The current JMZ-702 configuration combines warming and vibration only. It does not include an airbag function." },
  { number: "02", title: "3 vibration levels", copy: "Three selectable intensity levels support different everyday seated relaxation preferences." },
  { number: "03", title: "3 heat settings", copy: "Choose from approximately 40°C, 45°C and 50°C warming levels." },
  { number: "04", title: "15-minute auto-off", copy: "The automatic cycle limit supports straightforward daily operation and product protection." },
] as const;

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current stroke-2"><path d="M4 10h12M11 5l5 5-5 5" /></svg>;
}

export default function Jmz702PreviewPage() {
  const sourcePage = "/preview/products/jmz-702";
  const productName = "JMZ-702 – Heated Vibration Egg Massage Chair";
  const whatsappUrl = contactLinks.whatsapp(buildWhatsAppInquiryMessage({ sourcePage, product: productName }));

  return (
    <main className="overflow-x-hidden bg-[#fbfcfe] text-[#334055]">
      <section className="border-b border-[#dfe5ee] bg-[linear-gradient(135deg,#fbfdff_0%,#eef3f8_55%,#e6edf5_100%)] py-10 sm:py-14 lg:py-20">
        <div className={`${shell} grid items-center gap-10 lg:grid-cols-[55fr_45fr] lg:gap-14`}>
          <Jmz702Gallery />

          <div className="min-w-0">
            <p className={sectionLabel}>JMZ-702 · OEM / ODM MASSAGE SEAT</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#17243a] sm:text-5xl lg:text-[58px]">
              Heated Vibration Egg Massage Chair
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#607086] sm:text-lg sm:leading-8">
              A compact, contoured massage seat with adjustable warming and three-level vibration for home, office and everyday relaxation settings.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Heating", "3 Vibration Levels", "3 Heat Levels", "15-Min Auto-Off"].map((badge) => (
                <span key={badge} className="rounded-full border border-[#ccd8e6] bg-white/85 px-3.5 py-2 text-xs font-bold text-[#24456f]">{badge}</span>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/85 bg-white/82 p-5 shadow-[0_20px_55px_rgba(38,67,105,0.09)] backdrop-blur sm:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#718097]">Volume price range</p>
              <div className="mt-2 flex flex-wrap items-end gap-x-4 gap-y-1">
                <p className="text-3xl font-black tracking-tight text-[#244f82]">US$27.50–33.00 / pc</p>
                <p className="pb-1 text-sm font-bold text-[#334055]">MOQ 50 pcs</p>
              </div>
              <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-xl border border-[#dfe5ee] sm:grid-cols-4">
                {jmz702Prices.map((tier, index) => (
                  <div key={tier.quantity} className={`p-3 ${index % 2 === 0 ? "bg-[#f7faff]" : "bg-white"} ${index > 0 ? "border-l border-[#dfe5ee]" : ""}`}>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#7a8799]">{tier.quantity}</p>
                    <p className="mt-1 text-sm font-black text-[#24344b]">{tier.price}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap justify-between gap-2 text-xs text-[#708095]">
                <span>Sample: <strong className="text-[#334055]">US$40</strong></span>
                <span>Volume prices are confirmed with the final quotation.</span>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a href="#inquiry" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#244f82] px-6 py-3.5 text-sm font-black tracking-[0.08em] text-white shadow-lg shadow-[#244f82]/20 transition hover:-translate-y-0.5 hover:bg-[#193d69]">REQUEST A QUOTE <ArrowIcon /></a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#244f82] bg-white px-6 py-3.5 text-sm font-black tracking-[0.08em] text-[#244f82] transition hover:-translate-y-0.5 hover:bg-[#f4f8fc]">WHATSAPP US <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>Confirmed configuration</p>
          <h2 className={sectionTitle}>Simple Controls, Everyday Comfort</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#607086]">The current JMZ-702 is built around two clearly defined functions: adjustable vibration and warming. Airbag compression is not part of this model.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((feature) => (
              <article key={feature.number} className="rounded-3xl border border-[#dfe5ee] bg-white p-6 shadow-[0_16px_40px_rgba(38,67,105,0.05)]">
                <span className="text-xs font-black text-[#4f79a8]">{feature.number}</span>
                <h3 className="mt-8 text-lg font-black text-[#1f3048]">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#66758a]">{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#dfe5ee] bg-[#f1f5f9] py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>Data transparency</p>
          <h2 className={sectionTitle}>Product Specifications</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#607086]">Confirmed operating details are separated from packing data that still needs final project confirmation.</p>
          <div className="mt-10 overflow-hidden rounded-3xl border border-[#d4dde8] bg-white">
            <table className="w-full table-fixed border-collapse text-left text-sm">
              <thead className="bg-[#172b48] text-white">
                <tr>
                  <th className="w-[32%] px-3 py-4 font-bold sm:px-5">Item</th>
                  <th className="w-[46%] px-3 py-4 font-bold sm:px-5">Value</th>
                  <th className="w-[22%] px-2 py-4 font-bold sm:px-5">Status</th>
                </tr>
              </thead>
              <tbody>
                {jmz702Specs.map((spec, index) => (
                  <tr key={spec.item} className={index % 2 === 0 ? "bg-white" : "bg-[#f7faff]"}>
                    <th scope="row" className="break-words border-t border-[#e3e9f0] px-3 py-4 font-bold text-[#26364d] sm:px-5">{spec.item}</th>
                    <td className="break-words border-t border-[#e3e9f0] px-3 py-4 leading-6 text-[#607086] sm:px-5">{spec.value}</td>
                    <td className="border-t border-[#e3e9f0] px-2 py-4 sm:px-5"><span className={`inline-flex max-w-full rounded-full px-2 py-1 text-[9px] font-black uppercase tracking-wide ring-1 ring-inset sm:px-2.5 sm:text-[10px] ${statusStyles[spec.status]}`}>{spec.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>OEM / ODM options</p>
          <h2 className={sectionTitle}>Prepare JMZ-702 for Your Market</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#607086]">Product color, branding, packaging and market-specific documentation can be discussed for qualified volume orders.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Custom Logo", "Suitable logo placement and marking process."],
              ["Custom Color", "Fabric and trim colors matched to project requirements."],
              ["Custom Packaging", "Retail packaging structure and artwork for your channel."],
              ["Private Label", "Coordinated product, manual and packaging presentation."],
            ].map(([title, copy], index) => (
              <article key={title} className="rounded-3xl border border-[#dfe5ee] bg-white p-6">
                <span className="text-xs font-black text-[#4f79a8]">0{index + 1}</span>
                <h3 className="mt-8 text-lg font-black text-[#1f3048]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#66758a]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-24 bg-[#172b48] py-20 text-white sm:py-24">
        <div className={`${shell} grid gap-12 lg:grid-cols-[.82fr_1.18fr]`}>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#a9c4e4]">Factory inquiry</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-[44px]">Interested in JMZ-702?</h2>
            <p className="mt-5 max-w-lg leading-7 text-white/68">Tell us your quantity, target market and customization requirements. Our team will prepare the next-step product and quotation details.</p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-3xl border border-white/12 bg-white">
              <Image src="/products/jmz-702/JMZ-702-01-home-card.webp" alt="JMZ-702 heated vibration egg massage chair" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-contain" />
            </div>
            <div className="mt-5 rounded-2xl border border-white/12 bg-white/[0.06] p-5">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#a9c4e4]">Model</p>
              <p className="mt-2 text-lg font-black">JMZ-702</p>
              <p className="mt-1 text-sm text-white/58">Heated Vibration Egg Massage Chair</p>
            </div>
          </div>
          <div className="min-w-0 rounded-3xl border border-white/12 bg-white/[0.07] p-5 backdrop-blur sm:p-8">
            <InquiryForm
              id="jmz-702-inquiry-form"
              sourcePage={sourcePage}
              theme="dark"
              initialProduct={productName}
              submitLabel="REQUEST FACTORY QUOTE"
              detailsOpen
              includeTargetMarket
            />
          </div>
        </div>
      </section>
    </main>
  );
}
