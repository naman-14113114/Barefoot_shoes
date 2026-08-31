import type { Metadata } from "next";
import { PolicyView } from "@/components/policies/PolicyView";
import { termsOfServiceHtml } from "@/data/policies";

export const metadata: Metadata = {
  title: "Terms of Service | BUUDY. Barefoot Footwear",
  description: "Terms and conditions governing footwear purchases and services on BUUDY. AU.",
  alternates: {
    canonical: "/policies/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <PolicyView
      title="Terms of Service"
      subtitle="Operating terms, purchase agreements, and Australian Consumer Law consumer guarantees."
      lastUpdated="January 2026"
      htmlContent={termsOfServiceHtml}
    />
  );
}
