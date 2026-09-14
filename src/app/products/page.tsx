import Image from "next/image";
import Link from "next/link";

const products = [
  {
    model: "JMZ-906",
    name: "Hot & Cold Vacuum Gua Sha Massager",
    description: "Vacuum suction, warming care, cooling care and EMS with 0–12 level control in one handheld body-care device.",
    image: "/products/jmz-906/JMZ-906-01-home-card.webp",
    href: "/products/jmz-906",
    price: "US$15.90–18.50 / pc",
    moq: "MOQ 50 pcs",
    features: ["Vacuum Suction", "Heating", "Cooling", "EMS"],
  },
  {
    model: "JMZ-702",
    name: "Heated Vibration Egg Massage Chair",
    description: "A compact egg-shaped massage seat combining three-level vibration and adjustable warming for home, office and everyday relaxation settings.",
    image: "/products/jmz-702/JMZ-702-01-home-card.webp",
    href: "/products/jmz-702",
    price: "US$27.50–33.00 / pc",
    moq: "MOQ 50 pcs",
    features: ["Heating", "Vibration", "3 Heat Levels", "15-Min Auto-Off"],
  },
  {
    model: "JMZ-R006",
    name: "3D Kneading Neck & Shoulder Massager",
    description: "A rechargeable U-shaped neck massager with 3D kneading movement, warming care, timing control and adjustable double lanyards.",
    image: "/products/jmz-r006/JMZ-R006-01-home-card.png",
    href: "/products/jmz-r006",
    price: "US$20.90–22.50 / pc",
    moq: "MOQ 50 pcs",
    features: ["3D Kneading", "Heating", "Type-C", "Timing Control"],
  },
] as const;

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#faf8ff] pb-24 text-[#302050]">
      <section className="border-b border-violet-100 bg-[#faf8ff] py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-5 text-center sm:px-8">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">JAMOOZ Product Collection</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Products Ready for B2B Projects</h1>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-600">Review confirmed product photography, volume price ranges, specifications and available OEM/ODM options.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.model} className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-xl shadow-violet-900/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-900/10">
              <Link href={product.href} aria-label={`View ${product.model} ${product.name}`} className="relative aspect-[4/3] overflow-hidden bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500">
                <Image src={product.image} alt={`${product.model} ${product.name} actual product sample`} fill sizes="(min-width: 1280px) 380px, (min-width: 768px) 50vw, 100vw" className="object-contain transition duration-500 group-hover:scale-[1.025]" />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-700">{product.model} · Body Care</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight">{product.name}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{product.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">{product.features.map((feature) => <span key={feature} className="rounded-full border border-violet-100 bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-800">{feature}</span>)}</div>
                <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-violet-100 pt-5">
                  <div><p className="text-lg font-black">{product.price}</p><p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">{product.moq}</p></div>
                  <Link href={product.href} className="inline-flex min-h-10 items-center justify-center rounded-full bg-violet-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2">View Product →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
