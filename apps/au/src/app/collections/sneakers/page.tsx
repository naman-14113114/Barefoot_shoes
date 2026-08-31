"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS } from "@/data/products";
import { CollectionToolbar } from "@/components/collection/CollectionToolbar";
import { FilterDrawer } from "@/components/collection/FilterDrawer";
import { ProductCard } from "@/components/collection/ProductCard";

export default function SneakersCollectionPage() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [currentSort, setCurrentSort] = useState("recommended");

  const handleToggleSize = (size: number) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (selectedColor) {
      list = list.filter((p) => p.colorName.toLowerCase() === selectedColor.toLowerCase());
    }

    if (selectedSizes.length > 0) {
      list = list.filter((p) =>
        p.variants.some((v) => selectedSizes.includes(v.sizeEu) && v.inStock)
      );
    }

    if (currentSort === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [selectedSizes, selectedColor, currentSort]);

  return (
    <div className="w-full pt-20">
      <CollectionToolbar
        productCount={filteredProducts.length}
        onToggleFilters={() => setFiltersOpen(!filtersOpen)}
        filtersOpen={filtersOpen}
        onSortChange={(sort) => setCurrentSort(sort)}
        currentSort={currentSort}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 flex flex-col lg:flex-row gap-8">
        <FilterDrawer
          isOpen={filtersOpen}
          selectedSizes={selectedSizes}
          onToggleSize={handleToggleSize}
          selectedColor={selectedColor}
          onSelectColor={(c) => setSelectedColor(c)}
          onReset={() => {
            setSelectedSizes([]);
            setSelectedColor(null);
          }}
        />

        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
              {filteredProducts.map((p, idx) => (
                <ProductCard key={p.id} product={p} isPriority={idx < 3} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center space-y-2">
              <p className="text-[14px] font-medium text-[#000000]">No products found</p>
              <p className="text-[13px] text-[#767676]">
                Try adjusting your size or color filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
