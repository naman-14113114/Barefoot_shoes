"use client";

import React, { useEffect, useState } from "react";
import type { BarefootProduct } from "@barefoot/shared";
import { useCart } from "@/components/cart/CartProvider";
import { SizeSelectorModal } from "./SizeSelectorModal";
import { useProductSelection } from "./ProductSelectionProvider";

interface StickyAddToCartBarProps {
  product: BarefootProduct;
}

export function StickyAddToCartBar({ product }: StickyAddToCartBarProps) {
  const { addItem } = useCart();
  const { selectedSizeEu, setSelectedSizeEu } = useProductSelection();
  const [isVisible, setIsVisible] = useState(false);
  const [sizeModalOpen, setSizeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const primaryBuyButton = document.querySelector<HTMLElement>("[data-primary-buy]");
      setIsVisible(Boolean(primaryBuyButton && primaryBuyButton.getBoundingClientRect().bottom < 0));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const selectedVariant =
    product.variants.find((variant) => variant.sizeEu === selectedSizeEu) || product.variants[0];

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
      <div
        className={`fixed bottom-0 left-0 right-0 z-30 hidden h-[74px] grid-cols-[minmax(190px,1fr)_150px_180px_180px] items-stretch border-t border-[#e5e5e5] bg-white transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] md:grid xl:left-[40%] ${
          isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
        }`}
      >
        <div className="flex min-w-0 items-center gap-2 border-r border-[#e5e5e5] px-5 text-[13px]">
          <span className="truncate font-semibold">{product.title}</span>
          <span className="shrink-0 text-[#8a8a8a] line-through">
            {product.currencySymbol}{product.compareAtPrice}
          </span>
          <span className="shrink-0">{product.currencySymbol}{product.price}</span>
        </div>

        <div className="flex items-center border-r border-[#e5e5e5] px-5 text-[13px]">
          <span className="mr-2 h-4 w-4 rounded-full border border-[#d7d7d7] bg-white" aria-hidden="true" />
          {product.colorName}
        </div>

        <button
          type="button"
          onClick={() => setSizeModalOpen(true)}
          className="flex items-center justify-between border-r border-[#e5e5e5] px-5 text-left text-[13px]"
        >
          <span>{selectedSizeEu ? `EU ${selectedSizeEu} / UK ${selectedVariant.sizeUk}` : "Select size"}</span>
          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 10 6" aria-hidden="true">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleAddToCart}
          className="bg-[#111111] text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-[#303030]"
        >
          Add to bag
        </button>
      </div>

      <div
        className={`fixed bottom-0 left-0 right-0 z-30 grid grid-cols-2 gap-2 border-t border-[#e5e5e5] bg-white p-3 pb-[max(12px,env(safe-area-inset-bottom))] transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] md:hidden ${
          isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={() => setSizeModalOpen(true)}
          className="flex min-h-11 items-center justify-between border border-[#e5e5e5] px-4 text-left text-[12px] font-semibold"
        >
          <span>{selectedSizeEu ? `EU ${selectedSizeEu} / UK ${selectedVariant.sizeUk}` : "Select size"}</span>
          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 10 6" aria-hidden="true">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" />
          </svg>
        </button>
        <button
          type="button"
          onClick={handleAddToCart}
          className="min-h-11 bg-[#111111] text-[12px] font-semibold text-white"
        >
          Add to bag
        </button>
      </div>

      <SizeSelectorModal
        isOpen={sizeModalOpen}
        onClose={() => setSizeModalOpen(false)}
        selectedSize={selectedSizeEu}
        onSelectSize={setSelectedSizeEu}
      />
    </>
  );
}
