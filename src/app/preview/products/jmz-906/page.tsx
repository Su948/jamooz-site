import type { Metadata } from "next";
import Image from "next/image";
import InquiryForm from "@/components/InquiryForm";
import Jmz906Gallery from "@/components/Jmz906Gallery";
import { contactLinks } from "@/lib/company";
import { jmz906Prices, jmz906Specs, type SpecStatus } from "@/lib/preview-products/jmz-906";
import { buildWhatsAppInquiryMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "JMZ-906 Hot & Cold Vacuum Gua Sha Massager | JAMOOZ Preview",
  description: "Explore the JMZ-906 four-mode body massager with vacuum suction, heating, cooling and EMS for OEM and ODM projects.",
  robots: { index: false, follow: false },
};

const sectionLabel = "text-[11px] font-black uppercase tracking-[0.22em] text-[#a45475]";
const sectionTitle = "mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#261c24] sm:text-4xl lg:text-[44px]";
const shell = "mx-auto w-full max-w-[1240px] px-5 sm:px-8";

const statusStyles: Record<SpecStatus, string> = {
  Confirmed: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  Reference: "bg-amber-50 text-amber-800 ring-amber-200",
  TBC: "bg-slate-100 text-slate-700 ring-slate-200",
};

const modeCards = [
  { title: "Vacuum suction", eyebrow: "0–12 levels", image: "/products/jmz-906/JMZ-906-14-function-vacuum-suction.webp", copy: "Adjustable suction supports controlled skin contact. The device starts at level 3, while level 0 turns suction off." },
  { title: "Warming care", eyebrow: "Approx. 38°C", image: "/products/jmz-906/JMZ-906-20-function-heating-led.webp", copy: "The heating mode provides a warm contact experience under the supplied 3.7 V standard test conditions." },
  { title: "Cooling care", eyebrow: "Approx. 12.8°C", image: "/products/jmz-906/JMZ-906-19-function-cooling-led.webp", copy: "The cooling mode provides a refreshing contact experience under the supplied 3.7 V standard test conditions." },
  { title: "EMS mode", eyebrow: "0–12 levels", image: "/products/jmz-906/JMZ-906-15-function-ems.webp", copy: "Press the dedicated EMS key, then use the + and − controls to select the preferred EMS intensity." },
] as const;

const controlHighlights = [
  { title: "Level & mode display", image: "/products/jmz-906/JMZ-906-12-function-display-level.webp", copy: "The circular screen shows the current level and active operating mode at a glance." },
  { title: "Hot / cold contact system", image: "/products/jmz-906/JMZ-906-13-function-hot-cold.webp", copy: "Short-press the M key to cycle through cooling, heating and temperature-off states." },
  { title: "Four-mode body-care platform", image: "/products/jmz-906/JMZ-906-16-function-overview-clinical.webp", copy: "Vacuum suction, warming, cooling and EMS are combined in a single handheld format." },
] as const;

const indicatorCards = [
  { title: "Cooling selected", image: "/products/jmz-906/JMZ-906-19-function-cooling-led.webp", copy: "Blue lighting provides a visual cue for cooling mode." },
  { title: "Heating selected", image: "/products/jmz-906/JMZ-906-20-function-heating-led.webp", copy: "Red lighting provides a visual cue for heating mode." },
  { title: "EMS selected", image: "/products/jmz-906/JMZ-906-21-function-ems-led.webp", copy: "Cyan pulse styling identifies the EMS operating state." },
  { title: "Charging", image: "/products/jmz-906/JMZ-906-22-function-charging-red.webp", copy: "The small indicator flashes red while the battery is charging." },
  { title: "Fully charged", image: "/products/jmz-906/JMZ-906-23-function-charge-full-green.webp", copy: "The small indicator remains green when charging is complete." },
] as const;

const detailCards = [
  { title: "Five-key control panel", image: "/products/jmz-906/JMZ-906-06-gallery-controls.webp", copy: "Separate power, +, −, EMS and M buttons keep the operating sequence clear and direct." },
  { title: "Type-C charging", image: "/products/jmz-906/JMZ-906-07-gallery-type-c.webp", copy: "The Type-C charging port is positioned at the top of the rear housing for convenient cable access." },
  { title: "Multi-contact treatment head", image: "/products/jmz-906/JMZ-906-08-gallery-treatment-head.webp", copy: "Four metal massage points, two crescent electrodes and a central six-hole suction inlet form the working head." },
  { title: "Circular LED display", image: "/products/jmz-906/JMZ-906-11-gallery-display-led.webp", copy: "The display presents intensity and mode information, with a small indicator for charging status." },
  { title: "Retail set presentation", image: "/products/jmz-906/JMZ-906-09-gallery-set-contents.webp", copy: "The supplied image shows a coordinated retail-set presentation; final set contents are confirmed per order." },
  { title: "Gift-box packaging", image: "/products/jmz-906/JMZ-906-10-gallery-packaging.webp", copy: "A presentation box is available as a packaging reference, with artwork and configuration customizable for the project." },
] as const;

const packagingItems = [
  { name: "Product", status: "JMZ-906 device shown in the supplied image pack" },
  { name: "Packaging", status: "Presentation box photographed; final structure and artwork project-specific" },
  { name: "Set Contents", status: "Supplied set presentation available; final items confirmed with quotation" },
  { name: "User Manual", status: "Available" },
  { name: "Color Box", status: "Custom artwork and final size TBC" },
  { name: "Master Carton", status: "Quantity, size and G.W. TBC" },
] as const;

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current stroke-2"><path d="M4 10h12M11 5l5 5-5 5" /></svg>;
}

export default function Jmz906PreviewPage() {
  const sourcePage = "/preview/products/jmz-906";
  const whatsappUrl = contactLinks.whatsapp(buildWhatsAppInquiryMessage({
    sourcePage,
    product: "JMZ-906 – Hot & Cold Vacuum Gua Sha Massager",
  }));

  return (
    <main className="overflow-x-hidden bg-[#fffdfb] text-[#3d3339]">
      <section className="border-b border-[#eadde2] bg-[linear-gradient(135deg,#fffafa_0%,#f8eef1_55%,#f3e3e9_100%)] py-10 sm:py-14 lg:py-20">
        <div className={`${shell} grid items-center gap-10 lg:grid-cols-[55fr_45fr] lg:gap-14`}>
          <Jmz906Gallery />

          <div className="min-w-0">
            <p className={sectionLabel}>JMZ-906 · OEM / ODM BODY CARE DEVICE</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#261c24] sm:text-5xl lg:text-[58px]">
              Hot &amp; Cold Vacuum Gua Sha Massager
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#70636b] sm:text-lg sm:leading-8">
              A four-mode handheld body-care device combining adjustable vacuum suction, warming, cooling and EMS with a broad multi-contact working head.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["0–12 Suction Levels", "Approx. 38°C Heating", "Approx. 12.8°C Cooling", "0–12 EMS Levels"].map((badge) => (
                <span key={badge} className="rounded-full border border-[#dec6d0] bg-white/80 px-3.5 py-2 text-xs font-bold text-[#6d3850]">{badge}</span>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/80 bg-white/78 p-5 shadow-[0_20px_55px_rgba(94,45,65,0.08)] backdrop-blur sm:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#806f77]">Factory pricing</p>
              <div className="mt-2 flex flex-wrap items-end gap-x-4 gap-y-1">
                <p className="text-3xl font-black tracking-tight text-[#8f405f]">From US$15.90 / pc</p>
                <p className="pb-1 text-sm font-bold text-[#4c4147]">MOQ 50 pcs</p>
              </div>
              <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-xl border border-[#eadde2] sm:grid-cols-4">
                {jmz906Prices.map((tier, index) => (
                  <div key={tier.quantity} className={`p-3 ${index % 2 === 0 ? "bg-[#fff9fb]" : "bg-white"} ${index > 0 ? "border-l border-[#eadde2]" : ""}`}>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#897982]">{tier.quantity}</p>
                    <p className="mt-1 text-sm font-black text-[#3b2932]">{tier.price}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap justify-between gap-2 text-xs text-[#7f7178]">
                <span>Sample: <strong className="text-[#4a3d44]">US$38</strong></span>
                <span>Tier boundaries shown as supplied; confirmed with the final quote.</span>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a href="#inquiry" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#8f405f] px-6 py-3.5 text-sm font-black tracking-[0.08em] text-white shadow-lg shadow-[#8f405f]/20 transition hover:-translate-y-0.5 hover:bg-[#74334d]">REQUEST A QUOTE <ArrowIcon /></a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#8f405f] bg-white px-6 py-3.5 text-sm font-black tracking-[0.08em] text-[#74334d] transition hover:-translate-y-0.5 hover:bg-[#fff3f7]">WHATSAPP US <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>Four operating modes</p>
          <h2 className={sectionTitle}>One Device, Four Body-Care Experiences</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#70636b]">Select vacuum suction, warming, cooling or EMS according to the desired routine, then adjust the available intensity from the handle.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {modeCards.map((mode) => (
              <article key={mode.title} className="overflow-hidden rounded-3xl border border-[#eadde2] bg-white shadow-[0_16px_45px_rgba(80,45,60,0.05)]">
                <div className="relative aspect-[4/3] bg-[#f7f2f4]">
                  <Image src={mode.image} alt={`${mode.title} presentation for JMZ-906`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6 sm:p-7">
                  <span className="text-xs font-black uppercase tracking-[0.15em] text-[#bd7892]">{mode.eyebrow}</span>
                  <h3 className="mt-3 text-xl font-black text-[#30242a]">{mode.title}</h3>
                  <p className="mt-3 leading-7 text-[#74676e]">{mode.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f2f4] py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>Controls &amp; feedback</p>
          <h2 className={sectionTitle}>Clear Settings, Direct Operation</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#70636b]">Five physical buttons, a circular display and color-coded indicators help make the active setting easy to identify.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {controlHighlights.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-3xl border border-[#eadde2] bg-white">
                <div className="relative aspect-[4/3] bg-white"><Image src={item.image} alt={`${item.title} on JMZ-906`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" /></div>
                <div className="p-6"><h3 className="text-lg font-black text-[#30242a]">{item.title}</h3><p className="mt-3 text-sm leading-6 text-[#74676e]">{item.copy}</p></div>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-3 rounded-3xl border border-[#dfcfd5] bg-white p-5 sm:grid-cols-3 sm:p-6">
            <div><p className="text-xs font-black uppercase tracking-[0.14em] text-[#a45475]">Power</p><p className="mt-2 text-sm leading-6 text-[#6f6269]">Hold for about 1.5 seconds to turn the device on or off.</p></div>
            <div><p className="text-xs font-black uppercase tracking-[0.14em] text-[#a45475]">Quick release</p><p className="mt-2 text-sm leading-6 text-[#6f6269]">Short-press power during use for approximately 1 second of pressure release.</p></div>
            <div><p className="text-xs font-black uppercase tracking-[0.14em] text-[#a45475]">Auto shut-off</p><p className="mt-2 text-sm leading-6 text-[#6f6269]">Each working cycle runs for 10 minutes before automatic shut-off.</p></div>
          </div>
          <div className="mt-4 rounded-2xl border border-[#e6cbd5] bg-[#fff8fa] px-5 py-4 text-sm leading-6 text-[#6f6269]">
            <span className="font-black text-[#8e4664]">Before use:</span> Remove the pink protective/storage cover to expose the working head. Refit it after use for cleaner storage.
          </div>
        </div>
      </section>

      <section className="bg-[#33252d] py-20 text-white sm:py-24">
        <div className={`${shell} grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]`}>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#e7a9bf]">Body area guide</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-[44px]">Made for Everyday Body-Care Routines</h2>
            <p className="mt-5 max-w-2xl leading-7 text-white/68">The ergonomic handle and rounded working head support controlled gliding across suitable body areas. Apply an appropriate glide medium and follow the supplied operating instructions.</p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {["Shoulder", "Back", "Waist", "Abdomen", "Thigh", "Calf"].map((area) => (
                <div key={area} className="rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-5">
                  <span className="block h-1.5 w-8 rounded-full bg-[#d88eaa]" />
                  <p className="mt-5 font-bold">{area}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <article className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06]">
              <div className="relative aspect-[4/3]"><Image src="/products/jmz-906/JMZ-906-17-scene-post-workout-calf-effect.webp" alt="JMZ-906 used for a post-activity calf-care routine" fill sizes="(min-width: 1280px) 24vw, (min-width: 640px) 50vw, 100vw" className="object-cover" /></div>
              <div className="p-5"><p className="font-black">Post-activity calf care</p><p className="mt-2 text-sm leading-6 text-white/58">A comfortable seated routine for targeted calf massage and cooling or warming contact.</p></div>
            </article>
            <article className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06]">
              <div className="relative aspect-[4/3]"><Image src="/products/jmz-906/JMZ-906-18-scene-waist-effect.webp" alt="JMZ-906 used for a waist body-care routine" fill sizes="(min-width: 1280px) 24vw, (min-width: 640px) 50vw, 100vw" className="object-cover" /></div>
              <div className="p-5"><p className="font-black">Waist body care</p><p className="mt-2 text-sm leading-6 text-white/58">The extended handle helps guide the working head across the waist and other suitable body areas.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>Product close-ups</p>
          <h2 className={sectionTitle}>Designed Around the Details</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#70636b]">The supplied image pack documents the controls, charging port, working head, display and retail presentation.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {detailCards.map((card) => (
              <article key={card.title} className="overflow-hidden rounded-3xl border border-[#eadde2] bg-white">
                <div className="relative aspect-[4/3] bg-[#eef4f5]">
                  <Image src={card.image} alt={`${card.title} on JMZ-906`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black text-[#30242a]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#74676e]">{card.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadde2] bg-[#fff8fa] py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>Mode &amp; charging indicators</p>
          <h2 className={sectionTitle}>Visual Feedback at a Glance</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#70636b]">Color cues help identify cooling, heating and EMS states, while the small display indicator communicates charging progress.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {indicatorCards.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-3xl border border-[#eadde2] bg-white">
                <div className="relative aspect-[4/3] bg-[#f6f8f8]"><Image src={item.image} alt={`${item.title} indicator on JMZ-906`} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" className="object-cover" /></div>
                <div className="p-5"><h3 className="font-black text-[#30242a]">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#74676e]">{item.copy}</p></div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-[#887980]">When battery power is low, the red indicator flashes before the device shuts down automatically.</p>
        </div>
      </section>

      <section className="bg-[#f8f2f4] py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>Data transparency</p>
          <h2 className={sectionTitle}>Product Specifications</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#70636b]">Confirmed values are taken from the current product documents. Reference and TBC items stay visibly separated until final order confirmation.</p>
          <div className="mt-10 overflow-hidden rounded-3xl border border-[#dfcfd5] bg-white">
            <table className="w-full table-fixed border-collapse text-left text-sm">
              <thead className="bg-[#3b2b33] text-white">
                <tr>
                  <th className="w-[32%] px-3 py-4 font-bold sm:px-5">Item</th>
                  <th className="w-[46%] px-3 py-4 font-bold sm:px-5">Value</th>
                  <th className="w-[22%] px-2 py-4 font-bold sm:px-5">Status</th>
                </tr>
              </thead>
              <tbody>
                {jmz906Specs.map((spec, index) => (
                  <tr key={spec.item} className={index % 2 === 0 ? "bg-white" : "bg-[#fdf8fa]"}>
                    <th scope="row" className="break-words border-t border-[#eee2e6] px-3 py-4 font-bold text-[#3b3036] sm:px-5">{spec.item}</th>
                    <td className="break-words border-t border-[#eee2e6] px-3 py-4 leading-6 text-[#6f6269] sm:px-5">{spec.value}</td>
                    <td className="border-t border-[#eee2e6] px-2 py-4 sm:px-5"><span className={`inline-flex max-w-full rounded-full px-2 py-1 text-[9px] font-black uppercase tracking-wide ring-1 ring-inset sm:px-2.5 sm:text-[10px] ${statusStyles[spec.status]}`}>{spec.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-xs leading-5 text-[#887980]">Reference data may describe an earlier market version. Final commercial specifications, tolerances and packing data are subject to project confirmation.</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>OEM / ODM options</p>
          <h2 className={sectionTitle}>Customize JMZ-906 for Your Brand</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#70636b]">Build a retail-ready configuration around your brand identity, sales channel and destination market.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Custom Logo", "Logo placement and suitable marking process."],
              ["Custom Color", "Housing color matched to project requirements."],
              ["Custom Packaging", "Packaging structure and artwork for your channel."],
              ["Private Label", "Brand presentation across product and packing."],
              ["Function Configuration", "Available options depend on project requirements and final product specification."],
            ].map(([title, copy], index) => (
              <article key={title} className="rounded-3xl border border-[#eadde2] bg-white p-6">
                <span className="text-xs font-black text-[#bd7892]">0{index + 1}</span>
                <h3 className="mt-8 text-lg font-black text-[#30242a]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#74676e]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadde2] bg-[#fff8fa] py-20 sm:py-24">
        <div className={`${shell} grid items-start gap-12 lg:grid-cols-[.9fr_1.1fr]`}>
          <div>
            <p className={sectionLabel}>Packing status</p>
            <h2 className={sectionTitle}>Packaging &amp; Accessories</h2>
            <p className="mt-4 max-w-xl leading-7 text-[#70636b]">The supplied image pack includes a retail-box concept and coordinated set presentation. Final contents, artwork and carton data remain project-specific.</p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-3xl border border-[#d6bcc6] bg-white">
              <Image src="/products/jmz-906/JMZ-906-10-gallery-packaging.webp" alt="JMZ-906 retail color box presentation" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:pt-16">
            {packagingItems.map((item) => (
              <div key={item.name} className="rounded-2xl border border-[#eadde2] bg-white p-5">
                <p className="font-black text-[#3c2e35]">{item.name}</p>
                <p className="mt-2 text-sm leading-6 text-[#75676e]">{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-24 bg-[#2f232a] py-20 text-white sm:py-24">
        <div className={`${shell} grid gap-12 lg:grid-cols-[.82fr_1.18fr]`}>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#e7a9bf]">Factory inquiry</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-[44px]">Interested in JMZ-906?</h2>
            <p className="mt-5 max-w-lg leading-7 text-white/68">Tell us your quantity, target market and customization requirements. Our team will prepare the next-step product and quotation details.</p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-3xl border border-white/12 bg-[#eef4f5]">
              <Image src="/products/jmz-906/JMZ-906-01-home-card.webp" alt="JMZ-906 pink four-mode body massager" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-contain" />
            </div>
            <div className="mt-5 rounded-2xl border border-white/12 bg-white/[0.06] p-5">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#e7a9bf]">Model</p>
              <p className="mt-2 text-lg font-black">JMZ-906</p>
              <p className="mt-1 text-sm text-white/58">Hot &amp; Cold Vacuum Gua Sha Massager</p>
            </div>
          </div>
          <div className="min-w-0 rounded-3xl border border-white/12 bg-white/[0.07] p-5 backdrop-blur sm:p-8">
            <InquiryForm
              id="jmz-906-inquiry-form"
              sourcePage={sourcePage}
              theme="dark"
              initialProduct="JMZ-906 – Hot & Cold Vacuum Gua Sha Massager"
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
