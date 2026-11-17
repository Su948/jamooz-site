"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/lib/product-detail";

type ProductGalleryProps = {
  showSourceLabel?: boolean;
  model: string;
  images: readonly ProductImage[];
};

export default function ProductGallery({ model, images, showSourceLabel = true }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  return (
    <div className="min-w-0" aria-label={`${model} product image gallery`}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#dfe5ee] bg-white">
        <Image
          key={active.src}
          src={active.src}
          alt={active.alt}
          fill
          preload={activeIndex === 0}
          sizes="(min-width: 1024px) 52vw, 100vw"
          className="object-contain"
        />
        {showSourceLabel && <span className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/92 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#24456f] shadow-sm backdrop-blur">
          Supplied product image
        </span>}
        {images.length > 1 && <>
          <button
            type="button"
            aria-label="Previous product image"
            onClick={() => setActiveIndex(index => (index - 1 + images.length) % images.length)}
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#ccd8e6] bg-white/95 text-[#24456f] shadow-md transition hover:bg-[#eaf1f9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315b8d]"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2"><path d="m15 6-6 6 6 6" /></svg>
          </button>
          <button
            type="button"
            aria-label="Next product image"
            onClick={() => setActiveIndex(index => (index + 1) % images.length)}
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#ccd8e6] bg-white/95 text-[#24456f] shadow-md transition hover:bg-[#eaf1f9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315b8d]"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2"><path d="m9 6 6 6-6 6" /></svg>
          </button>
          <span className="sr-only" aria-live="polite">Image {activeIndex + 1} of {images.length}</span>
        </>}
      </div>

      <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-8">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`View ${model} product photo ${index + 1}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            className={`relative aspect-square min-w-0 overflow-hidden rounded-xl border-2 bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315b8d] focus-visible:ring-offset-2 ${index === activeIndex ? "border-[#315b8d]" : "border-transparent opacity-72 hover:opacity-100"}`}
          >
            <Image src={image.src} alt={image.alt} fill sizes="100px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
