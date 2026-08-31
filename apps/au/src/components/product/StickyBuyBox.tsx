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

      {/* 3. Pricing Strip (Strict Integer A$89 / A$179) */}
      <div className="flex items-baseline gap-2.5">
        {product.compareAtPrice > product.price && (
          <span className="text-[14px] text-[#929292] line-through decoration-[1px]">
            A${product.compareAtPrice}
          </span>
        )}
        <span className="text-[16px] md:text-[17px] font-medium text-[#000000]">
          A${product.price}
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
              ? `Size: EU ${selectedSizeEu} | AU ${selectedVariant.sizeUk} | US ${selectedVariant.sizeUs}`
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
          <span>A${product.price}</span>
        </button>
      </div>

      {/* 8. Quick USPs with expandable information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1 text-[12px] text-[#767676]">
        <div className="border border-[#eaeaea] p-3 bg-[#fafafa]">
          <p className="font-medium text-[#000000]">Free & fast AU delivery</p>
          <p className="mt-0.5 text-[11px]">Orders before 23:30 shipped same day. Free over A$250.</p>
        </div>
        <div className="border border-[#eaeaea] p-3 bg-[#fafafa]">
          <p className="font-medium text-[#000000]">Easy returns & exchanges</p>
          <p className="mt-0.5 text-[11px]">All orders can easily be returned or exchanged within 14 days.</p>
        </div>
      </div>

      {/* 9. 6 Collapsible Accordions with single-open mutex behavior */}
      <div className="border-t border-[#eaeaea] pt-2 space-y-0.5">
        <AccordionGroup defaultOpenId="description">
          <AccordionItem id="description" title="Description">
            <p>
              The LT 03 takes its proportion from retro basketball and keeps the noise out of it. Structured panels give the upper its shape, our thicker barefoot sole gives it weight. It comes from the court and belongs nowhere near one.
            </p>
          </AccordionItem>

          <AccordionItem id="size-fit" title="Size & fit">
            <p>
              Fits true to size. If you take a half size or have wider feet, we recommend taking one size up. Includes our anatomical wide toe box and barefoot zero-drop foundation for natural toe splay.
            </p>
          </AccordionItem>

          <AccordionItem id="features" title="Premium features">
            <ul className="space-y-1.5 pl-0 text-[12px]">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-[#000000] mt-2 flex-none" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </AccordionItem>

          <AccordionItem id="material" title="Material info">
            <p>
              Mediterranean suede sourced from LWG Gold-certified Gruppo Mastrotto in Arzignano, Italy. Full calfskin leather lining and hand-stitched 360° cupsole. Clean with a soft suede brush and treat with water protector.
            </p>
          </AccordionItem>

          <AccordionItem id="reviews" title={`Product reviews (${product.reviewCount} reviews)`}>
            <p>
              Rated {product.rating} / 5.0 based on {product.reviewCount} verified customer reviews. Praised for exceptional all-day barefoot comfort, wide toe box freedom, and zero-drop posture.
            </p>
          </AccordionItem>

          <AccordionItem id="insole" title="Removable insole">
            <p>
              Features an anatomical memory foam footbed with channeled airflow ventilation for maximum barefoot breathability and sensory ground contact.
            </p>
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
