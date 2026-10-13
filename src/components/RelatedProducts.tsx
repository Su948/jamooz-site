import Image from "next/image";
import Link from "next/link";
import type { CategoryGuide } from "@/lib/product-categories";

export type RelatedProductItem = {
  href: string;
  /** Short label above the name: a model number, or "Category". */
  eyebrow: string;
  name: string;
  /** Optional supporting line, only for facts already published elsewhere. */
  detail?: string;
  image?: { src: string; alt: string };
  linkLabel: string;
};

const sectionLabel = "text-[11px] font-black uppercase tracking-[0.22em] text-[#315b8d]";
const sectionTitle = "mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#17243a] sm:text-4xl lg:text-[44px]";

/**
 * Related links shown directly before the inquiry block on a product page
 * (D020 rules N-6 to N-8). Only real, reachable pages are passed in; when the
 * list is empty the block is not rendered at all.
 */
export default function RelatedProducts({
  items,
  guides = [],
  label = "Related",
  title = "Related Products",
}: {
  items: readonly RelatedProductItem[];
  /** Decision guides for this cluster, anchored by their own published titles. */
  guides?: readonly CategoryGuide[];
  label?: string;
  title?: string;
}) {
  if (items.length === 0 && guides.length === 0) return null;

  return (
    <section className="border-t border-[#dfe5ee] bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <p className={sectionLabel}>{label}</p>
        <h2 className={sectionTitle}>{title}</h2>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.href} className="flex min-w-0 flex-col rounded-3xl border border-[#dfe5ee] bg-white p-6 shadow-[0_16px_40px_rgba(38,67,105,0.05)]">
              {item.image && (
                <Link href={item.href} className="relative mb-5 block aspect-[4/3] overflow-hidden rounded-2xl bg-[#f7faff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244f82]">
                  <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="object-contain" />
                </Link>
              )}
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#718097]">{item.eyebrow}</p>
              <h3 className="mt-3 text-xl font-black leading-tight tracking-tight text-[#1f3048]">
                <Link href={item.href} className="transition hover:text-[#244f82]">{item.name}</Link>
              </h3>
              {item.detail && <p className="mt-3 text-sm leading-6 text-[#66758a]">{item.detail}</p>}
              <Link href={item.href} className="mt-auto inline-flex min-h-10 items-center gap-2 pt-5 text-sm font-black tracking-[0.06em] text-[#244f82] transition hover:text-[#193d69]">
                {item.linkLabel}
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current stroke-2"><path d="M4 10h12M11 5l5 5-5 5" /></svg>
              </Link>
            </article>
          ))}
        </div>

        {guides.length > 0 && (
          <div className="mt-10 border-t border-[#e3e9f0] pt-8">
            <p className={sectionLabel}>Category guides</p>
            <ul className="mt-4 grid gap-3">
              {guides.map((guide) => (
                <li key={guide.href}>
                  <Link
                    href={guide.href}
                    className="text-sm font-bold text-[#244f82] underline decoration-[#244f82]/30 underline-offset-4 transition hover:decoration-[#244f82]"
                  >
                    {guide.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
