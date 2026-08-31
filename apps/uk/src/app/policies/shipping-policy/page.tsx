import type { Metadata } from "next";
import { PolicyView } from "@/components/policies/PolicyView";
import { shippingPolicyHtml } from "@/data/shippingPolicy";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | BUUDY. UK",
  description: "Royal Mail Tracked 24/48 delivery timelines, dispatch windows, and free shipping over £150.",
  alternates: {
    canonical: "/policies/shipping-policy",
  },
};

export default function ShippingPolicyPage() {
  return (
    <PolicyView
      title="Shipping & Delivery Policy"
      subtitle="Dispatch timeframes, Royal Mail tracked delivery methods, and rates across the United Kingdom."
      lastUpdated="January 2026"
      htmlContent={shippingPolicyHtml}
    />
  );
}
