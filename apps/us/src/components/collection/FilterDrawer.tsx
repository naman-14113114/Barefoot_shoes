"use client";

import React from "react";
import { BAREFOOT_SIZE_MATRIX } from "@barefoot/shared";

interface FilterDrawerProps {
  isOpen: boolean;
  selectedSizes: number[];
  onToggleSize: (size: number) => void;
  selectedColor: string | null;
  onSelectColor: (color: string | null) => void;
  onReset: () => void;
}

export function FilterDrawer({
  isOpen,
  selectedSizes,
  onToggleSize,
  selectedColor,
  onSelectColor,
  onReset,
}: FilterDrawerProps) {
  if (!isOpen) return null;

  const colors = [
    { name: "White", hex: "#eff0f1" },
    { name: "Sand", hex: "#bfb286" },
    { name: "Blueberry", hex: "#13187c" },
    { name: "Chocolate", hex: "#756b58" },
  ];

  return (
    <aside className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-[#eaeaea] p-6 space-y-6">
      <div className="space-y-3">
        <h4 className="text-[13px] font-medium text-[#000000]">Size (US Men)</h4>
        <div className="grid grid-cols-4 gap-1.5">
          {BAREFOOT_SIZE_MATRIX.map((s) => {
            const isSelected = selectedSizes.includes(s.eu);
            return (
              <button
                key={s.eu}
                type="button"
                onClick={() => onToggleSize(s.eu)}
                className={`py-2 text-[12px] border transition-colors ${
                  isSelected
                    ? "border-[#000000] bg-[#000000] text-white"
                    : "border-[#eaeaea] bg-white text-[#000000] hover:border-[#929292]"
                }`}
              >
                US {s.usMen}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-[13px] font-medium text-[#000000]">Colorway</h4>
        <div className="flex items-center gap-3">
          {colors.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => onSelectColor(selectedColor === c.name ? null : c.name)}
              className={`w-6 h-6 rounded-full border transition-all ${
                selectedColor === c.name ? "ring-2 ring-black ring-offset-2" : "border-[#eaeaea]"
              }`}
              style={{ backgroundColor: c.hex }}
              title={c.name}
            />
          ))}
        </div>
      </div>

      {(selectedSizes.length > 0 || selectedColor) && (
        <button
          type="button"
          onClick={onReset}
          className="text-[12px] text-[#767676] underline hover:text-[#000000]"
        >
          Reset all filters
        </button>
      )}
    </aside>
  );
}
