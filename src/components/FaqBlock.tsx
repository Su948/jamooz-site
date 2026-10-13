import Link from "next/link";
import type { FaqEntry } from "@/lib/faq";

export type FaqBlockVariant = "brand" | "warm";

const variants: Record<
  FaqBlockVariant,
  {
    section: string;
    wrap: string;
    label: string;
    title: string;
    list: string;
    item: string;
    summary: string;
    question: string;
    marker: string;
    answer: string;
    link: string;
  }
> = {
  brand: {
    section: "border-t border-[#dfe5ee] bg-white py-20 sm:py-24",
    wrap: "mx-auto w-full max-w-[1240px] px-5 sm:px-8",
    label: "text-[11px] font-black uppercase tracking-[0.22em] text-[#315b8d]",
    title:
      "mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#17243a] sm:text-4xl lg:text-[44px]",
    list: "mt-10 grid gap-3",
    item: "group rounded-3xl border border-[#dfe5ee] bg-white p-5 sm:p-6",
    summary:
      "flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-base font-black text-[#1f3048] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#244f82]",
    question: "text-base font-black",
    marker: "text-lg text-[#4f79a8] transition group-open:rotate-45",
    answer: "mt-4 text-sm leading-6 text-[#66758a]",
    link: "text-[#244f82] underline decoration-[#9fb6d0] underline-offset-4 transition hover:text-[#193d69]",
  },
  warm: {
    section: "border-t border-border-warm pt-12",
    wrap: "",
    label: "mono-label text-xs font-bold uppercase tracking-widest text-navy",
    title: "serif-display mt-4 text-2xl font-semibold",
    list: "mt-8 grid gap-3",
    item: "group rounded-2xl border border-border-warm bg-white p-5",
    summary:
      "flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
    question: "text-sm font-bold",
    marker: "text-lg text-navy transition group-open:rotate-45",
    answer: "mt-4 text-sm leading-6 text-muted",
    link: "font-bold text-navy underline underline-offset-4",
  },
};

/**
 * Visible FAQ section built on <details>/<summary>.
 *
 * Rendered on the server so the questions and answers are present in the
 * initial HTML, which is what crawlers and AI answer engines read. No FAQPage
 * markup is attached: the answers are here to be read, not to chase rich
 * results.
 */
export default function FaqBlock({
  items,
  title,
  label = "Buyer questions",
  variant = "brand",
}: {
  items: readonly FaqEntry[];
  title: string;
  label?: string;
  variant?: FaqBlockVariant;
}) {
  if (items.length === 0) return null;

  const styles = variants[variant];

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <p className={styles.label}>{label}</p>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.list}>
          {items.map((item) => (
            <details key={item.question} className={styles.item}>
              <summary className={styles.summary}>
                <h3 className={styles.question}>{item.question}</h3>
                <span aria-hidden className={styles.marker}>
                  +
                </span>
              </summary>
              <p className={styles.answer}>{item.answer}</p>
              {item.link ? (
                <p className="mt-3 text-sm">
                  <Link href={item.link.href} className={styles.link}>
                    {item.link.label}
                  </Link>
                </p>
              ) : null}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
