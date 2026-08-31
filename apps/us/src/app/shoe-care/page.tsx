import type { Metadata } from "next";
import { ShoeCareView } from "@/components/guide/ShoeCareView";

export const metadata: Metadata = {
  title: "Shoe Care Instructions | BUUDY. Barefoot Footwear",
  description: "Learn how to clean, condition, and protect Italian full-grain nappa leather and Mediterranean suede barefoot shoes.",
  alternates: {
    canonical: "/shoe-care",
  },
};

export default function ShoeCarePage() {
  return <ShoeCareView />;
}
