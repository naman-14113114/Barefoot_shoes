"use client";

import React, { useState, useEffect } from "react";

const MESSAGES = [
  "Easy Returns & Exchanges — 14 Days to Decide.",
  "Trusted by 250.000+ customers.",
  "Free Shipping — On orders over A$150.",
];

export function AnnouncementBar() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % MESSAGES.length);
        setIsFading(false);
      }, 400);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside
      aria-label="Announcement"
      className="relative z-50 w-full h-10 bg-[#0080ff] text-white flex items-center justify-center px-4 py-[10px] overflow-hidden select-none"
    >
      <p
        className={`text-[12px] font-normal leading-[20px] tracking-normal text-center transition-all duration-400 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isFading ? "opacity-0 -translate-y-1.5" : "opacity-100 translate-y-0"
        }`}
      >
        {MESSAGES[currentIdx]}
      </p>
    </aside>
  );
}
