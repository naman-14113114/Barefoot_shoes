"use client";

import React, { useState, useEffect } from "react";
import type { BarefootProduct } from "@barefoot/shared";
import { useCart } from "@/components/cart/CartProvider";
import { SizeSelectorModal } from "./SizeSelectorModal";

interface StickyAddToCartBarProps {
  product: BarefootProduct;
}

export function StickyAddToCartBar({ product }: StickyAddToCartBarProps) {
  const { addItem } = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSizeEu, setSelectedSizeEu] = useState<number | null>(42);
  const [sizeModalOpen, setSizeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when scrolled past 550px (past the main buy button)
      if (window.scrollY > 550) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const selectedVariant =
    product.variants.find((v) => v.sizeEu === selectedSizeEu) || product.variants[0];

  const handleAddToCart = () => {
    if (!selectedSizeEu) {
      setSizeModalOpen(true);
      return;
    }

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
    <>
      {/* 1. Desktop Floating Capsule (.product__sticky-bar--desktop) */}
      <div
        className={`hidden md:flex fixed right-6 bottom-6 z-30 bg-white border border-[#eaeaea] shadow-[0_8px_30px_rgba(0,0,0,0.12)] py-3 px-5 items-center gap-4 transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isVisible
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-24 opacity-0 pointer-events-none"
        }`}
      >
        {/* Product Title & Price */}
        <div className="flex items-center gap-2 text-[13px] whitespace-nowrap">
          <span className="font-medium text-[#000000]">{product.title} —</span>
          {product.compareAtPrice > product.price && (
            <span className="text-[#929292] line-through text-[13px]">
              {product.currencySymbol}{product.compareAtPrice}
            </span>
          )}
          <span className="font-medium text-[#000000]">
            {product.currencySymbol}{product.price}
          </span>
        </div>

        {/* Colour Pill */}
        <button
          type="button"
          className="px-3.5 py-2 border border-[#eaeaea] text-[12px] font-medium text-[#000000] bg-[#fafafa] hover:border-[#000000] transition-colors whitespace-nowrap"
        >
          Colour: {product.colorName}
        </button>

        {/* Size Pill */}
        <button
          type="button"
          onClick={() => setSizeModalOpen(true)}
          className="px-3.5 py-2 border border-[#eaeaea] text-[12px] font-medium text-[#000000] bg-white hover:border-[#000000] transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          <span>
            {selectedSizeEu
              ? `Size: EU ${selectedSizeEu} / US ${selectedVariant.sizeUs}`
              : "Select size"}
          </span>
          <svg className="w-2.5 h-2.5 text-[#000000]" fill="none" viewBox="0 0 10 6">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Add to Bag Button */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="px-8 py-2.5 bg-[#000000] text-white text-[13px] font-medium tracking-[0.02em] hover:bg-neutral-800 transition-colors whitespace-nowrap"
        >
          Add to bag
        </button>
      </div>

      {/* 2. Mobile Fixed Bottom Bar (.product__sticky-bar) */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-[#eaeaea] p-3 grid grid-cols-2 gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isVisible
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={() => setSizeModalOpen(true)}
          className="w-full flex items-center justify-between border border-[#eaeaea] px-3 py-2.5 text-[12px] font-medium bg-white text-[#000000] truncate"
        >
          <span className="truncate">
            {selectedSizeEu ? `Size: US ${selectedVariant.sizeUs}` : "Select size"}
          </span>
          <svg className="w-2.5 h-2.5 ml-1 flex-none text-[#000000]" fill="none" viewBox="0 0 10 6">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleAddToCart}
          className="w-full bg-[#000000] text-white py-2.5 text-[12px] font-medium text-center hover:bg-neutral-800 transition-colors"
        >
          Add to bag · {product.currencySymbol}{product.price}
        </button>
      </div>

      {/* Size Selector Modal */}
      <SizeSelectorModal
        isOpen={sizeModalOpen}
        onClose={() => setSizeModalOpen(false)}
        selectedSize={selectedSizeEu}
        onSelectSize={(size) => setSelectedSizeEu(size)}
      />
    </>
  );
}
