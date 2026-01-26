

function generateInsights(transactions) {
    const insights = {
      totalSpend: 0,
      totalIncome: 0,
      categoryBreakdown: {},
      topCategory: null,
      transactionCount: transactions.length,
    };
  
    for (const tx of transactions) {
      if (tx.type === "debit") {
        insights.totalSpend += Math.abs(tx.amount);
  
        insights.categoryBreakdown[tx.category] =
          (insights.categoryBreakdown[tx.category] || 0) + Math.abs(tx.amount);
      } else {
        insights.totalIncome += tx.amount;
      }
    }
  
    // Determine top category
    let maxSpend = 0;
    for (const category in insights.categoryBreakdown) {
      if (insights.categoryBreakdown[category] > maxSpend) {
        maxSpend = insights.categoryBreakdown[category];
        insights.topCategory = category;
      }
    }
  
    return insights;
  }
  
  module.exports = { generateInsights };
  