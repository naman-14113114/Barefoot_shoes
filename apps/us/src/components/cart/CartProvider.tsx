"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { market } from "@/data/market";

export interface CartItem {
  id: string;
  productId: string;
  variantId: string;
  title: string;
  subtitle: string;
  colorName: string;
  sizeEu: number;
  sizeUk: number | string;
  sizeUs: number | string;
  price: number;
  compareAtPrice: number;
  image: string;
  quantity: number;
}

export interface CartTotals {
  itemCount: number;
  subtotal: number;
  compareAtTotal: number;
  savings: number;
  isFreeShipping: boolean;
  freeShippingRemaining: number;
  freeShippingProgress: number;
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  isHydrated: boolean;
  totals: CartTotals;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  setQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "buudy_barefoot_cart_us_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useLayoutEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch {}
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items, isHydrated]);

  const totals = useMemo<CartTotals>(() => {
    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const compareAtTotal = items.reduce(
      (acc, item) => acc + (item.compareAtPrice || item.price) * item.quantity,
      0
    );
    const savings = Math.max(0, compareAtTotal - subtotal);
    const freeThreshold = market.shipping.freeThreshold;
    const isFreeShipping = subtotal >= freeThreshold;
    const freeShippingRemaining = Math.max(0, freeThreshold - subtotal);
    const freeShippingProgress = Math.min(100, Math.round((subtotal / freeThreshold) * 100));

    return {
      itemCount,
      subtotal,
      compareAtTotal,
      savings,
      isFreeShipping,
      freeShippingRemaining,
      freeShippingProgress,
    };
  }, [items]);

  const addItem = (item: Omit<CartItem, "quantity"> & { quantity?: number }) => {
    const qty = item.quantity || 1;
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [...prev, { ...item, quantity: qty }];
    });
    setIsOpen(true);
  };

  const setQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
    window.localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        isHydrated,
        totals,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        toggleCart: () => setIsOpen((prev) => !prev),
        addItem,
        setQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
