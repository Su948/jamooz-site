import Link from 'next/link';

const menuColumns = [
  {
    title: 'Enhance fitness & recovery',
    icon: '♨',
    items: ['Massage Guns', 'Compression Therapy', 'Red Light Therapy', 'Vibration Therapy', 'EMS Devices', 'Recovery Tools'],
  },
  {
    title: 'Reduce aches & pains',
    icon: '◒',
    items: ['Neck & Shoulder Relief', 'Back & Spine Care', 'Joint & Muscle Relief', 'Foot & Leg Massagers', 'TENS Therapy', 'Heat Therapy'],
  },
  {
    title: 'Improve sleep & stress',
    icon: '☾',
    items: ['Sleep Aids', 'Stress Relief Devices', 'Head & Scalp Massagers', 'Eye Care Devices', 'Breathing & Relaxation', 'Aromatherapy Diffusers'],
  },
  {
    title: 'Custom OEM/ODM',
    icon: '◇',
    items: ['Product Customization', 'Hardware Development', 'Software Development', 'Design & Engineering', 'Packaging Solutions', 'Private Label Services'],
  },
];

const quickActions = [
  ['Shop all', 'Explore our complete product catalog'],
  ['Best sellers', 'Top-performing wellness solutions'],
  ['Custom solutions', 'Tailored products for your brand'],
  ['Contact R&D team', 'Work directly with engineering experts'],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-warm bg-cream-soft/95 backdrop-blur-xl">
      <div className="hidden bg-surface-dark text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[12px]">
          <p>✧ Advanced wellness technology solutions for global brands</p>
          <div className="flex items-center gap-5 text-white/78">
            <span>OEM/ODM expertise</span>
            <span>Scalable manufacturing</span>
            <span>Partner with Jamooz →</span>
          </div>
        </div>
      </div>

      <nav className="group/nav mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex flex-col leading-none text-navy" aria-label="Jamooz home">
            <span className="serif-display text-[36px] font-semibold tracking-[-0.08em]">Jamooz</span>
            <span className="mono-label mt-1 text-[9px] text-muted">Wellness technology</span>
          </Link>

          <div className="hidden items-center gap-9 text-sm font-medium text-foreground lg:flex">
            <Link href="/#solutions" className="hover:text-accent">Solutions⌄</Link>
            <Link href="/products" className="border-b-2 border-navy pb-2 text-navy">Shop⌄</Link>
            <Link href="/custom" className="hover:text-accent">Custom Solutions</Link>
            <Link href="/#science" className="hover:text-accent">R&D Innovation</Link>
            <Link href="/about" className="hover:text-accent">About Jamooz</Link>
            <Link href="/rfq" className="hover:text-accent">Resources⌄</Link>
          </div>

          <Link href="/rfq" className="hidden rounded-md border border-border-warm px-5 py-3 text-sm font-bold text-navy transition hover:border-accent hover:text-accent md:inline-flex">
            Contact R&D Team
          </Link>

          <Link href="/rfq" className="btn-primary px-4 py-3 text-xs lg:hidden">
            Quote
          </Link>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[104px] hidden w-[min(1180px,calc(100vw-48px))] -translate-x-1/2 translate-y-2 opacity-0 transition duration-200 group-hover/nav:pointer-events-auto group-hover/nav:translate-y-0 group-hover/nav:opacity-100 lg:block">
          <div className="grid grid-cols-[1fr_260px] gap-8 rounded-xl border border-border-warm bg-surface p-8 shadow-2xl shadow-black/10">
            <div className="grid grid-cols-4 gap-10">
              {menuColumns.map((column) => (
                <div key={column.title}>
                  <div className="mb-5 flex items-start gap-3 border-b border-navy/30 pb-4 text-navy">
                    <span className="text-2xl leading-none">{column.icon}</span>
                    <h3 className="serif-display text-lg font-semibold leading-tight tracking-[-0.04em]">{column.title}</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-muted">
                    {column.items.map((item) => (
                      <li key={item}>
                        <Link href="/products" className="hover:text-accent">{item}</Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/products" className="mt-5 inline-flex text-sm font-bold text-navy hover:text-accent">View all →</Link>
                </div>
              ))}
            </div>

            <aside className="border-l border-border-warm pl-8">
              <div className="space-y-6">
                {quickActions.map(([title, desc]) => (
                  <Link key={title} href={title === 'Contact R&D team' ? '/rfq' : '/products'} className="block rounded-lg p-3 transition hover:bg-cream-soft">
                    <p className="font-bold uppercase tracking-[0.08em] text-navy">{title}</p>
                    <p className="mt-1 text-sm leading-snug text-muted">{desc}</p>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </nav>
    </header>
  );
}
