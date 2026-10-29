import Link from "next/link";

const cards = [
  {
    tag: "01 / SUPPLIER ASSESSMENT",
    title: "SGS",
    subtitle: "Supplier assessment",
    copy: "Company information and assessed capabilities are documented within the scope of the independent supplier-assessment report.",
    detail: "Assessment date: 24 July 2026",
    note: "The findings apply to the named entity, stated scope and assessment date. They do not certify every model or production batch.",
  },
  {
    tag: "02 / QUALITY MANAGEMENT",
    title: "ISO 13485",
    subtitle: "Quality management system",
    copy: "The certificate scope, named entity, covered activities and validity period are reviewed against the requirements of each project.",
    detail: "Certificate-scope review",
    note: "Management-system certification is separate from certification or regulatory approval of a particular product.",
  },
  {
    tag: "03 / PRODUCT DOCUMENTS",
    title: "CE · FCC · EN",
    subtitle: "Product documentation",
    copy: "Applicable CE-related documents, FCC reports and EN-standard test records are checked for the selected model and configuration.",
    detail: "Model + destination market",
    note: "The available document set depends on the exact product version, electrical configuration and intended destination market.",
  },
  {
    tag: "04 / INTELLECTUAL PROPERTY",
    title: "Patents",
    subtitle: "Product and design records",
    copy: "Relevant patent or design records can be reviewed when evaluating a product direction and its customisation scope.",
    detail: "Product-specific records",
    note: "Rights, ownership, territory and current status are checked against the original record before they are cited for a project.",
  },
] as const;

const reviewPath = [
  {
    number: "01",
    title: "Independent assessment",
    copy: "Confirm the named entity, report number, assessment date and stated assessment scope.",
  },
  {
    number: "02",
    title: "System certificate",
    copy: "Confirm the certificate holder, covered activities, issuing body and validity period.",
  },
  {
    number: "03",
    title: "Product-level records",
    copy: "Match each report to the exact model, configuration, test standard and destination market.",
  },
] as const;

export default function ManufacturingEvidence() {
  return (
    <section
      id="manufacturing-evidence"
      className="scroll-mt-28 border-y border-violet-100 bg-gradient-to-b from-[#f8f5ff] to-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <header className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-700">
            JAMOOZ verification &amp; credentials
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#3d2758] sm:text-5xl">
            Credentials with a defined scope.
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-600">
            Supplier assessments, management-system certificates and product test records answer different sourcing questions. Review each document against the entity, model and market it actually covers.
          </p>
        </header>

        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.tag}
              className="flex flex-col overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-sm"
            >
              <div className="border-b border-violet-100 bg-gradient-to-br from-white to-violet-50 px-6 py-7">
                <div aria-hidden="true" className="mb-6 flex size-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
                    <path d="M6 3h9l4 4v14H6z" />
                    <path d="M14 3v5h5M9 12h7M9 16h5" />
                  </svg>
                </div>
                <p className="text-[10px] font-bold tracking-widest text-violet-600">{card.tag}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#3d2758]">{card.title}</h3>
                <p className="mt-2 text-xs font-semibold text-violet-700">{card.subtitle}</p>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-6 text-zinc-600">{card.copy}</p>
                <p className="mt-auto pt-5 text-xs font-bold text-violet-700">{card.detail}</p>
                <details className="mt-4 border-t border-violet-100 pt-4 text-xs leading-6 text-zinc-500">
                  <summary className="cursor-pointer font-semibold text-[#59377c]">View scope &amp; limitations</summary>
                  <p className="mt-3">{card.note}</p>
                </details>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 rounded-3xl border border-violet-100 bg-white p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-violet-700">Evidence review path</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#3d2758]">What buyers should verify</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                Use the same three checks before relying on a supplier credential. This keeps a company assessment, a quality-system certificate and a product test report from being treated as interchangeable proof.
              </p>
              <Link href="/guides/factory-audit-checklist" className="mt-5 inline-flex text-sm font-bold text-violet-700 underline underline-offset-4">
                View the factory-audit checklist →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {reviewPath.map((item) => (
                <article key={item.number} className="rounded-2xl border border-violet-100 bg-[#faf9ff] p-5">
                  <p className="text-xs font-black tracking-[0.16em] text-violet-600">{item.number}</p>
                  <h4 className="mt-3 font-black text-[#3d2758]">{item.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 rounded-2xl bg-[#3d2758] p-6 text-white sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold">Ask for the evidence relevant to your project.</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Tell us the model and destination market. We will confirm the applicable document scope and what can be shared for your sourcing review.
            </p>
          </div>
          <Link
            href="/rfq?product=Product%20documentation%20request%20%E2%80%94%20please%20confirm%20model%20and%20target%20market"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-violet-800 hover:bg-violet-50"
          >
            Request Product Documents →
          </Link>
        </div>
        <p className="mt-4 text-xs leading-6 text-zinc-500">
          Full reports are not publicly downloadable here. Destination-specific registrations, including EPR where applicable, are reviewed separately.
        </p>
      </div>
    </section>
  );
}
