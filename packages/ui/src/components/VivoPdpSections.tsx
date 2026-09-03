"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@barefoot/shared";
import { Plus, Check, ShieldCheck, Truck, RefreshCw } from "lucide-react";

// ==========================================
// TYPES & PROPS
// ==========================================

export type MarketCode = "uk" | "us" | "au" | string;

export interface VivoPdpSectionsProps {
  market?: MarketCode;
  className?: string;
  showAccordion?: boolean;
  showWhyBarefoot?: boolean;
  showHeroBanner?: boolean;
  showReclaimPotential?: boolean;
  showLifestyleGrid?: boolean;
  showOutsoleTech?: boolean;
}

export interface VivoProductAccordionProps {
  market?: MarketCode;
  className?: string;
  defaultOpenId?: string;
}

export interface WhyGoBarefootGridProps {
  className?: string;
}

export interface VivoHeroBannerProps {
  className?: string;
  priority?: boolean;
}

export interface ReclaimPotentialSectionProps {
  className?: string;
}

export interface LifestyleMediaGridProps {
  className?: string;
}

export interface OutsoleTechDiagramProps {
  className?: string;
}

// Scoped Vivobarefoot Typography & Layout CSS
const VIVO_STYLES = `
  .vivo-pdp-wrap {
    width: 100%;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: 768px) {
    .vivo-pdp-wrap {
      padding-left: 48px;
      padding-right: 48px;
    }
  }
  @media (min-width: 1024px) {
    .vivo-pdp-wrap {
      padding-left: 64px;
      padding-right: 64px;
    }
  }

  .vivo-preheading {
    font-size: 17px;
    font-weight: 500;
    line-height: 1.1;
    letter-spacing: -0.2px;
    text-transform: uppercase;
    color: #212121;
    margin-bottom: 20px;
  }
  @media (max-width: 640px) {
    .vivo-preheading {
      font-size: 14px;
      margin-bottom: 12px;
    }
  }

  .vivo-huge-heading {
    font-size: clamp(36px, 6.5vw, 96px);
    font-weight: 900;
    line-height: 0.88;
    letter-spacing: -3px;
    text-transform: uppercase;
    color: #212121;
  }
  @media (max-width: 640px) {
    .vivo-huge-heading {
      letter-spacing: -1.5px;
      line-height: 0.95;
    }
  }

  .vivo-why-heading {
    font-size: clamp(34px, 4.5vw, 62px);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -2px;
    text-transform: uppercase;
    text-align: center;
    color: #212121;
  }

  .vivo-why-subheading {
    font-size: 18px;
    line-height: 1.3;
    letter-spacing: -0.2px;
    text-align: center;
    color: #000000;
    margin-top: 10px;
    margin-bottom: 60px;
  }
  @media (max-width: 640px) {
    .vivo-why-subheading {
      font-size: 15px;
      margin-bottom: 36px;
    }
  }

  .vivo-pillar-badge {
    font-size: clamp(32px, 3.2vw, 44px);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -2px;
    text-transform: uppercase;
    text-align: center;
    color: #212121;
    margin-top: 20px;
    margin-bottom: 8px;
  }

  .vivo-pillar-title {
    font-size: clamp(18px, 1.8vw, 24px);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.5px;
    text-transform: uppercase;
    text-align: center;
    color: #212121;
    margin-bottom: 12px;
  }

  .vivo-pillar-desc {
    font-size: 17px;
    line-height: 1.4;
    letter-spacing: -0.2px;
    text-align: center;
    color: #212121;
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
  }

  .vivo-accordion-title {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.5px;
    text-transform: uppercase;
    color: #212121;
  }
  @media (max-width: 640px) {
    .vivo-accordion-title {
      font-size: 18px;
    }
  }

  .vivo-weight-num {
    font-size: clamp(38px, 4vw, 54px);
    font-weight: 900;
    line-height: 1;
    color: #212121;
  }

  .vivo-metric-num {
    font-size: clamp(38px, 4vw, 56px);
    font-weight: 900;
    line-height: 1;
    color: #212121;
  }

  .vivo-grid-2col {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    align-items: start;
  }
  @media (min-width: 1024px) {
    .vivo-grid-2col {
      grid-template-columns: 1fr 1fr;
      gap: 64px;
    }
  }

  .vivo-grid-3col {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }
  @media (min-width: 768px) {
    .vivo-grid-3col {
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }
  }
  @media (min-width: 1024px) {
    .vivo-grid-3col {
      gap: 48px;
    }
  }

  .vivo-grid-outsole {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    align-items: center;
  }
  @media (min-width: 1024px) {
    .vivo-grid-outsole {
      grid-template-columns: 1fr 1.2fr 1fr;
      gap: 48px;
    }
  }

  .vivo-benefit-img {
    position: relative;
    width: 100%;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
  }
  @media (min-width: 640px) {
    .vivo-benefit-img {
      height: 180px;
    }
  }
  @media (min-width: 1024px) {
    .vivo-benefit-img {
      height: 200px;
    }
  }

  .vivo-sole-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 460px;
  }
  @media (min-width: 1024px) {
    .vivo-sole-container {
      min-height: 560px;
    }
  }

  .vivo-sole-img {
    position: relative;
    width: 100%;
    height: 460px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    .vivo-sole-img {
      height: 540px;
    }
  }
`;

// ==========================================
// 1. VIVO PRODUCT ACCORDION (Interactive Folders)
// ==========================================

export function VivoProductAccordion({
  market = "uk",
  className,
  defaultOpenId = "product-info",
}: VivoProductAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Market-specific delivery terms
  const getDeliveryContent = (m: MarketCode) => {
    switch (m.toLowerCase()) {
      case "us":
        return {
          standard: "Standard Delivery ($5, Free on orders over $80) — 3-5 business days via USPS.",
          express: "Express Courier ($10) — 1-2 business days via FedEx.",
          tracking: "Full tracking provided via email upon dispatch.",
          returns: "Hassle-free 100-day returns with prepaid domestic return labels.",
        };
      case "au":
        return {
          standard: "Standard Delivery (A$8, Free on orders over A$120) — 3-6 business days via Australia Post.",
          express: "Express Courier (A$15) — 1-2 business days.",
          tracking: "Full tracking provided via email upon dispatch.",
          returns: "Hassle-free 100-day returns across Australia.",
        };
      case "uk":
      default:
        return {
          standard: "Standard Delivery (£5, Free on orders over £80) — 2-4 business days via Royal Mail 48 Tracked.",
          express: "Express Delivery (£10) — 1-2 business days via Royal Mail 24 Tracked / DPD.",
          tracking: "Full end-to-end tracking provided via SMS and email.",
          returns: "Prepaid Royal Mail return labels included for straightforward exchanges.",
        };
    }
  };

  const delivery = getDeliveryContent(market);

  const accordionItems = [
    {
      id: "product-info",
      title: "PRODUCT INFO",
      content: (
        <div className="pt-2 pb-6 space-y-6">
          {/* 4 Feature Items */}
          <div className="space-y-5">
            {/* Primus Outsole */}
            <div className="flex items-start gap-4">
              <div className="relative w-[31px] h-[31px] shrink-0 mt-0.5">
                <Image
                  src="/media/vivo/biome_design_icon.png"
                  alt="Primus Outsole"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h5 className="text-[15px] md:text-[16px] font-bold uppercase tracking-tight text-[#212121]">
                  Primus Outsole
                </h5>
                <p className="text-[14px] md:text-[15px] text-[#444444] leading-relaxed mt-0.5">
                  Get as close to the ground as possible.
                </p>
              </div>
            </div>

            {/* Ortholite Insole */}
            <div className="flex items-start gap-4">
              <div className="relative w-[31px] h-[31px] shrink-0 mt-0.5">
                <Image
                  src="/media/vivo/insoles_recycled_icon.png"
                  alt="Ortholite Insole"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h5 className="text-[15px] md:text-[16px] font-bold uppercase tracking-tight text-[#212121]">
                  Ortholite Insole
                </h5>
                <p className="text-[14px] md:text-[15px] text-[#444444] leading-relaxed mt-0.5">
                  The Ortholite Performance Insole is made of 98% recycled polyurethane foam, which helps reduce waste and the use of virgin plastics.
                </p>
              </div>
            </div>

            {/* Breathable Mesh */}
            <div className="flex items-start gap-4">
              <div className="relative w-[31px] h-[31px] shrink-0 mt-0.5">
                <Image
                  src="/media/vivo/attributes_breathable_icon.png"
                  alt="Breathable Mesh"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h5 className="text-[15px] md:text-[16px] font-bold uppercase tracking-tight text-[#212121]">
                  Breathable Mesh
                </h5>
                <p className="text-[14px] md:text-[15px] text-[#444444] leading-relaxed mt-0.5">
                  Breathable, lightweight and comfortable.
                </p>
              </div>
            </div>

            {/* Vegan* */}
            <div className="flex items-start gap-4">
              <div className="relative w-[31px] h-[31px] shrink-0 mt-0.5">
                <Image
                  src="/media/vivo/materials_animal_free_icon.png"
                  alt="Vegan Certified"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h5 className="text-[15px] md:text-[16px] font-bold uppercase tracking-tight text-[#212121]">
                  Vegan*
                </h5>
                <p className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed mt-0.5">
                  *The main materials in all our Vegan* products are synthetic and aren&apos;t derived from animals. We don&apos;t yet have the transparency we need over the production of all the small inputs (such as adhesives and dyes) used in these products to ensure they meet vegan best practices. So, whilst we believe the shoes are vegan, we can&apos;t yet guarantee it and want to be fully transparent.
                </p>
              </div>
            </div>
          </div>

          {/* Weight Badge */}
          <div className="pt-5 border-t border-[#d9d9d9] flex items-baseline justify-between">
            <span className="text-[14px] font-bold uppercase tracking-wider text-[#212121]">
              Weight
            </span>
            <div className="flex items-baseline">
              <span className="text-[44px] md:text-[52px] font-black leading-none text-[#212121]">
                239
              </span>
              <span className="text-[20px] font-bold text-[#212121] ml-1">
                g
              </span>
            </div>
          </div>
          <p className="text-[12px] text-[#767676] text-right -mt-4">
            Based on a single shoe in Men&apos;s size: EU 42 | UK 8 | US 9
          </p>
        </div>
      ),
    },
    {
      id: "size-fit",
      title: "SIZE & FIT",
      content: (
        <div className="pt-2 pb-6 space-y-4">
          <p className="text-[15px] text-[#333333] leading-relaxed">
            This shoe fits true to size. If you are between sizes, we recommend sizing up to ensure optimal toe splay and natural barefoot biomechanics.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-[#f9f9f9] p-3.5 border border-[#eaeaea]">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#212121] block mb-1">
                Wide Toe Box
              </span>
              <p className="text-[13px] text-[#555555]">
                Natural anatomical toe splay for maximum stability.
              </p>
            </div>
            <div className="bg-[#f9f9f9] p-3.5 border border-[#eaeaea]">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#212121] block mb-1">
                Zero Drop
              </span>
              <p className="text-[13px] text-[#555555]">
                Completely flat from heel to toe for natural posture.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "delivery-info",
      title: "DELIVERY INFO",
      content: (
        <div className="pt-2 pb-6 space-y-3">
          <div className="space-y-2.5 text-[14px] text-[#333333]">
            <p className="leading-relaxed font-medium">
              • {delivery.standard}
            </p>
            <p className="leading-relaxed">
              • {delivery.express}
            </p>
            <p className="leading-relaxed text-[#555555]">
              • {delivery.tracking}
            </p>
            <p className="leading-relaxed text-[#555555]">
              • {delivery.returns}
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "100-day-trial",
      title: "100-DAY TRIAL",
      content: (
        <div className="pt-2 pb-6 space-y-3">
          <p className="text-[15px] text-[#333333] leading-relaxed">
            We&apos;re confident that after experiencing the joys of natural foot freedom, your feet won&apos;t want to go back to &ldquo;normal&rdquo; shoes.
          </p>
          <p className="text-[14px] text-[#555555] leading-relaxed">
            So confident, we&apos;ve introduced a 100 day trial to all orders. If you change your mind within that period, return for a full refund with zero hassle.
          </p>
        </div>
      ),
    },
    {
      id: "materials-transparency",
      title: "MATERIALS & TRANSPARENCY",
      content: (
        <div className="pt-2 pb-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px]">
            <div className="border-b border-[#eaeaea] pb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#767676] block">
                Upper
              </span>
              <span className="text-[#212121] font-medium">
                100% Recycled Polyester (rPET)
              </span>
            </div>
            <div className="border-b border-[#eaeaea] pb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#767676] block">
                Lining
              </span>
              <span className="text-[#212121] font-medium">
                57% TPU, 35% rPET, 8% PU
              </span>
            </div>
            <div className="border-b border-[#eaeaea] pb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#767676] block">
                Fastening
              </span>
              <span className="text-[#212121] font-medium">
                Laces (100% Recycled Polyester)
              </span>
            </div>
            <div className="border-b border-[#eaeaea] pb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#767676] block">
                Outsole
              </span>
              <span className="text-[#212121] font-medium">
                60% Polymer, 30% Silica, 10% Vulcanised
              </span>
            </div>
          </div>
          <div className="pt-2 flex items-center justify-between">
            <span className="text-[13px] text-[#555555]">
              Ethically produced with certified transparent supply chains.
            </span>
            <span className="px-2.5 py-1 bg-[#f0f0f0] text-[#212121] text-[11px] font-bold uppercase tracking-wider">
              MADE IN VIETNAM
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "care",
      title: "CARE",
      content: (
        <div className="pt-2 pb-6 space-y-3 text-[14px] text-[#333333]">
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
      ),
    },
  ];

  return (
    <section className={cn("w-full pt-16 md:pt-24 pb-20 md:pb-32", className)}>
      <div className="vivo-pdp-wrap">
        <div className="vivo-grid-2col">
          {/* Left Side: Massive Eyebrow + Huge Heading */}
          <div>
            <p className="vivo-preheading">
              RUN, TRAIN AND MOVE LIKE NATURE INTENDED
            </p>
            <h2 className="vivo-huge-heading">
              THE BAREFOOT TRAINING ALL-ROUNDER, REFINED
            </h2>
          </div>

          {/* Right Side: Accordion Folds (Single-Open Mutex State) */}
          <div className="divide-y divide-[#d9d9d9] border-b border-[#d9d9d9]">
            {accordionItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="transition-colors">
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    className="w-full py-5 md:py-6 flex items-center justify-between text-left group cursor-pointer focus:outline-hidden"
                  >
                    <span className="vivo-accordion-title transition-colors">
                      {item.title}
                    </span>
                    <div
                      className={cn(
                        "w-7 h-7 flex items-center justify-center transition-transform duration-300 ease-out",
                        isOpen ? "rotate-45 text-[#000000]" : "text-[#767676] group-hover:text-[#000000]"
                      )}
                    >
                      <Plus className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </button>

                  {/* Physics CSS Grid Transition */}
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      {item.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 2. \"WHY GO BAREFOOT\" 3-PILLAR BENEFIT GRID
// ==========================================

export function WhyGoBarefootGrid({ className }: WhyGoBarefootGridProps) {
  const benefits = [
    {
      id: "fit",
      badge: "FIT",
      title: "BETTER BALANCE AND POSTURE",
      description:
        "Foot-shaped fit enables toes to splay supporting balance and a stable base of support.",
      image: "/media/vivo/vwo-fit.png",
    },
    {
      id: "feel",
      badge: "FEEL",
      title: "IMPROVED COORDINATION AND AGILITY",
      description:
        "Thin sole allows the thousands of nerve endings in each foot enabling the sensory feedback the brain needs to move with skill.",
      image: "/media/vivo/vwo-feel.png",
    },
    {
      id: "flex",
      badge: "FLEX",
      title: "IMPROVED STRENGTH AND NATURAL MOVEMENT",
      description:
        "Flexible footwear let the muscles and tendons load and recoil, supporting stronger, more resilient feet over time.",
      image: "/media/vivo/vwo-flex.png",
    },
  ];

  return (
    <section className={cn("w-full pt-10 pb-20 md:pb-32", className)}>
      <div className="vivo-pdp-wrap">
        {/* Header Container */}
        <div className="text-center max-w-[800px] mx-auto mb-16 md:mb-20">
          <h2 className="vivo-why-heading">
            WHY GO BAREFOOT
          </h2>
          <p className="vivo-why-subheading">
            Wearing barefoot shoes for 6 months increases foot strength by 57%
          </p>
        </div>

        {/* 3 Column Benefit Cards */}
        <div className="vivo-grid-3col max-w-[1360px] mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col items-center text-center group"
            >
              {/* Benefit Anatomical Graphic */}
              <div className="vivo-benefit-img">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Pillar Badge */}
              <h3 className="vivo-pillar-badge">
                {benefit.badge}
              </h3>

              {/* Benefit Title */}
              <h4 className="vivo-pillar-title">
                {benefit.title}
              </h4>

              {/* Description */}
              <p className="vivo-pillar-desc">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. FULL-BLEED HERO LIFESTYLE LOOKBOOK BANNER
// ==========================================

export function VivoHeroBanner({
  className,
  priority = false,
}: VivoHeroBannerProps) {
  return (
    <section className={cn("w-full relative aspect-[16/9] md:aspect-[21/9] overflow-hidden my-12 bg-[#000000]", className)}>
      <Image
        src="/media/vivo/hero_lifestyle_banner.jpg"
        alt="Barefoot Lifestyle Training"
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center"
      />
    </section>
  );
}

// ==========================================
// 4. \"RECLAIM YOUR RAW POTENTIAL\" DUAL FEATURE BLOCK
// ==========================================

export function ReclaimPotentialSection({
  className,
}: ReclaimPotentialSectionProps) {
  return (
    <section className={cn("w-full py-16 md:py-24", className)}>
      <div className="vivo-pdp-wrap">
        <div className="vivo-grid-2col">
          {/* Left: Eyebrow + Huge Heading */}
          <div>
            <p className="vivo-preheading">
              RECLAIM YOUR RAW POTENTIAL
            </p>
            <h2 className="vivo-huge-heading">
              WIDE, THIN, AND FLEXIBLE TO ELEVATE EVERY WORKOUT
            </h2>
          </div>

          {/* Right: Body Story + 2 Features */}
          <div className="space-y-8">
            <p className="text-[17px] md:text-[18px] text-[#333333] leading-relaxed">
              The Primus Lite IV is a versatile performance trainer for running, workouts and dynamic day-to-day living that helps you move like nature intended. It&apos;s wide for natural stability, thin for natural feedback, and flexible for natural movement. Re-engineered with refined panels for improved manufacturing efficiency, it delivers the same true barefoot feeling with reduced production waste.
            </p>

            <div className="space-y-6 pt-4 border-t border-[#d9d9d9]">
              {/* Feature 1: Training */}
              <div className="flex items-start gap-4">
                <div className="relative w-[36px] h-[36px] shrink-0 mt-1">
                  <Image
                    src="/media/vivo/terrain_gym_icon.png"
                    alt="Training Performance"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-[20px] md:text-[22px] font-black uppercase tracking-tight text-[#212121]">
                    TRAINING
                  </h4>
                  <p className="text-[15px] text-[#555555] leading-relaxed mt-1">
                    Barefoot performance for your best performance. Unleash your natural potential in every workout.
                  </p>
                </div>
              </div>

              {/* Feature 2: Fit, Feel, Flex */}
              <div className="flex items-start gap-4">
                <div className="relative w-[36px] h-[36px] shrink-0 mt-1">
                  <Image
                    src="/media/vivo/usp_fit_feel_flex_icon.png"
                    alt="Fit, Feel, Flex"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-[20px] md:text-[22px] font-black uppercase tracking-tight text-[#212121]">
                    FIT, FEEL, FLEX
                  </h4>
                  <p className="text-[15px] text-[#555555] leading-relaxed mt-1">
                    For natural stability, natural sensory feedback and natural strength.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 5. 2-IMAGE LIFESTYLE MEDIA SPLIT GRID
// ==========================================

export function LifestyleMediaGrid({ className }: LifestyleMediaGridProps) {
  return (
    <section className={cn("w-full my-12", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
        {/* Left: Athlete Lacing Up */}
        <div className="group relative w-full aspect-[4/5] sm:aspect-[16/11] md:aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-[#f4f4f4]">
          <Image
            src="/media/vivo/lifestyle_gym_lacing.jpg"
            alt="Athlete tying barefoot performance shoes"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
          />
        </div>

        {/* Right: Curled Shoe Flexibility Demo */}
        <div className="group relative w-full aspect-[4/5] sm:aspect-[16/11] md:aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-[#f4f4f4]">
          <Image
            src="/media/vivo/lifestyle_shoe_curled.jpg"
            alt="Ultra-flexible barefoot shoe curled into loop"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
          />
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 6. INTERACTIVE OUTSOLE TECHNICAL DIAGRAM
// ==========================================

export function OutsoleTechDiagram({ className }: OutsoleTechDiagramProps) {
  return (
    <section className={cn("w-full py-20 md:py-32", className)}>
      <div className="vivo-pdp-wrap">
        <div className="vivo-grid-outsole">
          {/* Left: Metric Callouts */}
          <div className="space-y-10">
            {/* Metric 1: Sole Base */}
            <div>
              <span className="text-[14px] md:text-[15px] font-bold uppercase tracking-wider text-[#212121] block mb-1">
                Sole base
              </span>
              <div className="vivo-metric-num mb-2">
                2mm
              </div>
              <p className="text-[14px] md:text-[15px] text-[#555555] leading-relaxed">
                Vivos are designed with thin soles to help reconnect you with the ground, and provide flexibility for strong, healthy feet.
              </p>
            </div>

            {/* Metric 2: Tread Depth */}
            <div>
              <span className="text-[14px] md:text-[15px] font-bold uppercase tracking-wider text-[#212121] block mb-1">
                Tread depth
              </span>
              <div className="vivo-metric-num mb-2">
                2mm
              </div>
              <p className="text-[14px] md:text-[15px] text-[#555555] leading-relaxed">
                Tread depth refers to the thickness of the patterns or &lsquo;lugs&rsquo;, on the sole. Low-profile hexagonal tread pattern for grip on flat, hard surfaces.
              </p>
            </div>
          </div>

          {/* Center: Technical Sole Graphic with Hexagon Blueprint Watermark */}
          <div className="vivo-sole-container">
            {/* Hexagon Blueprint Background */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none bg-center bg-contain"
              style={{
                backgroundImage: "url('/media/vivo/hexagons.svg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />

            {/* Sole Image */}
            <div className="vivo-sole-img">
              <Image
                src="/media/vivo/primus_outsole_tech.png"
                alt="Primus Outsole Hexagonal Tread Technical Diagram"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right: Technical Explanation */}
          <div className="space-y-4">
            <h3 className="text-[24px] md:text-[28px] font-black uppercase tracking-tight text-[#212121]">
              PRIMUS OUTSOLE
            </h3>
            <p className="text-[15px] md:text-[16px] text-[#333333] leading-relaxed">
              The Primus Outsole is a lightweight 2mm performance sole designed to keep you close to the ground. A low sidewall and subtle toe wrap offer just enough protection for urban environments without limiting natural movement.
            </p>
            <p className="text-[14px] text-[#666666] leading-relaxed">
              Its hexagonal tread pattern supports multidirectional flexibility and grip &mdash; because strong shapes build strong feet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



// ==========================================
// 7. COMPOSITE MASTER PDP SECTION
// ==========================================

export function VivoPdpSections({
  market = "uk",
  className,
  showAccordion = false,
  showWhyBarefoot = true,
  showHeroBanner = true,
  showReclaimPotential = true,
  showLifestyleGrid = true,
  showOutsoleTech = true,
}: VivoPdpSectionsProps) {
  return (
    <div className={cn("w-full space-y-0 text-[#212121]", className)}>
      <style dangerouslySetInnerHTML={{ __html: VIVO_STYLES }} />

      {/* 1. Interactive Product Accordion */}
      {showAccordion && <VivoProductAccordion market={market} />}

      {/* 2. \"Why Go Barefoot\" 3-Pillar Benefit Grid */}
      {showWhyBarefoot && <WhyGoBarefootGrid />}

      {/* 3. Hero Lifestyle Lookbook Banner */}
      {showHeroBanner && <VivoHeroBanner />}

      {/* 4. \"Reclaim Your Raw Potential\" Dual Feature Block */}
      {showReclaimPotential && <ReclaimPotentialSection />}

      {/* 5. 2-Image Lifestyle Media Split Grid */}
      {showLifestyleGrid && <LifestyleMediaGrid />}

      {/* 6. Interactive Outsole Technical Diagram */}
      {showOutsoleTech && <OutsoleTechDiagram />}
    </div>
  );
}
