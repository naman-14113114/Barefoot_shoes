import { NextResponse, type NextRequest } from "next/server";
import { market } from "@/data/market";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { items = [], attribution = {} } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const primary = items[0];
    const bridgeUrl = new URL(market.checkoutBridgeUrl);
    bridgeUrl.searchParams.set("product_id", primary.productId);
    bridgeUrl.searchParams.set("variant_id", primary.variantId);
    bridgeUrl.searchParams.set("quantity", String(primary.quantity || 1));
    bridgeUrl.searchParams.set("source", market.checkoutSource);
    bridgeUrl.searchParams.set("country", "US");

    Object.entries(attribution).forEach(([k, v]) => {
      if (v) bridgeUrl.searchParams.set(k, String(v));
    });

    return NextResponse.json({
      checkoutUrl: bridgeUrl.toString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Could not initialize checkout" },
      { status: 500 }
    );
  }
}
