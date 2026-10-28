import Image from "next/image";
import Link from "next/link";
import { novemberProductDetails } from "@/lib/preview-products/november-products";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f3f6fa] px-5 py-16 text-[#17243a] sm:px-8">
      <div className="mx-auto max-w-[1180px]">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#315b8d]">Product release preview</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Three New Product Pages</h1>
        <p className="mt-5 max-w-3xl leading-7 text-[#607086]">
          Review product facts, imagery, mobile layout and inquiry paths before anything is added to the live catalog. JMZ-V002 also includes the regional market selector preview.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {novemberProductDetails.map((product) => (
            <article key={product.slug} className="overflow-hidden rounded-3xl border border-[#dce4ed] bg-white shadow-[0_18px_50px_rgba(38,67,105,0.08)]">
              <div className="relative aspect-[4/3] bg-[#f7f9fc]">
                <Image src={product.gallery[0].src} alt={product.gallery[0].alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-contain" />
              </div>
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#315b8d]">{product.model}</p>
                <h2 className="mt-3 text-xl font-black leading-7">{product.name}</h2>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#607086]">{product.description}</p>
                <Link href={`/preview/products/${product.slug}`} className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#244f82] px-5 text-sm font-black text-white">
                  Open page preview →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
          <strong>Pending before publication:</strong> only the missing dimensions or gross weights marked TBC on the product pages, plus your final approval of the two JMZ-V002 regional price tables.
        </div>
      </div>
    </main>
  );
}
