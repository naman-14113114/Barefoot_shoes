import type { Metadata } from "next";
import { PolicyView } from "@/components/policies/PolicyView";
import { termsOfServiceHtml } from "@/data/policies";

export const metadata: Metadata = {
  title: "Terms of Service | JUUJO. Barefoot Footwear",
  description: "Terms and conditions governing footwear purchases, billing, and services on JUUJO. UK.",
  alternates: {
    canonical: "/policies/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <PolicyView
      title="Terms of Service"
      subtitle="Operating terms and legal purchase agreements for JUUJO. barefoot footwear."
      lastUpdated="January 2026"
      htmlContent={termsOfServiceHtml}
    />
  );
}
