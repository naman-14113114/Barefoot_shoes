"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { HEADER_NAV_LINKS } from "@/data/navigation";
import { useCart } from "@/components/cart/CartProvider";
import { MobileMenuDrawer } from "./MobileMenuDrawer";

type MenuLabel = (typeof HEADER_NAV_LINKS)[number]["label"];

const MENU_COLUMNS: Record<MenuLabel, { title: string; links: { label: string; href: string }[] }[]> = {
  Footwear: [
    {
      title: "Shop by type",
      links: [
        { label: "Sneakers", href: "/collections/sneakers" },
        { label: "Everyday", href: "/collections/sneakers" },
        { label: "Training", href: "/collections/sneakers" },
        { label: "Walking", href: "/collections/sneakers" },
        { label: "All footwear", href: "/collections/sneakers" },
      ],
    },
    {
      title: "Shop by collection",
      links: [
        { label: "New", href: "/collections/sneakers" },
        { label: "Bestsellers", href: "/collections/sneakers" },
        { label: "LT 03", href: "/products/lt-03-premium-nappa-white" },
        { label: "LT 01", href: "/products/lt-01-court-lite-white" },
      ],
    },
    {
      title: "Shop by material",
      links: [
        { label: "Premium Nappa", href: "/products/lt-03-premium-nappa-white" },
        { label: "Mediterranean Suede", href: "/products/lt-03-suede-sand" },
        { label: "Full Grain", href: "/products/ds-03-all-chocolate" },
        { label: "Barefoot performance", href: "/collections/sneakers" },
      ],
    },
  ],
  Menswear: [
    {
      title: "Everyday",
      links: [
        { label: "Minimal trainers", href: "/collections/sneakers" },
        { label: "Court silhouettes", href: "/products/lt-01-court-lite-white" },
        { label: "Walking shoes", href: "/collections/sneakers" },
      ],
    },
    {
      title: "Featured",
      links: [
        { label: "New arrivals", href: "/collections/sneakers" },
        { label: "Most wanted", href: "/products/lt-03-premium-nappa-white" },
        { label: "All menswear", href: "/collections/sneakers" },
      ],
    },
    {
      title: "Guides",
      links: [
        { label: "Size guide", href: "/size-guide" },
        { label: "Shoe care", href: "/shoe-care" },
        { label: "Our story", href: "/pages/about-us" },
      ],
    },
  ],
  Accessories: [
    {
      title: "Essentials",
      links: [
        { label: "Shoe care", href: "/shoe-care" },
        { label: "Size guide", href: "/size-guide" },
        { label: "All footwear", href: "/collections/sneakers" },
      ],
    },
    {
      title: "Customer care",
      links: [
        { label: "Delivery & returns", href: "/delivery-returns" },
        { label: "FAQs", href: "/pages/faqs" },
        { label: "Contact", href: "/pages/contact-us" },
      ],
    },
    {
      title: "BUUDY services",
      links: [
        { label: "Track an order", href: "/order-tracking" },
        { label: "100-day trial", href: "/returns" },
        { label: "Our story", href: "/pages/about-us" },
      ],
    },
  ],
  Sale: [
    {
      title: "Sale footwear",
      links: [
        { label: "Premium Nappa", href: "/products/lt-03-premium-nappa-white" },
        { label: "Suede Sand", href: "/products/lt-03-suede-sand" },
        { label: "Blueberry", href: "/products/lt-03-suede-blueberry" },
      ],
    },
    {
      title: "Popular",
      links: [
        { label: "Most wanted", href: "/products/lt-03-premium-nappa-white" },
        { label: "Court Lite", href: "/products/lt-01-court-lite-white" },
        { label: "All sale", href: "/collections/sneakers" },
      ],
    },
    {
      title: "Need help?",
      links: [
        { label: "Find your size", href: "/size-guide" },
        { label: "Delivery & returns", href: "/delivery-returns" },
        { label: "Contact", href: "/pages/contact-us" },
      ],
    },
  ],
};

const EDITORIAL_TILES = [
  {
    title: "LT 03 Premium Nappa White",
    caption: "Our barefoot bestseller.",
    href: "/products/lt-03-premium-nappa-white",
    image: "/media/products/drifters-white/buudy-barefoot-shoes-drifters-white-studio-editorial-pair.jpg",
  },
  {
    title: "Built to move",
    caption: "Natural freedom, refined.",
    href: "/collections/sneakers",
    image: "/media/drifters/buudy-barefoot-shoes-drifters-gym-workout-flexibility.jpg",
  },
];

export function Header() {
  const { openCart, totals } = useCart();
  const [scrollState, setScrollState] = useState<"top" | "floating" | "hidden">("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuLabel | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 40) {
        setScrollState("top");
      } else if (currentScrollY > 106 && delta > 3) {
        setScrollState("hidden");
        setActiveMenu(null);
      } else if (delta < -3 || currentScrollY <= 106) {
        setScrollState("floating");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveMenu(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const transform =
    scrollState === "top"
      ? "translateY(40px)"
      : scrollState === "floating"
        ? "translateY(0px)"
        : "translateY(calc(-100% - 14px))";

  return (
    <>
      <header
        style={{ transform }}
        className="fixed left-1 right-1 top-0 z-50 flex h-[50px] items-center justify-between px-4 text-[#111111] transition-[transform] duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] lg:left-[10px] lg:right-[10px] lg:top-[10px] lg:h-[66px] lg:px-[30px]"
      >
        <div
          className={`absolute inset-0 -z-10 border border-[#e5e5e5] bg-white transition-opacity duration-300 ${
            scrollState === "top" && !activeMenu ? "opacity-100 lg:opacity-0" : "opacity-100"
          }`}
        />

        <div className="flex items-center gap-6 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="relative flex h-11 w-7 flex-col justify-center gap-[5px]"
            aria-label="Open navigation menu"
          >
            <span className="block h-px w-5 bg-[#111111]" />
            <span className="block h-px w-5 bg-[#111111]" />
          </button>
          <Link
            href="/collections/sneakers"
            aria-label="Search"
            className="flex h-11 w-7 items-center justify-center"
          >
            <Search size={20} strokeWidth={1.6} />
          </Link>
        </div>

        <div className="flex items-center gap-9">
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-[19px] font-semibold tracking-[0.15em] lg:static lg:translate-x-0 lg:text-[22px]"
          >
            BUUDY.
          </Link>

          <nav className="hidden items-center gap-7 text-[14px] font-normal lg:flex" aria-label="Primary navigation">
            {HEADER_NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="link-etq py-2"
                aria-expanded={activeMenu === link.label}
                onMouseEnter={() => setActiveMenu(link.label)}
                onFocus={() => setActiveMenu(link.label)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-7 text-[14px] font-normal">
          <Link href="/collections/sneakers" className="link-etq hidden py-2 lg:inline-block">
            Search
          </Link>
          <Link href="/pages/faqs" className="link-etq hidden py-2 xl:inline-block">
            Service
          </Link>
          <Link href="/order-tracking" className="link-etq hidden py-2 xl:inline-block">
            My account
          </Link>
          <button
            type="button"
            onClick={openCart}
            className="flex h-11 items-center gap-2 hover:opacity-70"
            aria-label="Open shopping bag"
          >
            <span className="hidden text-[14px] lg:inline">Bag</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#111111] text-[11px] font-medium text-white lg:h-6 lg:w-6">
              {totals.itemCount}
            </span>
          </button>
        </div>
      </header>

      {activeMenu && scrollState !== "hidden" && (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-0 z-40 hidden bg-black/45 lg:block"
            onClick={() => setActiveMenu(null)}
          />
          <section
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
            className={`etq-menu-panel-in fixed left-[10px] right-[10px] z-[45] hidden bg-white px-[30px] pb-16 pt-16 lg:block ${
              scrollState === "top" ? "top-[116px]" : "top-[76px]"
            }`}
            aria-label={`${activeMenu} menu`}
          >
            <div className="grid grid-cols-[repeat(3,minmax(0,0.8fr))_minmax(0,1.1fr)_minmax(0,1.1fr)] gap-8">
              {MENU_COLUMNS[activeMenu].map((column) => (
                <div key={column.title}>
                  <h2 className="mb-6 text-[14px] font-semibold">{column.title}</h2>
                  <div className="flex flex-col items-start gap-4 text-[14px]">
                    {column.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setActiveMenu(null)}
                        className="link-etq"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {EDITORIAL_TILES.map((tile) => (
                <Link
                  key={tile.title}
                  href={tile.href}
                  onClick={() => setActiveMenu(null)}
                  className="group block"
                >
                  <div className="relative mb-4 aspect-[4/5] overflow-hidden bg-[#f2f2f2]">
                    <Image
                      src={tile.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 22vw, 1px"
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.015]"
                    />
                  </div>
                  <h2 className="text-[14px] font-semibold">{tile.title}</h2>
                  <p className="mt-1 text-[14px]">{tile.caption}</p>
                  <span className="link-etq mt-5 inline-block text-[14px]">Shop now.</span>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}

      <MobileMenuDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
