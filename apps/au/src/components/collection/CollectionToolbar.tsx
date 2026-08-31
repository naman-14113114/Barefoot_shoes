"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeftIcon, FilterSliderIcon, SortBarsIcon } from "@barefoot/ui";

interface CollectionToolbarProps {
  productCount: number;
  onToggleFilters: () => void;
  filtersOpen: boolean;
  onSortChange: (sort: string) => void;
  currentSort: string;
}

export function CollectionToolbar({
  productCount,
  onToggleFilters,
  filtersOpen,
  onSortChange,
  currentSort,
}: CollectionToolbarProps) {
  const [sortOpen, setSortOpen] = useState(false);

  const sortOptions = [
    { label: "Recommended", value: "recommended" },
    { label: "Most Wanted", value: "best-selling" },
    { label: "Price Low to High", value: "price-asc" },
    { label: "Price High to Low", value: "price-desc" },
    { label: "New In", value: "newest" },
  ];

  return (
    <div className="sticky top-[60px] md:top-[66px] z-30 bg-white border-b border-[#eaeaea] py-3.5 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/collections/sneakers"
            className="flex items-center gap-1 text-[13px] text-[#000000] hover:opacity-75"
          >
            <ChevronLeftIcon className="w-3 h-3" />
            <span className="text-[#767676]">Footwear</span>
          </Link>
          <span className="text-[#eaeaea]">/</span>
          <h1 className="text-[14px] font-medium text-[#000000]">Sneakers</h1>
          <span className="text-[13px] text-[#767676]">({productCount})</span>
        </div>

        <div className="flex items-center gap-4 text-[13px]">
          <button
            type="button"
            onClick={onToggleFilters}
            className="flex items-center gap-1.5 text-[#000000] hover:opacity-75"
          >
            <FilterSliderIcon className="w-4 h-4" />
            <span>{filtersOpen ? "Hide Filters" : "Show Filters"}</span>
          </button>

          <span className="w-px h-4 bg-[#eaeaea]" />

          <div className="relative">
            <button
              type="button"
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-1.5 text-[#000000] hover:opacity-75"
            >
              <SortBarsIcon className="w-4 h-4" />
              <span>Sort by</span>
            </button>

            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-[#eaeaea] shadow-xl p-2 z-40 animate-in fade-in duration-200">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onSortChange(opt.value);
                      setSortOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-[12px] hover:bg-[#f5f5f5] transition-colors ${
                      currentSort === opt.value ? "font-medium text-[#000000]" : "text-[#767676]"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
