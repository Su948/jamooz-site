import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqBlock from "@/components/FaqBlock";
import InquiryForm from "@/components/InquiryForm";
import { contactLinks } from "@/lib/company";
import { guideFaqs } from "@/lib/faq";
import { buildWhatsAppInquiryMessage } from "@/lib/whatsapp";

const pagePath = "/guides/ems-vs-vibration-scalp-massager";
const pageTitle = "EMS vs Vibration Scalp Massager: How the Two Mechanisms Differ | JAMOOZ";
// The 53-word summary at the top of the page doubles as the meta description so
// the search snippet cannot drift from the page itself.
const pageSummary =
  "EMS scalp massagers deliver adjustable low-frequency electrical pulses through electrodes in contact with the skin, while vibration devices oscillate the contact head using a motor and pass no current to the skin. The choice changes how the device touches the scalp, how it is maintained, and how the bill of materials is built.";

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
const sectionLead = "mt-5 max-w-3xl leading-7 text-[#607086]";
const tableCard = "mt-8 overflow-x-auto rounded-3xl border border-[#d4dde8] bg-white";
const tableCls = "w-full min-w-[560px] border-collapse text-left text-sm sm:min-w-full";
const thCls =
  "border-b border-[#d4dde8] bg-[#f4f8fc] px-4 py-4 text-xs font-black uppercase tracking-[0.08em] text-[#1f3048] sm:px-5";
const tdCls = "border-t border-[#e3e9f0] px-4 py-4 align-top leading-7 text-[#546379] sm:px-5";
const tdKey = "border-t border-[#e3e9f0] px-4 py-4 align-top font-bold leading-7 text-[#1f3048] sm:px-5";
const noteCls = "mt-5 max-w-3xl rounded-2xl border border-[#dfe5ee] bg-[#f4f8fc] p-5 text-sm leading-7 text-[#546379]";
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
  { name: "EMS vs Vibration Scalp Massagers", href: pagePath },
];

const whatsappUrl = contactLinks.whatsapp(
  buildWhatsAppInquiryMessage({ sourcePage: pagePath, product: "EMS vs vibration scalp massager (guide)" }),
);

const faqs = guideFaqs["ems-vs-vibration-scalp-massager"] ?? [];

export default function EmsVsVibrationGuidePage() {
  return (
    <main className="bg-[#fbfcfe] text-[#334055]">
      <section className="border-b border-[#dfe5ee] bg-[linear-gradient(135deg,#fbfdff_0%,#eef3f8_55%,#e6edf5_100%)] py-10 sm:py-14 lg:py-20">
        <div className={shell}>
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 max-w-4xl">
            <p className={sectionLabel}>Decision guide</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#17243a] sm:text-5xl lg:text-[56px]">
              EMS vs Vibration Scalp Massagers: How the Two Mechanisms Differ
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4b5a70]">{pageSummary}</p>
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
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className={shell}>
          <h2 className={sectionTitle}>What Is the Difference Between EMS and Vibration?</h2>
          <div className={tableCard}>
            <table className={tableCls}>
              <thead>
                <tr>
                  <th className={thCls}>&nbsp;</th>
                  <th className={thCls}>EMS</th>
                  <th className={thCls}>Vibration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdKey}>How it works</td>
                  <td className={tdCls}>Adjustable low-frequency electrical pulses delivered through electrodes that contact the skin</td>
                  <td className={tdCls}>Mechanical oscillation of the contact head, driven by a motor</td>
                </tr>
                <tr>
                  <td className={tdKey}>Contact with the skin</td>
                  <td className={tdCls}>Current passes through the skin by way of the electrodes</td>
                  <td className={tdCls}>No current passes through the skin; the contact head only moves mechanically</td>
                </tr>
                <tr>
                  <td className={tdKey}>Intensity setting</td>
                  <td className={tdCls}>Selected by level (2 EMS levels on JMZ-901)</td>
                  <td className={tdCls}>Selected by level (speed or frequency steps)</td>
                </tr>
                <tr>
                  <td className={tdKey}>Build</td>
                  <td className={tdCls}>Electrodes, drive circuit, control panel, power supply</td>
                  <td className={tdCls}>Motor, eccentric weight, transmission, power supply</td>
                </tr>
                <tr>
                  <td className={tdKey}>Observable difference</td>
                  <td className={tdCls}>There is electrical contact during use, which some buyers ask about</td>
                  <td className={tdCls}>No electrical contact; the sensation is mechanical</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={noteCls}>
            These are differences in how the two technologies work. They say nothing about any physiological
            effect or health outcome. Manufacturers implement the circuits, levels and structures differently,
            so the specification sheet of each model is the reference.
          </p>
        </div>
      </section>

      <section className="border-t border-[#dfe5ee] bg-white py-16 sm:py-20">
        <div className={shell}>
          <h2 className={sectionTitle}>Which Structure Does JAMOOZ Currently Offer?</h2>
          <p className={sectionLead}>
            JAMOOZ&apos;s current scalp massager, <strong>JMZ-901</strong>, uses a{" "}
            <strong>rotating contact head with an EMS function</strong>, not a vibration motor.
          </p>
          <div className={tableCard}>
            <table className={tableCls}>
              <thead>
                <tr>
                  <th className={thCls}>Item</th>
                  <th className={thCls}>JMZ-901 confirmed value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdKey}>Contact method</td>
                  <td className={tdCls}>Rotating contact head, 2 rotation speeds</td>
                </tr>
                <tr>
                  <td className={tdKey}>EMS</td>
                  <td className={tdCls}>2 levels</td>
                </tr>
                <tr>
                  <td className={tdKey}>Light</td>
                  <td className={tdCls}>Red LED</td>
                </tr>
                <tr>
                  <td className={tdKey}>Liquid delivery</td>
                  <td className={tdCls}>Refillable 5 mL ampoule tank</td>
                </tr>
                <tr>
                  <td className={tdKey}>Controls</td>
                  <td className={tdCls}>Two-button panel</td>
                </tr>
                <tr>
                  <td className={tdKey}>Battery / charging</td>
                  <td className={tdCls}>2000 mAh; USB-C (the supplied visual states under 4 hours)</td>
                </tr>
                <tr>
                  <td className={tdKey}>MOQ / price</td>
                  <td className={tdCls}>50 pcs; US$14.80–19.00 per piece</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={noteCls}>
            This page does not compare a vibration model with an EMS model from our own range: there is currently
            one scalp massager model. If your project needs a vibration structure, tell us when you request a
            quotation and we will confirm feasibility by model. Full specifications of the current model are on
            the{" "}
            <Link href="/products/jmz-901" className={relatedLink}>
              JMZ-901 product page
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className={shell}>
          <h2 className={sectionTitle}>Purchasing Cost: How the Two Structures Differ</h2>
          <p className={sectionLead}>
            Structural differences only — the table below carries no cost figures of any kind.
          </p>
          <div className={tableCard}>
            <table className={tableCls}>
              <thead>
                <tr>
                  <th className={thCls}>Cost element</th>
                  <th className={thCls}>Rotating + EMS structure</th>
                  <th className={thCls}>Vibration-only structure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdKey}>Main moving parts</td>
                  <td className={tdCls}>Motor, electrodes, drive circuit</td>
                  <td className={tdCls}>Motor, eccentric weight</td>
                </tr>
                <tr>
                  <td className={tdKey}>Electrodes</td>
                  <td className={tdCls}>Electrodes and matching circuitry are required, which changes the bill of materials</td>
                  <td className={tdCls}>None</td>
                </tr>
                <tr>
                  <td className={tdKey}>Battery and charging management</td>
                  <td className={tdCls}>Generally needs matched discharge and charging management</td>
                  <td className={tdCls}>Comparatively simpler</td>
                </tr>
                <tr>
                  <td className={tdKey}>Certification and documentation effort</td>
                  <td className={tdCls}>Includes electrical parts, so documentation effort depends on the structure</td>
                  <td className={tdCls}>Comparatively simpler structure</td>
                </tr>
                <tr>
                  <td className={tdKey}>Quotation route</td>
                  <td className={tdCls}>Quoted by model and volume tier</td>
                  <td className={tdCls}>Confirmed by model</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={noteCls}>
            <strong>No cost figures are given here.</strong> Unit costs, cost differences and percentages change with
            model, quantity and configuration, and no comparable source exists today — please request a quotation for
            the model you are evaluating. The published price for JMZ-901 is US$14.80–19.00 per piece, in four volume
            tiers: 50–499 at $19.00, 500–2,999 at $17.00, 3,000–4,999 at $15.30, and 5,000+ at $14.80.
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

      <section className="border-t border-[#dfe5ee] bg-white py-16 sm:py-20">
        <div className={shell}>
          <h2 className={sectionTitle}>Use Cases: Choosing a Structure by Channel</h2>
          <div className={tableCard}>
            <table className={tableCls}>
              <thead>
                <tr>
                  <th className={thCls}>Channel / use case</th>
                  <th className={thCls}>Structure more often chosen</th>
                  <th className={thCls}>Basis for the choice (verifiable facts)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdKey}>Home retail and gift-box channels</td>
                  <td className={tdCls}>Rotating / EMS</td>
                  <td className={tdCls}>More combined functions (rotation, EMS, red LED, ampoule tank), with room for gift packaging</td>
                </tr>
                <tr>
                  <td className={tdKey}>Channels that favour simple operation</td>
                  <td className={tdCls}>Vibration</td>
                  <td className={tdCls}>Simpler structure and operation, with no electrode contact</td>
                </tr>
                <tr>
                  <td className={tdKey}>Ranges that pair with a care liquid</td>
                  <td className={tdCls}>Rotating with a liquid tank</td>
                  <td className={tdCls}>JMZ-901 provides a refillable 5 mL ampoule tank</td>
                </tr>
                <tr>
                  <td className={tdKey}>Buyers who prefer to avoid electrical contact</td>
                  <td className={tdCls}>Vibration</td>
                  <td className={tdCls}>No current passes through the skin</td>
                </tr>
                <tr>
                  <td className={tdKey}>Ranges that need several adjustable intensity levels</td>
                  <td className={tdCls}>Rotating / EMS</td>
                  <td className={tdCls}>JMZ-901 provides 2 rotation speeds and 2 EMS levels</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={noteCls}>
            These are selection dimensions, not statements about the effect of any product.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className={shell}>
          <h2 className={sectionTitle}>Customisation: What Can Be Changed on Each Structure</h2>
          <div className={tableCard}>
            <table className={tableCls}>
              <thead>
                <tr>
                  <th className={thCls}>Customisation</th>
                  <th className={thCls}>Standard minimum order</th>
                  <th className={thCls}>Structure-dependent?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdKey}>Custom logo</td>
                  <td className={tdCls}>500 pcs</td>
                  <td className={tdCls}>No</td>
                </tr>
                <tr>
                  <td className={tdKey}>Custom colour</td>
                  <td className={tdCls}>500 pcs per colour</td>
                  <td className={tdCls}>No</td>
                </tr>
                <tr>
                  <td className={tdKey}>Colour box</td>
                  <td className={tdCls}>500 pcs</td>
                  <td className={tdCls}>No</td>
                </tr>
                <tr>
                  <td className={tdKey}>Corrugated box</td>
                  <td className={tdCls}>300 pcs</td>
                  <td className={tdCls}>No</td>
                </tr>
                <tr>
                  <td className={tdKey}>Customised first orders</td>
                  <td className={tdCls}>Feasibility and cost confirmed with quotation</td>
                  <td className={tdCls}>—</td>
                </tr>
                <tr>
                  <td className={tdKey}>Structural customisation (ODM)</td>
                  <td className={tdCls}>To be confirmed</td>
                  <td className={tdCls}>Yes — electrodes or motor, number of levels and tank structure are product-level changes, assessed project by project</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={noteCls}>
            These thresholds are the confirmed standard for <strong>JMZ-901</strong>. Whether they apply to a model with
            a different structure has to be confirmed model by model. For structural customisation, see the{" "}
            <Link href="/custom" className={relatedLink}>
              OEM &amp; ODM services page
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-t border-[#dfe5ee] bg-white py-16 sm:py-20">
        <div className={shell}>
          <h2 className={sectionTitle}>Maintenance: Cleaning and Care Differences</h2>
          <div className={tableCard}>
            <table className={tableCls}>
              <thead>
                <tr>
                  <th className={thCls}>Maintenance item</th>
                  <th className={thCls}>Rotating + EMS structure</th>
                  <th className={thCls}>Vibration-only structure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdKey}>Contact head cleaning</td>
                  <td className={tdCls}>The massage head and brush pads need cleaning</td>
                  <td className={tdCls}>The contact head needs cleaning</td>
                </tr>
                <tr>
                  <td className={tdKey}>Electrode area</td>
                  <td className={tdCls}>Must be kept clean and dry, which relates to the electrical contact</td>
                  <td className={tdCls}>No electrodes, so no such item</td>
                </tr>
                <tr>
                  <td className={tdKey}>Liquid channel</td>
                  <td className={tdCls}>Where a tank is fitted, the tank and channel are cleaned as described in the manual (JMZ-901: refillable 5 mL)</td>
                  <td className={tdCls}>No liquid channel</td>
                </tr>
                <tr>
                  <td className={tdKey}>Water resistance and immersion</td>
                  <td className={tdCls}>To be confirmed — no water resistance rating is published for JMZ-901</td>
                  <td className={tdCls}>To be confirmed</td>
                </tr>
                <tr>
                  <td className={tdKey}>Replacement parts and consumables</td>
                  <td className={tdCls}>To be confirmed — no accessory list is published</td>
                  <td className={tdCls}>To be confirmed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={noteCls}>
            The page does not claim that the device can be rinsed or immersed: no water resistance rating is provided
            in the specification sheet, so no water related promise is made. Cleaning follows the supplied instructions.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className={shell}>
          <h2 className={sectionTitle}>Serum Tank Construction vs Dry Brush Construction</h2>
          <div className={tableCard}>
            <table className={tableCls}>
              <thead>
                <tr>
                  <th className={thCls}>&nbsp;</th>
                  <th className={thCls}>With a serum tank</th>
                  <th className={thCls}>Dry brush</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdKey}>Construction</td>
                  <td className={tdCls}>A refillable tank and a delivery channel inside the body (JMZ-901: 5 mL)</td>
                  <td className={tdCls}>A purely mechanical contact head with no liquid channel</td>
                </tr>
                <tr>
                  <td className={tdKey}>Before use</td>
                  <td className={tdCls}>The tank has to be filled</td>
                  <td className={tdCls}>Nothing to fill</td>
                </tr>
                <tr>
                  <td className={tdKey}>Cleaning</td>
                  <td className={tdCls}>Tank and channel are cleaned as described in the manual</td>
                  <td className={tdCls}>Only the contact head</td>
                </tr>
                <tr>
                  <td className={tdKey}>Packaging and accessories</td>
                  <td className={tdCls}>Usually includes filling accessories; the exact list is to be confirmed</td>
                  <td className={tdCls}>Simple structure and few accessories</td>
                </tr>
                <tr>
                  <td className={tdKey}>Retail positioning it suits</td>
                  <td className={tdCls}>Sold alongside a care-liquid range</td>
                  <td className={tdCls}>A simple, easy-to-maintain positioning</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={noteCls}>
            This table describes structural differences only. It makes no claim about any ingredient, effect or benefit.
          </p>
        </div>
      </section>

      <section className="border-t border-[#dfe5ee] bg-white py-16 sm:py-20">
        <div className={shell}>
          <h2 className={sectionTitle}>How Do I Request a Quote or a Sample?</h2>
          <p className={sectionLead}>
            Tell us the structure you are evaluating (rotating / EMS, or vibration), your target market, estimated
            quantity, and whether the project is OEM or ODM. We will confirm the model, customisation scope,
            packaging and commercial terms in one reply.
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

      <section className="border-t border-[#dfe5ee] bg-[#f4f8fc] py-14">
        <div className={shell}>
          <p className={sectionLabel}>Related reading</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <li>
              <Link href="/guides/choose-scalp-massager-supplier" className={relatedLink}>
                How to choose a scalp massager supplier
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

      <FaqBlock items={faqs} title="EMS vs Vibration: Frequently Asked Questions" />

      <section id="inquiry" className="scroll-mt-24 bg-[#172b48] py-20 text-white sm:py-24">
        <div className={`${shell} grid gap-12 lg:grid-cols-[.82fr_1.18fr]`}>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#a9c4e4]">Factory inquiry</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Evaluating EMS or vibration for your range?
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-white/70">
              Send the structure you are considering and your target market, and we will confirm the model,
              customisation scope, packaging and commercial terms.
            </p>
            <div className="mt-8 rounded-3xl border border-white/15 bg-white/[0.06] p-6">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#a9c4e4]">Guide</p>
              <p className="mt-3 text-2xl font-black">EMS vs vibration scalp massagers</p>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Current model: JMZ-901 rotating EMS scalp massager with LED light
              </p>
            </div>
          </div>
          <div className="min-w-0 rounded-3xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur sm:p-8">
            <InquiryForm
              id="ems-vs-vibration-inquiry-form"
              sourcePage={pagePath}
              theme="dark"
              initialProduct="EMS vs vibration scalp massager (guide)"
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
