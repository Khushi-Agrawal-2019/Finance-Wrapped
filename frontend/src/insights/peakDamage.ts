export function getPeakDamageMonth(transactions: any[]) {
    const monthlyTotals: Record<string, number> = {}
  
    transactions.forEach(txn => {
      const date = new Date(txn.date)
      const key = `${date.getMonth()}-${date.getFullYear()}`
      monthlyTotals[key] = (monthlyTotals[key] || 0) + Math.abs(txn.amount)
    })
  
    let maxMonth = ""
    let maxSpent = 0
  
    Object.entries(monthlyTotals).forEach(([month, total]) => {
      if (total > maxSpent) {
        maxSpent = total
        maxMonth = month
      }
    })
  
    const [monthIndex, year] = maxMonth.split("-")
    const monthName = new Date(0, Number(monthIndex)).toLocaleString("default", {
      month: "long"
    })
  
    return {
      month: monthName,
      year,
      totalSpent: Math.round(maxSpent),
      tagline: "Your wallet did not survive this month."
    }
  }
  