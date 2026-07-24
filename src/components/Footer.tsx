import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border-warm bg-surface-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="serif-display text-5xl font-semibold tracking-[-0.08em] text-white">Jamooz</Link>
            <p className="mt-5 max-w-sm leading-7 text-white/62">Professional recovery and scalp care technology for global wellness brands, OEM/ODM partners, and clinical retail channels.</p>
            <div className="mt-7 flex flex-wrap gap-2 text-xs font-bold text-white/72">
              {['CE', 'FCC', 'SGS', 'RoHS', 'IPX7'].map((item) => <span key={item} className="rounded border border-white/15 px-3 py-1">{item}</span>)}
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
              <li>info@jamooz.com</li>
              <li>Shenzhen, China</li>
              <li>24-hour B2B inquiry response</li>
            </ul>
            <Link href="/rfq" className="btn-primary mt-7">Request Quote</Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/45 md:flex-row">
          <p>© {new Date().getFullYear()} Jamooz Wellness Technology. All rights reserved.</p>
          <p>Science-backed recovery technology · Built for partners</p>
        </div>
      </div>
    </footer>
  );
}
