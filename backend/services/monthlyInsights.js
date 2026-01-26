//Generates month-wise spending insights
 

function generateMonthlyInsights(transactions) {
    const monthlyData = {};
  
    for (const tx of transactions) {
      if (tx.type !== "debit" || !tx.date) continue;
  
      const month = tx.date.slice(0, 7); // YYYY-MM
  
      if (!monthlyData[month]) {
        monthlyData[month] = {
          totalSpend: 0,
          transactionCount: 0,
        };
      }
  
      monthlyData[month].totalSpend += Math.abs(tx.amount);
      monthlyData[month].transactionCount += 1;
    }
  
    // highest spending month
    let highestMonth = null;
    let maxSpend = 0;
  
    for (const month in monthlyData) {
      if (monthlyData[month].totalSpend > maxSpend) {
        maxSpend = monthlyData[month].totalSpend;
        highestMonth = month;
      }
    }
  
    return {
      monthlyBreakdown: monthlyData,
      highestSpendingMonth: highestMonth,
    };
  }
  
  module.exports = { generateMonthlyInsights };
  