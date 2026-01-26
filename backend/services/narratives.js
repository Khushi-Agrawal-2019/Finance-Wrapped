// Converts insights into sentences


function generateNarratives(insights, monthlyInsights, behaviorInsights, merchantInsights) {
    const narratives = [];
  
    if (monthlyInsights.highestSpendingMonth) {
      narratives.push(
        `${monthlyInsights.highestSpendingMonth} was your most expensive month.`
      );
    }
  
    if (behaviorInsights.mostFrequentCategory) {
      narratives.push(
        `You spent most often on ${behaviorInsights.mostFrequentCategory}.`
      );
    }

    if (merchantInsights.topMerchant) {
        narratives.push(
          `${merchantInsights.topMerchant} was your most frequent merchant.`
        );
      }
     
    narratives.push(
      `You are more of a ${behaviorInsights.weekendBias.toLowerCase()}.`
    );
  
    return narratives;
  }
  
  module.exports = { generateNarratives };
  