import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema(
  {
    currencyPair: {
      type: String,
      required: true, // e.g. "XAUUSD"
    },
    keyZone: {
      type: String,
      required: true, // e.g. "Support zone 2300-2310"
    },
    notes: {
      type: String,
      required: false, // Trader’s notes / observations
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

// Avoid recompiling the model in Next.js hot reload
const AnalysisModel =
  mongoose.models.Analysis || mongoose.model("Analysis", analysisSchema);

export default AnalysisModel;
