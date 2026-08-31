import React from "react";
import Image from "next/image";
import Link from "next/link";

export function EditorialBlocks() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-24 text-[#000000]">
      <section className="space-y-4 max-w-3xl">
        <h4 className="text-[14px] font-medium text-[#767676]">Selective by design.</h4>
        <p className="text-[20px] md:text-[24px] font-normal leading-relaxed text-[#000000]">
          We build footwear for those who demand uncompromising aesthetics and natural movement. Zero-drop balance, anatomical wide toe boxes, and Italian leathers hand-lasted in Portugal.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="space-y-3">
          <div className="relative w-full aspect-[4/5] bg-[#eaeaea] overflow-hidden">
            <Image
              src="https://www.etq-amsterdam.com/cdn/shop/files/ETQ_Brillen_06_v1LR.png?v=1767613240"
              alt="LENSE X BUUDY."
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          <h3 className="text-[16px] font-medium text-[#000000]">LENSE X BUUDY.</h3>
          <p className="text-[13px] text-[#767676]">A frame built from two perspectives.</p>
        </div>

        <div className="space-y-3">
          <div className="relative w-full aspect-[4/5] bg-[#eaeaea] overflow-hidden">
            <Image
              src="https://www.etq-amsterdam.com/cdn/shop/files/Chesterfield_X_ETQ.jpg?v=1780568086"
              alt="Chesterfield X BUUDY."
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          <h3 className="text-[16px] font-medium text-[#000000]">Chesterfield X BUUDY.</h3>
          <p className="text-[13px] text-[#767676]">Built for the spaces between destinations.</p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5 space-y-4">
          <h4 className="text-[14px] font-medium text-[#767676]">The Dutch Design Studio</h4>
          <p className="text-[18px] md:text-[20px] font-normal leading-relaxed text-[#000000]">
            At our design studio, we focus on the things even the eye can’t see, to build better. We create barefoot footwear with the etiquette of traditional luxury shoemaking.
          </p>
          <Link
            href="/products/lt-03-suede-sand"
            className="inline-block text-[13px] font-medium text-[#000000] link-etq"
          >
            Explore Flagship LT-03
          </Link>
        </div>

        <div className="md:col-span-7 grid grid-cols-2 gap-3">
          <div className="relative w-full aspect-[4/5] bg-[#eaeaea] overflow-hidden">
            <Image
              src="https://www.etq-amsterdam.com/cdn/shop/files/ETQ_2april_2064_2.jpg?v=1776785381"
              alt="Studio Lasting"
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[4/5] bg-[#eaeaea] overflow-hidden">
            <Image
              src="https://www.etq-amsterdam.com/cdn/shop/files/FIT_lt_03.png?v=1781869792"
              alt="Anatomical Fit"
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
