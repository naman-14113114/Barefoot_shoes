import type { Metadata } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/components/cart/CartProvider";
import { CartDrawer } from "@/components/cart/CartDrawer";

import { market } from "@/data/market";

export const metadata: Metadata = {
  metadataBase: new URL(market.siteUrl),
  title: {
    default: "BUUDY. — Luxury Minimalist Barefoot Footwear | UK",
    template: "%s | BUUDY. UK",
  },
  description:
    "Handcrafted barefoot footwear. Combining anatomical zero-drop biomechanics with Italian nappa leather, Mediterranean suede, and ultra-flexible soles.",
  applicationName: "BUUDY.",
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    siteName: "BUUDY.",
    type: "website",
    url: market.siteUrl,
    locale: "en_GB",
    title: "BUUDY. — Luxury Minimalist Barefoot Footwear | UK",
    description:
      "Handcrafted barefoot footwear. Combining anatomical zero-drop biomechanics with Italian nappa leather, Mediterranean suede, and ultra-flexible soles.",
    images: [
      {
        url: "/media/products/drifters-white/buudy-barefoot-shoes-drifters-white-model-studio-standing-hero.jpg",
        width: 1200,
        height: 1500,
        alt: "BUUDY. Luxury Minimalist Barefoot Footwear UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUUDY. — Luxury Minimalist Barefoot Footwear | UK",
    description:
      "Handcrafted barefoot footwear with anatomical zero-drop biomechanics and ultra-flexible soles.",
    images: ["/media/products/drifters-white/buudy-barefoot-shoes-drifters-white-model-studio-standing-hero.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen flex flex-col bg-white text-[#000000] antialiased">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <CartDrawer />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
