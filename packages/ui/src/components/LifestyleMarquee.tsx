"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@barefoot/shared";

export interface LifestyleImageItem {
  id: string;
  src: string;
  alt: string;
  label?: string;
}

export const DRIFTERS_LIFESTYLE_IMAGES: LifestyleImageItem[] = [
  {
    id: "buudy-cyan-trail",
    src: "/media/drifters/buudy-barefoot-shoes-drifters-cyan-trail-hiking.jpg",
    alt: "Buudy Barefoot Shoes Drifters Cyan Trail Hiking on Mountain Rock",
    label: "Trail & Hiking",
  },
  {
    id: "buudy-gym-workout",
    src: "/media/drifters/buudy-barefoot-shoes-drifters-gym-workout-flexibility.jpg",
    alt: "Buudy Barefoot Shoes Drifters Gym Workout Ankle & Toe Flexibility",
    label: "Gym & Training",
  },
  {
    id: "buudy-white-rock",
    src: "/media/drifters/buudy-barefoot-shoes-drifters-white-zero-drop-rock-grip.jpg",
    alt: "Buudy Barefoot Shoes Drifters White Zero Drop Rock Grip & Natural Stride",
    label: "Zero-Drop Grip",
  },
  {
    id: "buudy-black-cycling",
    src: "/media/drifters/buudy-barefoot-shoes-drifters-black-cycling-training.jpg",
    alt: "Buudy Barefoot Shoes Drifters Black Outdoor Cycling & Athletic Training",
    label: "Everyday Active",
  },
  {
    id: "buudy-beach-water",
    src: "/media/drifters/buudy-barefoot-shoes-drifters-beach-water-barefoot-freedom.jpg",
    alt: "Buudy Barefoot Shoes Drifters Beach Water & Sand Barefoot Freedom",
    label: "Water & Shore",
  },
  {
    id: "buudy-flexible-torsion",
    src: "/media/drifters/buudy-barefoot-shoes-drifters-ultra-flexible-sole-torsion.jpg",
    alt: "Buudy Barefoot Shoes Drifters Ultra-Flexible Sole 360 Degree Torsion",
    label: "360° Flexibility",
  },
];

const MARQUEE_STYLES = `
  @keyframes barefoot-marquee {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }

  .barefoot-marquee-track {
    display: flex;
    width: max-content;
    animation: barefoot-marquee 30s linear infinite;
    will-change: transform;
    backface-visibility: hidden;
  }

  .barefoot-marquee-track:hover {
    animation-play-state: paused;
  }

  .barefoot-marquee-item {
    position: relative;
    flex-shrink: 0;
    width: 240px;
    height: 240px;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background-color: #f5f5f5;
    border: 1px solid #eaeaea;
  }

  @media (min-width: 640px) {
    .barefoot-marquee-item {
      width: 280px;
      height: 280px;
    }
  }

  @media (min-width: 1024px) {
    .barefoot-marquee-item {
      width: 320px;
      height: 320px;
    }
  }

  @media (max-width: 640px) {
    .barefoot-marquee-track {
      animation-duration: 22s;
    }
  }
`;

export interface LifestyleMarqueeProps {
  className?: string;
  images?: LifestyleImageItem[];
}

export function LifestyleMarquee({
  className,
  images = DRIFTERS_LIFESTYLE_IMAGES,
}: LifestyleMarqueeProps) {
  // Duplicate images array to create a seamless infinite looping track
  const displayImages = [...images, ...images];

  return (
    <section
      aria-label="Buudy Barefoot Shoes Lifestyle Gallery"
      className={cn(
        "w-full overflow-hidden bg-[#ffffff] py-6 md:py-8 border-y border-[#eaeaea] relative",
        className
      )}
    >
      <style dangerouslySetInnerHTML={{ __html: MARQUEE_STYLES }} />

      <div className="w-full overflow-hidden select-none">
        <div className="barefoot-marquee-track flex gap-3 md:gap-4 px-2">
          {displayImages.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="barefoot-marquee-item group/item"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover/item:scale-108"
                priority={idx < 4}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4">
                {item.label && (
                  <span className="text-white text-[12px] md:text-[13px] font-semibold tracking-wider uppercase drop-shadow-md">
                    {item.label}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}