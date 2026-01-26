//Detects recurring merchants based on transaction descriptions
 

function generateMerchantInsights(transactions) {
    const merchantFrequency = {};
  
    for (const tx of transactions) {
      if (tx.type !== "debit" || !tx.description) continue;
  
      const merchant = tx.description.split(" ")[0].toLowerCase();
  
      merchantFrequency[merchant] =
        (merchantFrequency[merchant] || 0) + 1;
    }
  
    let topMerchant = null;
    let maxCount = 0;
  
    for (const merchant in merchantFrequency) {
      if (merchantFrequency[merchant] > maxCount) {
        maxCount = merchantFrequency[merchant];
        topMerchant = merchant;
      }
    }
  
    return {
      topMerchant,
      frequency: maxCount,
    };
  }
  
  module.exports = { generateMerchantInsights };
  