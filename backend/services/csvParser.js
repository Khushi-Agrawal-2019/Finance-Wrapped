const csv = require("csv-parser");
const { Readable } = require("stream");
const { detectColumns, normalizeRow } = require("./columnDetector");

/**
 * Parses CSV buffer into JSON rows with automatic column detection
 * @param {Buffer} buffer
 * @returns {Promise<Array>} Array of rows with canonical field names
 */
function parseCSV(buffer) {
  return new Promise((resolve, reject) => {
    const results = [];
    let columnMap = null;
    let isFirstRow = true;

    const stream = Readable.from(buffer.toString());

    stream
      .pipe(csv())
      .on("data", (row) => {
        try {
          // Detect columns on first row
          if (isFirstRow) {
            const headers = Object.keys(row);
            columnMap = detectColumns(headers);
            isFirstRow = false;
          }

          // Normalize row using detected column mapping
          const normalized = normalizeRow(row, columnMap);
          results.push(normalized);
        } catch (err) {
          reject(err);
        }
      })
      .on("end", () => {
        if (!columnMap) {
          reject(new Error("CSV file is empty"));
          return;
        }
        resolve(results);
      })
      .on("error", (err) => reject(err));
  });
}

module.exports = { parseCSV };
