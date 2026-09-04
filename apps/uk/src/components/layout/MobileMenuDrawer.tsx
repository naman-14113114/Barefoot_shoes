"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Search, X } from "lucide-react";
import { HEADER_NAV_LINKS } from "@/data/navigation";
import { useCart } from "@/components/cart/CartProvider";

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUBMENU_LINKS = [
  { label: "LT 03 Premium Nappa White", href: "/products/lt-03-premium-nappa-white" },
  { label: "LT 03 Suede Sand", href: "/products/lt-03-suede-sand" },
  { label: "LT 03 Suede Blueberry", href: "/products/lt-03-suede-blueberry" },
  { label: "LT 01 Court Lite White", href: "/products/lt-01-court-lite-white" },
  { label: "All footwear", href: "/collections/sneakers" },
];

export function MobileMenuDrawer({ isOpen, onClose }: MobileMenuDrawerProps) {
  const { openCart, totals } = useCart();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <aside
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
      className={`fixed inset-x-1 bottom-0 top-10 z-[60] flex flex-col overflow-y-auto bg-white transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] lg:hidden ${
        isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
      }`}
    >
      <div className="relative flex h-[50px] shrink-0 items-center border-b border-[#e5e5e5] px-4">
        <button onClick={onClose} className="flex h-11 w-8 items-center" aria-label="Close mobile menu">
          <X size={21} strokeWidth={1.5} />
        </button>
        <Link
          href="/collections/sneakers"
          onClick={onClose}
          className="flex h-11 w-10 items-center justify-center"
          aria-label="Search"
        >
          <Search size={20} strokeWidth={1.5} />
        </Link>
        <Link
          href="/"
          onClick={onClose}
          className="absolute left-1/2 -translate-x-1/2 text-[19px] font-semibold tracking-[0.15em]"
        >
          BUUDY.
        </Link>
        <button
          type="button"
          className="ml-auto flex h-11 w-9 items-center justify-end"
          onClick={() => {
            onClose();
            openCart();
          }}
          aria-label="Open shopping bag"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#111111] text-[11px] text-white">
            {totals.itemCount}
          </span>
        </button>
      </div>

      <nav className="border-b border-[#e5e5e5] py-3" aria-label="Mobile primary navigation">
        {HEADER_NAV_LINKS.map((link) => {
          const expanded = expandedSection === link.label;
          return (
            <div key={link.label}>
              <button
                type="button"
                onClick={() => setExpandedSection(expanded ? null : link.label)}
                aria-expanded={expanded}
                className="flex min-h-12 w-full items-center justify-between px-6 text-left text-[16px]"
              >
                <span>{link.label}</span>
                <ChevronRight
                  size={19}
                  strokeWidth={1.6}
                  className={`transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                  expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-3 px-10 pb-5 pt-1 text-[13px] text-[#686868]">
                    {SUBMENU_LINKS.map((item) => (
                      <Link key={item.label} href={item.href} onClick={onClose} className="block">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      <div className="space-y-5 border-b border-[#e5e5e5] px-6 py-6 text-[14px]">
        <Link href="/delivery-returns" onClick={onClose} className="block">Shipping & Delivery</Link>
        <Link href="/returns" onClick={onClose} className="block">Returns & Exchanges</Link>
        <Link href="/size-guide" onClick={onClose} className="block">Size Guide</Link>
        <Link href="/shoe-care" onClick={onClose} className="block">Product Care</Link>
        <Link href="/pages/faqs" onClick={onClose} className="block">All Topics & Customer Care</Link>
      </div>

      <Link href="/collections/sneakers" onClick={onClose} className="block p-6">
        <div className="relative aspect-[3/2] overflow-hidden bg-[#eeeeee]">
          <Image
            src="/media/products/drifters-white/buudy-barefoot-shoes-drifters-white-studio-editorial-pair.jpg"
            alt="BUUDY barefoot trainers"
            fill
            sizes="calc(100vw - 56px)"
            className="object-cover"
          />
        </div>
        <div className="mt-4 flex items-center justify-between text-[13px]">
          <span>Explore barefoot footwear</span>
          <ChevronRight size={16} strokeWidth={1.5} />
        </div>
      </Link>
    </aside>
  );
}
