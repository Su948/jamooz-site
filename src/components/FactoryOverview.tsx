'use client';

import { useEffect, useRef } from 'react';

export default function FactoryOverview() {
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!element.getAttribute('src')) element.src = '/videos/jamooz-process-overview.mp4';
        void element.play().catch(() => {});
      } else element.pause();
    }, { threshold: 0.15 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <section id="about-us" className="scroll-mt-24 border-b border-violet-100 bg-gradient-to-b from-[#e8dcfa] via-[#f2ebfc] to-white py-10 sm:py-14">
    <div className="mx-auto grid max-w-[1240px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-violet-700">From idea to production</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#302050] sm:text-4xl">See how your massage products are made.</h2>
        <p className="mt-4 text-sm leading-7 text-[#655574] sm:text-base">From your first conversation with our team to design, sample review and production, see how we bring your OEM and ODM project to life.</p>
        <div className="mt-5 flex flex-wrap gap-2">{['20+ Years Experience','SGS Assessed','ISO 13485','MOQ From 50 pcs','Samples Available'].map(label => <span key={label} className="rounded-xl border border-violet-200 bg-white/75 px-4 py-2.5 text-sm font-semibold text-[#483260]">{label}</span>)}</div>
        <p className="mt-3 text-xs leading-5 text-[#71657d]">Certificates and reports apply to the relevant entities, products and destination markets.</p>
        <div className="mt-6 flex flex-wrap gap-3"><a href="/oem-odm#manufacturing-evidence" className="rounded-full bg-violet-700 px-5 py-3 text-sm font-bold text-white hover:bg-violet-800">View Factory &amp; Credentials →</a><a href="#inquiry" className="rounded-full border border-violet-300 bg-white/70 px-5 py-3 text-sm font-bold text-violet-900">Request OEM/ODM Quote</a></div>
      </div>
      <video ref={video} aria-label="JAMOOZ customer consultation, design, sampling and production process" className="aspect-video w-full rounded-3xl bg-[#d9cce9] shadow-xl shadow-violet-900/10" autoPlay muted loop playsInline controls preload="none" />
    </div>
  </section>;
}
