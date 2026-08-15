'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const standardMenuColumns = [
  { title: 'Enhance fitness & recovery', items: ['Massage Guns', 'Compression Therapy', 'Red Light Therapy', 'Recovery Tools'] },
  { title: 'Reduce aches & pains', items: ['Neck & Shoulder Relief', 'Back & Spine Care', 'Foot & Leg Massagers', 'Heat Therapy'] },
  { title: 'Improve sleep & stress', items: ['Head & Scalp Massagers', 'Eye Care Devices', 'Sleep Aids', 'Stress Relief Devices'] },
  { title: 'Custom OEM/ODM', items: ['Product Customization', 'Hardware Development', 'Packaging Solutions', 'Private Label Services'] },
];

function PreviewNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const homepage = pathname.startsWith('/preview') ? '/preview' : '/';
  const previewLink = (hash: string) => `${homepage}${hash}`;
  const navigation = [
    ['HOME', ''],
    ['PRODUCTS', '#product-range'],
    ['OEM / ODM', '#oem-odm'],
    ['ABOUT US', '#about-us'],
    ['QUALITY', '#quality'],
    ['CONTACT', '#inquiry'],
  ] as const;
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 text-zinc-900 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1500px] items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link href={homepage} className="mr-auto flex shrink-0 flex-col leading-none" aria-label="JAMOOZ home"><span className="text-[30px] font-black tracking-[-0.06em] text-violet-800">JAMOOZ</span><span className="mt-1 text-[8px] font-bold uppercase tracking-[0.22em] text-zinc-500">Wellness Technology</span></Link>
        <nav className="hidden h-full items-center gap-7 text-[12px] font-bold tracking-[0.045em] xl:flex" aria-label="Preview navigation">
          {navigation.map(([label, hash]) => <Link key={label} href={hash ? previewLink(hash) : homepage} className="flex h-full items-center whitespace-nowrap transition hover:text-violet-700">{label}</Link>)}
        </nav>
        <Link href={previewLink('#inquiry')} className="hidden shrink-0 rounded-full bg-violet-700 px-5 py-3 text-[11px] font-black tracking-[0.08em] text-white hover:bg-violet-800 sm:inline-flex">REQUEST A QUOTE</Link>
        <button type="button" onClick={() => setMobileOpen((open) => !open)} className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-xl xl:hidden" aria-expanded={mobileOpen} aria-label="Toggle preview menu">{mobileOpen ? '×' : '☰'}</button>
      </div>
      {mobileOpen && <nav className="border-t border-zinc-100 bg-white px-5 py-5 shadow-lg xl:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-2xl flex-col text-sm font-bold">{navigation.map(([label, hash]) => <Link key={label} href={hash ? previewLink(hash) : homepage} onClick={() => setMobileOpen(false)} className="border-b border-zinc-100 py-3">{label}</Link>)}<Link href={previewLink('#inquiry')} onClick={() => setMobileOpen(false)} className="mt-4 rounded-full bg-violet-700 px-5 py-3 text-center text-xs text-white">REQUEST A QUOTE</Link></div></nav>}
    </header>
  );
}

function StandardNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-warm bg-cream-soft/95 backdrop-blur-xl">
      <div className="hidden bg-surface-dark text-white md:block"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[12px]"><p>✧ Advanced wellness technology solutions for global brands</p><div className="flex gap-5 text-white/78"><span>OEM/ODM expertise</span><span>Scalable manufacturing</span><span>Partner with Jamooz →</span></div></div></div>
      <nav className="group/nav mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex h-20 items-center justify-between gap-6"><Link href="/" className="flex flex-col leading-none text-navy" aria-label="Jamooz home"><span className="serif-display text-[36px] font-semibold tracking-[-0.08em]">Jamooz</span><span className="mono-label mt-1 text-[9px] text-muted">Wellness technology</span></Link><div className="hidden items-center gap-9 text-sm font-medium text-foreground lg:flex"><Link href="/#solutions">Solutions⌄</Link><Link href="/products">Shop⌄</Link><Link href="/custom">Custom Solutions</Link><Link href="/#science">R&amp;D Innovation</Link><Link href="/about">About Jamooz</Link><Link href="/rfq">Resources⌄</Link></div><Link href="/rfq" className="hidden rounded-md border border-border-warm px-5 py-3 text-sm font-bold text-navy md:inline-flex">Contact R&amp;D Team</Link><Link href="/rfq" className="btn-primary px-4 py-3 text-xs lg:hidden">Quote</Link></div>
        <div className="pointer-events-none absolute left-1/2 top-[104px] hidden w-[min(1180px,calc(100vw-48px))] -translate-x-1/2 translate-y-2 opacity-0 transition group-hover/nav:pointer-events-auto group-hover/nav:translate-y-0 group-hover/nav:opacity-100 lg:block"><div className="grid grid-cols-4 gap-10 rounded-xl border border-border-warm bg-surface p-8 shadow-2xl">{standardMenuColumns.map((column) => <div key={column.title}><h3 className="serif-display mb-5 border-b border-navy/30 pb-4 text-lg font-semibold text-navy">{column.title}</h3><ul className="space-y-3 text-sm text-muted">{column.items.map((item) => <li key={item}><Link href="/products">{item}</Link></li>)}</ul></div>)}</div></div>
      </nav>
    </header>
  );
}

export default function Navbar() { const pathname = usePathname(); return pathname === '/' || pathname.startsWith('/preview') ? <PreviewNavbar /> : <StandardNavbar />; }
