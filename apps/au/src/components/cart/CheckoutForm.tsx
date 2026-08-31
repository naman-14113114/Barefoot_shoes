"use client";

import React, { useState, useEffect } from "react";
import { Lock } from "lucide-react";
import { useCart } from "./CartProvider";
import { market } from "@/data/market";

export function CheckoutForm({ isFullWidth = true }: { isFullWidth?: boolean }) {
  const { items, totals } = useCart();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    function handlePageShow(event: PageTransitionEvent) {
      if (event.persisted) {
        setIsRedirecting(false);
        setError("");
      }
    }
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  const handleCheckout = async () => {
    if (items.length === 0 || isRedirecting) return;
    setIsRedirecting(true);
    setError("");

    try {
      const searchParams = new URLSearchParams(window.location.search);
      const attribution: Record<string, string> = {};
      ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "msclkid", "gclid"].forEach(
        (key) => {
          const val = searchParams.get(key);
          if (val) attribution[key] = val;
        }
      );

      const primary = items[0];
      const bridgeUrl = new URL(market.checkoutBridgeUrl);
      bridgeUrl.searchParams.set("product_id", primary.productId);
      bridgeUrl.searchParams.set("variant_id", primary.variantId);
      bridgeUrl.searchParams.set("quantity", String(primary.quantity));
      bridgeUrl.searchParams.set("source", market.checkoutSource);
      bridgeUrl.searchParams.set("country", "AU");

      Object.entries(attribution).forEach(([k, v]) => {
        bridgeUrl.searchParams.set(k, v);
      });

      window.location.assign(bridgeUrl.toString());
    } catch {
      setIsRedirecting(false);
      setError("Unable to initialize secure checkout. Please try again.");
    }
  };

  return (
    <div className="w-full">
      <button
        type="button"
        disabled={items.length === 0 || isRedirecting}
        onClick={handleCheckout}
        className={`flex items-center justify-center gap-2 bg-[#000000] text-white border border-[#000000] py-3.5 px-6 text-[13px] font-normal transition-all duration-300 hover:bg-white hover:text-[#000000] disabled:cursor-not-allowed disabled:opacity-40 rounded-none ${
          isFullWidth ? "w-full" : ""
        }`}
      >
        {isRedirecting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-3.5 w-3.5 text-current" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Redirecting to Checkout...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Lock size={13} strokeWidth={1.5} />
            Checkout securely · A${totals.subtotal}
          </span>
        )}
      </button>
      {error && <p className="mt-2 text-center text-[11px] text-red-600">{error}</p>}
    </div>
  );
}
