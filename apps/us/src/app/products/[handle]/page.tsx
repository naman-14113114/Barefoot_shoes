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
      title: "Product Not Found | BUUDY. US",
      description: "The requested barefoot footwear model could not be found.",
    };
  }

  const pageTitle = `${product.title} — Zero-Drop Barefoot Trainer`;
  const pageDescription = `${product.description} Handcrafted with zero-drop biomechanics, anatomical wide toe box, and ultra-flexible sole. Available now for $${product.price} on us.buudy.com.`;
  const productUrl = `/products/${product.handle}`;
  const ogImageUrl = product.primaryImage;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: productUrl,
      languages: {
        "en-US": productUrl,
      },
    },
    openGraph: {
      siteName: "BUUDY.",
      type: "website",
      url: productUrl,
      locale: "en_US",
      title: `${pageTitle} | BUUDY. US`,
      description: pageDescription,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 1500,
          alt: `${product.title} - Barefoot Shoes US`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | BUUDY. US`,
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

  const model = product.handle.startsWith("clouders-")
    ? "clouders"
    : product.handle.startsWith("roamers-")
    ? "roamers"
    : "drifters";

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
        name: "BUUDY. US",
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
      {/* Schema.org Product Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Main Top Hero Section */}
      <ProductSelectionProvider>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Gallery */}
            <div className="lg:col-span-8 w-full">
              <GalleryGrid images={product.galleryImages} title={product.title} />
            </div>

            {/* Right: Buy Box */}
            <div className="lg:col-span-4 w-full pt-20 md:pt-24 lg:pt-[96px] px-4 md:px-6 lg:px-8">
              <StickyBuyBox product={product} />
            </div>
          </div>
        </div>

        {/* 2. Floating Sticky Add to Cart Bar */}
        <StickyAddToCartBar product={product} />
      </ProductSelectionProvider>

      {/* 3. Auto-Moving Lifestyle Image Marquee Carousel */}
      <LifestyleMarquee model={model} />

      {/* 4. Frequently Bought Together Carousel */}
      <FrequentlyBoughtTogether />

      {/* 5. Vivobarefoot Performance Features & Technical Sections */}
      <VivoPdpSections market="us" />

      {/* 6. Customer Reviews Section */}
      <ReviewsSection />

      {/* 7. You Might Also Like Section */}
      <YouMightAlsoLike />
    </div>
  );
}
