import InquiryForm from "@/components/InquiryForm";
import ProductGallery from "@/components/ProductGallery";
import { contactLinks } from "@/lib/company";
import type { ProductDetailConfig, ProductSpecStatus } from "@/lib/product-detail";
import { buildWhatsAppInquiryMessage } from "@/lib/whatsapp";

const shell = "mx-auto w-full max-w-[1240px] px-5 sm:px-8";
const sectionLabel = "text-[11px] font-black uppercase tracking-[0.22em] text-[#315b8d]";
const sectionTitle = "mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#17243a] sm:text-4xl lg:text-[44px]";

const statusStyles: Record<ProductSpecStatus, string> = {
  Confirmed: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  TBC: "bg-slate-100 text-slate-700 ring-slate-200",
};

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current stroke-2"><path d="M4 10h12M11 5l5 5-5 5" /></svg>;
}

export default function ProductDetailTemplate({ product }: { product: ProductDetailConfig }) {
  const sourcePage = `/products/${product.slug}`;
  const productName = `${product.model} – ${product.name}`;
  const whatsappUrl = contactLinks.whatsapp(buildWhatsAppInquiryMessage({ sourcePage, product: productName }));

  return (
    <main className="overflow-x-hidden bg-[#fbfcfe] text-[#334055]">
      <section className="border-b border-[#dfe5ee] bg-[linear-gradient(135deg,#fbfdff_0%,#eef3f8_55%,#e6edf5_100%)] py-10 sm:py-14 lg:py-20">
        <div className={`${shell} grid items-center gap-10 lg:grid-cols-[55fr_45fr] lg:gap-14`}>
          <ProductGallery model={product.model} images={product.gallery} />

          <div className="min-w-0">
            <p className={sectionLabel}>{product.model} · {product.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#17243a] sm:text-5xl lg:text-[58px]">{product.name}</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#607086] sm:text-lg sm:leading-8">{product.description}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {product.badges.map((badge) => <span key={badge} className="rounded-full border border-[#ccd8e6] bg-white/85 px-3.5 py-2 text-xs font-bold text-[#24456f]">{badge}</span>)}
            </div>

            <div className="mt-8 rounded-2xl border border-white/85 bg-white/82 p-5 shadow-[0_20px_55px_rgba(38,67,105,0.09)] backdrop-blur sm:p-6">
              {product.customPricing ? (
                <>
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#718097]">Custom pricing</p>
                  <p className="mt-2 text-3xl font-black tracking-tight text-[#244f82]">Custom Quote</p>
                  <p className="mt-3 text-sm leading-6 text-[#607086]">Pricing and MOQ are confirmed according to the selected functions, branding, packaging and order quantity.</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {["Function Configuration", "Branding & Color", "Packaging & Quantity"].map((item) => <div key={item} className="rounded-xl border border-[#dfe5ee] bg-[#f7faff] px-3 py-3 text-center text-xs font-bold text-[#334055]">{item}</div>)}
                  </div>
                </>
              ) : (
                <>
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#718097]">Volume price range</p>
                  <div className="mt-2 flex flex-wrap items-end gap-x-4 gap-y-1">
                    <p className="text-3xl font-black tracking-tight text-[#244f82]">{product.priceRange}</p>
                    <p className="pb-1 text-sm font-bold text-[#334055]">{product.moq}</p>
                  </div>
                  <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-xl border border-[#dfe5ee] sm:grid-cols-4">
                    {product.priceTiers?.map((tier, index) => <div key={tier.quantity} className={`p-3 ${index % 2 === 0 ? "bg-[#f7faff]" : "bg-white"} ${index > 0 ? "border-l border-[#dfe5ee]" : ""}`}><p className="text-[10px] font-bold uppercase tracking-wider text-[#7a8799]">{tier.quantity}</p><p className="mt-1 text-sm font-black text-[#24344b]">{tier.price}</p></div>)}
                  </div>
                  <div className="mt-3 flex flex-wrap justify-between gap-2 text-xs text-[#708095]"><span>Sample: <strong className="text-[#334055]">{product.samplePrice}</strong></span><span>Volume prices are confirmed with the final quotation.</span></div>
                </>
              )}
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
          <p className={sectionLabel}>{product.featuresLabel}</p>
          <h2 className={sectionTitle}>{product.featuresTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#607086]">{product.featuresIntro}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.features.map((feature, index) => <article key={feature.title} className="rounded-3xl border border-[#dfe5ee] bg-white p-6 shadow-[0_16px_40px_rgba(38,67,105,0.05)]"><span className="text-xs font-black text-[#4f79a8]">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-8 text-lg font-black text-[#1f3048]">{feature.title}</h3><p className="mt-3 text-sm leading-6 text-[#66758a]">{feature.copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="border-y border-[#dfe5ee] bg-[#f1f5f9] py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>Data transparency</p>
          <h2 className={sectionTitle}>Product Specifications</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#607086]">{product.specsIntro}</p>
          <div className="mt-10 overflow-hidden rounded-3xl border border-[#d4dde8] bg-white">
            <table className="w-full table-fixed border-collapse text-left text-sm">
              <thead className="bg-[#172b48] text-white"><tr><th className="w-[32%] px-3 py-4 font-bold sm:px-5">Item</th><th className="w-[46%] px-3 py-4 font-bold sm:px-5">Value</th><th className="w-[22%] px-2 py-4 font-bold sm:px-5">Status</th></tr></thead>
              <tbody>{product.specs.map((spec, index) => <tr key={spec.item} className={index % 2 === 0 ? "bg-white" : "bg-[#f7faff]"}><th scope="row" className="break-words border-t border-[#e3e9f0] px-3 py-4 font-bold text-[#26364d] sm:px-5">{spec.item}</th><td className="break-words border-t border-[#e3e9f0] px-3 py-4 leading-6 text-[#607086] sm:px-5">{spec.value}</td><td className="border-t border-[#e3e9f0] px-2 py-4 sm:px-5"><span className={`inline-flex max-w-full rounded-full px-2 py-1 text-[9px] font-black uppercase tracking-wide ring-1 ring-inset sm:px-2.5 sm:text-[10px] ${statusStyles[spec.status]}`}>{spec.status}</span></td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className={shell}>
          <p className={sectionLabel}>OEM / ODM options</p>
          <h2 className={sectionTitle}>Prepare {product.model} for Your Market</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#607086]">Logo, color and retail packaging can be customized for qualified orders. Smaller customized runs may be discussed with an additional charge.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[["Custom Logo", "Standard MOQ 500 pcs"], ["Custom Color", "Standard MOQ 500 pcs per color"], ["Color Box", "Standard MOQ 500 pcs"], ["Corrugated Box", "Standard MOQ 300 pcs"]].map(([title, copy], index) => <article key={title} className="rounded-3xl border border-[#dfe5ee] bg-white p-6"><span className="text-xs font-black text-[#4f79a8]">0{index + 1}</span><h3 className="mt-8 text-lg font-black text-[#1f3048]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#66758a]">{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-24 bg-[#172b48] py-20 text-white sm:py-24">
        <div className={`${shell} grid gap-12 lg:grid-cols-[.82fr_1.18fr]`}>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#a9c4e4]">Factory inquiry</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-[44px]">Interested in {product.model}?</h2>
            <p className="mt-5 max-w-lg leading-7 text-white/68">{product.inquiryCopy}</p>
            <div className="mt-8 rounded-3xl border border-white/12 bg-white/[0.06] p-6">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#a9c4e4]">Selected product</p>
              <p className="mt-3 text-2xl font-black">{product.model}</p>
              <p className="mt-2 text-sm leading-6 text-white/65">{product.name}</p>
              <div className="mt-5 flex flex-wrap gap-2">{product.badges.map((badge) => <span key={badge} className="rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-xs font-bold text-white/78">{badge}</span>)}</div>
            </div>
          </div>
          <div className="min-w-0 rounded-3xl border border-white/12 bg-white/[0.07] p-5 backdrop-blur sm:p-8">
            <InquiryForm id={`${product.slug}-inquiry-form`} sourcePage={sourcePage} theme="dark" initialProduct={productName} submitLabel="REQUEST FACTORY QUOTE" detailsOpen includeTargetMarket />
          </div>
        </div>
      </section>
    </main>
  );
}
