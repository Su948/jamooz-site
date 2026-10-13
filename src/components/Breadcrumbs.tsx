import Link from "next/link";
import { companyFacts } from "@/lib/company";

export type BreadcrumbItem = {
  name: string;
  /** Root-relative path, e.g. "/products/scalp-massagers". */
  href: string;
};

/**
 * Visible breadcrumb trail plus the matching BreadcrumbList data (D020 rules
 * B-3 to B-6): every entry except the current page is a crawlable link, and the
 * structured data mirrors the visible trail 1:1 with the current page last.
 * Rendered on the server so it stays visible to crawlers that do not run JS.
 */
export default function Breadcrumbs({ items }: { items: readonly BreadcrumbItem[] }) {
  if (items.length === 0) return null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${companyFacts.website}${item.href}`,
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="text-xs font-semibold text-[#718097]">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-x-2">
                {index > 0 && <span aria-hidden="true" className="text-[#9fb0c4]">/</span>}
                {isCurrent ? (
                  <span aria-current="page" className="text-[#334155]">{item.name}</span>
                ) : (
                  <Link href={item.href} className="transition hover:text-[#244f82]">{item.name}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
