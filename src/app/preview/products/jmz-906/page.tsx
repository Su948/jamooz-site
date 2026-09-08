import type { Metadata } from "next";
import Image from "next/image";
import InquiryForm from "@/components/InquiryForm";
import Jmz906Gallery from "@/components/Jmz906Gallery";
import { contactLinks } from "@/lib/company";
import { jmz906Prices, jmz906Specs, type SpecStatus } from "@/lib/preview-products/jmz-906";
import { buildWhatsAppInquiryMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "JMZ-906 Cooling Vacuum Gua Sha Massager | JAMOOZ Preview",
  description: "Preview the JMZ-906 handheld cooling, vacuum suction and gua sha body care device for OEM and ODM projects.",
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

const detailCards = [
  { title: "Cooling Surface / Area", image: "/products/jmz-906/contact-head.jpg", copy: "The central contact area supports the device's cooling and heating modes for direct body-care use." },
  { title: "Vacuum Cup", image: "/products/jmz-906/contact-head-with-cover.jpg", copy: "A recessed central suction opening is integrated into the contact head, with a removable cover for storage." },
  { title: "Control Interface", image: "/products/jmz-906/controls.jpg", copy: "Five physical buttons provide power, intensity adjustment, EMS selection and mode control." },
  { title: "Handheld Body", image: "/products/jmz-906/front.jpg", copy: "A tapered one-piece profile gives operators a clear grip area and keeps the controls within easy reach." },
  { title: "Skin-contact Structure", image: "/products/jmz-906/contact-head.jpg", copy: "Four rounded massage rollers, two contact pieces and the central suction area form the working surface." },
  { title: "Charging / Power Area", image: "/products/jmz-906/usb-c.jpg", copy: "The USB-C charging port is positioned near the top of the rear housing for simple cable access." },
] as const;

const packagingItems = [
  { name: "Product", status: "Actual sample photographed" },
  { name: "Packaging", status: "Final structure TBC" },
  { name: "Accessories", status: "Gel and USB-C cable listed in manual" },
  { name: "User Manual", status: "Available" },
  { name: "Color Box", status: "Artwork and size TBC" },
  { name: "Master Carton", status: "Quantity, size and G.W. TBC" },
] as const;

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current stroke-2"><path d="M4 10h12M11 5l5 5-5 5" /></svg>;
}

export default function Jmz906PreviewPage() {
  const sourcePage = "/preview/products/jmz-906";
  const whatsappUrl = contactLinks.whatsapp(buildWhatsAppInquiryMessage({
    sourcePage,
    product: "JMZ-906 – Cooling Vacuum Gua Sha Massager",
  }));

  return (
    <main className="overflow-x-hidden bg-[#fffdfb] text-[#3d3339]">
      <section className="border-b border-[#eadde2] bg-[linear-gradient(135deg,#fffafa_0%,#f8eef1_55%,#f3e3e9_100%)] py-10 sm:py-14 lg:py-20">
        <div className={`${shell} grid items-center gap-10 lg:grid-cols-[55fr_45fr] lg:gap-14`}>
          <Jmz906Gallery />

          <div className="min-w-0">
            <p className={sectionLabel}>JMZ-906 · OEM / ODM BODY CARE DEVICE</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#261c24] sm:text-5xl lg:text-[58px]">
              Cooling Vacuum Gua Sha Massager for Body Care
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#70636b] sm:text-lg sm:leading-8">
              A handheld body care device combining cooling, vacuum suction and gua sha functions in a compact design for modern wellness routines.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Cooling Care", "Vacuum Suction", "Gua Sha Massage", "Portable Design"].map((badge) => (
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
          <p className={sectionLabel}>Integrated modes</p>
          <h2 className={sectionTitle}>Cooling, Suction &amp; Gua Sha in One</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#70636b]">A compact working head brings several body-care functions into one handheld format, with separate controls for suction, EMS and operating mode.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["01", "Cooling contact", "A smooth central surface provides a cooling sensation during skin-contact body-care routines."],
              ["02", "Vacuum suction", "Adjustable suction supports controlled skin contact, with intensity selected from the handle."],
              ["03", "Gua sha massage", "Rounded contact elements support gliding massage across suitable body areas."],
            ].map(([number, title, copy]) => (
              <article key={title} className="rounded-3xl border border-[#eadde2] bg-white p-7 shadow-[0_16px_45px_rgba(80,45,60,0.05)]">
                <span className="text-xs font-black tracking-[0.18em] text-[#bd7892]">{number}</span>
                <h3 className="mt-8 text-xl font-black text-[#30242a]">{title}</h3>
                <p className="mt-3 leading-7 text-[#74676e]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#33252d] py-20 text-white sm:py-24">
        <div className={`${shell} grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]`}>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#e7a9bf]">Body area guide</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-[44px]">Designed for Modern Body Care</h2>
            <p className="mt-5 max-w-2xl leading-7 text-white/68">Designed for direct skin contact across common body-care areas. Use an appropriate glide medium and follow the supplied operating instructions.</p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {["Shoulder", "Back", "Waist", "Abdomen", "Thigh", "Arm"].map((area) => (
                <div key={area} className="rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-5">
                  <span className="block h-1.5 w-8 rounded-full bg-[#d88eaa]" />
                  <p className="mt-5 font-bold">{area}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex aspect-[4/3] items-center justify-center rounded-[2rem] border border-dashed border-white/25 bg-[radial-gradient(circle_at_center,rgba(216,142,170,.17),transparent_55%)] p-8 text-center">
            <div>
              <svg aria-hidden="true" viewBox="0 0 120 160" className="mx-auto h-40 w-32 fill-none stroke-[#e5b2c5] stroke-[3]"><circle cx="60" cy="20" r="14" /><path d="M42 42c-8 23-9 49-3 76l-12 34M78 42c8 23 9 49 3 76l12 34M40 54l-25 48M80 54l25 48M39 118l-4 36M81 118l4 36M47 44c8 5 18 5 26 0" /></svg>
              <p className="mt-5 text-sm font-bold text-white/80">Lifestyle image reserved</p>
              <p className="mt-2 text-xs leading-5 text-white/48">Use a real application photo when available.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>Real sample close-ups</p>
          <h2 className={sectionTitle}>Designed Around the Details</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#70636b]">Every image below comes from the supplied JMZ-906 physical sample photography.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {detailCards.map((card) => (
              <article key={card.title} className="overflow-hidden rounded-3xl border border-[#eadde2] bg-white">
                <div className="relative aspect-[4/3] bg-[#eef4f5]">
                  <Image src={card.image} alt={`${card.title} on the actual JMZ-906 sample`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
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
            <p className="mt-4 max-w-xl leading-7 text-[#70636b]">The sample and product documents confirm the core device and listed items. Final packing configuration remains project-specific.</p>
            <div className="mt-8 flex aspect-[4/3] items-center justify-center rounded-3xl border border-dashed border-[#d6bcc6] bg-white p-8 text-center">
              <div>
                <svg aria-hidden="true" viewBox="0 0 96 96" className="mx-auto h-20 w-20 fill-none stroke-[#b86b87] stroke-2"><path d="M15 29l33-17 33 17-33 17-33-17Z" /><path d="M15 29v38l33 17 33-17V29M48 46v38" /></svg>
                <p className="mt-4 font-bold text-[#5e4651]">Packaging image reserved</p>
                <p className="mt-2 text-xs text-[#8a7a82]">Replace after final color box and accessory layout approval.</p>
              </div>
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
              <Image src="/products/jmz-906/front.jpg" alt="Actual JMZ-906 pink product sample" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-contain" />
            </div>
            <div className="mt-5 rounded-2xl border border-white/12 bg-white/[0.06] p-5">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#e7a9bf]">Model</p>
              <p className="mt-2 text-lg font-black">JMZ-906</p>
              <p className="mt-1 text-sm text-white/58">Cooling Vacuum Gua Sha Massager</p>
            </div>
          </div>
          <div className="min-w-0 rounded-3xl border border-white/12 bg-white/[0.07] p-5 backdrop-blur sm:p-8">
            <InquiryForm
              id="jmz-906-inquiry-form"
              sourcePage={sourcePage}
              theme="dark"
              initialProduct="JMZ-906 – Cooling Vacuum Gua Sha Massager"
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
