/**
 * Canonical transaction format
 * All bank data must be converted into this shape
 */
function normalizeTransaction(row) {
  // row now contains canonical field names from columnDetector
  // but may have debit/credit columns instead of single amount

  let amount;

  // Handle three cases: single amount, or separate debit/credit columns
  if (row.amount) {
    // Single amount column (already parsed by columnDetector)
    amount = Number(row.amount);
  } else if (row.debit && row.credit) {
    // Separate debit/credit columns
    const debitAmount = Number(row.debit) || 0;
    const creditAmount = Number(row.credit) || 0;

    // Debit = negative, Credit = positive
    amount = creditAmount > 0 ? creditAmount : -debitAmount;
  } else if (row.debit) {
    // Only debit column
    amount = -Math.abs(Number(row.debit));
  } else if (row.credit) {
    // Only credit column
    amount = Math.abs(Number(row.credit));
  } else {
    throw new Error("No valid amount data found in row");
  }

  return {
    date: row.date,
    description: row.description || "",
    amount: amount,
    type: amount < 0 ? "debit" : "credit",
    category: null, // will be added later by categorizer
    source: "bank",
  };
}

module.exports = { normalizeTransaction };
