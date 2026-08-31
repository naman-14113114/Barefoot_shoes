import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { SizingConversion, StoreCurrency } from "./types";

export * from "./types";

/**
 * High-performance className merge utility combining clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Standard Barefoot Shoe Sizing Matrix (EU 39 to 47 / UK 5 to 13 / US 6 to 14)
 */
export const BAREFOOT_SIZE_MATRIX: SizingConversion[] = [
  { footLengthMm: 247, footLengthCm: 24.7, uk: 5.0, usMen: 6.0, usWomen: 7.5, eu: 39, au: 5.0, inStock: true },
  { footLengthMm: 253, footLengthCm: 25.3, uk: 6.0, usMen: 7.0, usWomen: 8.5, eu: 40, au: 6.0, inStock: true },
  { footLengthMm: 260, footLengthCm: 26.0, uk: 7.0, usMen: 8.0, usWomen: 9.5, eu: 41, au: 7.0, inStock: true },
  { footLengthMm: 267, footLengthCm: 26.7, uk: 8.0, usMen: 9.0, usWomen: 10.5, eu: 42, au: 8.0, inStock: true },
  { footLengthMm: 273, footLengthCm: 27.3, uk: 9.0, usMen: 10.0, usWomen: 11.5, eu: 43, au: 9.0, inStock: true, lowStockCount: 2 },
  { footLengthMm: 280, footLengthCm: 28.0, uk: 10.0, usMen: 11.0, usWomen: 12.5, eu: 44, au: 10.0, inStock: true },
  { footLengthMm: 287, footLengthCm: 28.7, uk: 11.0, usMen: 12.0, usWomen: 13.5, eu: 45, au: 11.0, inStock: true, lowStockCount: 1 },
  { footLengthMm: 293, footLengthCm: 29.3, uk: 12.0, usMen: 13.0, usWomen: 14.5, eu: 46, au: 12.0, inStock: true },
  { footLengthMm: 300, footLengthCm: 30.0, uk: 13.0, usMen: 14.0, usWomen: 15.5, eu: 47, au: 13.0, inStock: true },
];

/**
 * Format money with STRICT integer rendering (Zero decimals anywhere)
 * e.g., £49, £99, $59, $119, A$89, A$179
 */
export function formatMoney(amount: number, currencySymbol: string = "£"): string {
  const rounded = Math.round(amount);
  return `${currencySymbol}${rounded}`;
}

/**
 * Calculate integer percentage discount
 */
export function percentOff(price: number, compareAtPrice?: number | null): number {
  if (!compareAtPrice || compareAtPrice <= price) return 0;
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}
