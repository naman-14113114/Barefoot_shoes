"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FOOTER_COLUMNS } from "@/data/navigation";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-white border-t border-[#eaeaea] text-[#000000] mt-20">
      <div className="w-full bg-[#ececec] py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-2">
            <h4 className="text-[13px] font-medium text-[#000000]">Easy returns & exchanges</h4>
            <p className="text-[13px] text-[#767676] leading-relaxed">
              All Australian orders can easily be returned or exchanged free of charge for a different size, color, or model within 14 days via our returns portal.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-[13px] font-medium text-[#000000]">Free & fast AU delivery</h4>
            <p className="text-[13px] text-[#767676] leading-relaxed">
              Orders placed before 23:30 AEST are dispatched the same day via Australia Post Express. Enjoy free delivery on all orders above A$250.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-[13px]">
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title} className="space-y-3">
            <h5 className="font-medium text-[#000000]">{col.title}</h5>
            <ul className="space-y-2 text-[#767676]">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#000000] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="space-y-3 lg:col-span-1">
          <h5 className="font-medium text-[#000000]">Stay in touch</h5>
          <p className="text-[13px] text-[#767676]">
            Sign up for footwear drops and biomechanical insights.
          </p>
          {subscribed ? (
            <p className="text-[12px] text-[#0e855b] font-medium">✓ Thank you for subscribing.</p>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-white border border-[#eaeaea] px-3 py-2.5 text-[13px] text-[#000000] placeholder:text-[#929292] focus:outline-none focus:border-[#000000] rounded-none"
              />
              <button
                type="submit"
                className="w-full bg-[#000000] text-white border border-[#000000] py-2 text-[12px] hover:bg-white hover:text-[#000000] transition-colors rounded-none"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-[#eaeaea] py-8 px-6 md:px-12 text-[12px] text-[#767676]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span>© 2026 BUUDY. All rights reserved.</span>
            <span className="ml-3">Handcrafted European Barefoot Footwear.</span>
          </div>

          <div className="flex items-center gap-3 text-[#313131]">
            <span className="px-2 py-1 border border-[#eaeaea] bg-white text-[10px] font-medium">VISA</span>
            <span className="px-2 py-1 border border-[#eaeaea] bg-white text-[10px] font-medium">MASTERCARD</span>
            <span className="px-2 py-1 border border-[#eaeaea] bg-white text-[10px] font-medium">AMEX</span>
            <span className="px-2 py-1 border border-[#eaeaea] bg-white text-[10px] font-medium">APPLE PAY</span>
            <span className="px-2 py-1 border border-[#eaeaea] bg-white text-[10px] font-medium">AFTERPAY</span>
            <span className="px-2 py-1 border border-[#eaeaea] bg-white text-[10px] font-medium">PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
