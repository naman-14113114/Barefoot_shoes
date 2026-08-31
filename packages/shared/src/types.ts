export type StoreCurrency = "GBP" | "USD" | "AUD" | "EUR";
export type SupportedCountry = "GB" | "US" | "AU";
export type SupportedLocale = "en-GB" | "en-US" | "en-AU";

export interface SizingConversion {
  footLengthMm: number;
  footLengthCm: number;
  uk: number | string;
  usMen: number | string;
  usWomen: number | string;
  eu: number;
  au: number | string;
  inStock: boolean;
  lowStockCount?: number;
}

export interface BarefootProduct {
  id: string;
  handle: string;
  title: string;
  subtitle: string;
  category: string;
  price: number; // Integer e.g. 49
  compareAtPrice: number; // Integer e.g. 99
  currencySymbol: string; // e.g. "£", "$", "A$"
  primaryImage: string;
  secondaryImage: string;
  galleryImages: string[];
  badge?: string;
  badgeType?: "dark" | "blue" | "green";
  colorName: string;
  material: string;
  rating: number;
  reviewCount: number;
  description: string;
  provenance: string;
  features: string[];
  variants: {
    sizeEu: number;
    sizeUk: number | string;
    sizeUs: number | string;
    variantId: string;
    inStock: boolean;
    lowStock?: boolean;
  }[];
}
