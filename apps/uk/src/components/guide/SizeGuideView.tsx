"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BAREFOOT_SIZE_MATRIX } from "@barefoot/shared";

export function SizeGuideView() {
  const [unit, setUnit] = useState<"cm" | "in">("cm");

  return (
    <div className="w-full bg-white text-[#000000] pt-28 md:pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-[#767676] mb-8">
          <Link href="/" className="hover:text-black transition-colors link-etq">
            Home
          </Link>
          <span>/</span>
          <span className="text-black font-medium">Size & Fit Guide</span>
        </nav>

        {/* Header */}
        <div className="border-b border-[#eaeaea] pb-8 mb-10">
          <span className="inline-block text-[11px] uppercase tracking-wider text-[#767676] bg-[#f5f5f5] px-2.5 py-1 rounded-sm mb-3">
            Anatomical Fit Matrix
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-3">
            Footwear Size & Measurement Guide
          </h1>
          <p className="text-[15px] text-[#767676] leading-relaxed max-w-2xl">
            BUUDY. shoes feature a generous anatomical toe box and true European sizing. Use the conversion table and measurement steps below to identify your optimal fit.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-xs text-[#767676] font-medium">Measurement Unit:</span>
            <button
              onClick={() => setUnit("cm")}
              className={`px-3 py-1 text-xs font-medium border ${
                unit === "cm" ? "bg-black text-white border-black" : "bg-white text-black border-[#eaeaea]"
              }`}
            >
              Centimeters (cm)
            </button>
            <button
              onClick={() => setUnit("in")}
              className={`px-3 py-1 text-xs font-medium border ${
                unit === "in" ? "bg-black text-white border-black" : "bg-white text-black border-[#eaeaea]"
              }`}
            >
              Inches (in)
            </button>
          </div>
        </div>

        {/* Size Matrix Table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left text-sm border-collapse border border-[#eaeaea]">
            <thead>
              <tr className="bg-[#f5f5f5] text-black">
                <th className="p-3.5 border border-[#eaeaea] font-semibold">EU Size</th>
                <th className="p-3.5 border border-[#eaeaea] font-semibold">UK Size</th>
                <th className="p-3.5 border border-[#eaeaea] font-semibold">US Men</th>
                <th className="p-3.5 border border-[#eaeaea] font-semibold">AU Size</th>
                <th className="p-3.5 border border-[#eaeaea] font-semibold">
                  Foot Length ({unit})
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eaeaea] text-[#555555]">
              {BAREFOOT_SIZE_MATRIX.map((row) => (
                <tr key={row.eu} className="hover:bg-[#fafafa]">
                  <td className="p-3.5 border border-[#eaeaea] font-medium text-black">{row.eu}</td>
                  <td className="p-3.5 border border-[#eaeaea]">{row.uk}</td>
                  <td className="p-3.5 border border-[#eaeaea]">{row.usMen}</td>
                  <td className="p-3.5 border border-[#eaeaea]">{row.au}</td>
                  <td className="p-3.5 border border-[#eaeaea] font-medium text-black">
                    {unit === "cm" ? `${row.footLengthCm} cm` : `${(row.footLengthCm / 2.54).toFixed(2)} in`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* How to Measure Section */}
        <div className="border border-[#eaeaea] bg-[#fafafa] p-8 space-y-6">
          <h2 className="text-xl font-semibold text-black">How to Measure Your Foot Length</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[13px] text-[#767676]">
            <div className="space-y-2">
              <span className="text-xl font-bold text-black">1. Stand on Paper</span>
              <p>Place an A4 paper sheet on a flat, hard floor against a wall. Stand upright with your heel touching the wall.</p>
            </div>
            <div className="space-y-2">
              <span className="text-xl font-bold text-black">2. Mark Longest Toe</span>
              <p>Mark the furthest tip of your longest toe on the paper with a pen held perpendicular to the floor.</p>
            </div>
            <div className="space-y-2">
              <span className="text-xl font-bold text-black">3. Compare Matrix</span>
              <p>Measure the distance in cm from the wall edge to your mark. Match with our chart above for your perfect size.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
