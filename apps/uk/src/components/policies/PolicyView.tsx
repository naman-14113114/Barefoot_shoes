"use client";

import React from "react";
import Link from "next/link";

interface PolicyViewProps {
  title: string;
  subtitle: string;
  lastUpdated?: string;
  htmlContent: string;
}

export function PolicyView({
  title,
  subtitle,
  lastUpdated = "January 2026",
  htmlContent,
}: PolicyViewProps) {
  return (
    <div className="w-full bg-white text-[#000000] pt-28 md:pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-[#767676] mb-8">
          <Link href="/" className="hover:text-black transition-colors link-etq">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#929292]">Policies</span>
          <span>/</span>
          <span className="text-black font-medium">{title}</span>
        </nav>

        {/* Header */}
        <div className="border-b border-[#eaeaea] pb-8 mb-10">
          <span className="inline-block text-[11px] uppercase tracking-wider text-[#767676] bg-[#f5f5f5] px-2.5 py-1 rounded-sm mb-3">
            BUUDY. Legal & Store Policies
          </span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-3">
            {title}
          </h1>
          <p className="text-[15px] text-[#767676] leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          <p className="text-[12px] text-[#929292] mt-4">
            Last Updated: {lastUpdated} &bull; Effective for all UK orders
          </p>
        </div>

        {/* Policy Content Body */}
        <div
          className="prose prose-neutral max-w-none text-[14px] leading-relaxed text-[#333333] space-y-4"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* Support Callout Box */}
        <div className="mt-16 border border-[#eaeaea] bg-[#fafafa] p-8 rounded-none">
          <h3 className="text-base font-semibold text-black mb-2">Have a question regarding this policy?</h3>
          <p className="text-[13px] text-[#767676] mb-4">
            Our London customer care desk is available Monday through Friday from 9:00 AM to 5:00 PM GMT to answer any queries.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pages/contact-us"
              className="inline-flex items-center justify-center bg-black text-white px-5 py-2.5 text-[12px] font-medium hover:bg-neutral-800 transition-colors"
            >
              Contact Customer Desk
            </Link>
            <Link
              href="/pages/faqs"
              className="inline-flex items-center justify-center border border-[#eaeaea] bg-white text-black px-5 py-2.5 text-[12px] font-medium hover:bg-[#f5f5f5] transition-colors"
            >
              Browse FAQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
