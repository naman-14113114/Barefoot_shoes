import type { Metadata } from "next";
import { AboutView } from "@/components/about/AboutView";

export const metadata: Metadata = {
  title: "About BUUDY. | Handcrafted European Barefoot Luxury",
  description: "Discover our mission uniting anatomical zero-drop biomechanics with Italian Gruppo Mastrotto leathers and Portuguese artisanal shoemaking.",
  alternates: {
    canonical: "/pages/about-us",
  },
};

export default function AboutUsPage() {
  return <AboutView />;
}
