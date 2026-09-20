import type { Metadata } from "next";
import { ContactView } from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "Contact Customer Care | JUUJO. Barefoot Footwear",
  description: "Get in touch with JUUJO. US support for barefoot sizing consultations, order tracking, and 14-day exchanges.",
  alternates: {
    canonical: "/pages/contact-us",
  },
};

export default function ContactUsPage() {
  return <ContactView />;
}
