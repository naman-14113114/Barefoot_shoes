import type { Metadata } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/components/cart/CartProvider";
import { CartDrawer } from "@/components/cart/CartDrawer";

export const metadata: Metadata = {
  metadataBase: new URL("https://us.juujo.com"),
  title: {
    default: "JUUJO. — Luxury Minimalist Barefoot Footwear | US",
    template: "%s | JUUJO. US",
  },
  description:
    "Handcrafted European barefoot footwear. Combining zero-drop biomechanics with Italian nappa leather and Mediterranean suede.",
  applicationName: "JUUJO.",
  openGraph: {
    siteName: "JUUJO.",
    title: "JUUJO. — Luxury Minimalist Barefoot Footwear | US",
    description:
      "Handcrafted European barefoot footwear. Combining zero-drop biomechanics with Italian nappa leather and Mediterranean suede.",
    images: [
      {
        url: "/media/products/drifters-white/buudy-barefoot-shoes-drifters-white-model-studio-standing-hero.jpg",
        alt: "JUUJO. Luxury Minimalist Barefoot Footwear US",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-[#000000] font-sans antialiased">
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
