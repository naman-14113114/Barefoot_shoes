import type { Metadata } from "next";
import { OrderTrackingView } from "@/components/tracking/OrderTrackingView";

export const metadata: Metadata = {
  title: "Track Your Order | BUUDY. UK",
  description: "Track your BUUDY. barefoot footwear delivery with live Royal Mail tracking milestones.",
  alternates: {
    canonical: "/order-tracking",
  },
};

export default function OrderTrackingPage() {
  return <OrderTrackingView />;
}
