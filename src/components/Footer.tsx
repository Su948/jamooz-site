import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border-warm bg-surface-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="serif-display text-5xl font-semibold tracking-[-0.08em] text-white">Jamooz</Link>
            <p className="mt-5 max-w-sm leading-7 text-white/62">Professional recovery and scalp care technology for global wellness brands, OEM/ODM partners, and clinical retail channels.</p>
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
              <li><Link href="/products" className="hover:text-white">Scalp massagers</Link></li>
              <li><Link href="/products" className="hover:text-white">Recovery devices</Link></li>
              <li><Link href="/products" className="hover:text-white">Red light therapy</Link></li>
              <li><Link href="/custom" className="hover:text-white">Custom product lines</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mono-label text-xs font-bold text-white/50">Partner services</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/68">
              <li>OEM/ODM engineering</li>
              <li>Private label branding</li>
              <li>Gift box packaging</li>
              <li>Global delivery support</li>
            </ul>
          </div>

          <div>
            <h3 className="mono-label text-xs font-bold text-white/50">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/68">
              <li><a href="mailto:lee@jamooz.cn" className="hover:text-white">lee@jamooz.cn</a></li>
              <li>Shenzhen, China</li>
              <li>Responses typically provided within 24 hours on working days</li>
            </ul>
            <Link href="/#inquiry" className="btn-primary mt-7">Request Quote</Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/45 md:flex-row">
          <p>© {new Date().getFullYear()} Jamooz Wellness Technology. All rights reserved.</p>
          <p>Massage and wellness technology · Built for partners</p>
        </div>
      </div>
    </footer>
  );
}
