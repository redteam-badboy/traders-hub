import { NextResponse } from "next/server";
import connectDB from "../../../lib/utils/connectDB";
import AnalysisModel from "../../../lib/models/analysis";

// ✅ GET - Fetch all analysis notes
export async function GET() {
  try {
    await connectDB();

    const analysis = await AnalysisModel.find().sort({ createdAt: -1 });

    return NextResponse.json(analysis, { status: 200 });
  } catch (error) {
    console.error("Error fetching analysis notes:", error);
    return NextResponse.json(
      { error: "Failed to fetch analysis notes" },
      { status: 500 }
    );
  }
}

// ✅ POST - Add a new analysis note
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const { currencyPair, keyZone, notes } = body;

    // Validation
    if (!currencyPair || !keyZone) {
      return NextResponse.json(
        { error: "currencyPair and keyZone are required fields" },
        { status: 400 }
      );
    }

    const newAnalysis = await AnalysisModel.create({
      currencyPair,
      keyZone,
      notes,
    });

    return NextResponse.json(newAnalysis, { status: 201 });
  } catch (error) {
    console.error("Error creating analysis:", error);
    return NextResponse.json(
      { error: "Failed to create analysis" },
      { status: 500 }
    );
  }
}
