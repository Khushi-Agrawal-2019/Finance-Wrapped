const { CATEGORY_RULES } = require("../constants/categories");

/**
 * Assigns a category based on description keywords
 */
function categorizeTransaction(transaction) {
  const description = transaction.description.toLowerCase();

  for (const rule of CATEGORY_RULES) {
    if (description.includes(rule.keyword)) {
      return {
        ...transaction,
        category: rule.category,
      };
    }
  }

  return {
    ...transaction,
    category: "Other",
  };
}

module.exports = { categorizeTransaction };
