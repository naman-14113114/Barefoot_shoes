import type { Metadata } from "next";
import { PolicyView } from "@/components/policies/PolicyView";
import { shippingPolicyHtml } from "@/data/shippingPolicy";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | BUUDY. US",
  description: "USPS Priority & FedEx delivery timelines, dispatch windows, and free shipping over $180.",
  alternates: {
    canonical: "/policies/shipping-policy",
  },
};

export default function ShippingPolicyPage() {
  return (
    <PolicyView
      title="Shipping & Delivery Policy"
      subtitle="Dispatch timeframes, USPS / FedEx tracked delivery methods, and rates across the United States."
      lastUpdated="January 2026"
      htmlContent={shippingPolicyHtml}
    />
  );
}
