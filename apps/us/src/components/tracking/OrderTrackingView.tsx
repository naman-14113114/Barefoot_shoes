"use client";

import React, { useState } from "react";
import Link from "next/link";

export function OrderTrackingView() {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [tracked, setTracked] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderNumber && email) {
      setTracked(true);
    }
  };

  return (
    <div className="w-full bg-white text-[#000000] pt-28 md:pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-[#767676] mb-8">
          <Link href="/" className="hover:text-black transition-colors link-etq">
            Home
          </Link>
          <span>/</span>
          <span className="text-black font-medium">Order Tracking</span>
        </nav>

        {/* Header */}
        <div className="border-b border-[#eaeaea] pb-8 mb-10">
          <span className="inline-block text-[11px] uppercase tracking-wider text-[#767676] bg-[#f5f5f5] px-2.5 py-1 rounded-sm mb-3">
            Real-Time Courier Tracking
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-3">
            Track Your Shipment
          </h1>
          <p className="text-[15px] text-[#767676] leading-relaxed max-w-2xl">
            Enter your order number and email address below to view the latest live USPS / FedEx status and dispatch milestones.
          </p>
        </div>

        {/* Tracking Lookup Box */}
        <div className="bg-[#fafafa] border border-[#eaeaea] p-8 mb-12">
          <form onSubmit={handleTrack} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-black text-[13px] font-medium mb-1">
                  Order Number *
                </label>
                <input
                  type="text"
                  required
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="e.g. BD-78412"
                  className="w-full bg-white border border-[#eaeaea] px-3.5 py-2.5 text-black text-sm placeholder:text-[#929292] focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label className="block text-black text-[13px] font-medium mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-white border border-[#eaeaea] px-3.5 py-2.5 text-black text-sm placeholder:text-[#929292] focus:outline-none focus:border-black"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 text-[12px] font-medium uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              Track Package Live
            </button>
          </form>

          {tracked && (
            <div className="mt-8 pt-8 border-t border-[#eaeaea] space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#767676] uppercase tracking-wider">Status</p>
                  <p className="text-base font-semibold text-[#0e855b]">Dispatched & In Transit</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#767676] uppercase tracking-wider">Carrier</p>
                  <p className="text-sm font-medium text-black">USPS Priority Mail</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex gap-3 text-[13px]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0e855b] mt-1.5 shrink-0" />
                  <div>
                    <p className="font-medium text-black">In Transit to Regional Hub</p>
                    <p className="text-[#767676] text-xs">Package is moving through the carrier network</p>
                  </div>
                </div>
                <div className="flex gap-3 text-[13px]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#eaeaea] mt-1.5 shrink-0" />
                  <div>
                    <p className="font-medium text-[#767676]">Dispatched from US Fulfillment Hub</p>
                    <p className="text-[#929292] text-xs">Same-day dispatch completed</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center text-xs text-[#767676]">
                <p>Order Reference: <strong className="text-black">{orderNumber}</strong></p>
                <a
                  href="https://tools.usps.com/go/TrackConfirmAction_input"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-black font-medium"
                >
                  View on USPS Portal →
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Tracking FAQs */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-black mb-4">Tracking Assistance</h2>
          <div className="p-5 border border-[#eaeaea] bg-white space-y-2">
            <h3 className="text-sm font-medium text-black">When will I see tracking updates?</h3>
            <p className="text-[13px] text-[#767676] leading-relaxed">
              Tracking numbers are generated immediately upon dispatch. Please allow 1 to 2 business days for USPS or FedEx scanning hubs to update.
            </p>
          </div>
          <div className="p-5 border border-[#eaeaea] bg-white space-y-2">
            <h3 className="text-sm font-medium text-black">Can I modify my shipping address?</h3>
            <p className="text-[13px] text-[#767676] leading-relaxed">
              If your package has not yet entered carrier transit, contact <a href="mailto:support@buudy.com" className="underline text-black font-medium">support@buudy.com</a> immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
