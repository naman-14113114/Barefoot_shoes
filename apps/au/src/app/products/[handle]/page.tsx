import React from "react";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { GalleryGrid } from "@/components/product/GalleryGrid";
import { StickyBuyBox } from "@/components/product/StickyBuyBox";
import { StickyAddToCartBar } from "@/components/product/StickyAddToCartBar";
import { FrequentlyBoughtTogether } from "@/components/product/FrequentlyBoughtTogether";
import { VivoPdpSections } from "@barefoot/ui";
import { ReviewsSection } from "@/components/product/ReviewsSection";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    handle: p.handle,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = PRODUCTS.find((p) => p.handle === handle) || PRODUCTS[0];

  if (!product) {
    notFound();
  }

  return (
    <div className="w-full pb-16">
      {/* 1. Main Top Hero Section — ETQ 2:1 Asymmetric Grid (images go behind header, zero top padding) */}
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start">
          {/* Left: Gallery (8/12 = 66.66%) — images extend to very top, behind the fixed header */}
          <div className="lg:col-span-8 w-full">
            <GalleryGrid images={product.galleryImages} title={product.title} />
          </div>

          {/* Right: Buy Box (4/12 = 33.33%) — offset down 175px like ETQ so content sits below header */}
          <div className="lg:col-span-4 w-full pt-[140px] md:pt-[175px] px-4 md:px-6 lg:px-8">
            <StickyBuyBox product={product} />
          </div>
        </div>
      </div>

      {/* 2. Floating Sticky Add to Cart Bar (Revealed past main fold) */}
      <StickyAddToCartBar product={product} />

      {/* 3. Frequently Bought Together Carousel */}
      <FrequentlyBoughtTogether />

      {/* 4. Vivobarefoot Performance Features & Technical Sections */}
      <VivoPdpSections market="au" />

      {/* 5. Customer Reviews Section */}
      <ReviewsSection />
    </div>
  );
}
