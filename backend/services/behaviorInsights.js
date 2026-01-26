//Detects spending behavior patterns

function generateBehaviorInsights(transactions) {
    const categoryFrequency = {};
    let weekendSpend = 0;
    let weekdaySpend = 0;
  
    for (const tx of transactions) {
      if (tx.type !== "debit" || !tx.date) continue;
  
      // Category frequency
      categoryFrequency[tx.category] =
        (categoryFrequency[tx.category] || 0) + 1;
  
      // Weekend vs weekday
      const day = new Date(tx.date).getDay(); // 0 = Sunday
      const amount = Math.abs(tx.amount);
  
      if (day === 0 || day === 6) {
        weekendSpend += amount;
      } else {
        weekdaySpend += amount;
      }
    }
  
    // Most frequent category
    let topCategory = null;
    let maxCount = 0;
  
    for (const category in categoryFrequency) {
      if (categoryFrequency[category] > maxCount) {
        maxCount = categoryFrequency[category];
        topCategory = category;
      }
    }
  
    return {
      mostFrequentCategory: topCategory,
      weekendSpend,
      weekdaySpend,
      weekendBias:
        weekendSpend > weekdaySpend ? "Weekend Spender" : "Weekday Spender",
    };
  }
  
  module.exports = { generateBehaviorInsights };
  