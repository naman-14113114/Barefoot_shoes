"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X } from "lucide-react";
import { BAREFOOT_SIZE_MATRIX } from "@barefoot/shared";

interface SizeSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSize: number | null;
  onSelectSize: (size: number) => void;
}

export function SizeSelectorModal({
  isOpen,
  onClose,
  selectedSize,
  onSelectSize,
}: SizeSelectorModalProps) {
  const [mounted, setMounted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Choose size"
      aria-hidden={!isOpen}
      inert={isOpen ? undefined : true}
      className={`fixed inset-0 z-[70] transition-opacity duration-300 ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Close size selector"
        onClick={onClose}
        className="absolute inset-0 bg-black/50"
      />

      <aside
        className={`absolute inset-y-0 right-0 flex w-full max-w-[480px] flex-col bg-white transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex h-[72px] shrink-0 items-center justify-center border-b border-[#e5e5e5] px-6">
          <h2 className="text-[14px] font-semibold">Choose size</h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="absolute right-4 flex h-11 w-11 items-center justify-center"
            aria-label="Close size selector"
          >
            <X size={22} strokeWidth={1.4} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          {BAREFOOT_SIZE_MATRIX.map((size) => (
            <button
              key={size.eu}
              type="button"
              disabled={!size.inStock}
              onClick={() => {
                onSelectSize(size.eu);
                onClose();
              }}
              className={`mb-1 flex min-h-[48px] w-full items-center px-3 text-left text-[13px] transition-colors hover:bg-[#f5f5f5] disabled:cursor-not-allowed disabled:opacity-35 ${
                selectedSize === size.eu ? "border border-[#e1e1e1] bg-[#fafafa]" : "border border-transparent"
              }`}
            >
              EU {size.eu} | US {size.usMen} | UK {size.uk}
              {size.lowStockCount && <span className="ml-auto text-[11px] text-[#777777]">Low stock</span>}
            </button>
          ))}
        </div>

        <div className="shrink-0 border-t border-[#e5e5e5] p-7">
          <p className="mb-4 text-[13px]">True to size. Between sizes, take the bigger one.</p>
          <Link
            href="/size-guide"
            onClick={onClose}
            className="flex h-[50px] w-full items-center justify-center border border-[#e5e5e5] text-[13px] font-semibold hover:border-[#111111]"
          >
            View size guide
          </Link>
        </div>
      </aside>
    </div>,
    document.body,
  );
}
