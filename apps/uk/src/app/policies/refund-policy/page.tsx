import type { Metadata } from "next";
import { PolicyView } from "@/components/policies/PolicyView";
import { refundPolicyHtml } from "@/data/policies";

export const metadata: Metadata = {
  title: "Refund Policy | JUUJO. Barefoot Footwear",
  description: "14-day refund window, size exchange instructions, and defect replacements for JUUJO. footwear.",
  alternates: {
    canonical: "/policies/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <PolicyView
      title="Refund Policy"
      subtitle="Guidelines on order cancellations, 14-day returns, size exchanges, and refund settlements."
      lastUpdated="January 2026"
      htmlContent={refundPolicyHtml}
    />
  );
}
