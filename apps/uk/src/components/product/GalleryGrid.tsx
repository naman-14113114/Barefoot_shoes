"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";

interface GalleryGridProps {
  images: string[];
  title: string;
}

export function GalleryGrid({ images, title }: GalleryGridProps) {
  const [activeZoomIdx, setActiveZoomIdx] = useState<number | null>(null);
  const [mobileIdx, setMobileIdx] = useState(0);
  const mobileTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeZoomIdx === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveZoomIdx(null);
      if (event.key === "ArrowLeft") {
        setActiveZoomIdx((current) => (current! > 0 ? current! - 1 : images.length - 1));
      }
      if (event.key === "ArrowRight") {
        setActiveZoomIdx((current) => (current! < images.length - 1 ? current! + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeZoomIdx, images.length]);

  const showPrevious = () => {
    setActiveZoomIdx((current) => (current! > 0 ? current! - 1 : images.length - 1));
  };

  const showNext = () => {
    setActiveZoomIdx((current) => (current! < images.length - 1 ? current! + 1 : 0));
  };

  return (
    <>
      <div className="w-full">
        <div className="hidden grid-cols-2 gap-2 lg:grid">
          {images.map((src, index) => (
            <div key={src} className="group relative aspect-[4/5] w-full overflow-hidden bg-[#f2f2f2]">
              <button
                type="button"
                onClick={() => setActiveZoomIdx(index)}
                className="gallery-zoom-cursor absolute inset-0 text-left"
                aria-label={`Open image ${index + 1} of ${images.length}`}
              >
                <Image
                  src={src}
                  alt={`${title}, view ${index + 1}`}
                  fill
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                  fetchPriority={index < 2 ? "high" : "auto"}
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover object-center"
                />
              </button>

              {index === 1 && (
                <a
                  href="#product-details"
                  className="absolute bottom-6 right-6 flex h-12 items-center gap-4 rounded-full bg-white px-6 text-[13px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-transform duration-200 group-hover:translate-y-[-1px]"
                >
                  <span>Shop the look</span>
                  <span className="relative h-8 w-5 overflow-hidden rounded-full bg-[#eeeeee]">
                    <Image src={images[0]} alt="" fill sizes="20px" className="object-cover" />
                  </span>
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="relative lg:hidden">
          <div
            ref={mobileTrackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth"
            onScroll={(event) => {
              const target = event.currentTarget;
              const itemWidth = target.clientWidth + 8;
              setMobileIdx(Math.min(images.length - 1, Math.round(target.scrollLeft / itemWidth)));
            }}
          >
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveZoomIdx(index)}
                className="relative aspect-[5/7] w-full flex-none snap-center overflow-hidden bg-[#eeeeee] text-left sm:aspect-[4/3]"
                aria-label={`Open image ${index + 1} of ${images.length}`}
              >
                <Image
                  src={src}
                  alt={`${title}, view ${index + 1}`}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setActiveZoomIdx(mobileIdx)}
            className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            aria-label="Zoom current image"
          >
            <Plus size={17} strokeWidth={1.5} />
          </button>

          <a
            href="#product-details"
            className="absolute bottom-4 right-4 flex h-11 items-center gap-3 rounded-full bg-white px-5 text-[13px] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <span>Shop the look</span>
            <span className="relative h-7 w-5 overflow-hidden rounded-full bg-[#eeeeee]">
              <Image src={images[0]} alt="" fill sizes="20px" className="object-cover" />
            </span>
          </a>

          <div className="absolute right-4 top-4 bg-white/90 px-2 py-1 text-[11px] tabular-nums">
            {mobileIdx + 1} / {images.length}
          </div>
        </div>
      </div>

      {activeZoomIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image viewer`}
          className="etq-overlay-in fixed inset-0 z-[70] bg-[#f2f2f2]"
        >
          <div className="absolute inset-y-0 left-0 z-10 hidden w-[96px] overflow-y-auto bg-white/80 px-4 py-4 lg:block">
            <div className="space-y-3">
              {images.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveZoomIdx(index)}
                  className={`relative aspect-[4/5] w-12 overflow-hidden bg-[#eeeeee] transition-opacity ${
                    index === activeZoomIdx ? "opacity-100 ring-1 ring-[#111111]" : "opacity-45 hover:opacity-100"
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <Image src={src} alt="" fill sizes="48px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="absolute inset-0 lg:left-[96px]">
            <Image
              src={images[activeZoomIdx]}
              alt={`${title}, enlarged view ${activeZoomIdx + 1}`}
              fill
              sizes="100vw"
              className="object-contain lg:object-cover"
              priority
            />
          </div>

          <button
            type="button"
            onClick={() => setActiveZoomIdx(null)}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/90"
            aria-label="Close image viewer"
          >
            <X size={22} strokeWidth={1.4} />
          </button>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute bottom-5 left-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 lg:left-[112px]"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} strokeWidth={1.4} />
          </button>
          <button
            type="button"
            onClick={showNext}
            className="absolute bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/90"
            aria-label="Next image"
          >
            <ChevronRight size={20} strokeWidth={1.4} />
          </button>

          <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 bg-white/90 px-3 py-2 text-[11px] tabular-nums">
            {activeZoomIdx + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
