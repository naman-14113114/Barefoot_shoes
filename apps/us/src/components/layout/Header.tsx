"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HEADER_NAV_LINKS } from "@/data/navigation";
import { useCart } from "@/components/cart/CartProvider";
import { MobileMenuDrawer } from "./MobileMenuDrawer";

export function Header() {
  const { openCart, totals } = useCart();
  const [scrollState, setScrollState] = useState<"top" | "floating" | "hidden">("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const TOPBAR_HEIGHT = 40;
    const HEADER_HEIGHT = 66;
    const HIDE_THRESHOLD = TOPBAR_HEIGHT + HEADER_HEIGHT; // 106px

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= TOPBAR_HEIGHT) {
        // At top of page: header sits below announcement bar with transparent backdrop over images
        setScrollState("top");
      } else if (currentScrollY > HIDE_THRESHOLD && delta > 3) {
        // Scrolling down past header: slide smoothly UP out of view
        setScrollState("hidden");
      } else if (delta < -3 || (currentScrollY <= HIDE_THRESHOLD && currentScrollY > TOPBAR_HEIGHT)) {
        // Scrolling up or in floating zone: slide smoothly DOWN with white floating card backdrop
        setScrollState("floating");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHeaderTransform = () => {
    if (scrollState === "top") return "translateY(40px)";
    if (scrollState === "floating") return "translateY(0px)";
    return "translateY(calc(-100% - 14px))";
  };

  return (
    <>
      <header
        style={{ transform: getHeaderTransform() }}
        className={`fixed top-[10px] left-2.5 right-2.5 md:left-[10px] md:right-[10px] z-40 h-[66px] px-4 md:px-[30px] flex items-center justify-between text-[#000000] transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          scrollState === "hidden" ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        }`}
      >
        {/* ETQ-style dynamic backdrop: 100% transparent at top, solid white floating card with hairline border & shadow when scrolling */}
        <div
          className={`absolute inset-0 -z-10 bg-white/95 backdrop-blur-md border border-[#eaeaea] shadow-[0_2px_16px_rgba(0,0,0,0.04)] transition-opacity duration-400 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            scrollState === "top" ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
          }`}
        />

        {/* Left Navigation (Desktop) / Hamburger (Mobile) */}
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2 text-[#000000]"
            aria-label="Open navigation menu"
          >
            <span className="w-5 h-[1.5px] bg-[#000000] block" />
            <span className="w-5 h-[1.5px] bg-[#000000] block" />
          </button>

          <nav className="hidden md:flex items-center gap-6 text-[13px] font-normal tracking-normal">
            {HEADER_NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="link-etq text-[#000000]">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center Brand Mark */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link
            href="/"
            className="font-medium text-[20px] md:text-[22px] tracking-[0.08em] text-[#000000] hover:opacity-85 transition-opacity"
          >
            BUUDY.
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-5 text-[13px] font-normal">
          <Link href="/collections/sneakers" className="hidden md:inline-block link-etq text-[#000000]">
            Search
          </Link>
          <Link href="/collections/sneakers" className="hidden lg:inline-block link-etq text-[#000000]">
            Service
          </Link>
          <Link href="/collections/sneakers" className="hidden lg:inline-block link-etq text-[#000000]">
            My account
          </Link>

          {/* Cart Bag Counter */}
          <button
            type="button"
            onClick={openCart}
            className="flex items-center gap-2 text-[#000000] hover:opacity-75"
            aria-label="Open shopping bag"
          >
            <span className="hidden sm:inline-block text-[13px]">Bag</span>
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#000000] text-white text-[11px] font-medium">
              {totals.itemCount}
            </span>
          </button>
        </div>
      </header>

      <MobileMenuDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
