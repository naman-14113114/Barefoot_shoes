import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { market } from "@/data/market";
import { GalleryGrid } from "@/components/product/GalleryGrid";
import { StickyBuyBox } from "@/components/product/StickyBuyBox";
import { StickyAddToCartBar } from "@/components/product/StickyAddToCartBar";
import { FrequentlyBoughtTogether } from "@/components/product/FrequentlyBoughtTogether";
import { VivoPdpSections, LifestyleMarquee } from "@barefoot/ui";
import { ReviewsSection } from "@/components/product/ReviewsSection";
import { YouMightAlsoLike } from "@/components/product/YouMightAlsoLike";
import { ProductSelectionProvider } from "@/components/product/ProductSelectionProvider";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    handle: p.handle,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const product = PRODUCTS.find((p) => p.handle === handle);

  if (!product) {
    return {
      title: "Product Not Found | BUUDY. UK",
      description: "The requested barefoot footwear model could not be found.",
    };
  }

  const pageTitle = `${product.title} — Zero-Drop Barefoot Trainer`;
  const pageDescription = `${product.description} Handcrafted with zero-drop biomechanics, anatomical wide toe box, and ultra-flexible sole. Available now for £${product.price} with tracked UK delivery on buudy.co.uk.`;
  const productUrl = `/products/${product.handle}`;
  const ogImageUrl = product.primaryImage;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: productUrl,
      languages: {
        "en-GB": productUrl,
      },
    },
    openGraph: {
      siteName: "BUUDY.",
      type: "website",
      url: productUrl,
      locale: "en_GB",
      title: `${pageTitle} | BUUDY. UK`,
      description: pageDescription,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 1500,
          alt: `${product.title} - Barefoot Shoes UK`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | BUUDY. UK`,
      description: pageDescription,
      images: [ogImageUrl],
    },
  };
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.galleryImages.map((img) =>
      img.startsWith("http") ? img : `${market.siteUrl}${img}`
    ),
    brand: {
      "@type": "Brand",
      name: "BUUDY.",
    },
    offers: {
      "@type": "Offer",
      url: `${market.siteUrl}/products/${product.handle}`,
      priceCurrency: market.currency,
      price: product.price.toFixed(2),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "BUUDY. UK",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating.toString(),
      reviewCount: product.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <div className="w-full pb-16">
      {/* Schema.org Product Structured Data for Bing UK & Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Main Top Hero Section — ETQ 2:1 Asymmetric Grid (images go behind header, zero top padding) */}
      <ProductSelectionProvider>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Left: Gallery (8/12 = 66.66%) — images extend to very top, behind the fixed header */}
          <div className="relative w-full lg:col-span-2">
            <div className="h-[50px] lg:hidden" aria-hidden="true" />
            <Link
              href="/collections/sneakers"
              className="absolute left-10 top-[94px] z-20 hidden items-center gap-3 text-[13px] font-semibold lg:flex"
            >
              <svg className="h-3 w-3" fill="none" viewBox="0 0 13 13" aria-hidden="true">
                <path d="M10.432 1.725 5.844 6.508l4.587 4.767L9.154 12.5 3.41 6.508 9.155.5l1.277 1.225z" fill="currentColor" />
              </svg>
              <span className="border-l border-[#d8d8d8] pl-3">Bestsellers</span>
            </Link>
            <Link
              href="/collections/sneakers"
              className="flex h-[48px] items-center gap-3 px-4 text-[13px] font-semibold lg:hidden"
            >
              <svg className="h-3 w-3" fill="none" viewBox="0 0 13 13" aria-hidden="true">
                <path d="M10.432 1.725 5.844 6.508l4.587 4.767L9.154 12.5 3.41 6.508 9.155.5l1.277 1.225z" fill="currentColor" />
              </svg>
              <span className="border-l border-[#d8d8d8] pl-3">Bestsellers</span>
            </Link>
            <GalleryGrid images={product.galleryImages} title={product.title} />
          </div>

          {/* Right: Buy Box (4/12 = 33.33%) */}
          <div className="w-full px-4 pb-10 pt-7 sm:px-8 lg:px-[clamp(40px,5vw,80px)] lg:pb-0 lg:pt-[132px]">
            <StickyBuyBox product={product} />
          </div>
        </div>

      {/* 2. Floating Sticky Add to Cart Bar (Revealed past main fold) */}
        <StickyAddToCartBar product={product} />
      </ProductSelectionProvider>

      {/* 3. Auto-Moving Lifestyle Image Marquee Carousel */}
      <LifestyleMarquee />

      {/* 4. Frequently Bought Together Carousel */}
      <FrequentlyBoughtTogether />

      {/* 4. Vivobarefoot Performance Features & Technical Sections */}
      <VivoPdpSections market="uk" />

      {/* 5. Customer Reviews Section */}
      <ReviewsSection />

      {/* 6. You Might Also Like Section */}
      <YouMightAlsoLike />
    </div>
  );
}
