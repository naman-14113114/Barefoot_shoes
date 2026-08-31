"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BarefootProduct } from "@barefoot/shared";
import { StarRating } from "@barefoot/ui";
import { useCart } from "@/components/cart/CartProvider";

interface ProductCardProps {
  product: BarefootProduct;
  isPriority?: boolean;
}

export function ProductCard({ product, isPriority = false }: ProductCardProps) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [sizePickerOpen, setSizePickerOpen] = useState(false);

  const handleSelectSize = (variant: typeof product.variants[0]) => {
    addItem({
      id: `${product.id}-${variant.sizeEu}`,
      productId: product.id,
      variantId: variant.variantId,
      title: product.title,
      subtitle: product.subtitle,
      colorName: product.colorName,
      sizeEu: variant.sizeEu,
      sizeUk: variant.sizeUk,
      sizeUs: variant.sizeUs,
      price: product.price,
      compareAtPrice: product.compareAtPrice,
      image: product.primaryImage,
    });
    setSizePickerOpen(false);
  };

  return (
    <div
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setSizePickerOpen(false);
      }}
    >
      <div className="relative w-full aspect-[4/5] pb-[115%] bg-[#eaeaea] overflow-hidden">
        <Link href={`/products/${product.handle}`} className="absolute inset-0">
          <Image
            src={product.primaryImage}
            alt={product.title}
            fill
            priority={isPriority}
            loading={isPriority ? "eager" : "eager"}
            fetchPriority={isPriority ? "high" : "auto"}
            sizes="(max-width: 768px) 50vw, 33vw"
            className={`object-cover object-center transition-opacity duration-400 ease-out ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src={product.secondaryImage}
            alt={`${product.title} on foot`}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className={`object-cover object-center transition-opacity duration-400 ease-out ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>

        <div
          className={`absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-[#eaeaea] p-3 transition-transform duration-300 ease-out ${
            sizePickerOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between pb-2 text-[11px] text-[#767676]">
            <span>Select Size (AU / EU)</span>
            <button
              type="button"
              onClick={() => setSizePickerOpen(false)}
              className="text-[#000000] hover:opacity-75"
            >
              ✕
            </button>
          </div>
          <div className="grid grid-cols-4 gap-1">
            {product.variants.map((v) => (
              <button
                key={v.sizeEu}
                type="button"
                disabled={!v.inStock}
                onClick={() => handleSelectSize(v)}
                className="py-1.5 text-[11px] border border-[#eaeaea] bg-white hover:border-[#000000] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                EU {v.sizeEu}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        {product.badge && (
          <div className="text-[12px] font-medium text-[#1c1c1c]">
            {product.badge}
          </div>
        )}
        <h3 className="text-[13px] font-medium text-[#000000] leading-snug">
          <Link href={`/products/${product.handle}`} className="hover:underline">
            {product.title}
          </Link>
        </h3>
        <p className="text-[13px] text-[#929292]">{product.subtitle}</p>

        <div className="flex items-baseline gap-2 pt-0.5 text-[12px]">
          {product.compareAtPrice > product.price && (
            <span className="text-[#929292] line-through">
              A${product.compareAtPrice}
            </span>
          )}
          <span className="font-medium text-[#000000]">A${product.price}</span>
        </div>

        <div className="pt-1">
          <StarRating rating={product.rating} count={product.reviewCount} />
        </div>

        <button
          type="button"
          onClick={() => setSizePickerOpen(!sizePickerOpen)}
          className="mt-2 w-full py-2.5 px-3 border border-[#eaeaea] bg-white text-[12px] font-medium text-[#000000] hover:border-[#000000] transition-colors text-left flex items-center justify-between rounded-none"
        >
          <span>Select size</span>
          <span className="text-[9px]">▼</span>
        </button>
      </div>
    </div>
  );
}
