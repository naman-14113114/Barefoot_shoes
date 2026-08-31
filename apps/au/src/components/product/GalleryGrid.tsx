"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryGridProps {
  images: string[];
  title: string;
}

export function GalleryGrid({ images, title }: GalleryGridProps) {
  const [activeZoomIdx, setActiveZoomIdx] = useState<number | null>(null);
  const [mobileIdx, setMobileIdx] = useState(0);

  // Keyboard navigation for zoom lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeZoomIdx === null) return;
      if (e.key === "Escape") setActiveZoomIdx(null);
      if (e.key === "ArrowLeft")
        setActiveZoomIdx((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
      if (e.key === "ArrowRight")
        setActiveZoomIdx((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeZoomIdx, images.length]);

  return (
    <>
      <div className="w-full">
        {/* 1. Desktop: 2-Column Staggered Vertical Grid (All 14 Images) */}
        <div className="hidden md:grid grid-cols-2 gap-2">
          {images.map((src, idx) => (
             <div
              key={idx}
              onClick={() => setActiveZoomIdx(idx)}
              className="group relative w-full aspect-[4/5] pb-[118%] bg-[#f5f5f5] cursor-zoom-in overflow-hidden border border-[#eaeaea]"
            >
              <Image
                src={src}
                alt={`${title} - view ${idx + 1}`}
                fill
                priority={idx < 4}
                loading={idx < 4 ? "eager" : "eager"}
                fetchPriority={idx < 2 ? "high" : "auto"}
                sizes="(max-width: 1200px) 50vw, 600px"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
              />
              
              {/* ETQ Signature Centered Circular '+' Hover Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-white/90 shadow-md backdrop-blur-sm flex items-center justify-center text-[#000000] opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 ease-[cubic-bezier(0.19,1,0.22,1)]">
                  <svg className="w-4 h-4 text-[#000000]" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Mobile: Swipeable Carousel with Active Fraction Counter */}
        <div className="md:hidden relative">
          <div
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar space-x-2 scroll-smooth"
            onScroll={(e) => {
              const target = e.currentTarget;
              const idx = Math.round(target.scrollLeft / target.clientWidth);
              setMobileIdx(idx);
            }}
          >
            {images.map((src, idx) => (
              <div
                key={idx}
                onClick={() => setActiveZoomIdx(idx)}
                className="relative flex-none w-full aspect-[4/5] pb-[115%] bg-[#eaeaea] snap-center overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`${title} - view ${idx + 1}`}
                  fill
                  priority={idx === 0}
                  loading="eager"
                  fetchPriority={idx === 0 ? "high" : "auto"}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>

          {/* Floating Mobile Index Counter */}
          <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[11px] font-medium px-2.5 py-1 tracking-wider">
            {mobileIdx + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* 3. Full-Screen High-Resolution Lightbox Modal */}
      {activeZoomIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-4 md:p-8 animate-in fade-in duration-300"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#eaeaea]">
            <span className="text-[13px] font-medium text-[#000000]">
              {title} — Image {activeZoomIdx + 1} of {images.length}
            </span>
            <button
              type="button"
              onClick={() => setActiveZoomIdx(null)}
              className="p-2 text-[#000000] hover:opacity-75"
              aria-label="Close zoom modal"
            >
              <X size={22} />
            </button>
          </div>

          {/* Centered Large Image */}
          <div className="relative flex-1 w-full my-4 flex items-center justify-center">
            <Image
              src={images[activeZoomIdx]}
              alt={`${title} zoomed`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Footer Controls & Thumbnail Strip */}
          <div className="pt-4 border-t border-[#eaeaea] flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() =>
                setActiveZoomIdx((prev) => (prev! > 0 ? prev! - 1 : images.length - 1))
              }
              className="flex items-center gap-1.5 text-[13px] font-medium text-[#000000] hover:opacity-75"
            >
              <ChevronLeft size={18} />
              Previous
            </button>

            {/* Thumbnail Navigation Strip */}
            <div className="hidden md:flex items-center gap-1.5 overflow-x-auto max-w-xl py-1 no-scrollbar">
              {images.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveZoomIdx(i)}
                  className={`relative w-10 h-10 flex-none border overflow-hidden transition-all ${
                    activeZoomIdx === i
                      ? "border-[#000000] ring-1 ring-black"
                      : "border-[#eaeaea] opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={src} alt="thumbnail" fill sizes="40px" className="object-cover" />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveZoomIdx((prev) => (prev! < images.length - 1 ? prev! + 1 : 0))
              }
              className="flex items-center gap-1.5 text-[13px] font-medium text-[#000000] hover:opacity-75"
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
