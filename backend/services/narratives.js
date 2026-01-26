// Converts insights into sentences


function generateNarratives(insights, monthlyInsights, behaviorInsights) {
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
  
    narratives.push(
      `You are more of a ${behaviorInsights.weekendBias.toLowerCase()}.`
    );
  
    return narratives;
  }
  
  module.exports = { generateNarratives };
  