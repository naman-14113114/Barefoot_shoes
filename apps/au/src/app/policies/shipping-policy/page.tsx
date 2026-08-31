import type { Metadata } from "next";
import { PolicyView } from "@/components/policies/PolicyView";
import { shippingPolicyHtml } from "@/data/shippingPolicy";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | BUUDY. AU",
  description: "Australia Post Express delivery timelines, dispatch windows, and free shipping over A$250.",
  alternates: {
    canonical: "/policies/shipping-policy",
  },
};

export default function ShippingPolicyPage() {
  return (
    <PolicyView
      title="Shipping & Delivery Policy"
      subtitle="Dispatch timeframes, Australia Post tracked delivery methods, and rates across Australia."
      lastUpdated="January 2026"
      htmlContent={shippingPolicyHtml}
    />
  );
}
