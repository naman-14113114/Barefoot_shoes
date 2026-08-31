import type { Metadata } from "next";
import { PolicyView } from "@/components/policies/PolicyView";
import { returnPolicyHtml } from "@/data/policies";

export const metadata: Metadata = {
  title: "Return & Exchange Policy | BUUDY. Barefoot Footwear",
  description: "14-day free size exchanges and simple return instructions for US footwear orders.",
  alternates: {
    canonical: "/policies/return-policy",
  },
};

export default function ReturnPolicyPage() {
  return (
    <PolicyView
      title="Return & Exchange Policy"
      subtitle="14-day exchange guarantee and hassle-free footwear returns."
      lastUpdated="January 2026"
      htmlContent={returnPolicyHtml}
    />
  );
}
