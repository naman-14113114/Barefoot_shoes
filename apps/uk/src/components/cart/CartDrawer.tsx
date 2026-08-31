"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Minus, Plus, ArrowRight } from "lucide-react";
import { useCart } from "./CartProvider";
import { CheckoutForm } from "./CheckoutForm";

export function CartDrawer() {
  const { isOpen, closeCart, items, totals, setQuantity, removeItem, isHydrated } = useCart();
  const hasItems = items.length > 0;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isHydrated) return null;

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/45 backdrop-blur-[2px] transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer Container */}
      <aside
        aria-label="Shopping Bag Drawer"
        className={`absolute right-0 top-0 flex h-full w-full max-w-[460px] flex-col border-l border-[#eaeaea] bg-white transition-transform duration-400 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#eaeaea] px-6 py-4">
          <div className="flex items-baseline gap-2">
            <h2 className="text-[14px] font-medium text-[#000000]">Shopping Bag</h2>
            <span className="text-[12px] text-[#767676]">
              ({totals.itemCount} {totals.itemCount === 1 ? "item" : "items"})
            </span>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close bag"
            className="text-[#767676] transition-colors hover:text-[#000000]"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        {hasItems && (
          <div className="border-b border-[#eaeaea] bg-[#fafafa] px-6 py-3">
            <div className="flex items-center justify-between text-[11px] text-[#000000]">
              <span>
                {totals.isFreeShipping ? (
                  <span className="font-medium text-[#0e855b]">✓ Free Tracked UK Delivery Unlocked</span>
                ) : (
                  <>Add £{totals.freeShippingRemaining} more for Free UK Delivery</>
                )}
              </span>
              <span className="text-[#767676]">{totals.freeShippingProgress}%</span>
            </div>
            <div className="mt-2 h-[2px] w-full overflow-hidden bg-[#eaeaea]">
              <div
                className="h-full bg-[#000000] transition-all duration-500 ease-out"
                style={{ width: `${totals.freeShippingProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Line Items Scrollable List */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {hasItems ? (
            <div className="divide-y divide-[#eaeaea]">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                  {/* 4:5 Aspect Ratio Thumbnail */}
                  <div className="relative h-24 w-20 flex-none overflow-hidden bg-[#f5f5f5] border border-[#eaeaea]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="80px"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/products/${item.productId}`}
                          onClick={closeCart}
                          className="text-[13px] font-medium text-[#000000] hover:underline"
                        >
                          {item.title}
                        </Link>
                        <button
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.title}`}
                          className="text-[#929292] hover:text-[#000000]"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <p className="text-[12px] text-[#767676]">{item.subtitle} · {item.colorName}</p>
                      <p className="text-[12px] text-[#767676]">
                        EU {item.sizeEu} / UK {item.sizeUk} / US {item.sizeUs}
                      </p>
                    </div>

                    {/* Stepper & Price */}
                    <div className="mt-2 flex items-center justify-between">
                      <div className="inline-flex h-7 items-center border border-[#eaeaea] bg-white">
                        <button
                          type="button"
                          onClick={() => setQuantity(item.id, item.quantity - 1)}
                          className="flex h-full w-7 items-center justify-center text-[#000000] hover:bg-[#f5f5f5]"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={10} />
                        </button>
                        <span className="w-7 text-center text-[12px] font-normal tabular-nums text-[#000000]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(item.id, item.quantity + 1)}
                          className="flex h-full w-7 items-center justify-center text-[#000000] hover:bg-[#f5f5f5]"
                          aria-label="Increase quantity"
                        >
                          <Plus size={10} />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-[13px] font-medium text-[#000000]">
                          £{item.price * item.quantity}
                        </span>
                        {item.compareAtPrice > item.price && (
                          <span className="ml-2 text-[12px] text-[#929292] line-through">
                            £{item.compareAtPrice * item.quantity}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center text-center py-16">
              <p className="text-[14px] font-medium text-[#000000]">Your shopping bag is empty.</p>
              <p className="mt-1 text-[13px] text-[#767676]">
                Explore our footwear essentials crafted with barefoot zero-drop biomechanics.
              </p>
              <Link
                href="/collections/sneakers"
                onClick={closeCart}
                className="mt-6 inline-flex items-center justify-center border border-[#000000] bg-[#000000] px-6 py-3 text-[13px] text-white hover:bg-white hover:text-[#000000] transition-colors"
              >
                Explore Sneakers
              </Link>
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {hasItems && (
          <div className="border-t border-[#eaeaea] bg-[#fafafa] p-6 space-y-4">
            <div className="space-y-2 text-[13px]">
              <div className="flex justify-between text-[#767676]">
                <span>Subtotal</span>
                <span className="font-medium text-[#000000]">£{totals.subtotal}</span>
              </div>
              <div className="flex justify-between text-[#767676]">
                <span>Tracked UK Shipping</span>
                <span className="font-medium text-[#000000]">
                  {totals.isFreeShipping ? "Free" : "£5"}
                </span>
              </div>
              {totals.savings > 0 && (
                <div className="flex justify-between text-[#0e855b]">
                  <span>Total Savings (50% OFF)</span>
                  <span>-£{totals.savings}</span>
                </div>
              )}
              <div className="pt-2 border-t border-[#eaeaea] flex justify-between text-[14px] font-medium text-[#000000]">
                <span>Estimated Total</span>
                <span>£{totals.subtotal}</span>
              </div>
            </div>

            <CheckoutForm isFullWidth={true} />

            <Link
              href="/cart"
              onClick={closeCart}
              className="flex w-full items-center justify-center gap-1.5 border border-[#eaeaea] bg-white py-2.5 text-[12px] font-normal text-[#000000] hover:border-[#000000] transition-colors"
            >
              <span>View Full Bag</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
