import React from "react";
import Link from "next/link";
import Image from "next/image";

export function HeroBanner() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 md:px-8 pt-24 pb-16">
      <div className="relative w-full aspect-[16/9] min-h-[420px] md:min-h-[520px] bg-[#eaeaea] overflow-hidden">
        <Image
          src="https://www.etq-amsterdam.com/cdn/shop/files/Desktop_v2_1.jpg?v=1787041152"
          alt="BUUDY. Barefoot Footwear Essentials"
          fill
          priority={true}
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 md:p-12 text-white">
          <div className="max-w-xl space-y-3">
            <span className="text-[13px] md:text-[14px] font-medium tracking-normal text-white/90">
              Wardrobe Essentials.
            </span>
            <h1 className="text-[28px] md:text-[38px] font-normal leading-tight text-white">
              Worn daily. Built to last.
            </h1>
            <p className="text-[13px] text-white/80">
              ★ 4.8 / 5. Trusted by 250.000+ customers
            </p>
            <div className="pt-2">
              <Link
                href="/collections/sneakers"
                className="inline-flex items-center justify-center bg-white text-[#000000] border border-white px-7 py-3 text-[13px] font-medium hover:bg-[#000000] hover:text-white transition-colors duration-300 rounded-none"
              >
                Shop All Footwear
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
