import type { Metadata } from "next";
import Image from "next/image";
import InquiryForm from "@/components/InquiryForm";
import Jmz040Gallery from "@/components/Jmz040Gallery";
import { contactLinks } from "@/lib/company";
import { jmz040Product } from "@/lib/preview-products/jmz-040";
import { buildWhatsAppInquiryMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "JMZ-040 Butterfly Neck Massage Pillow | JAMOOZ Preview",
  description:
    "Preview of the JAMOOZ JMZ-040 butterfly neck and shoulder massage pillow product page.",
  robots: {
    index: false,
    follow: false,
  },
};

const productFeatures = [
  {
    number: "01",
    title: "Deep Kneading",
    description:
      "Designed to deliver targeted kneading massage around the neck, shoulder, back and waist areas.",
  },
  {
    number: "02",
    title: "Comforting Heat",
    description: "Integrated heating function adds warmth during massage.",
  },
  {
    number: "03",
    title: "Ergonomic Butterfly Shape",
    description:
      "Compact butterfly-shaped structure designed to fit different body areas.",
  },
  {
    number: "04",
    title: "Portable for Daily Use",
    description:
      "Suitable for use at home, in the office, during travel or in the car.",
  },
] as const;

const detailItems = [
  {
    title: "Massage Area",
    description:
      "The shaped contact area is designed to support targeted kneading around different body areas.",
  },
  {
    title: "Heating Area",
    description:
      "Integrated warmth complements the kneading experience. Final heating specifications remain to be confirmed.",
  },
  {
    title: "Control Area",
    description:
      "The final control layout and operating details will be added after the specification sheet is confirmed.",
  },
  {
    title: "Fabric / Surface",
    description:
      "Close-up fabric photography and the confirmed material description will be added to the final product page.",
  },
  {
    title: "Ergonomic Shape",
    description:
      "The compact butterfly-shaped profile is designed for flexible positioning around the neck, shoulder, back and waist.",
  },
] as const;

const confirmedSpecifications = [
  ["Model", "JMZ-040"],
  ["Product Type", "Massage Pillow"],
  ["Application", "Neck / Shoulder / Back / Waist"],
  ["MOQ", "50 pcs"],
  ["Reference Price", "From US$13.06 / pc"],
  ["OEM / ODM", "Available"],
] as const;

const pendingSpecifications = [
  "Product Size",
  "Product Weight",
  "Material",
  "Rated Power",
  "Input Voltage",
  "Battery Capacity",
  "Charging Method",
  "Charging Time",
  "Working Time",
  "Heating Temperature",
  "Massage Modes",
  "Massage Speed Levels",
  "Timer",
  "Noise Level",
  "Carton Size",
  "N.W.",
  "G.W.",
] as const;

const oemOptions = ["Custom Logo", "Custom Color", "Custom Packaging", "Private Label"] as const;
const packagingItems = ["Product", "Accessories", "User Manual", "Color Box", "Master Carton"] as const;

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="max-w-3xl">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.025em] text-[#302050] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-zinc-600">{description}</p>
      )}
    </header>
  );
}

export default function Jmz040PreviewPage() {
  const whatsappUrl = contactLinks.whatsapp(
    buildWhatsAppInquiryMessage({
      product: jmz040Product.inquiryProduct,
      sourcePage: "/preview/products/jmz-040",
    }),
  );

  return (
    <div className="overflow-x-hidden bg-white text-zinc-900">
      <section className="border-b border-zinc-200 bg-white py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
            <p>Products / Massage Pillows / JMZ-040</p>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-violet-800">
              Preview only
            </span>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[1.22fr_1fr] lg:gap-14 xl:gap-20">
            <Jmz040Gallery />

            <div className="min-w-0 lg:sticky lg:top-32">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-700">
                Massage Pillow
              </p>
              <h1 className="mt-4 text-[2.15rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#302050] sm:text-5xl lg:text-[3.25rem]">
                {jmz040Product.name}
              </h1>
              <p className="mt-5 text-lg font-medium leading-7 text-[#5b4773]">
                {jmz040Product.subtitle}
              </p>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-zinc-500">
                Model: {jmz040Product.model}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 lg:text-lg lg:leading-8">
                {jmz040Product.description}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-2.5 text-sm font-semibold text-[#3e2a59]">
                {[
                  "Deep Kneading",
                  "Heating Function",
                  "Ergonomic Butterfly Shape",
                  "Portable Design",
                ].map((feature) => (
                  <span
                    key={feature}
                    className="flex min-h-12 items-center rounded-xl border border-violet-100 bg-[#faf9fc] px-3 py-2.5"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-y border-zinc-200 py-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">From</p>
                <p className="mt-1 text-4xl font-semibold tracking-[-0.04em] text-[#302050]">
                  {jmz040Product.price} <span className="text-lg font-medium text-zinc-600">/ pc</span>
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <p className="text-base font-bold text-zinc-900">MOQ: {jmz040Product.moq}</p>
                  <p className="text-sm text-zinc-500">Volume pricing available for larger orders.</p>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a
                  href="#product-inquiry"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-violet-700 px-6 py-4 text-sm font-black tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
                >
                  REQUEST A QUOTE
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-analytics-location="jmz040_hero"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-4 text-sm font-black tracking-[0.08em] text-[#302050] transition hover:border-[#25D366] hover:bg-[#f5fff8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
                >
                  WHATSAPP US
                </a>
              </div>
              <a
                href={jmz040Product.alibabaUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex text-sm font-medium text-zinc-500 underline decoration-zinc-300 underline-offset-4 transition hover:text-violet-700"
              >
                View Alibaba Reference →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8fb] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Section 02 / Benefits" title="Designed for Everyday Relaxation" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {productFeatures.map((feature) => (
              <article key={feature.number} className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7">
                <span className="text-xs font-black tracking-[0.18em] text-violet-600">{feature.number}</span>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-[#302050]">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Section 03 / Applications"
            title="One Pillow. Multiple Ways to Relax."
            description="A flexible format for everyday relaxation across different body areas and daily environments."
          />
          <div className="mt-10 grid items-stretch gap-7 lg:grid-cols-[1.25fr_.75fr]">
            <div className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-zinc-200 bg-[#f8f9fa] sm:min-h-[520px]">
              <Image
                src="/products/jmz-040/jmz-040-main.webp"
                alt="JMZ-040 temporary lifestyle reference image"
                fill
                sizes="(max-width: 1023px) 100vw, 63vw"
                className="object-contain p-4 sm:p-8"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/80 bg-white/92 p-4 text-sm text-zinc-600 backdrop-blur-sm">
                <strong className="text-zinc-900">Lifestyle image slot</strong>
                <span className="ml-2">Temporary reference — replace with approved neck, back and travel photography.</span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                ["Body areas", "Neck · Shoulder · Back · Waist"],
                ["At home", "Use while relaxing on a sofa, chair or bed."],
                ["At work", "Compact format for office relaxation breaks."],
                ["On the move", "Suitable for car and travel scenarios."],
              ].map(([title, copy], index) => (
                <article key={title} className="flex gap-4 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-200 text-xs font-black text-violet-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#302050]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8fb] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Section 04 / Product details"
            title="Thoughtful Details"
            description="The layout is ready for approved close-up photography. Unconfirmed internal structures and technical values are intentionally excluded."
          />
          <div className="mt-12 space-y-6">
            {detailItems.map((detail, index) => (
              <article key={detail.title} className="grid overflow-hidden rounded-[24px] border border-zinc-200 bg-white md:grid-cols-2">
                <div className={`flex min-h-[250px] items-center justify-center bg-[#f1f2f4] p-8 text-center ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Detail image slot</p>
                    <p className="mt-3 text-base font-semibold text-zinc-700">{detail.title}</p>
                    <p className="mt-2 text-sm text-zinc-500">Approved close-up pending</p>
                  </div>
                </div>
                <div className="flex min-h-[250px] flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <p className="text-xs font-black tracking-[0.18em] text-violet-600">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#302050]">{detail.title}</h3>
                  <p className="mt-4 text-base leading-7 text-zinc-600">{detail.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Section 05 / Technical data"
            title="Product Specifications"
            description="Confirmed information is shown below. Pending values will be completed from the approved JMZ-040 specification sheet."
          />
          <div className="mt-10 overflow-hidden rounded-[24px] border border-zinc-200 bg-white">
            <table className="w-full table-fixed border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">JMZ-040 product specifications</caption>
              <tbody>
                {confirmedSpecifications.map(([label, value]) => (
                  <tr key={label} className="border-b border-zinc-200 last:border-b-0">
                    <th scope="row" className="w-[42%] bg-[#f8f8fa] px-4 py-4 font-semibold text-zinc-700 sm:px-6">
                      {label}
                    </th>
                    <td className="break-words px-4 py-4 font-medium text-[#302050] sm:px-6">{value}</td>
                  </tr>
                ))}
                {pendingSpecifications.map((label) => (
                  <tr key={label} className="border-b border-zinc-200 last:border-b-0">
                    <th scope="row" className="w-[42%] bg-[#f8f8fa] px-4 py-4 font-semibold text-zinc-700 sm:px-6">
                      {label}
                    </th>
                    <td className="break-words px-4 py-4 text-zinc-500 sm:px-6">To Be Confirmed</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8fb] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Section 06 / OEM & ODM"
            title="Make JMZ-040 Your Own"
            description="Flexible customization options for brands, distributors and wellness product partners."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {oemOptions.map((option, index) => (
              <article key={option} className="min-h-40 rounded-2xl border border-zinc-200 bg-white p-5 sm:min-h-48 sm:p-7">
                <span className="text-xs font-black tracking-[0.18em] text-violet-600">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-10 text-lg font-semibold tracking-tight text-[#302050] sm:text-xl">{option}</h3>
              </article>
            ))}
          </div>
          <p className="mt-7 max-w-3xl text-sm leading-6 text-zinc-600">
            Additional product or function customization can be discussed based on order requirements.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Section 07 / Delivery format"
            title="Packaging & Accessories"
            description="The structure below is reserved for the final packaging set and confirmed packing data."
          />
          <div className="mt-10 grid gap-7 lg:grid-cols-[1.05fr_.95fr]">
            <div className="flex min-h-[360px] items-center justify-center rounded-[28px] border border-zinc-200 bg-[#f1f2f4] p-8 text-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Packaging image slot</p>
                <p className="mt-3 text-xl font-semibold text-[#302050]">JMZ-040 complete package</p>
                <p className="mt-3 text-sm text-zinc-500">Approved packaging photography pending</p>
              </div>
            </div>
            <div className="rounded-[28px] border border-zinc-200 bg-white p-6 sm:p-8">
              <div className="divide-y divide-zinc-200">
                {packagingItems.map((item, index) => (
                  <div key={item} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                    <span className="flex items-center gap-3 font-semibold text-[#302050]">
                      <span className="text-xs font-black text-violet-600">{String(index + 1).padStart(2, "0")}</span>
                      {item}
                    </span>
                    <span className="text-xs font-medium text-zinc-500">To Be Confirmed</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 rounded-2xl bg-[#f8f8fb] p-4 text-sm leading-6 text-zinc-600">
                Packaging details available upon request. Carton quantity, dimensions, N.W. and G.W. will be added after confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="product-inquiry" className="scroll-mt-24 border-t border-violet-100 bg-[#f7f5fb] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Section 08 / Request a quote"
            title="Interested in JMZ-040?"
            description="Tell us your target quantity, branding and packaging requirements. Our team will prepare a quotation based on your project."
          />
          <div className="mt-10 grid gap-7 lg:grid-cols-[.72fr_1.28fr] lg:gap-10">
            <aside className="h-fit rounded-[28px] border border-zinc-200 bg-white p-5 sm:p-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#f8f9fa]">
                <Image
                  src="/products/jmz-040/jmz-040-main.webp"
                  alt="JMZ-040 butterfly neck and shoulder massage pillow"
                  fill
                  sizes="(max-width: 1023px) 100vw, 35vw"
                  className="object-contain p-3"
                />
              </div>
              <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-violet-700">JMZ-040</p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-tight text-[#302050]">
                {jmz040Product.shortName}
              </h3>
              <p className="mt-5 border-t border-zinc-200 pt-5 text-base font-bold text-zinc-900">MOQ: {jmz040Product.moq}</p>
            </aside>

            <div className="min-w-0 rounded-[28px] border border-zinc-200 bg-white p-5 sm:p-8 lg:p-10">
              <InquiryForm
                id="jmz-040-preview-inquiry-form"
                sourcePage="/preview/products/jmz-040"
                initialProduct={jmz040Product.inquiryProduct}
                submitLabel="REQUEST FACTORY QUOTE"
                detailsOpen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
