'use client';

import { useEffect, useRef, useState } from 'react';

export default function HomeVideoHero({ credentials = true }: { credentials?: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (video.current) video.current.playbackRate = 2;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) { video.current?.pause(); setPaused(true); }
  }, []);
  const toggle = async () => {
    if (!video.current) return;
    if (video.current.paused) {
      try { await video.current.play(); setPaused(false); } catch { setPaused(true); }
    } else { video.current.pause(); setPaused(true); }
  };
  return (
    <section aria-label="JAMOOZ massage device manufacturing" className={`relative isolate flex items-center overflow-hidden bg-[#21152f] text-white ${credentials?'min-h-[calc(100svh-77px)]':'h-[calc(100svh-77px)] min-h-[480px]'}`}>
      <video ref={video} src="/videos/jamooz-home-banner.mp4" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" className="absolute inset-0 -z-30 h-full w-full translate-y-[3%] scale-[1.8] object-cover object-center" onLoadedMetadata={(event) => { event.currentTarget.playbackRate = 2; }} onPause={() => setPaused(true)} onPlay={() => setPaused(false)} />
      <div className="absolute inset-0 -z-20 bg-[#21152f]/45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1d122c]/95 via-[#251335]/65 to-[#251335]/15" />
      <div className="mx-auto w-full max-w-[1320px] px-5 py-6 sm:px-10 sm:py-7">
        <div className="max-w-[760px]">
          <p className="inline-flex rounded-full border border-violet-200/30 bg-violet-200/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[.12em] text-violet-100 backdrop-blur-sm sm:text-xs">20+ years experience · OEM / ODM manufacturing</p>
{credentials&&<div className="mt-3"><div aria-label="Supplier credentials and product documents" className="grid max-w-[620px] grid-cols-2 gap-2 sm:flex sm:flex-wrap">{['SGS Assessed','ISO 13485','CE Documents','FCC Reports'].map(label=><span key={label} className="inline-flex items-center gap-2 rounded-lg border border-violet-100/35 bg-white/10 px-3 py-2 text-[11px] font-semibold text-white backdrop-blur-sm sm:text-xs"><svg aria-hidden="true" viewBox="0 0 20 20" className="size-4 text-violet-200" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 2 17 5v5c0 4-7 8-7 8s-7-4-7-8V5z"/><path d="m6.5 9.5 2.5 2.5 4.5-5"/></svg>{label}</span>)}</div></div>}
          <h2 className={`mt-5 font-semibold leading-[1.15] tracking-[-.025em] ${credentials ? 'max-w-[680px] text-[24px] min-[390px]:text-[26px] sm:text-[32px] lg:text-[40px] xl:text-[44px]' : 'text-[clamp(28px,3.8vw,52px)]'}`}>{credentials ? <>OEM &amp; ODM Massage Device <span className="text-[#ddc0ff]">Manufacturer in China</span></> : <>Massage devices.<br /><span className="text-[#ddc0ff]">Built for your brand.</span></>}</h2>
          <p className="mt-4 max-w-[530px] text-sm leading-6 text-white/85 sm:text-base sm:leading-6">{credentials ? 'Factory-direct massage products with custom branding and packaging.' : 'From product development and production to testing and delivery, we help bring your wellness products to market.'}</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold tracking-wide text-violet-100 sm:flex"><span>Custom design</span><span>Production & testing</span><span>Private label</span></div>
          {credentials&&<div className="mt-3 flex flex-wrap gap-2 text-[11px] text-violet-50 sm:text-xs">{['MOQ: 50 pcs','Samples Available','Custom Logo & Packaging'].map(label=><span key={label} className="rounded-full border border-white/20 bg-black/15 px-3 py-1.5">{label}</span>)}<span className="w-full text-[10px] leading-4 text-white/60">Customization minimums and delivery schedules follow the selected product and quotation.</span></div>}
          <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
            <a href="#inquiry" className="inline-flex min-h-11 items-center justify-center rounded-full bg-violet-600 px-4 py-3 sm:px-6 text-sm font-bold text-white shadow-lg shadow-black/15 transition hover:bg-violet-500">Request A Quote <span className="ml-5" aria-hidden="true">→</span></a>
            <a href="#product-range" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/50 bg-white/5 px-4 py-3 sm:px-6 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15">Explore Products</a>
          </div>
          {credentials&&<a href="/oem-odm#manufacturing-evidence" className="mt-3 inline-flex min-h-8 items-center text-xs font-semibold text-violet-100 underline underline-offset-4">View Credentials →</a>}
        </div>
      </div>
      <button type="button" onClick={toggle} aria-label={paused ? 'Play background video' : 'Pause background video'} className="absolute bottom-3 right-24 flex min-h-11 items-center gap-2 rounded-full border border-white/35 bg-black/35 px-4 text-xs font-semibold text-white backdrop-blur-sm hover:bg-black/60"><span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span>{paused ? 'Play video' : 'Pause video'}</button>
    </section>
  );
}
