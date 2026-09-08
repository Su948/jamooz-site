"use client";

import Image from "next/image";
import { useState } from "react";
import { jmz906Gallery } from "@/lib/preview-products/jmz-906";

export default function Jmz906Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = jmz906Gallery[activeIndex];

  return (
    <div className="min-w-0" aria-label="JMZ-906 real product photo gallery">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#eadde2] bg-[#eef4f5]">
        <Image
          key={active.src}
          src={active.src}
          alt={active.alt}
          fill
          loading={activeIndex === 0 ? "eager" : "lazy"}
          sizes="(min-width: 1024px) 52vw, 100vw"
          className="object-contain"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#6d3850] shadow-sm backdrop-blur">
          Actual product photo
        </span>
      </div>

      <div className="mt-3 grid grid-cols-6 gap-2">
        {jmz906Gallery.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`View product photo ${index + 1}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            className={`relative aspect-square min-w-0 overflow-hidden rounded-xl border-2 bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a45475] focus-visible:ring-offset-2 ${index === activeIndex ? "border-[#a45475]" : "border-transparent opacity-72 hover:opacity-100"}`}
          >
            <Image src={image.src} alt="" fill sizes="100px" className="object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}
