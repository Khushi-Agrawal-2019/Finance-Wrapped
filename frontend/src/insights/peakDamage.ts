type Transaction = {
    date: string
    amount: number
  }
  
  type PeakDamageResult = {
    month: string
    year: number
    totalSpent: number
    tagline: string
  }
  
  export function getPeakDamageMonth(
    transactions: Transaction[]
  ): PeakDamageResult | null {
    if (!transactions.length) return null
  
    const monthlyTotals: Record<string, number> = {}
  
    transactions.forEach(txn => {
      const d = new Date(txn.date)
      const key = `${d.getFullYear()}-${d.getMonth()}`
      monthlyTotals[key] = (monthlyTotals[key] || 0) + Math.abs(txn.amount)
    })
  
    const [peakKey, totalSpent] = Object.entries(monthlyTotals)
      .sort((a, b) => b[1] - a[1])[0]
  
    const [year, monthIndex] = peakKey.split("-").map(Number)
  
    const month = new Date(year, monthIndex).toLocaleString("default", {
      month: "long"
    })
  
    return {
      month,
      year,
      totalSpent,
      tagline: `${month} really said financial character development`
    }
  }
  