"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "@barefoot/ui";

export function CraftsmanshipEditorial() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const stories = [
    {
      id: "portugal",
      title: "Handmade in Portugal.",
      body: "Cut from premium nappa, full grain and suede, then built on the last by makers who do little else. It takes years to master a shoe. We're still finding ways to make it better.",
      image: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ-250204-187_3840x.jpg?v=1774283553",
      modalTitle: "Atelier Shoemaking Heritage",
      modalContent:
        "Every single pair is hand-crafted in São João da Madeira, Portugal's famed footwear enclave. The atelier has operated continuously for over four decades, employing multi-generational craftspeople who hand-last, stitch, and inspect each silhouette twice before boxing.",
    },
    {
      id: "packaging",
      title: "One box. Nothing wasted.",
      body: "Every pair ships in a crisp white box built to be the shipping box too — no second carton, nothing thrown away. Inside, a reusable ETQ travel bag for wherever they go next. A detail you notice after you buy, not just before.",
      image: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ-250204-163_3840x.jpg?v=1774283553",
      modalTitle: "Zero-Waste Packaging Standard",
      modalContent:
        "We eliminated double-boxing and single-use polybags entirely. Our rigid shipping container is fabricated from 100% recycled FSC-certified pulp with vegetable-based inks. Inside you'll find an unbleached organic cotton shoe bag designed for lifetime travel utility.",
    },
    {
      id: "comfort",
      title: "Endless comfort.",
      body: "A structured silhouette on the outside. Inside, a memory-foam insole with airflow channels that move moisture with every step. The kind of shoe you forget you're wearing — and keep on long after you meant to.",
      image: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ_x_SEPT_-40_LR_3840x.png?v=1774283553",
      modalTitle: "Biomechanical Footbed & Airflow",
      modalContent:
        "Our proprietary anatomical footbed combines an open-cell viscoelastic memory foam layer with laser-etched ventilation channels. Designed with true zero-drop geometry and a wide toe box, it restores healthy foot articulation, eliminates bunion pressure, and delivers supreme day-long comfort.",
    },
  ];

  const currentModalStory = stories.find((s) => s.id === activeModal);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-20 border-t border-[#eaeaea] space-y-24 text-[#000000]">
      {/* Grid of 3 Staggered Editorial Feature Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col space-y-4 group">
            {/* Image (4:5 Ratio) */}
            <div className="relative w-full aspect-[4/5] bg-[#eaeaea] overflow-hidden">
              <Image
                src={story.image}
                alt={story.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-600 ease-out"
              />
            </div>

            {/* Content */}
            <div className="space-y-2 flex-1 flex flex-col justify-between pt-1">
              <div className="space-y-2">
                <h3 className="text-[17px] font-medium text-[#000000]">{story.title}</h3>
                <p className="text-[13px] text-[#767676] leading-relaxed">{story.body}</p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModal(story.id)}
                  className="text-[12px] font-medium text-[#000000] underline underline-offset-4 hover:opacity-75 transition-opacity"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Story Modal */}
      {currentModalStory && (
        <Modal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title={currentModalStory.modalTitle}
        >
          <div className="space-y-4">
            <div className="relative w-full h-48 bg-[#eaeaea] overflow-hidden">
              <Image
                src={currentModalStory.image}
                alt={currentModalStory.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[13px] text-[#767676] leading-relaxed">
              {currentModalStory.modalContent}
            </p>
          </div>
        </Modal>
      )}
    </section>
  );
}
