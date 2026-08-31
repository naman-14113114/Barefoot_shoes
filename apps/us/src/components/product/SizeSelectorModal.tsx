"use client";

import React from "react";
import { Modal } from "@barefoot/ui";
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
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Select Your Size">
      <div className="space-y-4">
        <p className="text-[12px] text-[#767676]">
          All pairs fit true to size. If you are between sizes, we recommend taking the larger size.
        </p>

        <div className="divide-y divide-[#eaeaea] border border-[#eaeaea]">
          <div className="grid grid-cols-4 p-2.5 bg-[#f5f5f5] text-[11px] font-medium text-[#000000]">
            <span>US Men</span>
            <span>US Women</span>
            <span>EU</span>
            <span>Length (mm)</span>
          </div>

          {BAREFOOT_SIZE_MATRIX.map((s) => (
            <button
              key={s.eu}
              type="button"
              disabled={!s.inStock}
              onClick={() => {
                onSelectSize(s.eu);
                onClose();
              }}
              className={`grid grid-cols-4 w-full p-2.5 text-left text-[12px] hover:bg-[#fafafa] transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
                selectedSize === s.eu ? "bg-[#f5f5f5] font-medium text-[#000000]" : "text-[#767676]"
              }`}
            >
              <span className="font-medium text-[#000000]">US {s.usMen}</span>
              <span>US {s.usWomen}</span>
              <span>EU {s.eu}</span>
              <span>{s.footLengthMm} mm</span>
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
}
