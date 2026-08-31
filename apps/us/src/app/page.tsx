import React from "react";
import Link from "next/link";
import { HeroBanner } from "@/components/home/HeroBanner";
import { CategoryTiles } from "@/components/home/CategoryTiles";
import { EditorialBlocks } from "@/components/home/EditorialBlocks";
import { JournalGrid } from "@/components/home/JournalGrid";
import { ProductCard } from "@/components/collection/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function HomePage() {
  const spotlightProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="w-full">
      <HeroBanner />
      <CategoryTiles />
      <EditorialBlocks />

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <span className="text-[12px] font-medium text-[#767676]">Bestsellers</span>
            <h2 className="text-[20px] md:text-[23px] font-normal text-[#000000]">
              Most Wanted
            </h2>
          </div>
          <Link
            href="/collections/sneakers"
            className="text-[13px] text-[#767676] hover:text-[#000000] link-etq"
          >
            View all sneakers
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {spotlightProducts.map((p, idx) => (
            <ProductCard key={p.id} product={p} isPriority={idx === 0} />
          ))}
        </div>
      </section>

      <JournalGrid />
    </div>
  );
}
