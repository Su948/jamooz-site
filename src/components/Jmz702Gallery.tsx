"use client";

import Image from "next/image";
import { useState } from "react";
import { jmz702Gallery } from "@/lib/preview-products/jmz-702";

export default function Jmz702Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = jmz702Gallery[activeIndex];

  return (
    <div className="min-w-0" aria-label="JMZ-702 product image gallery">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#dfe5ee] bg-white">
        <Image
          key={active.src}
          src={active.src}
          alt={active.alt}
          fill
          loading={activeIndex === 0 ? "eager" : "lazy"}
          sizes="(min-width: 1024px) 52vw, 100vw"
          className="object-contain"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/92 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#24456f] shadow-sm backdrop-blur">
          Supplied product image
        </span>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-8">
        {jmz702Gallery.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`View JMZ-702 product photo ${index + 1}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            className={`relative aspect-square min-w-0 overflow-hidden rounded-xl border-2 bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315b8d] focus-visible:ring-offset-2 ${index === activeIndex ? "border-[#315b8d]" : "border-transparent opacity-72 hover:opacity-100"}`}
          >
            <Image src={image.src} alt="" fill sizes="100px" className="object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}
