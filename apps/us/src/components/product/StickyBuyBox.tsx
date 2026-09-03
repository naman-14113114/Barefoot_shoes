"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BarefootProduct } from "@barefoot/shared";
import { StarRating, AccordionItem, AccordionGroup } from "@barefoot/ui";
import { useCart } from "@/components/cart/CartProvider";
import { SizeSelectorModal } from "./SizeSelectorModal";

interface StickyBuyBoxProps {
  product: BarefootProduct;
}

export function StickyBuyBox({ product }: StickyBuyBoxProps) {
  const { addItem } = useCart();
  const [selectedSizeEu, setSelectedSizeEu] = useState<number | null>(42);
  const [sizeModalOpen, setSizeModalOpen] = useState(false);

  const selectedVariant =
    product.variants.find((v) => v.sizeEu === selectedSizeEu) || product.variants[0];

  const colorways = [
    {
      name: "Sand",
      handle: "lt-03-suede-sand",
      img: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ_241050__Aangepast_02LR.jpg?height=240&v=1747401120",
    },
    {
      name: "Blueberry",
      handle: "lt-03-suede-blueberry",
      img: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ-240522-043_v1LR.jpg?height=240&v=1720252726",
    },
    {
      name: "White",
      handle: "lt-03-premium-nappa-white",
      img: "https://www.etq-amsterdam.com/cdn/shop/products/ETQ_Model_046Angel3.jpg?height=240&v=1760605385",
    },
    {
      name: "Chocolate",
      handle: "ds-03-all-chocolate",
      img: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ_250812_022_v1LR.jpg?height=240&v=1759409557",
    },
  ];

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${selectedVariant.sizeEu}`,
      productId: product.id,
      variantId: selectedVariant.variantId,
      title: product.title,
      subtitle: product.subtitle,
      colorName: product.colorName,
      sizeEu: selectedVariant.sizeEu,
      sizeUk: selectedVariant.sizeUk,
      sizeUs: selectedVariant.sizeUs,
      price: product.price,
      compareAtPrice: product.compareAtPrice,
      image: product.primaryImage,
    });
  };

  return (
    <div className="w-full lg:sticky lg:top-[96px] lg:self-start space-y-5">
      {/* 1. Backlink */}
      <div>
        <Link
          href="/collections/sneakers"
          className="inline-flex items-center gap-1.5 text-[13px] text-[#767676] hover:text-[#000000] transition-colors group"
        >
          <svg
            className="w-3 h-3 transition-transform group-hover:-translate-x-0.5"
            fill="none"
            viewBox="0 0 13 13"
          >
            <path
              d="M10.432 1.725 5.844 6.508l4.587 4.767L9.154 12.5 3.41 6.508 9.155.5l1.277 1.225z"
              fill="currentColor"
            />
          </svg>
          <span>Sneakers</span>
        </Link>
      </div>

      {/* 2. Title, Subtitle, & Badge */}
      <div className="space-y-1">
        {product.badge && (
          <div className="inline-block bg-[#1c1c1c] text-white text-[10px] font-medium uppercase tracking-[0.08em] px-2 py-0.5 mb-1">
            {product.badge}
          </div>
        )}
        <h1 className="text-[20px] md:text-[22px] font-normal text-[#000000] leading-snug">
          {product.title}
          <span className="block text-[14px] text-[#929292] mt-0.5 font-normal">
            {product.subtitle}
          </span>
        </h1>
      </div>

      {/* 3. Pricing Strip (Strict Integer $59 / $119) */}
      <div className="flex items-baseline gap-2.5">
        {product.compareAtPrice > product.price && (
          <span className="text-[14px] text-[#929292] line-through decoration-[1px]">
            ${product.compareAtPrice}
          </span>
        )}
        <span className="text-[16px] md:text-[17px] font-medium text-[#000000]">
          ${product.price}
        </span>
        <span className="text-[10px] font-medium text-[#0e855b] bg-[#f0fdf4] px-1.5 py-0.5 ml-1 tracking-wide">
          50% OFF
        </span>
      </div>

      {/* 4. Review Rating */}
      <div>
        <StarRating rating={product.rating} count={product.reviewCount} />
      </div>

      {/* 5. Colorway Thumbnails */}
      <div className="space-y-2.5 pt-3 border-t border-[#eaeaea]">
        <div className="flex justify-between text-[12px]">
          <span className="font-medium text-[#000000]">Colour: {product.colorName}</span>
          <span className="text-[#929292]">{product.material}</span>
        </div>
        <div className="flex items-center gap-2">
          {colorways.map((c) => (
            <Link
              key={c.name}
              href={`/products/${c.handle}`}
              title={`${product.title} ${c.name}`}
              className={`relative w-14 h-14 border overflow-hidden transition-all ${
                c.handle === product.handle
                  ? "border-[#000000] ring-1 ring-[#000000]"
                  : "border-[#eaeaea] hover:border-[#929292]"
              }`}
            >
              <Image src={c.img} alt={c.name} fill sizes="56px" className="object-cover" />
            </Link>
          ))}
        </div>
      </div>

      {/* 6. Size Selector Trigger */}
      <div className="space-y-2 pt-1">
        <button
          type="button"
          onClick={() => setSizeModalOpen(true)}
          className="w-full flex items-center justify-between border border-[#eaeaea] px-4 py-3 text-[13px] font-medium hover:border-[#000000] transition-colors rounded-none bg-white text-left"
        >
          <span>
            {selectedSizeEu
              ? `Size: EU ${selectedSizeEu} | US ${selectedVariant.sizeUs} | UK ${selectedVariant.sizeUk}`
              : "Select size"}
          </span>
          <svg className="w-2.5 h-2.5 text-[#000000]" fill="none" viewBox="0 0 10 6">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Size Help */}
        <button
          type="button"
          onClick={() => setSizeModalOpen(true)}
          className="text-[12px] text-[#767676] underline underline-offset-4 hover:text-[#000000] transition-colors block text-left"
        >
          Not sure on size? Find your barefoot size in 60 seconds.
        </button>
      </div>

      {/* 7. Primary Action Button */}
      <div>
        <button
          type="button"
          onClick={handleAddToCart}
          className="w-full bg-[#000000] text-white border border-[#000000] py-3.5 text-[13px] font-medium tracking-[0.02em] hover:bg-neutral-800 transition-colors duration-200 rounded-none shadow-sm flex items-center justify-center gap-2"
        >
          <span>Add to bag</span>
          <span>·</span>
          <span>${product.price}</span>
        </button>
      </div>

      {/* 8. Quick USPs with expandable information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1 text-[12px] text-[#767676]">
        <div className="border border-[#eaeaea] p-3 bg-[#fafafa]">
          <p className="font-medium text-[#000000]">Free & fast US delivery</p>
          <p className="mt-0.5 text-[11px]">Orders before 23:30 shipped same day. Free over $180.</p>
        </div>
        <div className="border border-[#eaeaea] p-3 bg-[#fafafa]">
          <p className="font-medium text-[#000000]">Easy returns & exchanges</p>
          <p className="mt-0.5 text-[11px]">All orders can easily be returned or exchanged within 14 days.</p>
        </div>
      </div>

      {/* 9. 6 Collapsible Accordions with single-open mutex behavior */}
      <div className="border-t border-[#eaeaea] pt-2 space-y-0.5">
        <AccordionGroup defaultOpenId="product-info">
          {/* 1. PRODUCT INFO */}
          <AccordionItem id="product-info" title="PRODUCT INFO">
            <div className="pt-2 pb-4 space-y-4">
              <div className="space-y-3.5">
                {/* Primus Outsole */}
                <div className="flex items-start gap-3">
                  <div className="relative w-7 h-7 shrink-0 mt-0.5">
                    <Image
                      src="/media/vivo/biome_design_icon.png"
                      alt="Primus Outsole"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold uppercase tracking-tight text-[#212121]">
                      Primus Outsole
                    </h5>
                    <p className="text-[12px] text-[#555555] leading-relaxed mt-0.5">
                      Get as close to the ground as possible.
                    </p>
                  </div>
                </div>

                {/* Ortholite Insole */}
                <div className="flex items-start gap-3">
                  <div className="relative w-7 h-7 shrink-0 mt-0.5">
                    <Image
                      src="/media/vivo/insoles_recycled_icon.png"
                      alt="Ortholite Insole"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold uppercase tracking-tight text-[#212121]">
                      Ortholite Insole
                    </h5>
                    <p className="text-[12px] text-[#555555] leading-relaxed mt-0.5">
                      The Ortholite Performance Insole is made of 98% recycled polyurethane foam, which helps reduce waste and the use of virgin plastics.
                    </p>
                  </div>
                </div>

                {/* Breathable Mesh */}
                <div className="flex items-start gap-3">
                  <div className="relative w-7 h-7 shrink-0 mt-0.5">
                    <Image
                      src="/media/vivo/attributes_breathable_icon.png"
                      alt="Breathable Mesh"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold uppercase tracking-tight text-[#212121]">
                      Breathable Mesh
                    </h5>
                    <p className="text-[12px] text-[#555555] leading-relaxed mt-0.5">
                      Breathable, lightweight and comfortable.
                    </p>
                  </div>
                </div>

                {/* Vegan* */}
                <div className="flex items-start gap-3">
                  <div className="relative w-7 h-7 shrink-0 mt-0.5">
                    <Image
                      src="/media/vivo/materials_animal_free_icon.png"
                      alt="Vegan Certified"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold uppercase tracking-tight text-[#212121]">
                      Vegan*
                    </h5>
                    <p className="text-[12px] text-[#555555] leading-relaxed mt-0.5">
                      *The main materials in all our Vegan* products are synthetic and aren&apos;t derived from animals. We don&apos;t yet have the transparency we need over the production of all the small inputs (such as adhesives and dyes) used in these products to ensure they meet vegan best practices. So, whilst we believe the shoes are vegan, we can&apos;t yet guarantee it and want to be fully transparent.
                    </p>
                  </div>
                </div>
              </div>

              {/* Weight Badge */}
              <div className="pt-3.5 border-t border-[#eaeaea] flex items-baseline justify-between">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#212121]">
                  Weight
                </span>
                <div className="flex items-baseline">
                  <span className="text-[32px] font-black leading-none text-[#212121]">
                    239
                  </span>
                  <span className="text-[15px] font-bold text-[#212121] ml-0.5">
                    g
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-[#767676] text-right -mt-2.5">
                Based on a single shoe in Men&apos;s size: EU 42 | US 9 | UK 8
              </p>
            </div>
          </AccordionItem>

          {/* 2. SIZE & FIT */}
          <AccordionItem id="size-fit" title="SIZE & FIT">
            <div className="pt-2 pb-4 space-y-3">
              <p className="text-[13px] text-[#333333] leading-relaxed">
                This shoe fits true to size. If you are between sizes, we recommend sizing up to ensure optimal toe splay and natural barefoot biomechanics.
              </p>
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="bg-[#f9f9f9] p-3 border border-[#eaeaea]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#212121] block mb-0.5">
                    Wide Toe Box
                  </span>
                  <p className="text-[12px] text-[#555555] leading-snug">
                    Natural anatomical toe splay for maximum stability.
                  </p>
                </div>
                <div className="bg-[#f9f9f9] p-3 border border-[#eaeaea]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#212121] block mb-0.5">
                    Zero Drop
                  </span>
                  <p className="text-[12px] text-[#555555] leading-snug">
                    Completely flat from heel to toe for natural posture.
                  </p>
                </div>
              </div>
            </div>
          </AccordionItem>

          {/* 3. DELIVERY INFO */}
          <AccordionItem id="delivery-info" title="DELIVERY INFO">
            <div className="pt-2 pb-4 space-y-2 text-[13px] text-[#333333]">
              <p className="leading-relaxed font-medium">
                • Standard Delivery ($5, Free on orders over $80) — 3-5 business days via USPS.
              </p>
              <p className="leading-relaxed">
                • Express Courier ($10) — 1-2 business days via FedEx.
              </p>
              <p className="leading-relaxed text-[#555555]">
                • Full tracking provided via email upon dispatch.
              </p>
              <p className="leading-relaxed text-[#555555]">
                • Hassle-free 100-day returns with prepaid domestic return labels.
              </p>
            </div>
          </AccordionItem>

          {/* 4. 100-DAY TRIAL */}
          <AccordionItem id="100-day-trial" title="100-DAY TRIAL">
            <div className="pt-2 pb-4 space-y-2.5 text-[13px]">
              <p className="text-[#333333] leading-relaxed">
                We&apos;re confident that after experiencing the joys of natural foot freedom, your feet won&apos;t want to go back to &ldquo;normal&rdquo; shoes.
              </p>
              <p className="text-[#555555] leading-relaxed">
                So confident, we&apos;ve introduced a 100 day trial to all orders. If you change your mind within that period, return for a full refund with zero hassle.
              </p>
            </div>
          </AccordionItem>

          {/* 5. MATERIALS & TRANSPARENCY */}
          <AccordionItem id="materials-transparency" title="MATERIALS & TRANSPARENCY">
            <div className="pt-2 pb-4 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[12px]">
                <div className="border-b border-[#eaeaea] pb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#767676] block">
                    Upper
                  </span>
                  <span className="text-[#212121] font-medium">
                    100% Recycled Polyester (rPET)
                  </span>
                </div>
                <div className="border-b border-[#eaeaea] pb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#767676] block">
                    Lining
                  </span>
                  <span className="text-[#212121] font-medium">
                    57% TPU, 35% rPET, 8% PU
                  </span>
                </div>
                <div className="border-b border-[#eaeaea] pb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#767676] block">
                    Fastening
                  </span>
                  <span className="text-[#212121] font-medium">
                    Laces (100% Recycled Polyester)
                  </span>
                </div>
                <div className="border-b border-[#eaeaea] pb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#767676] block">
                    Outsole
                  </span>
                  <span className="text-[#212121] font-medium">
                    60% Polymer, 30% Silica, 10% Vulcanised
                  </span>
                </div>
              </div>
              <div className="pt-1 flex items-center justify-between gap-2">
                <span className="text-[11px] text-[#555555]">
                  Ethically produced with certified transparent supply chains.
                </span>
                <span className="px-2 py-0.5 bg-[#f0f0f0] text-[#212121] text-[10px] font-bold uppercase tracking-wider shrink-0">
                  MADE IN VIETNAM
                </span>
              </div>
            </div>
          </AccordionItem>

          {/* 6. CARE */}
          <AccordionItem id="care" title="CARE">
            <div className="pt-2 pb-4 space-y-2 text-[12px] text-[#333333]">
              <div>
                <span className="font-bold text-[#212121]">Cleaning:</span> Brush off loose dirt and wipe clean with a damp cloth and mild soap.
              </div>
              <div>
                <span className="font-bold text-[#212121]">Drying:</span> Remove insole and air-dry at room temperature away from direct sunlight or artificial heat sources.
              </div>
              <div>
                <span className="font-bold text-[#212121]">Aftercare:</span> Treat upper material periodically with eco-friendly water repellent spray.
              </div>
            </div>
          </AccordionItem>
        </AccordionGroup>
      </div>

      {/* Size Selection Modal */}
      <SizeSelectorModal
        isOpen={sizeModalOpen}
        onClose={() => setSizeModalOpen(false)}
        selectedSize={selectedSizeEu}
        onSelectSize={(size) => setSelectedSizeEu(size)}
      />
    </div>
  );
}
