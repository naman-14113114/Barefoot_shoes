import type { Metadata } from "next";
import { PolicyView } from "@/components/policies/PolicyView";
import { refundPolicyHtml } from "@/data/policies";

export const metadata: Metadata = {
  title: "Refund Policy | BUUDY. Barefoot Footwear",
  description: "14-day refund window, size exchange instructions, and defect replacements for US orders.",
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
