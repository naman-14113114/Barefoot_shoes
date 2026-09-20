import type { Metadata } from "next";
import { PolicyView } from "@/components/policies/PolicyView";
import { cookiesPolicyHtml } from "@/data/policies";

export const metadata: Metadata = {
  title: "Cookies Policy | JUUJO. Barefoot Footwear",
  description: "Understand how JUUJO. uses essential, analytics, and functional cookies on our storefront.",
  alternates: {
    canonical: "/policies/cookies-policy",
  },
};

export default function CookiesPolicyPage() {
  return (
    <PolicyView
      title="Cookies Policy"
      subtitle="Details on how cookies and browser storage technologies are utilized on JUUJO."
      lastUpdated="January 2026"
      htmlContent={cookiesPolicyHtml}
    />
  );
}
