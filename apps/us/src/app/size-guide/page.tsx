import type { Metadata } from "next";
import { SizeGuideView } from "@/components/guide/SizeGuideView";

export const metadata: Metadata = {
  title: "Size & Measurement Guide | BUUDY. Barefoot Footwear",
  description: "Find your ideal barefoot footwear fit with our US, EU, and UK conversion table and foot measurement guide.",
  alternates: {
    canonical: "/size-guide",
  },
};

export default function SizeGuidePage() {
  return <SizeGuideView />;
}
