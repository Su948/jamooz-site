import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqBlock from "@/components/FaqBlock";
import InquiryForm from "@/components/InquiryForm";
import { contactLinks } from "@/lib/company";
import { guideFaqs } from "@/lib/faq";
import { buildWhatsAppInquiryMessage } from "@/lib/whatsapp";

const pagePath = "/guides/choose-scalp-massager-supplier";
const pageTitle = "How to Choose a Scalp Massager Supplier | OEM Checklist for B2B Buyers | JAMOOZ";
// The 52-word summary at the top of the page doubles as the meta description so
// the search snippet cannot drift from the page itself.
const pageSummary =
  "Choose a scalp massager supplier by confirming five things in writing: the MOQ and volume price tiers, the customisation scope and its minimum order per item, the sample process, the packaging specification, and the documentation provided for your destination market. Each answer should be traceable to a specification sheet or a quotation.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageSummary,
  alternates: { canonical: pagePath },
  robots: { index: true, follow: true },
};

const shell = "mx-auto w-full max-w-[1240px] px-5 sm:px-8";
const sectionLabel = "text-[11px] font-black uppercase tracking-[0.22em] text-[#315b8d]";
const sectionTitle =
  "mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#17243a] sm:text-4xl lg:text-[44px]";
const subTitle = "mt-12 text-2xl font-semibold tracking-[-0.03em] text-[#17243a]";
const sectionLead = "mt-5 max-w-3xl leading-7 text-[#607086]";
const tableCard = "mt-8 overflow-x-auto rounded-3xl border border-[#d4dde8] bg-white";
const tableCls = "w-full min-w-[560px] border-collapse text-left text-sm sm:min-w-full";
const thCls =
  "border-b border-[#d4dde8] bg-[#f4f8fc] px-4 py-4 text-xs font-black uppercase tracking-[0.08em] text-[#1f3048] sm:px-5";
const tdCls = "border-t border-[#e3e9f0] px-4 py-4 align-top leading-7 text-[#546379] sm:px-5";
const tdKey = "border-t border-[#e3e9f0] px-4 py-4 align-top font-bold leading-7 text-[#1f3048] sm:px-5";
const noteCls =
  "mt-5 max-w-3xl rounded-2xl border border-[#dfe5ee] bg-[#f4f8fc] p-5 text-sm leading-7 text-[#546379]";
const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#244f82] px-6 py-3.5 text-sm font-black tracking-[0.08em] text-white shadow-lg shadow-[#244f82]/20 transition hover:-translate-y-0.5 hover:bg-[#193d69]";
const secondaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#244f82] bg-white px-6 py-3.5 text-sm font-black tracking-[0.08em] text-[#244f82] transition hover:-translate-y-0.5 hover:bg-[#f4f8fc]";
const relatedLink =
  "text-sm font-bold text-[#244f82] underline decoration-[#9fb6d0] underline-offset-4 transition hover:text-[#193d69]";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5 shrink-0">
      <path d="M2.5 8h10m0 0-4-4m4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "How to Choose a Scalp Massager Supplier", href: pagePath },
];

const whatsappUrl = contactLinks.whatsapp(
  buildWhatsAppInquiryMessage({
    sourcePage: pagePath,
    product: "Supplier selection guide (scalp massagers)",
  }),
);

const faqs = guideFaqs["choose-scalp-massager-supplier"] ?? [];

export default function ChooseSupplierGuidePage() {
  return (
    <main className="bg-[#fbfcfe] text-[#334055]">
      <section className="border-b border-[#dfe5ee] bg-[linear-gradient(135deg,#fbfdff_0%,#eef3f8_55%,#e6edf5_100%)] py-10 sm:py-14 lg:py-20">
        <div className={shell}>
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 max-w-4xl">
            <p className={sectionLabel}>Sourcing guide</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#17243a] sm:text-5xl lg:text-[56px]">
              How to Choose a Scalp Massager Supplier
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4b5a70]">{pageSummary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#inquiry" className={primaryButton}>
                REQUEST A QUOTE
                <ArrowIcon />
              </a>
              <a href="#sample-testing" className={secondaryButton}>
                SAMPLE CHECKLIST
                <ArrowIcon />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 px-2 py-3.5 text-sm font-black tracking-[0.08em] text-[#244f82] underline decoration-[#9fb6d0] underline-offset-4 transition hover:text-[#193d69]"
              >
                WHATSAPP US
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className={shell}>
          <h2 className={sectionTitle}>What Should You Confirm Before Requesting a Quotation?</h2>
          <p className={sectionLead}>
            Eight items, all answerable in writing. The right-hand column shows JAMOOZ&apos;s current published
            position for its scalp massager.
          </p>
          <div className={tableCard}>
            <table className={tableCls}>
              <thead>
                <tr>
                  <th className={thCls}>#</th>
                  <th className={thCls}>What to confirm</th>
                  <th className={thCls}>Why it matters</th>
                  <th className={thCls}>JAMOOZ today (verifiable)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdKey}>1</td>
                  <td className={tdKey}>Model and functions</td>
                  <td className={tdCls}>Sets the retail positioning and price band</td>
                  <td className={tdCls}>JMZ-901: 2 rotation speeds, 2 EMS levels, red LED, refillable 5 mL ampoule tank, two-button panel</td>
                </tr>
                <tr>
                  <td className={tdKey}>2</td>
                  <td className={tdKey}>MOQ</td>
                  <td className={tdCls}>Sets the cash tied up in the first order</td>
                  <td className={tdCls}>50 pcs</td>
                </tr>
                <tr>
                  <td className={tdKey}>3</td>
                  <td className={tdKey}>Volume price tiers</td>
                  <td className={tdCls}>Sets the margin structure</td>
                  <td className={tdCls}>
                    US$14.80–19.00 per piece: 50–499 $19.00, 500–2,999 $17.00, 3,000–4,999 $15.30, 5,000+ $14.80
                  </td>
                </tr>
                <tr>
                  <td className={tdKey}>4</td>
                  <td className={tdKey}>Customisation scope and the minimum for each item</td>
                  <td className={tdCls}>Sets the packaging and branding budget</td>
                  <td className={tdCls}>Logo 500, colour 500 per colour, colour box 500, corrugated box 300 pcs; smaller runs discussable with an extra charge</td>
                </tr>
                <tr>
                  <td className={tdKey}>5</td>
                  <td className={tdKey}>Sample policy and cost</td>
                  <td className={tdCls}>Sets the verification cost</td>
                  <td className={tdCls}>Sample US$30.00 (freight quoted separately, confirmed in the quotation)</td>
                </tr>
                <tr>
                  <td className={tdKey}>6</td>
                  <td className={tdKey}>Packaging specification</td>
                  <td className={tdCls}>Sets freight and storage cost</td>
                  <td className={tdCls}><strong>To be confirmed</strong> — colour box size, units per carton, gross and net weight, carton marks</td>
                </tr>
                <tr>
                  <td className={tdKey}>7</td>
                  <td className={tdKey}>Lead time and payment terms</td>
                  <td className={tdCls}>Sets cash flow and your listing schedule</td>
                  <td className={tdCls}><strong>To be confirmed</strong> — agreed with the quotation and the order terms</td>
                </tr>
                <tr>
                  <td className={tdKey}>8</td>
                  <td className={tdKey}>Certificates and documentation</td>
                  <td className={tdCls}>Determines whether you can clear customs and list</td>
                  <td className={tdCls}>See the documentation section below</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={noteCls}>
            Items 6 and 7 are measured or agreed per order. Whoever the supplier is, ask for any figure they quote in
            advance to be written into the quotation, so it is not left as a verbal promise.
          </p>
        </div>
      </section>

      <section className="border-t border-[#dfe5ee] bg-white py-16 sm:py-20">
        <div className={shell}>
          <h2 className={sectionTitle}>OEM Customisation Checklist</h2>
          <div className={tableCard}>
            <table className={tableCls}>
              <thead>
                <tr>
                  <th className={thCls}>Level</th>
                  <th className={thCls}>What can be customised</th>
                  <th className={thCls}>Standard minimum</th>
                  <th className={thCls}>What the supplier has to confirm</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdKey}>Packaging and marking (standard OEM)</td>
                  <td className={tdCls}>Custom logo</td>
                  <td className={tdCls}>500 pcs</td>
                  <td className={tdCls}>Printing method and position; artwork approval flow</td>
                </tr>
                <tr>
                  <td className={tdKey}>Packaging and marking (standard OEM)</td>
                  <td className={tdCls}>Custom colour (body or housing)</td>
                  <td className={tdCls}>500 pcs per colour</td>
                  <td className={tdCls}>How the colour reference is confirmed; whether a minimum mix applies</td>
                </tr>
                <tr>
                  <td className={tdKey}>Packaging and marking (standard OEM)</td>
                  <td className={tdCls}>Colour box</td>
                  <td className={tdCls}>500 pcs</td>
                  <td className={tdCls}>Box type, material, print process, dimensions</td>
                </tr>
                <tr>
                  <td className={tdKey}>Packaging and marking (standard OEM)</td>
                  <td className={tdCls}>Corrugated box</td>
                  <td className={tdCls}>300 pcs</td>
                  <td className={tdCls}>Carton size and marks, which tie back to the packaging specification above</td>
                </tr>
                <tr>
                  <td className={tdKey}>Product-level customisation (ODM)</td>
                  <td className={tdCls}>Structure, levels, tank, colour combinations</td>
                  <td className={tdCls}>To be confirmed</td>
                  <td className={tdCls}>Whether it is accepted, the development cycle, tooling and sampling cost, minimum quantity — assessed project by project</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={noteCls}>
            <strong>Three things worth asking at the same time</strong>, to avoid rework later:
            <br />1. The approval order — is the colour box approved before the body colour, or the other way round?
            <br />2. How many rounds of artwork revision are included, and how extra rounds are charged.
            <br />3. The tolerance agreed for colour and finish between production batches.
            <br />
            These are sourcing suggestions, not internal factory data; the rules themselves are set by the quotation
            and the contract.
          </p>
        </div>
      </section>

      <section id="sample-testing" className="scroll-mt-24 py-16 sm:py-20">
        <div className={shell}>
          <h2 className={sectionTitle}>What to Test in a Scalp Massager Sample?</h2>
          <p className={sectionLead}>
            Checking a sample is the cheapest place to catch a mismatch. The list below is limited to what a buyer can
            verify on the bench.
          </p>

          <h3 className={subTitle}>What you can check yourself once the sample arrives</h3>
          <div className={tableCard}>
            <table className={tableCls}>
              <thead>
                <tr>
                  <th className={thCls}>#</th>
                  <th className={thCls}>Check</th>
                  <th className={thCls}>How to check it</th>
                  <th className={thCls}>Pass condition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdKey}>1</td>
                  <td className={tdKey}>Model and specification match</td>
                  <td className={tdCls}>Work through the supplier specification sheet item by item (functions, levels, battery marking, charging connector)</td>
                  <td className={tdCls}>Matches the specification sheet</td>
                </tr>
                <tr>
                  <td className={tdKey}>2</td>
                  <td className={tdKey}>Buttons and levels</td>
                  <td className={tdCls}>Operate every button and confirm each level switches without sticking</td>
                  <td className={tdCls}>Matches the manual</td>
                </tr>
                <tr>
                  <td className={tdKey}>3</td>
                  <td className={tdKey}>Appearance and finish</td>
                  <td className={tdCls}>Inspect the housing, contact head, brush pads or electrodes for completeness, distortion or burrs</td>
                  <td className={tdCls}>No visible defect</td>
                </tr>
                <tr>
                  <td className={tdKey}>4</td>
                  <td className={tdKey}>Charging and status indication</td>
                  <td className={tdCls}>Connect USB-C as described and confirm it charges and the indicator behaves</td>
                  <td className={tdCls}>Matches the manual</td>
                </tr>
                <tr>
                  <td className={tdKey}>5</td>
                  <td className={tdKey}>Packaging and accessory completeness</td>
                  <td className={tdCls}>Count the contents against the accessory list and check the box type and marking</td>
                  <td className={tdCls}>The accessory list is still to be confirmed — until it is provided, check against the list the supplier supplies</td>
                </tr>
                <tr>
                  <td className={tdKey}>6</td>
                  <td className={tdKey}>Match with the photography</td>
                  <td className={tdCls}>Compare appearance and colour with the product page or brochure images</td>
                  <td className={tdCls}>Matches the supplied images</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={subTitle}>Factory-side inspection</h3>
          <p className={noteCls}>
            <strong>To be confirmed.</strong> This section lists no internal inspection items, equipment, test durations
            or pass rates, because none of that has a traceable source today — writing it in would be inventing it. What
            can be stated is that JAMOOZ provides accompanying documents according to the order and model (see the
            documentation section). If a formal inspection process and its metrics are provided later, this module will
            be filled in from that source.
          </p>

          <h3 className={subTitle}>Three common pitfalls when checking a sample</h3>
          <p className={noteCls}>
            1. <strong>Judging the sample without reading the specification sheet.</strong> A sample may feel right while
            its levels differ from the sheet, and mass production follows the sheet.
            <br />2. <strong>Not confirming the accessory list.</strong> What is in the sample box is not automatically the
            production configuration.
            <br />3. <strong>Not agreeing batch-to-batch consistency.</strong> Colour and finish differences between the
            first and later batches should be agreed in the contract beforehand.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#inquiry" className={primaryButton}>
              REQUEST A SAMPLE
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-[#dfe5ee] bg-white py-16 sm:py-20">
        <div className={shell}>
          <h2 className={sectionTitle}>Business Terms and Packaging: What to Pin Down</h2>
          <div className={tableCard}>
            <table className={tableCls}>
              <thead>
                <tr>
                  <th className={thCls}>Item</th>
                  <th className={thCls}>JAMOOZ today</th>
                  <th className={thCls}>What to write into the quotation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdKey}>MOQ</td>
                  <td className={tdCls}>50 pcs (JMZ-901)</td>
                  <td className={tdCls}>MOQ per model; whether colours and models can be mixed</td>
                </tr>
                <tr>
                  <td className={tdKey}>Price tiers</td>
                  <td className={tdCls}>4 tiers (see item 3 above)</td>
                  <td className={tdCls}>Tier boundaries, validity, currency and trade term (FOB, CIF and so on)</td>
                </tr>
                <tr>
                  <td className={tdKey}>Lead time</td>
                  <td className={tdCls}>To be confirmed with the quotation</td>
                  <td className={tdCls}>When the clock starts (deposit or artwork approval) and whether peak season extends it</td>
                </tr>
                <tr>
                  <td className={tdKey}>Payment terms</td>
                  <td className={tdCls}>To be confirmed with the order terms</td>
                  <td className={tdCls}>Deposit share and the point at which the balance falls due</td>
                </tr>
                <tr>
                  <td className={tdKey}>Packaging specification</td>
                  <td className={tdCls}>To be confirmed, measured per order</td>
                  <td className={tdCls}>Colour box size, units per carton, gross and net weight, carton marks</td>
                </tr>
                <tr>
                  <td className={tdKey}>Carton and freight calculation</td>
                  <td className={tdCls}>Outer-carton volume and weight are calculated from the standard measured carton specification</td>
                  <td className={tdCls}>The volumetric basis used for sea and air quotations</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={noteCls}>
            On packaging and freight: the position is that outer-carton volume and weight are calculated from the
            standard measured carton specification per order, rather than published as a fixed carton size in advance.
            No carton figures are given on this page for that reason — the exact specification is confirmed with the
            order.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#inquiry" className={primaryButton}>
              REQUEST A QUOTE
              <ArrowIcon />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className={secondaryButton}>
              WHATSAPP US
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className={shell}>
          <h2 className={sectionTitle}>Documentation and Compliance: What to Ask For</h2>
          <p className={sectionLead}>
            You can ask any supplier for the documents below. The last column states where JAMOOZ stands today.
          </p>
          <div className={tableCard}>
            <table className={tableCls}>
              <thead>
                <tr>
                  <th className={thCls}>#</th>
                  <th className={thCls}>Document</th>
                  <th className={thCls}>What it is used for</th>
                  <th className={thCls}>JAMOOZ today</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdKey}>1</td>
                  <td className={tdKey}>Product specification sheet / manual</td>
                  <td className={tdCls}>Checking functions, parameters, use and cleaning</td>
                  <td className={tdCls}>Provided with the product</td>
                </tr>
                <tr>
                  <td className={tdKey}>2</td>
                  <td className={tdKey}>Third-party test reports (EMC, LVD, RoHS and similar)</td>
                  <td className={tdCls}>Preparation for European Union market requirements</td>
                  <td className={tdCls}>Provided according to the model and destination market — contact us to confirm the applicable reports before ordering</td>
                </tr>
                <tr>
                  <td className={tdKey}>3</td>
                  <td className={tdKey}>North America filing documents (FCC- and FDA-related)</td>
                  <td className={tdCls}>Preparation for North American market requirements</td>
                  <td className={tdCls}>Provided according to the model and destination market — contact us to confirm the applicable files before ordering</td>
                </tr>
                <tr>
                  <td className={tdKey}>4</td>
                  <td className={tdKey}>Packaging and carton data</td>
                  <td className={tdCls}>Freight and storage calculation</td>
                  <td className={tdCls}>Measured and provided per order</td>
                </tr>
                <tr>
                  <td className={tdKey}>5</td>
                  <td className={tdKey}>Artwork and colour approval sheets</td>
                  <td className={tdCls}>Keeping the brand consistent</td>
                  <td className={tdCls}>Provided per project</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={noteCls}>
            Documentation is provided according to the model and destination market — please contact us to confirm the
            applicable certificates and test reports before ordering. No certificate number, issuing body or
            certification mark is published on this page.
          </p>
        </div>
      </section>

      <section className="border-t border-[#dfe5ee] bg-white py-16 sm:py-20">
        <div className={shell}>
          <h2 className={sectionTitle}>How Do You Compare Two Suppliers Fairly?</h2>
          <div className={tableCard}>
            <table className={tableCls}>
              <thead>
                <tr>
                  <th className={thCls}>Dimension</th>
                  <th className={thCls}>Why it separates suppliers</th>
                  <th className={thCls}>What to put in the comparison sheet</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdKey}>Completeness of the specification</td>
                  <td className={tdCls}>Whether they will hand over a specification you can check</td>
                  <td className={tdCls}>Whether the sheet covers size, power, water resistance, net weight and so on</td>
                </tr>
                <tr>
                  <td className={tdKey}>Customisation thresholds and process</td>
                  <td className={tdCls}>Sets the branding spend and how controllable the schedule is</td>
                  <td className={tdCls}>Each threshold, the artwork flow, the number of revisions</td>
                </tr>
                <tr>
                  <td className={tdKey}>How open items are handled</td>
                  <td className={tdCls}>A honesty indicator — left blank pending confirmation, or filled with a made-up figure</td>
                  <td className={tdCls}>Whether there is a stated date for filling each gap</td>
                </tr>
                <tr>
                  <td className={tdKey}>Certificates and documentation</td>
                  <td className={tdCls}>Determines whether you can clear customs and list</td>
                  <td className={tdCls}>The document types they can supply (numbers and bodies confirmed by the supplier)</td>
                </tr>
                <tr>
                  <td className={tdKey}>Packaging and carton data</td>
                  <td className={tdCls}>Sets the freight cost</td>
                  <td className={tdCls}>Whether they provide carton data measured per order</td>
                </tr>
                <tr>
                  <td className={tdKey}>Sample terms</td>
                  <td className={tdCls}>Sets the upfront cost and how quickly you can verify</td>
                  <td className={tdCls}>Sample price, freight, whether it is deductible from the bulk order</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={noteCls}>
            One general test: compare a supplier who is willing to leave a field open and say when it will be filled
            with one who answers every field immediately but cannot produce a specification sheet. The first is
            noticeably easier to verify.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className={shell}>
          <h2 className={sectionTitle}>How Do I Request a Quote or a Sample?</h2>
          <p className={sectionLead}>
            Tell us your target market, estimated quantity, whether the project is OEM or ODM, and whether you need a
            sample. We will confirm the model, customisation scope, packaging and the commercial terms that are still
            open in one reply.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#inquiry" className={primaryButton}>
              REQUEST A QUOTE
              <ArrowIcon />
            </a>
            <a href="#inquiry" className={secondaryButton}>
              REQUEST A SAMPLE
              <ArrowIcon />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 px-2 py-3.5 text-sm font-black tracking-[0.08em] text-[#244f82] underline decoration-[#9fb6d0] underline-offset-4 transition hover:text-[#193d69]"
            >
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-[#dfe5ee] bg-[#f4f8fc] py-14">
        <div className={shell}>
          <p className={sectionLabel}>Related reading</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <li>
              <Link href="/guides/ems-vs-vibration-scalp-massager" className={relatedLink}>
                EMS vs vibration scalp massagers: how the mechanisms differ
              </Link>
            </li>
            <li>
              <Link href="/products/scalp-massagers" className={relatedLink}>
                Custom scalp massagers — category overview
              </Link>
            </li>
            <li>
              <Link href="/products/jmz-901" className={relatedLink}>
                JMZ-901 rotating EMS scalp massager
              </Link>
            </li>
            <li>
              <Link href="/custom" className={relatedLink}>
                OEM &amp; ODM customisation services
              </Link>
            </li>
            <li>
              <Link href="/rfq" className={relatedLink}>
                Request a quote with the RFQ form
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <FaqBlock items={faqs} title="Scalp Massager Supplier: Frequently Asked Questions" />

      <section id="inquiry" className="scroll-mt-24 bg-[#172b48] py-20 text-white sm:py-24">
        <div className={`${shell} grid gap-12 lg:grid-cols-[.82fr_1.18fr]`}>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#a9c4e4]">Factory inquiry</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Comparing suppliers for your scalp range?
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-white/70">
              Send your target market and estimated quantity, and we will confirm the specification, customisation
              scope, packaging and the commercial terms in one reply.
            </p>
            <div className="mt-8 rounded-3xl border border-white/15 bg-white/[0.06] p-6">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#a9c4e4]">Guide</p>
              <p className="mt-3 text-2xl font-black">Supplier selection guide (scalp massagers)</p>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Current model: JMZ-901 rotating EMS scalp massager with LED light
              </p>
            </div>
          </div>
          <div className="min-w-0 rounded-3xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur sm:p-8">
            <InquiryForm
              id="choose-supplier-inquiry-form"
              sourcePage={pagePath}
              theme="dark"
              initialProduct="Supplier selection guide (scalp massagers)"
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
