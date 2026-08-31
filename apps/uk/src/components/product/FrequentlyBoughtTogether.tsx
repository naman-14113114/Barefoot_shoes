"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";

export function FrequentlyBoughtTogether() {
  const { addItem } = useCart();
  const scrollRef = useRef<HTMLDivElement>(null);

  const relatedItems = [
    {
      id: "socks-3-pack-sand",
      handle: "socks-3-pack-sand",
      title: "Socks 3-Pack Sand",
      subtitle: "Ultra-soft bamboo",
      price: 21,
      compareAtPrice: 35,
      image: "https://www.etq-amsterdam.com/cdn/shop/files/Rectangle15774057_8d8daf79-ce7d-44c4-b6ed-4451063c576d.png?height=400&v=1743554234",
      variantId: "100099001",
      sizeEu: 42,
    },
    {
      id: "lt-03-suede-cement-grey",
      handle: "lt-03-suede-sand",
      title: "LT 03 Suede Cement Grey",
      subtitle: "Mediterranean Suede",
      price: 49,
      compareAtPrice: 99,
      badge: "Most Wanted",
      image: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ_241050_Aangepast_01LR.jpg?height=400&v=1747401128",
      variantId: "100099002",
      sizeEu: 42,
    },
    {
      id: "lt-03-premium-nappa-white",
      handle: "lt-03-premium-nappa-white",
      title: "LT 03 Premium Nappa White",
      subtitle: "Premium Nappa",
      price: 49,
      compareAtPrice: 99,
      badge: "Most Wanted",
      image: "https://www.etq-amsterdam.com/cdn/shop/products/ETQ_Model_046Angel3.jpg?height=400&v=1760605385",
      variantId: "100099003",
      sizeEu: 42,
    },
    {
      id: "lt-03-suede-desert-taupe",
      handle: "lt-03-suede-sand",
      title: "LT 03 Suede Desert Taupe",
      subtitle: "Mediterranean Suede",
      price: 49,
      compareAtPrice: 99,
      badge: "Summer Sale.",
      image: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ-240522-01_v1LR.jpg?height=400&v=1720182435",
      variantId: "100099004",
      sizeEu: 42,
    },
    {
      id: "lt-03-suede-blueberry",
      handle: "lt-03-suede-blueberry",
      title: "LT 03 Suede Blueberry",
      subtitle: "Mediterranean Suede",
      price: 49,
      compareAtPrice: 99,
      badge: "Summer Sale.",
      image: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ-240522-043_v1LR.jpg?height=400&v=1720252726",
      variantId: "100099005",
      sizeEu: 42,
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  const handleQuickAdd = (item: typeof relatedItems[0]) => {
    addItem({
      id: `${item.id}-${item.sizeEu}`,
      productId: item.id,
      variantId: item.variantId,
      title: item.title,
      subtitle: item.subtitle,
      colorName: "Sand",
      sizeEu: item.sizeEu,
      sizeUk: 8,
      sizeUs: 9,
      price: item.price,
      compareAtPrice: item.compareAtPrice,
      image: item.image,
    });
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-16 border-t border-[#eaeaea]">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[18px] md:text-[20px] font-normal text-[#000000]">
          Frequently bought together.
        </h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            className="w-8 h-8 border border-[#eaeaea] bg-white flex items-center justify-center text-[#000000] hover:border-[#000000] transition-colors"
            aria-label="Previous products"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            className="w-8 h-8 border border-[#eaeaea] bg-white flex items-center justify-center text-[#000000] hover:border-[#000000] transition-colors"
            aria-label="Next products"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        {relatedItems.map((item) => (
          <div
            key={item.id}
            className="flex-none w-[240px] md:w-[260px] flex flex-col justify-between snap-start group"
          >
            <Link href={`/products/${item.handle}`} className="block">
              <div className="relative w-full aspect-[4/5] bg-[#f5f5f5] overflow-hidden border border-[#eaeaea]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="260px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </Link>

            <div className="mt-3 space-y-1">
              {item.badge && (
                <span className="text-[11px] font-medium text-[#1c1c1c]">{item.badge}</span>
              )}
              <h4 className="text-[13px] font-medium text-[#000000] truncate">
                <Link href={`/products/${item.handle}`} className="hover:underline">
                  {item.title}
                </Link>
              </h4>
              <p className="text-[12px] text-[#767676]">{item.subtitle}</p>
              <div className="flex items-baseline gap-2 pt-0.5 text-[12px]">
                {item.compareAtPrice > item.price && (
                  <span className="text-[#929292] line-through">£{item.compareAtPrice}</span>
                )}
                <span className="font-medium text-[#000000]">£{item.price}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleQuickAdd(item)}
              className="mt-3 w-full py-2 border border-[#000000] bg-white text-[12px] font-medium text-[#000000] hover:bg-[#000000] hover:text-white transition-colors duration-300 rounded-none"
            >
              + Quick Add
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
