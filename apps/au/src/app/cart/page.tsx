"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, X, ArrowLeft } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { CheckoutForm } from "@/components/cart/CheckoutForm";

export default function CartPage() {
  const { items, totals, setQuantity, removeItem, isHydrated } = useCart();
  const hasItems = items.length > 0;

  if (!isHydrated) return null;

  return (
    <div className="w-full pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between pb-6 border-b border-[#eaeaea] mb-8">
          <h1 className="text-[18px] md:text-[20px] font-normal text-[#000000]">
            Shopping Bag ({totals.itemCount})
          </h1>
          <Link
            href="/collections/sneakers"
            className="flex items-center gap-1.5 text-[13px] text-[#767676] hover:text-[#000000] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {hasItems ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 divide-y divide-[#eaeaea] border-t border-b border-[#eaeaea]">
              {items.map((item) => (
                <div key={item.id} className="flex gap-6 py-6">
                  <div className="relative h-28 w-24 flex-none bg-[#eaeaea] border border-[#eaeaea] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="96px"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <Link
                          href={`/products/${item.productId}`}
                          className="text-[14px] font-medium text-[#000000] hover:underline"
                        >
                          {item.title}
                        </Link>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-[#929292] hover:text-[#000000]"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-[13px] text-[#767676]">{item.subtitle} · {item.colorName}</p>
                      <p className="text-[13px] text-[#767676]">
                        EU {item.sizeEu} / AU {item.sizeUk} / US {item.sizeUs}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="inline-flex h-8 items-center border border-[#eaeaea] bg-white">
                        <button
                          type="button"
                          onClick={() => setQuantity(item.id, item.quantity - 1)}
                          className="flex h-full w-8 items-center justify-center text-[#000000] hover:bg-[#f5f5f5]"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-[13px] tabular-nums text-[#000000]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(item.id, item.quantity + 1)}
                          className="flex h-full w-8 items-center justify-center text-[#000000] hover:bg-[#f5f5f5]"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-[14px] font-medium text-[#000000]">
                          A${item.price * item.quantity}
                        </span>
                        {item.compareAtPrice > item.price && (
                          <span className="ml-2 text-[13px] text-[#929292] line-through">
                            A${item.compareAtPrice * item.quantity}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5 border border-[#eaeaea] bg-[#fafafa] p-6 space-y-6 lg:sticky lg:top-24">
              <h2 className="text-[14px] font-medium text-[#000000]">Order Summary</h2>

              <div className="space-y-3 text-[13px]">
                <div className="flex justify-between text-[#767676]">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#000000]">A${totals.subtotal}</span>
                </div>
                <div className="flex justify-between text-[#767676]">
                  <span>Tracked AU Delivery</span>
                  <span className="font-medium text-[#000000]">
                    {totals.isFreeShipping ? "Free" : "A$12"}
                  </span>
                </div>
                {totals.savings > 0 && (
                  <div className="flex justify-between text-[#0e855b]">
                    <span>Total Privileges & Savings</span>
                    <span>-A${totals.savings}</span>
                  </div>
                )}
                <div className="pt-3 border-t border-[#eaeaea] flex justify-between text-[16px] font-medium text-[#000000]">
                  <span>Estimated Total</span>
                  <span>A${totals.subtotal}</span>
                </div>
                <p className="text-[11px] text-[#929292]">
                  Duties and taxes calculated at checkout.
                </p>
              </div>

              <CheckoutForm isFullWidth={true} />

              <div className="pt-4 border-t border-[#eaeaea] space-y-2 text-[12px] text-[#767676]">
                <p>✓ Tracked AU Express shipping with Australia Post (2–4 business days)</p>
                <p>✓ 14-day hassle-free home trial and exchanges</p>
                <p>✓ Encrypted secure checkout powered by PlusBase</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-20 text-center space-y-4">
            <p className="text-[16px] font-medium text-[#000000]">Your shopping bag is empty.</p>
            <p className="text-[13px] text-[#767676]">
              Explore our barefoot essentials crafted for natural biomechanics.
            </p>
            <Link
              href="/collections/sneakers"
              className="inline-flex items-center justify-center bg-[#000000] text-white px-8 py-3.5 text-[13px] hover:bg-white hover:text-[#000000] border border-[#000000] transition-colors"
            >
              Explore Collection
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
