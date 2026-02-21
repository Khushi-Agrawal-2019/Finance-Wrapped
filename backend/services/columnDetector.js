/**
 * Detects CSV column headers and maps them to canonical field names
 * Supports multiple bank formats automatically
 */

const FIELD_PATTERNS = {
    date: {
      canonical: "date",
      patterns: [
        /^date$/i,
        /^transaction\s*date$/i,
        /^txn\s*date$/i,
        /^posted\s*date$/i,
        /^booking\s*date$/i,
      ],
    },
    description: {
      canonical: "description",
      patterns: [
        /^description$/i,
        /^narration$/i,
        /^particulars$/i,
        /^reference$/i,
        /^merchant$/i,
        /^transaction\s*details$/i,
      ],
    },
    amount: {
      canonical: "amount",
      patterns: [
        /^amount$/i,
        /^debit$/i,
        /^credit$/i,
        /^transaction\s*amount$/i,
        /^value$/i,
      ],
    },
    debit: {
      canonical: "debit",
      patterns: [
        /^debit$/i,
        /^withdrawal$/i,
        /^debit\s*amount$/i,
      ],
    },
    credit: {
      canonical: "credit",
      patterns: [
        /^credit$/i,
        /^deposit$/i,
        /^credit\s*amount$/i,
      ],
    },
  };
  
  /**
   * Detects canonical field names from CSV headers
   * @param {string[]} headers - CSV column headers
   * @returns {Object} Map of canonical names to actual column names
   */
  function detectColumns(headers) {
    const detected = {};
    const usedHeaders = new Set();
  
    // For each canonical field, find matching header
    for (const fieldName in FIELD_PATTERNS) {
      const { patterns } = FIELD_PATTERNS[fieldName];
  
      for (const header of headers) {
        if (usedHeaders.has(header)) continue;
  
        if (patterns.some((pattern) => pattern.test(header))) {
          detected[fieldName] = header;
          usedHeaders.add(header);
          break;
        }
      }
    }
  
    // Validate minimum required fields
    if (!detected.date || !detected.description) {
      throw new Error(
        "CSV must contain 'date' and 'description' columns. Detected: " +
          JSON.stringify(detected)
      );
    }
  
    // Amount field is required (either single or debit/credit columns)
    if (!detected.amount && !detected.debit && !detected.credit) {
      throw new Error(
        "CSV must contain 'amount', 'debit', or 'credit' column"
      );
    }
  
    return detected;
  }
  
  /**
   * Normalizes a CSV row using detected column mapping
   * @param {Object} row - Raw CSV row
   * @param {Object} columnMap - Output from detectColumns()
   * @returns {Object} Normalized row with canonical field names
   */
  function normalizeRow(row, columnMap) {
    const normalized = {};
  
    // Map each detected column to canonical name
    for (const [canonical, actual] of Object.entries(columnMap)) {
      if (actual && row[actual]) {
        normalized[canonical] = row[actual];
      }
    }
  
    return normalized;
  }
  
  module.exports = { detectColumns, normalizeRow };