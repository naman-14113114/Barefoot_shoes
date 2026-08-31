import type { Metadata } from "next";
import { OrderTrackingView } from "@/components/tracking/OrderTrackingView";

export const metadata: Metadata = {
  title: "Track Your Order | BUUDY. AU",
  description: "Track your BUUDY. barefoot footwear delivery with live Australia Post tracking milestones.",
  alternates: {
    canonical: "/order-tracking",
  },
};

export default function OrderTrackingPage() {
  return <OrderTrackingView />;
}
