"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ColorSwatch {
  name: string;
  color: string;
  image: string;
}

interface RecommendedProduct {
  id: string;
  handle: string;
  title: string;
  disciplineTags: string;
  price: number;
  compareAtPrice: number;
  currencySymbol: string;
  swatches: ColorSwatch[];
}

const UK_RECOMMENDED_PRODUCTS: RecommendedProduct[] = [
  {
    id: "motus-flex-knit-mens",
    handle: "lt-03-suede-sand",
    title: "MOTUS FLEX KNIT MENS",
    disciplineTags: "CALISTHENICS, FUNCTIONAL FITNESS, PRIMAL MOVEMENT",
    price: 120,
    compareAtPrice: 160,
    currencySymbol: "£",
    swatches: [
      {
        name: "Obsidian",
        color: "#18181b",
        image: "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ-250204-032.jpg",
      },
      {
        name: "Sand",
        color: "#d7c4ab",
        image: "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ_241050__Aangepast_02LR.jpg",
      },
      {
        name: "Navy",
        color: "#1e293b",
        image: "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ-250204-187.jpg",
      },
      {
        name: "Moss Green",
        color: "#3e4e3e",
        image: "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ-250204-082.jpg",
      },
    ],
  },
  {
    id: "motus-flex-tabi-mens",
    handle: "lt-03-premium-nappa-white",
    title: "MOTUS FLEX TABI MENS",
    disciplineTags: "WEIGHT & STRENGTH TRAINING, FUNCTIONAL FITNESS",
    price: 150,
    compareAtPrice: 190,
    currencySymbol: "£",
    swatches: [
      {
        name: "Obsidian",
        color: "#18181b",
        image: "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ-250204-042.jpg",
      },
      {
        name: "White",
        color: "#f4f4f5",
        image: "https://www.etq-amsterdam.com/cdn/shop/products/ETQ_Model_046Angel3_3840x.jpg?v=1760605385",
      },
      {
        name: "Sand",
        color: "#d7c4ab",
        image: "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ-240522-01_v1LR.jpg?height=400&v=1720182435",
      },
    ],
  },
  {
    id: "motus-flex-natural-mens",
    handle: "lt-03-suede-sand",
    title: "MOTUS FLEX NATURAL MENS",
    disciplineTags: "CALISTHENICS, PRIMAL MOVEMENT, DAILY MOVEMENT",
    price: 160,
    compareAtPrice: 200,
    currencySymbol: "£",
    swatches: [
      {
        name: "Sand",
        color: "#d7c4ab",
        image: "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ_241050__Aangepast_02LR.jpg",
      },
      {
        name: "Chocolate",
        color: "#4a3328",
        image: "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/LT_03_Suede_Chocolate_SEPT_-37_v1_3.jpg",
      },
      {
        name: "Moss Green",
        color: "#3e4e3e",
        image: "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ-250204-082.jpg",
      },
    ],
  },
  {
    id: "primus-flow-knit-mens",
    handle: "lt-01-court-lite-white",
    title: "PRIMUS FLOW KNIT MENS",
    disciplineTags: "RUNNING, GYM & CARDIO, FUNCTIONAL FITNESS",
    price: 130,
    compareAtPrice: 170,
    currencySymbol: "£",
    swatches: [
      {
        name: "Obsidian",
        color: "#18181b",
        image: "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ-250204-012.jpg",
      },
      {
        name: "White",
        color: "#f4f4f5",
        image: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ_Model_035Angel3_1_3__v1_BASIS_3840x.jpg?v=1741371409",
      },
      {
        name: "Navy",
        color: "#1e293b",
        image: "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ-250204-187.jpg",
      },
    ],
  },
  {
    id: "lt-03-suede-sand",
    handle: "lt-03-suede-sand",
    title: "LT 03 SUEDE SAND",
    disciplineTags: "BAREFOOT LIFESTYLE, EVERYDAY LUXURY, NATURAL SPLAY",
    price: 49,
    compareAtPrice: 99,
    currencySymbol: "£",
    swatches: [
      {
        name: "Sand",
        color: "#d7c4ab",
        image: "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ_241050__Aangepast_02LR.jpg",
      },
      {
        name: "Chocolate",
        color: "#4a3328",
        image: "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/LT_03_Suede_Chocolate_SEPT_-37_v1_3.jpg",
      },
      {
        name: "Blueberry",
        color: "#37475c",
        image: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ-240522-043_v1LR_3840x.jpg?v=1720252726",
      },
    ],
  },
  {
    id: "lt-03-premium-nappa-white",
    handle: "lt-03-premium-nappa-white",
    title: "LT 03 PREMIUM NAPPA WHITE",
    disciplineTags: "MINIMALIST SNEAKER, HERITAGE COURT, ZERO DROP",
    price: 49,
    compareAtPrice: 99,
    currencySymbol: "£",
    swatches: [
      {
        name: "White",
        color: "#f4f4f5",
        image: "https://www.etq-amsterdam.com/cdn/shop/products/ETQ_Model_046Angel3_3840x.jpg?v=1760605385",
      },
      {
        name: "Obsidian",
        color: "#18181b",
        image: "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ-250204-032.jpg",
      },
    ],
  },
  {
    id: "lt-03-suede-blueberry",
    handle: "lt-03-suede-blueberry",
    title: "LT 03 SUEDE BLUEBERRY",
    disciplineTags: "BAREFOOT LIFESTYLE, CASUAL COURT, ULTRA FLEXIBLE",
    price: 49,
    compareAtPrice: 99,
    currencySymbol: "£",
    swatches: [
      {
        name: "Blueberry",
        color: "#37475c",
        image: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ-240522-043_v1LR_3840x.jpg?v=1720252726",
      },
      {
        name: "Sand",
        color: "#d7c4ab",
        image: "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ_241050__Aangepast_02LR.jpg",
      },
    ],
  },
  {
    id: "ds-03-all-chocolate",
    handle: "ds-03-all-chocolate",
    title: "DS 03 ALL CHOCOLATE",
    disciplineTags: "OILED FULL GRAIN, ALL-TERRAIN DRESS, WIDE TOE BOX",
    price: 49,
    compareAtPrice: 99,
    currencySymbol: "£",
    swatches: [
      {
        name: "Chocolate",
        color: "#4a3328",
        image: "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ_250812_022_v1LR_3840x.jpg?v=1759409557",
      },
      {
        name: "Obsidian",
        color: "#18181b",
        image: "https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ-250204-032.jpg",
      },
    ],
  },
];

function ProductCardItem({ product }: { product: RecommendedProduct }) {
  const [selectedSwatchIndex, setSelectedSwatchIndex] = useState(0);
  const activeSwatch = product.swatches[selectedSwatchIndex] || product.swatches[0];

  return (
    <div className="flex-none w-[260px] sm:w-[280px] md:w-[310px] lg:w-[330px] flex flex-col snap-start group select-none">
      {/* Product Image Media Frame with Hover Zoom */}
      <Link href={`/products/${product.handle}`} className="block relative">
        <div className="relative w-full aspect-[4/5] bg-[#f5f5f5] overflow-hidden border border-[#eaeaea]">
          <Image
            src={activeSwatch.image}
            alt={`${product.title} - ${activeSwatch.name}`}
            fill
            sizes="(max-width: 640px) 260px, (max-width: 768px) 280px, 330px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      </Link>

      {/* Swatch Dot Selector */}
      <div className="mt-3 flex items-center gap-1.5 min-h-[22px]">
        {product.swatches.map((swatch, idx) => {
          const isActive = idx === selectedSwatchIndex;
          return (
            <button
              key={swatch.name}
              type="button"
              onClick={() => setSelectedSwatchIndex(idx)}
              onMouseEnter={() => setSelectedSwatchIndex(idx)}
              title={swatch.name}
              aria-label={`Select color ${swatch.name}`}
              className={`w-3.5 h-3.5 rounded-full border transition-all duration-200 ${
                isActive
                  ? "ring-2 ring-[#000000] ring-offset-1 scale-110 border-transparent"
                  : "border-[#000000]/20 hover:scale-105"
              }`}
              style={{ backgroundColor: swatch.color }}
            />
          );
        })}
        <span className="text-[11px] text-[#737373] ml-1 uppercase font-medium tracking-wider">
          {activeSwatch.name}
        </span>
      </div>

      {/* Product Title */}
      <h4 className="mt-1 text-[13px] sm:text-[14px] font-bold uppercase tracking-tight text-[#000000] leading-snug">
        <Link href={`/products/${product.handle}`} className="hover:underline">
          {product.title}
        </Link>
      </h4>

      {/* Price Strip */}
      <div className="flex items-baseline gap-2 mt-1 text-[13px]">
        {product.compareAtPrice > product.price && (
          <span className="text-[#929292] line-through">
            {product.currencySymbol}
            {product.compareAtPrice}
          </span>
        )}
        <span className="font-bold text-[#000000]">
          {product.currencySymbol}
          {product.price}
        </span>
      </div>

      {/* Category / Discipline Tags */}
      <p className="mt-1.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-[#767676] line-clamp-2">
        {product.disciplineTags}
      </p>
    </div>
  );
}

export function YouMightAlsoLike() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const offset = direction === "left" ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 border-t border-[#eaeaea]">
      {/* 1. Section Header with Centered Title & Nav Arrows */}
      <div className="relative flex items-center justify-between mb-8 md:mb-12">
        <div className="w-full">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-black uppercase tracking-tight text-center text-[#000000]">
            YOU MIGHT ALSO LIKE...
          </h2>
        </div>

        {/* Carousel Navigation Arrow Controls */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            className="w-9 h-9 border border-[#eaeaea] bg-white flex items-center justify-center text-[#000000] hover:border-[#000000] hover:bg-[#000000] hover:text-white transition-colors duration-200"
            aria-label="Previous products"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            className="w-9 h-9 border border-[#eaeaea] bg-white flex items-center justify-center text-[#000000] hover:border-[#000000] hover:bg-[#000000] hover:text-white transition-colors duration-200"
            aria-label="Next products"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* 2. Product Horizontal Carousel */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {UK_RECOMMENDED_PRODUCTS.map((product) => (
          <ProductCardItem key={product.id} product={product} />
        ))}
      </div>

      {/* Mobile-friendly bottom arrow controls */}
      <div className="flex sm:hidden items-center justify-center gap-3 mt-6">
        <button
          type="button"
          onClick={() => handleScroll("left")}
          className="w-9 h-9 border border-[#eaeaea] bg-white flex items-center justify-center text-[#000000] active:bg-[#000000] active:text-white transition-colors"
          aria-label="Previous products"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => handleScroll("right")}
          className="w-9 h-9 border border-[#eaeaea] bg-white flex items-center justify-center text-[#000000] active:bg-[#000000] active:text-white transition-colors"
          aria-label="Next products"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
