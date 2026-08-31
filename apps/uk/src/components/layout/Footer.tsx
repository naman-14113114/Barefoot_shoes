"use client";

import React from "react";
import Link from "next/link";
import { Headphones, Truck, ShieldCheck, Clock3 } from "lucide-react";

export function Footer() {
  return (
    <div className="w-full mt-20">
      {/* 1. Miroooo 4-Pillar Service Strip (Above Black Footer on All Pages) */}
      <aside aria-label="BUUDY customer care" className="w-full bg-[#fbfbf8] border-t border-b border-[#eaeaea] text-[#000000]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#eaeaea]">
          {/* Pillar 1: Customer support */}
          <div className="flex items-center gap-4 py-6 md:py-8 px-6 md:px-10">
            <div className="flex-none text-black">
              <Headphones className="w-6 h-6 stroke-[1.4]" aria-hidden="true" />
            </div>
            <div>
              <strong className="block text-[13px] md:text-[14px] font-semibold text-black tracking-tight mb-0.5">
                Customer support
              </strong>
              <span className="block text-[11px] md:text-[12px] text-[#767676]">
                Real help when you need it
              </span>
            </div>
          </div>

          {/* Pillar 2: Tracked UK delivery */}
          <div className="flex items-center gap-4 py-6 md:py-8 px-6 md:px-10">
            <div className="flex-none text-black">
              <Truck className="w-6 h-6 stroke-[1.4]" aria-hidden="true" />
            </div>
            <div>
              <strong className="block text-[13px] md:text-[14px] font-semibold text-black tracking-tight mb-0.5">
                Tracked UK delivery
              </strong>
              <span className="block text-[11px] md:text-[12px] text-[#767676]">
                Free on orders over £150
              </span>
            </div>
          </div>

          {/* Pillar 3: Risk-Free Home Trial */}
          <div className="flex items-center gap-4 py-6 md:py-8 px-6 md:px-10">
            <div className="flex-none text-black">
              <ShieldCheck className="w-6 h-6 stroke-[1.4]" aria-hidden="true" />
            </div>
            <div>
              <strong className="block text-[13px] md:text-[14px] font-semibold text-black tracking-tight mb-0.5">
                Risk-Free Home Trial
              </strong>
              <span className="block text-[11px] md:text-[12px] text-[#767676]">
                Take time to decide
              </span>
            </div>
          </div>

          {/* Pillar 4: Two-year warranty */}
          <div className="flex items-center gap-4 py-6 md:py-8 px-6 md:px-10">
            <div className="flex-none text-black">
              <Clock3 className="w-6 h-6 stroke-[1.4]" aria-hidden="true" />
            </div>
            <div>
              <strong className="block text-[13px] md:text-[14px] font-semibold text-black tracking-tight mb-0.5">
                Two-year warranty
              </strong>
              <span className="block text-[11px] md:text-[12px] text-[#767676]">
                Made for daily use
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. Global Black Luxury Footer */}
      <footer className="w-full bg-[#000000] text-white">
        {/* Main 4-Column Buudy Grid */}
        <div className="max-w-6xl mx-auto py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 text-[13px]">
          {/* Column 1: Brand Mark & Address */}
          <div className="space-y-4">
            <Link href="/" className="inline-block text-xl font-bold tracking-tighter text-white">
              BUUDY.
            </Link>
            <p className="text-[13px] text-[#a1a1aa] leading-relaxed max-w-sm">
              Handcrafted European barefoot footwear. Combining anatomical zero-drop biomechanics with Italian Gruppo Mastrotto nappa leather and Mediterranean suede.
            </p>
            <p className="text-[12px] text-[#71717a] leading-relaxed">
              13 Harefield Rd, Rickmansworth, England, WD3 1LY, UK
            </p>
          </div>

          {/* Column 2: Collections / Shop */}
          <div className="space-y-4">
            <h5 className="font-medium text-white tracking-wider uppercase text-[12px]">Collections</h5>
            <ul className="space-y-2.5 text-[#a1a1aa]">
              <li>
                <Link href="/products/lt-03-suede-sand" className="hover:text-white transition-colors link-etq">
                  LT 03 Suede Sand
                </Link>
              </li>
              <li>
                <Link href="/collections/sneakers" className="hover:text-white transition-colors link-etq">
                  LT 01 Court Lite
                </Link>
              </li>
              <li>
                <Link href="/collections/sneakers" className="hover:text-white transition-colors link-etq">
                  DS 03 Deck
                </Link>
              </li>
              <li>
                <Link href="/collections/sneakers" className="hover:text-white transition-colors link-etq">
                  All Barefoot Footwear
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-white transition-colors link-etq">
                  Size & Fit Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care & Policies */}
          <div className="space-y-4">
            <h5 className="font-medium text-white tracking-wider uppercase text-[12px]">Customer Care</h5>
            <ul className="space-y-2.5 text-[#a1a1aa]">
              <li>
                <Link href="/pages/contact-us" className="hover:text-white transition-colors link-etq">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/pages/faqs" className="hover:text-white transition-colors link-etq">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/order-tracking" className="hover:text-white transition-colors link-etq">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/policies/shipping-policy" className="hover:text-white transition-colors link-etq">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/return-policy" className="hover:text-white transition-colors link-etq">
                  Return & Exchange
                </Link>
              </li>
              <li>
                <Link href="/policies/refund-policy" className="hover:text-white transition-colors link-etq">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/privacy-policy" className="hover:text-white transition-colors link-etq">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/terms-of-service" className="hover:text-white transition-colors link-etq">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/policies/cookies-policy" className="hover:text-white transition-colors link-etq">
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch & Social Buttons */}
          <div className="space-y-4">
            <h5 className="font-medium text-white tracking-wider uppercase text-[12px]">Get In Touch</h5>
            <div className="space-y-1 text-[#a1a1aa] text-[13px]">
              <p className="text-[12px] text-[#71717a]">Customer Support Hours:</p>
              <p className="text-white font-medium">Mon – Fri &bull; 9am – 5pm GMT</p>
            </div>
            <div className="pt-1">
              <a
                href="mailto:support@buudy.co.uk"
                className="text-white underline underline-offset-4 hover:text-[#a1a1aa] transition-colors"
              >
                support@buudy.co.uk
              </a>
            </div>

            {/* Social Channels Pill Icons */}
            <div className="pt-3">
              <p className="text-[11px] text-[#71717a] uppercase tracking-wider mb-2">Connect With Us</p>
              <div className="flex items-center gap-2.5">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61565686185222"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/buudy_com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@buudy-com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Legal & Payment Rail Strip */}
        <div className="border-t border-[#1a1a1a] py-8 px-6 md:px-12 text-[12px] text-[#71717a]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span>© 2026 BUUDY. All rights reserved.</span>
              <span className="ml-3 hidden md:inline text-[#52525b]">
                Handcrafted European Barefoot Footwear.
              </span>
            </div>

            {/* Payment Badges */}
            <div className="flex flex-wrap items-center gap-2 text-[#e4e4e7]">
              <span className="px-2 py-0.5 border border-white/15 bg-white/5 rounded text-[10px] font-medium tracking-wide">
                VISA
              </span>
              <span className="px-2 py-0.5 border border-white/15 bg-white/5 rounded text-[10px] font-medium tracking-wide">
                MASTERCARD
              </span>
              <span className="px-2 py-0.5 border border-white/15 bg-white/5 rounded text-[10px] font-medium tracking-wide">
                AMEX
              </span>
              <span className="px-2 py-0.5 border border-white/15 bg-white/5 rounded text-[10px] font-medium tracking-wide">
                APPLE PAY
              </span>
              <span className="px-2 py-0.5 border border-white/15 bg-white/5 rounded text-[10px] font-medium tracking-wide">
                KLARNA
              </span>
              <span className="px-2 py-0.5 border border-white/15 bg-white/5 rounded text-[10px] font-medium tracking-wide">
                PAYPAL
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
