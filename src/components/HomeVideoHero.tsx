'use client';

import { useEffect, useRef, useState } from 'react';

export default function HomeVideoHero() {
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
    <section aria-label="JAMOOZ massage device manufacturing" className="relative isolate flex h-[calc(100svh-77px)] min-h-[480px] items-center overflow-hidden bg-[#21152f] text-white">
      <video ref={video} src="/videos/jamooz-home-banner.mp4" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" className="absolute inset-0 -z-30 h-full w-full translate-y-[3%] scale-[1.8] object-cover object-center" onLoadedMetadata={(event) => { event.currentTarget.playbackRate = 2; }} onPause={() => setPaused(true)} onPlay={() => setPaused(false)} />
      <div className="absolute inset-0 -z-20 bg-[#21152f]/45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1d122c]/95 via-[#251335]/65 to-[#251335]/15" />
      <div className="mx-auto w-full max-w-[1320px] px-6 py-8 sm:px-10">
        <div className="max-w-[710px]">
          <p className="inline-flex rounded-full border border-violet-200/30 bg-violet-200/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-violet-100 backdrop-blur-sm sm:text-xs">20+ years experience · OEM / ODM manufacturing</p>
          <h2 className="mt-5 text-[clamp(30px,4.8vw,64px)] font-semibold leading-[1.06] tracking-[-.035em]">Massage devices.<br /><span className="text-[#ddc0ff]">Built for your brand.</span></h2>
          <p className="mt-5 max-w-[530px] text-sm leading-6 text-white/85 sm:text-base sm:leading-7">From product development and production to testing and delivery, we help bring your wellness products to market.</p>
          <div className="mt-5 hidden flex-wrap gap-x-5 gap-y-2 text-xs font-semibold tracking-wide text-violet-100 sm:flex"><span>Custom design</span><span>Production & testing</span><span>Private label</span></div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#inquiry" className="inline-flex min-h-13 items-center justify-center rounded-full bg-violet-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-black/15 transition hover:bg-violet-500">Request A Quote <span className="ml-5" aria-hidden="true">→</span></a>
            <a href="#product-range" className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/50 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15">Explore Products</a>
          </div>
        </div>
      </div>
      <button type="button" onClick={toggle} aria-label={paused ? 'Play background video' : 'Pause background video'} className="absolute bottom-5 right-6 flex min-h-11 items-center gap-2 rounded-full border border-white/35 bg-black/35 px-4 text-xs font-semibold text-white backdrop-blur-sm hover:bg-black/60"><span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span>{paused ? 'Play video' : 'Pause video'}</button>
    </section>
  );
}
