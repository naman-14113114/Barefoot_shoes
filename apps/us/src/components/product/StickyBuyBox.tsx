"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BarefootProduct } from "@barefoot/shared";
import { AccordionItem, AccordionGroup } from "@barefoot/ui";
import { useCart } from "@/components/cart/CartProvider";
import { SizeSelectorModal } from "./SizeSelectorModal";
import { useProductSelection } from "./ProductSelectionProvider";

interface StickyBuyBoxProps {
  product: BarefootProduct;
}

export function StickyBuyBox({ product }: StickyBuyBoxProps) {
  const { addItem } = useCart();
  const { selectedSizeEu, setSelectedSizeEu } = useProductSelection();
  const [sizeModalOpen, setSizeModalOpen] = useState(false);

  const selectedVariant =
    product.variants.find((v) => v.sizeEu === selectedSizeEu) || product.variants[0];

  const driftersColorways = [
    {
      name: "White",
      handle: "drifters-barefoot-shoes-white",
      img: "/media/products/drifters-white/buudy-barefoot-shoes-drifters-white-model-studio-standing-hero.jpg",
    },
    {
      name: "Black",
      handle: "drifters-barefoot-shoes-black",
      img: "/media/products/drifters-black/buudy-barefoot-shoes-drifters-black-wide-toe-box-hero.jpg",
    },
    {
      name: "Gray",
      handle: "drifters-barefoot-shoes-gray",
      img: "/media/products/drifters-gray/buudy-barefoot-shoes-drifters-gray-model-studio-standing-hero.jpg",
    },
    {
      name: "Blue",
      handle: "drifters-barefoot-shoes-blue",
      img: "/media/products/drifters-blue/buudy-barefoot-shoes-drifters-blue-wide-toe-box-hero.jpg",
    },
  ];

  const cloudersColorways = [
    {
      name: "White",
      handle: "clouders-barefoot-shoes-white",
      img: "/media/products/clouders-white/buudy-barefoot-shoes-clouders-white-wide-toe-box-hero.jpg",
    },
    {
      name: "Beige",
      handle: "clouders-barefoot-shoes-beige",
      img: "/media/products/clouders-beige/buudy-barefoot-shoes-clouders-beige-wide-toe-box-hero.jpg",
    },
    {
      name: "Black",
      handle: "clouders-barefoot-shoes-black",
      img: "/media/products/clouders-black/buudy-barefoot-shoes-clouders-black-wide-toe-box-hero.jpg",
    },
    {
      name: "Sky Blue",
      handle: "clouders-barefoot-shoes-sky-blue",
      img: "/media/products/clouders-sky-blue/buudy-barefoot-shoes-clouders-sky-blue-wide-toe-box-hero.jpg",
    },
    {
      name: "Gray",
      handle: "clouders-barefoot-shoes-gray",
      img: "/media/products/clouders-gray/buudy-barefoot-shoes-clouders-gray-wide-toe-box-hero.jpg",
    },
  ];

  const roamersColorways = [
    {
      name: "Ash Gray",
      handle: "roamers-barefoot-shoes-ash-gray",
      img: "/media/products/roamers-ash-gray/buudy-barefoot-shoes-roamers-ash-gray-wide-toe-box-hero.jpg",
    },
    {
      name: "Beige",
      handle: "roamers-barefoot-shoes-beige",
      img: "/media/products/roamers-beige/buudy-barefoot-shoes-roamers-beige-wide-toe-box-hero.jpg",
    },
    {
      name: "Black Coal",
      handle: "roamers-barefoot-shoes-black-coal",
      img: "/media/products/roamers-black-coal/buudy-barefoot-shoes-roamers-black-coal-wide-toe-box-hero.jpg",
    },
    {
      name: "Ice Blue",
      handle: "roamers-barefoot-shoes-ice-blue",
      img: "/media/products/roamers-ice-blue/buudy-barefoot-shoes-roamers-ice-blue-wide-toe-box-hero.jpg",
    },
    {
      name: "Navy Blue",
      handle: "roamers-barefoot-shoes-navy-blue",
      img: "/media/products/roamers-navy-blue/buudy-barefoot-shoes-roamers-navy-blue-wide-toe-box-hero.jpg",
    },
  ];

  const defaultColorways = [
    {
      name: "Sand",
      handle: "lt-03-suede-sand",
      img: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ_241050__Aangepast_02LR.jpg?height=240&v=1747401120",
    },
    {
      name: "Blueberry",
      handle: "lt-03-suede-blueberry",
      img: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ-240522-043_v1LR.jpg?height=240&v=1720252726",
    },
    {
      name: "White",
      handle: "lt-03-premium-nappa-white",
      img: "https://www.etq-amsterdam.com/cdn/shop/products/ETQ_Model_046Angel3.jpg?height=240&v=1760605385",
    },
    {
      name: "Chocolate",
      handle: "ds-03-all-chocolate",
      img: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ_250812_022_v1LR.jpg?height=240&v=1759409557",
    },
  ];

  const colorways = product.handle.startsWith("drifters")
    ? driftersColorways
    : product.handle.startsWith("clouders")
      ? cloudersColorways
      : product.handle.startsWith("roamers")
        ? roamersColorways
        : defaultColorways;

  const handleAddToCart = () => {
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
    <div className="w-full lg:sticky lg:top-[96px] lg:self-start space-y-5">
      <div>
        <h1 className="text-[15px] font-normal leading-[1.35] text-[#111111] lg:text-[20px]">
          {product.title}
        </h1>
        <p className="mt-1 text-[14px] text-[#979797]">{product.subtitle}</p>
      </div>

      <div className="mt-8 flex items-center justify-between border-b border-[#e5e5e5] pb-8 text-[15px] lg:mt-[clamp(20px,3.56vh,32px)] lg:pb-[clamp(20px,3.56vh,32px)]">
        <div className="flex items-baseline gap-2">
          {product.compareAtPrice > product.price && (
            <span className="font-normal text-[#929292] line-through decoration-[1px]">
              ${product.compareAtPrice}
            </span>
          )}
          <span className="font-normal text-[#111111]">
            ${product.price}
          </span>
        </div>
        {product.badge && <span className="text-[12px] font-semibold">{product.badge}</span>}
      </div>

      <div className="pt-7 lg:pt-[clamp(18px,3.12vh,28px)]">
        <p className="text-[14px] font-semibold">{product.colorName}</p>
        <p className="mt-1 text-[14px]">{product.subtitle}</p>
        <div className={`mt-4 grid gap-1.5 lg:mt-[clamp(10px,1.78vh,16px)] ${
          colorways.length <= 4
            ? "grid-cols-4"
            : colorways.length === 5
              ? "grid-cols-5"
              : "grid-cols-6"
        }`}>
          {colorways.slice(0, colorways.length > 6 ? 5 : colorways.length).map((colour) => (
            <Link
              key={colour.name}
              href={`/products/${colour.handle}`}
              title={colour.name}
              aria-label={`View ${colour.name}`}
              className={`relative aspect-square overflow-hidden border bg-[#f1f1f1] transition-colors ${
                colour.handle === product.handle
                  ? "border-[#111111] ring-1 ring-[#111111]"
                  : "border-transparent hover:border-[#b7b7b7]"
              }`}
            >
              <Image src={colour.img} alt={colour.name} fill sizes="72px" className="object-cover" />
            </Link>
          ))}
          {colorways.length > 6 && (
            <Link
              href={`/products/${colorways[5].handle}`}
              className="flex aspect-square items-center justify-center border border-[#e5e5e5] text-[13px] font-semibold hover:border-[#111111]"
              aria-label="View more colours"
            >
              +{colorways.length - 5}
            </Link>
          )}
        </div>
      </div>

      <div className="mt-7 lg:mt-[clamp(18px,3.12vh,28px)]">
        <button
          type="button"
          onClick={() => setSizeModalOpen(true)}
          className="flex h-[46px] w-full items-center justify-between border border-[#e5e5e5] bg-white px-5 text-left text-[13px] font-semibold transition-colors hover:border-[#111111]"
        >
          <span>
            {selectedSizeEu
              ? `EU ${selectedSizeEu} | US ${selectedVariant.sizeUs} | UK ${selectedVariant.sizeUk}`
              : "Select size"}
          </span>
          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 10 6" aria-hidden="true">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => setSizeModalOpen(true)}
          className="mx-auto mt-4 block text-[13px] underline decoration-[#999999] underline-offset-4 lg:mt-[clamp(10px,1.78vh,16px)]"
        >
          Not sure on size? Find your barefoot size in 60 seconds.
        </button>
      </div>

      <button
        type="button"
        data-primary-buy
        onClick={handleAddToCart}
        className="mt-5 flex h-[46px] w-full items-center justify-center bg-[#111111] text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-[#303030] active:bg-[#444444] lg:mt-[clamp(12px,2.22vh,20px)]"
      >
        Add to bag
      </button>

      {/* 8. Quick USPs with expandable information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1 text-[12px] text-[#767676]">
        <div className="border border-[#eaeaea] p-3 bg-[#fafafa]">
          <p className="font-medium text-[#000000]">Free & fast US delivery</p>
          <p className="mt-0.5 text-[11px]">Orders before 23:30 shipped same day. Free over $180.</p>
        </div>
        <div className="border border-[#eaeaea] p-3 bg-[#fafafa]">
          <p className="font-medium text-[#000000]">Easy returns & exchanges</p>
          <p className="mt-0.5 text-[11px]">All orders can easily be returned or exchanged within 14 days.</p>
        </div>
      </div>

      {/* 9. 6 Collapsible Accordions with single-open mutex behavior */}
      <div className="border-t border-[#eaeaea] pt-2 space-y-0.5">
        <AccordionGroup defaultOpenId="product-info">
          {/* 1. PRODUCT INFO */}
          <AccordionItem id="product-info" title="PRODUCT INFO">
            <div className="pt-2 pb-4 space-y-4">
              <div className="space-y-3.5">
                {/* Primus Outsole */}
                <div className="flex items-start gap-3">
                  <div className="relative w-7 h-7 shrink-0 mt-0.5">
                    <Image
                      src="/media/vivo/biome_design_icon.png"
                      alt="Primus Outsole"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold uppercase tracking-tight text-[#212121]">
                      Primus Outsole
                    </h5>
                    <p className="text-[12px] text-[#555555] leading-relaxed mt-0.5">
                      Get as close to the ground as possible.
                    </p>
                  </div>
                </div>

                {/* Ortholite Insole */}
                <div className="flex items-start gap-3">
                  <div className="relative w-7 h-7 shrink-0 mt-0.5">
                    <Image
                      src="/media/vivo/insoles_recycled_icon.png"
                      alt="Ortholite Insole"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold uppercase tracking-tight text-[#212121]">
                      Ortholite Insole
                    </h5>
                    <p className="text-[12px] text-[#555555] leading-relaxed mt-0.5">
                      The Ortholite Performance Insole is made of 98% recycled polyurethane foam, which helps reduce waste and the use of virgin plastics.
                    </p>
                  </div>
                </div>

                {/* Breathable Mesh */}
                <div className="flex items-start gap-3">
                  <div className="relative w-7 h-7 shrink-0 mt-0.5">
                    <Image
                      src="/media/vivo/attributes_breathable_icon.png"
                      alt="Breathable Mesh"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold uppercase tracking-tight text-[#212121]">
                      Breathable Mesh
                    </h5>
                    <p className="text-[12px] text-[#555555] leading-relaxed mt-0.5">
                      Breathable, lightweight and comfortable.
                    </p>
                  </div>
                </div>

                {/* Vegan* */}
                <div className="flex items-start gap-3">
                  <div className="relative w-7 h-7 shrink-0 mt-0.5">
                    <Image
                      src="/media/vivo/materials_animal_free_icon.png"
                      alt="Vegan Certified"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold uppercase tracking-tight text-[#212121]">
                      Vegan*
                    </h5>
                    <p className="text-[12px] text-[#555555] leading-relaxed mt-0.5">
                      *The main materials in all our Vegan* products are synthetic and aren&apos;t derived from animals. We don&apos;t yet have the transparency we need over the production of all the small inputs (such as adhesives and dyes) used in these products to ensure they meet vegan best practices. So, whilst we believe the shoes are vegan, we can&apos;t yet guarantee it and want to be fully transparent.
                    </p>
                  </div>
                </div>
              </div>

              {/* Weight Badge */}
              <div className="pt-3.5 border-t border-[#eaeaea] flex items-baseline justify-between">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#212121]">
                  Weight
                </span>
                <div className="flex items-baseline">
                  <span className="text-[32px] font-black leading-none text-[#212121]">
                    239
                  </span>
                  <span className="text-[15px] font-bold text-[#212121] ml-0.5">
                    g
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-[#767676] text-right -mt-2.5">
                Based on a single shoe in Men&apos;s size: EU 42 | US 9 | UK 8
              </p>
            </div>
          </AccordionItem>

          {/* 2. SIZE & FIT */}
          <AccordionItem id="size-fit" title="SIZE & FIT">
            <div className="pt-2 pb-4 space-y-3">
              <p className="text-[13px] text-[#333333] leading-relaxed">
                This shoe fits true to size. If you are between sizes, we recommend sizing up to ensure optimal toe splay and natural barefoot biomechanics.
              </p>
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="bg-[#f9f9f9] p-3 border border-[#eaeaea]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#212121] block mb-0.5">
                    Wide Toe Box
                  </span>
                  <p className="text-[12px] text-[#555555] leading-snug">
                    Natural anatomical toe splay for maximum stability.
                  </p>
                </div>
                <div className="bg-[#f9f9f9] p-3 border border-[#eaeaea]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#212121] block mb-0.5">
                    Zero Drop
                  </span>
                  <p className="text-[12px] text-[#555555] leading-snug">
                    Completely flat from heel to toe for natural posture.
                  </p>
                </div>
              </div>
            </div>
          </AccordionItem>

          {/* 3. DELIVERY INFO */}
          <AccordionItem id="delivery-info" title="DELIVERY INFO">
            <div className="pt-2 pb-4 space-y-2 text-[13px] text-[#333333]">
              <p className="leading-relaxed font-medium">
                • Standard Delivery ($5, Free on orders over $80) — 3-5 business days via USPS.
              </p>
              <p className="leading-relaxed">
                • Express Courier ($10) — 1-2 business days via FedEx.
              </p>
              <p className="leading-relaxed text-[#555555]">
                • Full tracking provided via email upon dispatch.
              </p>
              <p className="leading-relaxed text-[#555555]">
                • Hassle-free 100-day returns with prepaid domestic return labels.
              </p>
            </div>
          </AccordionItem>

          {/* 4. 100-DAY TRIAL */}
          <AccordionItem id="100-day-trial" title="100-DAY TRIAL">
            <div className="pt-2 pb-4 space-y-2.5 text-[13px]">
              <p className="text-[#333333] leading-relaxed">
                We&apos;re confident that after experiencing the joys of natural foot freedom, your feet won&apos;t want to go back to &ldquo;normal&rdquo; shoes.
              </p>
              <p className="text-[#555555] leading-relaxed">
                So confident, we&apos;ve introduced a 100 day trial to all orders. If you change your mind within that period, return for a full refund with zero hassle.
              </p>
            </div>
          </AccordionItem>

          {/* 5. MATERIALS & TRANSPARENCY */}
          <AccordionItem id="materials-transparency" title="MATERIALS & TRANSPARENCY">
            <div className="pt-2 pb-4 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[12px]">
                <div className="border-b border-[#eaeaea] pb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#767676] block">
                    Upper
                  </span>
                  <span className="text-[#212121] font-medium">
                    100% Recycled Polyester (rPET)
                  </span>
                </div>
                <div className="border-b border-[#eaeaea] pb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#767676] block">
                    Lining
                  </span>
                  <span className="text-[#212121] font-medium">
                    57% TPU, 35% rPET, 8% PU
                  </span>
                </div>
                <div className="border-b border-[#eaeaea] pb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#767676] block">
                    Fastening
                  </span>
                  <span className="text-[#212121] font-medium">
                    Laces (100% Recycled Polyester)
                  </span>
                </div>
                <div className="border-b border-[#eaeaea] pb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#767676] block">
                    Outsole
                  </span>
                  <span className="text-[#212121] font-medium">
                    60% Polymer, 30% Silica, 10% Vulcanised
                  </span>
                </div>
              </div>
              <div className="pt-1 flex items-center justify-between gap-2">
                <span className="text-[11px] text-[#555555]">
                  Ethically produced with certified transparent supply chains.
                </span>
                <span className="px-2 py-0.5 bg-[#f0f0f0] text-[#212121] text-[10px] font-bold uppercase tracking-wider shrink-0">
                  MADE IN VIETNAM
                </span>
              </div>
            </div>
          </AccordionItem>

          {/* 6. CARE */}
          <AccordionItem id="care" title="CARE">
            <div className="pt-2 pb-4 space-y-2 text-[12px] text-[#333333]">
              <div>
                <span className="font-bold text-[#212121]">Cleaning:</span> Brush off loose dirt and wipe clean with a damp cloth and mild soap.
              </div>
              <div>
                <span className="font-bold text-[#212121]">Drying:</span> Remove insole and air-dry at room temperature away from direct sunlight or artificial heat sources.
              </div>
              <div>
                <span className="font-bold text-[#212121]">Aftercare:</span> Treat upper material periodically with eco-friendly water repellent spray.
              </div>
            </div>
          </AccordionItem>
        </AccordionGroup>
      </div>

      {/* Size Selection Modal */}
      <SizeSelectorModal
        isOpen={sizeModalOpen}
        onClose={() => setSizeModalOpen(false)}
        selectedSize={selectedSizeEu}
        onSelectSize={(size) => setSelectedSizeEu(size)}
      />
    </div>
  );
}
