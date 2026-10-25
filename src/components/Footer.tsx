import Link from 'next/link';
import { companyFacts, contactLinks } from '@/lib/company';
import { operationalClaims } from '@/lib/operational-claims';
import { liveCategoryFor } from '@/lib/product-categories';

export default function Footer() {
  // A footer category entry points at its category page only when that page is
  // live (D020 §3.5); entries without one keep leading to the products hub.
  const neckCategory = liveCategoryFor('Neck & Shoulder');
  const scalpCategory = liveCategoryFor('Head & Scalp');

  return (
    <footer className="border-t border-border-warm bg-surface-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="serif-display text-5xl font-semibold tracking-[-0.08em] text-white">Jamooz</Link>
            <p className="mt-5 max-w-sm leading-7 text-white/62">Wellness and massage device manufacturing for global brands, OEM/ODM partners, and specialty retail channels.</p>
            <div className="mt-7 max-w-sm">
              <h3 className="mono-label text-xs font-bold text-white/50">Compliance Support</h3>
              <p className="mt-3 text-sm leading-6 text-white/68">
                Compliance documentation is available according to the product model and destination market. Please contact us to confirm applicable certificates and test reports before ordering.
              </p>
            </div>
          </div>

          <div>
            <h3 className="mono-label text-xs font-bold text-white/50">Solutions</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/68">
              <li><Link href="/products" className="hover:text-white">All massage products</Link></li>
              <li><Link href={neckCategory?.href ?? "/products"} className="hover:text-white">Neck & shoulder massagers</Link></li>
              <li><Link href={scalpCategory?.href ?? "/products"} className="hover:text-white">Scalp &amp; hair care</Link></li>
              <li><Link href="/products" className="hover:text-white">Recovery devices</Link></li>
              <li><Link href="/products" className="hover:text-white">Red light therapy</Link></li>
              <li><Link href="/custom" className="hover:text-white">Custom product lines</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mono-label text-xs font-bold text-white/50">Partner services</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/68">
              <li><Link href="/oem-odm" className="hover:text-white">OEM/ODM development process</Link></li>
              <li><Link href="/custom" className="hover:text-white">Private label branding</Link></li>
              <li><Link href="/custom" className="hover:text-white">Gift box packaging</Link></li>
              <li>Global delivery support</li>
            </ul>
          </div>

          <div>
            <h3 className="mono-label text-xs font-bold text-white/50">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/68">
              <li><a href={contactLinks.email} data-analytics-location="footer" className="hover:text-white">{companyFacts.contact.email}</a></li>
              <li>{companyFacts.location.label}</li>
              <li>{operationalClaims.responseShort}</li>
            </ul>
            <Link href="/#inquiry" className="btn-primary mt-7">Request Quote</Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/45 md:flex-row">
          <p>© {new Date().getFullYear()} Jamooz Wellness Technology. All rights reserved.</p>
          <Link href="/privacy" className="underline underline-offset-4 hover:text-white">Privacy &amp; cookie preferences</Link>
        </div>
      </div>
    </footer>
  );
}
