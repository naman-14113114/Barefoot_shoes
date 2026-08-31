"use client";

import React from "react";
import Link from "next/link";
import { aboutPageData } from "@/data/about";

export function AboutView() {
  return (
    <div className="w-full bg-white text-[#000000] pt-28 md:pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-[#767676] mb-8">
          <Link href="/" className="hover:text-black transition-colors link-etq">
            Home
          </Link>
          <span>/</span>
          <span className="text-black font-medium">About BUUDY.</span>
        </nav>

        {/* Hero Headline */}
        <div className="border-b border-[#eaeaea] pb-12 mb-16">
          <span className="inline-block text-[11px] uppercase tracking-wider text-[#767676] bg-[#f5f5f5] px-2.5 py-1 rounded-sm mb-4">
            {aboutPageData.eyebrow}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black leading-tight mb-6 max-w-4xl">
            {aboutPageData.title}
          </h1>
          <p className="text-lg md:text-xl text-[#767676] leading-relaxed max-w-3xl">
            {aboutPageData.subtitle}
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {aboutPageData.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-8 border border-[#eaeaea] bg-[#fafafa] flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-3xl font-light text-[#929292] tracking-tighter">
                  {pillar.number}
                </span>
                <h3 className="text-xl font-semibold text-black tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-[14px] text-[#767676] leading-relaxed">
                  {pillar.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* European Ateliers Editorial Banner */}
        <div className="border border-[#eaeaea] p-8 md:p-12 bg-black text-white space-y-6">
          <span className="text-[11px] uppercase tracking-wider text-[#a1a1aa] bg-white/10 px-2.5 py-1 inline-block">
            Made In Portugal
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Family-Owned Artisanal Ateliers
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#a1a1aa] leading-relaxed max-w-3xl">
            Every stitch is completed in Guimarães and Felgueiras, regions with over a century of shoemaking heritage. By uniting traditional Strobel construction with flexible, zero-drop natural rubber outsoles, we create sneakers that feel weightless from the very first step.
          </p>
          <div className="pt-2">
            <Link
              href="/collections/sneakers"
              className="inline-flex items-center justify-center bg-white text-black px-6 py-3 text-[12px] font-medium tracking-wider uppercase hover:bg-neutral-200 transition-colors"
            >
              Explore The Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
