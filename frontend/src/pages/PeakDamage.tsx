import { useEffect, useState } from "react"
import InsightCard from "../components/InsightCard"
import { getPeakDamageMonth } from "../insights/peakDamage"
import { fetchTransactions } from "../api/transactions"

export default function PeakDamage() {
  const [insight, setInsight] = useState<any>(null)

  useEffect(() => {
    async function load() {
      const transactions = await fetchTransactions()
      const result = getPeakDamageMonth(transactions)
      setInsight(result)
    }

    load()
  }, [])

  if (!insight) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Crunching your financial trauma…
      </div>
    )
  }

  return (
    <InsightCard
      eyebrow="Your Finance Wrapped"
      title={`${insight.month} ${insight.year}`}
      value={`₹${insight.totalSpent.toLocaleString()}`}
      subtitle={insight.tagline}
    />
  )
}
