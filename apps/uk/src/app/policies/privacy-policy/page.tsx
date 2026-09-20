import type { Metadata } from "next";
import { PolicyView } from "@/components/policies/PolicyView";
import { privacyPolicyHtml } from "@/data/policies";

export const metadata: Metadata = {
  title: "Privacy Policy | JUUJO. Barefoot Footwear",
  description: "Learn how JUUJO. collects, utilizes, and protects your personal data when purchasing handcrafted barefoot shoes.",
  alternates: {
    canonical: "/policies/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyView
      title="Privacy Policy"
      subtitle="How JUUJO. handles and protects your personal information under UK GDPR."
      lastUpdated="January 2026"
      htmlContent={privacyPolicyHtml}
    />
  );
}
