const express = require("express");
const multer = require("multer");
const { parseCSV } = require("../services/csvParser");

const router = express.Router();

/**
 * Multer configuration
 * Stores uploaded file in memory (buffer)
 * This is intentional for small CSV files
 */
const upload = multer({ storage: multer.memoryStorage() });

/**
 * POST /api/upload-csv
 * Accepts a CSV file and returns parsed data
 */
router.post("/upload-csv", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const parsedData = await parseCSV(req.file.buffer);

    res.json({
      message: "CSV uploaded successfully",
      rows: parsedData.length,
      data: parsedData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to process CSV file" });
  }
});

module.exports = router;
