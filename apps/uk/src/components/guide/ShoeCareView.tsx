"use client";

import React from "react";
import Link from "next/link";

export function ShoeCareView() {
  return (
    <div className="w-full bg-white text-[#000000] pt-28 md:pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-[#767676] mb-8">
          <Link href="/" className="hover:text-black transition-colors link-etq">
            Home
          </Link>
          <span>/</span>
          <span className="text-black font-medium">Shoe Care Instructions</span>
        </nav>

        {/* Header */}
        <div className="border-b border-[#eaeaea] pb-8 mb-10">
          <span className="inline-block text-[11px] uppercase tracking-wider text-[#767676] bg-[#f5f5f5] px-2.5 py-1 rounded-sm mb-3">
            Material Maintenance
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-3">
            Shoe Care & Preservation
          </h1>
          <p className="text-[15px] text-[#767676] leading-relaxed max-w-2xl">
            Proper maintenance preserves the suppleness of Gruppo Mastrotto full-grain calfskin and Mediterranean suede, ensuring your barefoot footwear ages beautifully.
          </p>
        </div>

        {/* Material Care Sections */}
        <div className="space-y-10">
          {/* Nappa Leather */}
          <div className="border border-[#eaeaea] p-8 space-y-4">
            <span className="text-[11px] uppercase tracking-wider text-black font-semibold bg-[#f5f5f5] px-2.5 py-1 inline-block">
              Full-Grain Italian Nappa Leather
            </span>
            <h2 className="text-xl font-semibold text-black">Smooth Leather Care Protocol</h2>
            <ul className="list-disc pl-5 space-y-2 text-[14px] text-[#555555] leading-relaxed">
              <li><strong>Regular Dusting:</strong> Wipe surface dirt away after wear using a soft, dry cotton cloth.</li>
              <li><strong>Gentle Cleaning:</strong> Use a slightly damp cloth with mild glycerin-based leather cleanser for surface stains. Avoid excessive saturation.</li>
              <li><strong>Conditioning:</strong> Apply a neutral beeswax or mink-oil leather cream once every 2 to 3 months to maintain elasticity and prevent cracking.</li>
            </ul>
          </div>

          {/* Suede */}
          <div className="border border-[#eaeaea] p-8 space-y-4">
            <span className="text-[11px] uppercase tracking-wider text-black font-semibold bg-[#f5f5f5] px-2.5 py-1 inline-block">
              Mediterranean Velvet Suede
            </span>
            <h2 className="text-xl font-semibold text-black">Suede Nap Restoration</h2>
            <ul className="list-disc pl-5 space-y-2 text-[14px] text-[#555555] leading-relaxed">
              <li><strong>Crepe Brushing:</strong> Use a specialized soft crepe suede brush in light, unidirectional strokes to lift the nap and dislodge dust.</li>
              <li><strong>Spot Erasing:</strong> Use a suede gum eraser for localized marks or water stains.</li>
              <li><strong>Weather Protection:</strong> Spray with a fluorocarbon-free hydrophobic suede protector before first outdoor wear in wet conditions.</li>
            </ul>
          </div>

          {/* Insole & Sole */}
          <div className="border border-[#eaeaea] p-8 space-y-4">
            <span className="text-[11px] uppercase tracking-wider text-black font-semibold bg-[#f5f5f5] px-2.5 py-1 inline-block">
              Cork & EVA Removable Insoles
            </span>
            <h2 className="text-xl font-semibold text-black">Insole & Outsole Hygiene</h2>
            <ul className="list-disc pl-5 space-y-2 text-[14px] text-[#555555] leading-relaxed">
              <li><strong>Air Drying:</strong> Remove insoles every few weeks to allow moisture to evaporate naturally in a ventilated area away from direct radiators.</li>
              <li><strong>Rubber Sole Maintenance:</strong> Clean the Margom-profile zero-drop sole edges using warm water and a soft-bristled brush.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
