'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const productGroups = [
  { title: 'Massage & Recovery', items: ['Massage Guns', 'Handheld Massagers', 'Massage Chairs', 'Abdominal Massagers'] },
  { title: 'Head & Beauty Care', items: ['Scalp Massagers', 'Face Massagers', 'Eye Massagers', 'Massage Combs'] },
  { title: 'Neck & Body Care', items: ['U-Shaped Massage Pillows', 'Neck & Shoulder Massagers', 'Back Massagers', 'Foot & Leg Massagers'] },
  { title: 'Featured Collections', items: ['New Arrivals', 'Best Sellers', 'Portable Massagers', 'All Products'] },
];

const standardMenuColumns = [
  { title: 'Enhance fitness & recovery', items: ['Massage Guns', 'Compression Therapy', 'Red Light Therapy', 'Recovery Tools'] },
  { title: 'Reduce aches & pains', items: ['Neck & Shoulder Relief', 'Back & Spine Care', 'Foot & Leg Massagers', 'Heat Therapy'] },
  { title: 'Improve sleep & stress', items: ['Head & Scalp Massagers', 'Eye Care Devices', 'Sleep Aids', 'Stress Relief Devices'] },
  { title: 'Custom OEM/ODM', items: ['Product Customization', 'Hardware Development', 'Packaging Solutions', 'Private Label Services'] },
];

function PreviewNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const previewLink = (hash: string) => `/preview${hash}`;
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 text-zinc-900 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1500px] items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/preview" className="mr-auto flex shrink-0 flex-col leading-none" aria-label="JAMOOZ preview home"><span className="text-[30px] font-black tracking-[-0.06em] text-violet-800">JAMOOZ</span><span className="mt-1 text-[8px] font-bold uppercase tracking-[0.22em] text-zinc-500">Wellness Technology</span></Link>
        <nav className="hidden h-full items-center gap-6 text-[12px] font-bold tracking-[0.04em] xl:flex" aria-label="Preview navigation">
          <Link href="/preview" className="flex h-full items-center hover:text-violet-700">HOME</Link>
          <div className="group/products flex h-full items-center">
            <button type="button" className="flex h-full items-center gap-1 hover:text-violet-700" aria-haspopup="true">PRODUCTS <span aria-hidden>▾</span></button>
            <div className="pointer-events-none absolute left-1/2 top-[76px] w-[min(1180px,calc(100vw-40px))] -translate-x-1/2 translate-y-2 opacity-0 transition duration-200 group-hover/products:pointer-events-auto group-hover/products:translate-y-0 group-hover/products:opacity-100 group-focus-within/products:pointer-events-auto group-focus-within/products:translate-y-0 group-focus-within/products:opacity-100">
              <div className="grid grid-cols-4 gap-8 rounded-b-2xl border border-zinc-200 bg-white p-8 shadow-2xl shadow-black/15">
                {productGroups.map((group) => <div key={group.title}><h3 className="border-b border-violet-100 pb-3 text-sm font-black text-violet-800">{group.title}</h3><ul className="mt-4 space-y-3 text-sm font-medium normal-case tracking-normal text-zinc-600">{group.items.map((item) => <li key={item}><Link href={previewLink('#products')} className="hover:text-violet-700">{item}</Link></li>)}</ul></div>)}
                <div className="col-span-4 flex items-center justify-between border-t border-zinc-100 pt-5"><p className="text-xs font-medium normal-case tracking-normal text-zinc-500">Product groups reflect JAMOOZ&apos;s current Alibaba collections.</p><Link href={previewLink('#products')} className="rounded-full bg-violet-700 px-5 py-2.5 text-xs text-white hover:bg-violet-800">VIEW ALL PRODUCTS →</Link></div>
              </div>
            </div>
          </div>
          <Link href={previewLink('#solutions')} className="hover:text-violet-700">SOLUTIONS ▾</Link><Link href={previewLink('#oem-odm')} className="hover:text-violet-700">OEM &amp; ODM ▾</Link><Link href={previewLink('#about')} className="hover:text-violet-700">ABOUT JAMOOZ ▾</Link><Link href={previewLink('#inquiry')} className="hover:text-violet-700">CONTACT</Link>
        </nav>
        <Link href={previewLink('#inquiry')} className="hidden shrink-0 rounded-full bg-violet-700 px-5 py-3 text-[11px] font-black tracking-[0.08em] text-white hover:bg-violet-800 sm:inline-flex">REQUEST A QUOTE</Link>
        <button type="button" onClick={() => setMobileOpen((open) => !open)} className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-xl xl:hidden" aria-expanded={mobileOpen} aria-label="Toggle preview menu">{mobileOpen ? '×' : '☰'}</button>
      </div>
      {mobileOpen && <nav className="border-t border-zinc-100 bg-white px-5 py-5 shadow-lg xl:hidden" aria-label="Preview mobile navigation"><div className="mx-auto flex max-w-2xl flex-col text-sm font-bold"><Link href="/preview" onClick={() => setMobileOpen(false)} className="border-b border-zinc-100 py-3">HOME</Link><button type="button" onClick={() => setMobileProducts((open) => !open)} className="flex items-center justify-between border-b border-zinc-100 py-3 text-left">PRODUCTS <span>{mobileProducts ? '▴' : '▾'}</span></button>{mobileProducts && <div className="grid grid-cols-2 gap-4 bg-zinc-50 p-4 text-xs font-medium text-zinc-600">{productGroups.flatMap((group) => group.items).map((item) => <Link key={item} href={previewLink('#products')} onClick={() => setMobileOpen(false)}>{item}</Link>)}</div>}{[['SOLUTIONS', '#solutions'], ['OEM & ODM', '#oem-odm'], ['ABOUT JAMOOZ', '#about'], ['CONTACT', '#inquiry']].map(([label, hash]) => <Link key={label} href={previewLink(hash)} onClick={() => setMobileOpen(false)} className="border-b border-zinc-100 py-3">{label}{label !== 'CONTACT' ? ' ▾' : ''}</Link>)}<Link href={previewLink('#inquiry')} onClick={() => setMobileOpen(false)} className="mt-4 rounded-full bg-violet-700 px-5 py-3 text-center text-xs text-white">REQUEST A QUOTE</Link></div></nav>}
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

export default function Navbar() { const pathname = usePathname(); return pathname.startsWith('/preview') ? <PreviewNavbar /> : <StandardNavbar />; }
