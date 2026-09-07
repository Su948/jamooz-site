"use client";

import Image from "next/image";
import { useState } from "react";
import { jmz040Product } from "@/lib/preview-products/jmz-040";

export default function Jmz040Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = jmz040Product.gallery[activeIndex];

  return (
    <div className="min-w-0" aria-label="JMZ-040 product image gallery">
      <div className="relative aspect-square overflow-hidden rounded-[28px] border border-zinc-200 bg-[#f8f9fa] sm:aspect-[1.08/1]">
        <Image
          key={activeImage.id}
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 1023px) 100vw, 55vw"
          className="object-contain p-3 sm:p-6"
        />
        <div className="absolute left-4 top-4 rounded-full border border-zinc-200 bg-white/92 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-600 backdrop-blur-sm">
          Preview image
        </div>
        {activeImage.temporary && (
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl border border-white/80 bg-white/92 px-4 py-3 text-xs text-zinc-600 shadow-sm backdrop-blur-sm">
            <span className="font-semibold text-zinc-900">{activeImage.label}</span>
            <span>Temporary · replace with final photography</span>
          </div>
        )}
      </div>

      <div className="mt-3 grid grid-cols-6 gap-2 sm:mt-4 sm:gap-3">
        {jmz040Product.gallery.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${image.label}`}
            aria-pressed={activeIndex === index}
            className={`group relative aspect-square min-w-0 overflow-hidden rounded-xl border bg-[#f8f9fa] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 ${
              activeIndex === index
                ? "border-violet-600 ring-1 ring-violet-600"
                : "border-zinc-200 hover:border-violet-300"
            }`}
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="(max-width: 1023px) 16vw, 9vw"
              className="object-cover transition group-hover:scale-[1.03]"
            />
            <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-[10px] font-bold text-zinc-700">
              {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
