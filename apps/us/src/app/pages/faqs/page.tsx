import type { Metadata } from "next";
import { FaqView } from "@/components/faq/FaqView";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | BUUDY. Barefoot Footwear",
  description: "Find answers regarding barefoot shoe sizing, zero-drop benefits, USPS / FedEx shipping, and 14-day free exchanges.",
  alternates: {
    canonical: "/pages/faqs",
  },
};

export default function FaqsPage() {
  return <FaqView />;
}
