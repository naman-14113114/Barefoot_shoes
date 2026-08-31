"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { HEADER_NAV_LINKS } from "@/data/navigation";

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenuDrawer({ isOpen, onClose }: MobileMenuDrawerProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>("Footwear");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-300">
      <div className="flex items-center justify-between pb-6 border-b border-[#eaeaea]">
        <Link href="/" onClick={onClose} className="font-medium text-[20px] tracking-[0.08em] text-[#000000]">
          BUUDY.
        </Link>
        <button onClick={onClose} className="p-2 text-[#000000] hover:opacity-75" aria-label="Close mobile menu">
          <X size={20} />
        </button>
      </div>

      <div className="py-6 space-y-4">
        {HEADER_NAV_LINKS.map((link) => (
          <div key={link.label} className="border-b border-[#eaeaea] pb-4">
            <div className="flex items-center justify-between">
              <Link
                href={link.href}
                onClick={onClose}
                className="text-[18px] font-normal text-[#000000] hover:opacity-75"
              >
                {link.label}
              </Link>
              <button
                type="button"
                onClick={() =>
                  setExpandedSection(expandedSection === link.label ? null : link.label)
                }
                className="p-1 text-[#767676]"
              >
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    expandedSection === link.label ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {expandedSection === link.label && (
              <div className="mt-3 pl-4 space-y-2.5 text-[14px] text-[#767676]">
                <Link href="/products/lt-03-suede-sand" onClick={onClose} className="block hover:text-[#000000]">
                  LT 03 Suede Sand (Flagship)
                </Link>
                <Link href="/collections/sneakers" onClick={onClose} className="block hover:text-[#000000]">
                  LT 03 Premium Nappa White
                </Link>
                <Link href="/collections/sneakers" onClick={onClose} className="block hover:text-[#000000]">
                  LT 01 Court Lite White
                </Link>
                <Link href="/collections/sneakers" onClick={onClose} className="block hover:text-[#000000]">
                  All Sneakers
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-[#eaeaea] space-y-3 text-[13px] text-[#767676]">
        <div className="flex items-center justify-between">
          <span>Country / Currency</span>
          <span className="font-medium text-[#000000]">United States ($ USD)</span>
        </div>
        <div>
          <Link href="/collections/sneakers" onClick={onClose} className="block hover:text-[#000000]">
            Customer Care & Returns
          </Link>
        </div>
        <div>
          <Link href="/collections/sneakers" onClick={onClose} className="block hover:text-[#000000]">
            My Account
          </Link>
        </div>
      </div>
    </div>
  );
}
