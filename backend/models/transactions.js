/**
 * Canonical transaction format
 * All bank data must be converted into this shape
 */
function normalizeTransaction(row) {
    return {
      date: row.Date || row.TransactionDate,
      description: row.Description || row.Narration,
      amount: Number(row.Amount),
      type: Number(row.Amount) < 0 ? "debit" : "credit",
      category: null, // will be added later
      source: "bank"
    };
  }
  
  module.exports = { normalizeTransaction };
  