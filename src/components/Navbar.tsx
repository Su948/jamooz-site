'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, type MouseEvent } from 'react';
import { productCategoryHref } from '@/lib/product-categories';

function PreviewNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const pathname = usePathname();
  const homepage = pathname.startsWith('/preview') ? '/preview' : '/';
  const hasLocalInquiry = pathname.startsWith('/preview/products/') || pathname.startsWith('/products');
  const previewLink = (hash: string) => hasLocalInquiry && hash === '#inquiry' ? hash : `${homepage}${hash}`;
  const navigateCategory = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === '/products' && href.startsWith('/products#')) {
      event.preventDefault();
      window.location.assign(`#${href.split('#')[1]}`);
    }
  };
  const productCategories = [
    ['Neck & Shoulder Massagers', productCategoryHref('Neck & Shoulder')],
    ['Scalp & Hair Care', productCategoryHref('Head & Scalp')],
    ['Cupping & Body Care', '/products/cupping-gua-sha'],
    ['Body Care Massagers', productCategoryHref('Body Care')],
    ['Eye Care Devices', productCategoryHref('Eye Care')],
    ['Hand & Wrist Massagers', productCategoryHref('Hand, Wrist & Elbow')],
  ] as const;
  const resources = [
    ['Buyer Guide', '/guides/choose-scalp-massager-supplier'],
    ['Product Comparison', '/guides/ems-vs-vibration-scalp-massager'],
    ['Neck & Shoulder Selection', '/guides/neck-shoulder-massager-selection'],
    ['Factory Audit & Evidence', '/guides/factory-audit-checklist'],
  ] as const;

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
    setMobileResourcesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 text-zinc-900 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1500px] items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link href={homepage} className="mr-auto flex shrink-0 flex-col leading-none" aria-label="JAMOOZ home"><span className="text-[30px] font-black tracking-[-0.06em] text-violet-800">JAMOOZ</span><span className="mt-1 text-[8px] font-bold uppercase tracking-[0.22em] text-zinc-500">Wellness Technology</span></Link>
        <nav className="hidden h-full items-center gap-8 text-[12px] font-bold tracking-[0.045em] xl:flex" aria-label="Primary navigation">
          <div className="group/products relative flex h-full items-center">
            <Link href="/products" className="flex h-full items-center gap-1 whitespace-nowrap transition hover:text-violet-700" aria-haspopup="true">PRODUCTS <span aria-hidden className="text-[10px]">⌄</span></Link>
            <div className="pointer-events-none invisible absolute right-[-180px] top-full w-[720px] translate-y-2 pt-3 opacity-0 transition duration-200 group-hover/products:pointer-events-auto group-hover/products:visible group-hover/products:translate-y-0 group-hover/products:opacity-100 group-focus-within/products:pointer-events-auto group-focus-within/products:visible group-focus-within/products:translate-y-0 group-focus-within/products:opacity-100">
              <div className="grid grid-cols-[0.9fr_1.4fr] gap-7 rounded-2xl border border-violet-100 bg-white p-6 text-left shadow-2xl shadow-violet-950/15">
                <div className="space-y-3">
                  <Link href="/oem-odm" className="block rounded-2xl bg-gradient-to-br from-violet-700 to-purple-900 p-5 text-white transition hover:-translate-y-0.5 hover:shadow-lg">
                    <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-violet-200">Start here</span>
                    <span className="mt-2 block text-lg font-black tracking-tight">OEM/ODM Custom Development</span>
                    <span className="mt-2 block text-xs font-medium leading-5 text-white/75">From product direction and prototyping to production readiness.</span>
                    <span className="mt-4 block text-xs font-black">Review the process →</span>
                  </Link>
                  <Link href="/products" className="flex items-center justify-between rounded-xl border border-violet-100 px-4 py-3 text-sm font-black text-violet-800 transition hover:border-violet-300 hover:bg-violet-50">View All Products <span aria-hidden>→</span></Link>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Shop by product category</p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {productCategories.map(([label, href]) => <Link key={label} href={href} onClick={(event) => navigateCategory(event, href)} className="rounded-xl border border-transparent px-3 py-3 text-sm font-bold leading-5 text-zinc-700 transition hover:border-violet-100 hover:bg-violet-50 hover:text-violet-800">{label}</Link>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href="/about" className="flex h-full items-center whitespace-nowrap transition hover:text-violet-700">ABOUT US</Link>
          <div className="group/resources relative flex h-full items-center">
            <button type="button" className="flex h-full items-center gap-1 whitespace-nowrap transition hover:text-violet-700" aria-haspopup="true">RESOURCES <span aria-hidden className="text-[10px]">⌄</span></button>
            <div className="pointer-events-none invisible absolute right-0 top-full w-[310px] translate-y-2 pt-3 opacity-0 transition duration-200 group-hover/resources:pointer-events-auto group-hover/resources:visible group-hover/resources:translate-y-0 group-hover/resources:opacity-100 group-focus-within/resources:pointer-events-auto group-focus-within/resources:visible group-focus-within/resources:translate-y-0 group-focus-within/resources:opacity-100">
              <div className="rounded-2xl border border-violet-100 bg-white p-3 text-left shadow-2xl shadow-violet-950/15">
                {resources.map(([label, href]) => <Link key={label} href={href} className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-zinc-700 transition hover:bg-violet-50 hover:text-violet-800">{label}<span aria-hidden className="text-violet-400">→</span></Link>)}
              </div>
            </div>
          </div>
          <Link href={previewLink('#inquiry')} className="flex h-full items-center whitespace-nowrap transition hover:text-violet-700">CONTACT</Link>
        </nav>
        <Link href={previewLink('#inquiry')} className="hidden shrink-0 rounded-full bg-violet-700 px-5 py-3 text-[11px] font-black tracking-[0.08em] text-white hover:bg-violet-800 sm:inline-flex">REQUEST A QUOTE</Link>
        <button type="button" onClick={() => setMobileOpen((open) => !open)} className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-xl xl:hidden" aria-expanded={mobileOpen} aria-label="Toggle navigation menu">{mobileOpen ? '×' : '☰'}</button>
      </div>
      {mobileOpen && <nav className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-zinc-100 bg-white px-5 py-4 shadow-lg xl:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-2xl flex-col text-sm font-bold">
        <button type="button" onClick={() => setMobileProductsOpen((open) => !open)} className="flex items-center justify-between border-b border-zinc-100 py-3 text-left" aria-expanded={mobileProductsOpen}>PRODUCTS <span aria-hidden>{mobileProductsOpen ? '−' : '+'}</span></button>
        {mobileProductsOpen && <div className="border-b border-zinc-100 py-3">
          <Link href="/oem-odm" onClick={closeMobileMenu} className="block rounded-xl bg-violet-700 px-4 py-4 text-white"><span className="block text-[9px] uppercase tracking-[0.16em] text-violet-200">Start here</span><span className="mt-1 block">OEM/ODM Custom Development</span></Link>
          <Link href="/products" onClick={closeMobileMenu} className="mt-2 block rounded-lg px-3 py-2.5 text-violet-800">View All Products</Link>
          {productCategories.map(([label, href]) => <Link key={label} href={href} onClick={(event) => { navigateCategory(event, href); closeMobileMenu(); }} className="block rounded-lg px-3 py-2.5 text-zinc-600">{label}</Link>)}
        </div>}
        <Link href="/about" onClick={closeMobileMenu} className="border-b border-zinc-100 py-3">ABOUT US</Link>
        <button type="button" onClick={() => setMobileResourcesOpen((open) => !open)} className="flex items-center justify-between border-b border-zinc-100 py-3 text-left" aria-expanded={mobileResourcesOpen}>RESOURCES <span aria-hidden>{mobileResourcesOpen ? '−' : '+'}</span></button>
        {mobileResourcesOpen && <div className="border-b border-zinc-100 py-2">{resources.map(([label, href]) => <Link key={label} href={href} onClick={closeMobileMenu} className="block rounded-lg px-3 py-2.5 text-zinc-600">{label}</Link>)}</div>}
        <Link href={previewLink('#inquiry')} onClick={closeMobileMenu} className="border-b border-zinc-100 py-3">CONTACT</Link>
        <Link href={previewLink('#inquiry')} onClick={closeMobileMenu} className="mt-4 rounded-full bg-violet-700 px-5 py-3 text-center text-xs text-white">REQUEST A QUOTE</Link>
      </div></nav>}
    </header>
  );
}

export default function Navbar() { return <PreviewNavbar />; }
