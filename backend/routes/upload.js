const express = require("express");
const multer = require("multer");
const { parseCSV } = require("../services/csvParser");
const { normalizeTransaction } = require("../models/transactions");
const { categorizeTransaction } = require("../services/categorizer");
const { generateInsights } = require("../services/insights");
const { generateMonthlyInsights } = require("../services/monthlyInsights");
const { generateBehaviorInsights } = require("../services/behaviorInsights");
const { generateNarratives } = require("../services/narratives");
const { generateMerchantInsights } = require("../services/merchantInsights");

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

/**
 * POST /api/upload-csv
 * Accepts a CSV file and returns parsed data
 * Automatically detects column format and normalizes
 */
router.post("/upload-csv", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // parseCSV now includes column detection
    const parsedRows = await parseCSV(req.file.buffer);
    
    const normalizedTransactions = parsedRows.map(normalizeTransaction);
    const categorizedTransactions = normalizedTransactions.map(
      categorizeTransaction
    );
    transactions = categorizedTransactions;

    const insights = generateInsights(categorizedTransactions);
    const monthlyInsights = generateMonthlyInsights(categorizedTransactions);
    const behaviorInsights = generateBehaviorInsights(categorizedTransactions);
    const merchantInsights = generateMerchantInsights(categorizedTransactions);
    const narratives = generateNarratives(
      insights,
      monthlyInsights,
      behaviorInsights,
      merchantInsights
    );

    res.json({
      message: "CSV uploaded and normalized successfully",
      insights,
      monthlyInsights,
      behaviorInsights,
      narratives,
      merchantInsights,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: error.message || "Failed to process CSV file",
    });
  }
});

/**
 * GET /api/transactions
 * Returns last uploaded transactions
 */
router.get("/transactions", (req, res) => {
  res.json(transactions);
});

module.exports = router;
