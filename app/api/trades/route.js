import { NextResponse } from "next/server";
import connectDB from "@/lib/utils/connectDB";
import TradeModel from "@/lib/models/trade";

// ===========================
// GET - Fetch all trades
// ===========================
export async function GET() {
  try {
    await connectDB();
    const trades = await TradeModel.find().sort({ createdAt: -1 });

    return NextResponse.json(trades, { status: 200 });
  } catch (error) {
    console.error("Error fetching trades:", error);
    return NextResponse.json(
      { error: "Failed to fetch trades" },
      { status: 500 }
    );
  }
}

// ===========================
// POST - Create a new trade
// ===========================
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const {
      pair,
      date,
      entryPrice,
      pointOfInterest,
      confirmation,
      SL,
      TP,
      totalPL,
      result,
      lotSize,
      feeling,
    } = body;

    // Validate required fields
    if (
      !pair ||
      !date ||
      !entryPrice ||
      !pointOfInterest ||
      !confirmation ||
      !SL ||
      !TP ||
      !lotSize
    ) {
      return NextResponse.json(
        { error: "All required fields must be provided" },
        { status: 400 }
      );
    }

    const newTrade = await TradeModel.create({
      pair,
      date,
      entryPrice,
      pointOfInterest,
      confirmation,
      SL,
      TP,
      totalPL: totalPL || 0,
      result,
      lotSize,
      feeling,
    });

    return NextResponse.json(newTrade, { status: 201 });
  } catch (error) {
    console.error("Error creating trade:", error);
    return NextResponse.json(
      { error: "Failed to create trade" },
      { status: 500 }
    );
  }
}
