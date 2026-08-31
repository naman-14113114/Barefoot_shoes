/**
 * ETQ Amsterdam Design Tokens for BUUDY.
 * Pure minimalist monochrome palette, Graphik typography, hairline borders.
 */
export const ETQ_TOKENS = {
  colors: {
    black: "#000000",
    white: "#ffffff",
    surface: "#f5f5f5",
    border: "#eaeaea",
    borderSubtle: "#e5e5e5",
    muted: "#767676",
    subtle: "#929292",
    accentBlue: "#0080ff",
  },
  fonts: {
    sans: "var(--font-graphik), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  easing: {
    expo: "cubic-bezier(0.19, 1, 0.22, 1)",
    standard: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  },
} as const;
