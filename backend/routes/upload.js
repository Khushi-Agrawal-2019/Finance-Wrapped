const express = require("express");
const multer = require("multer");
const { parseCSV } = require("../services/csvParser");
const { normalizeTransaction } = require("../models/transactions");
const router = express.Router();

//Stores uploaded file in memory (buffer)

const upload = multer({ storage: multer.memoryStorage() });

/**
 * POST /api/upload-csv
 * Accepts a CSV file and returns parsed data
 * Returns normalized transaction data
 */
router.post("/upload-csv", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const parsedRows = await parseCSV(req.file.buffer);
    const normalizedTransactions = parsedRows.map(normalizeTransaction);
    res.json({
        message: "CSV uploaded and normalized successfully",
        totalTransactions: normalizedTransactions.length,
        transactions: normalizedTransactions,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to process CSV file" });
  }
});

module.exports = router;
