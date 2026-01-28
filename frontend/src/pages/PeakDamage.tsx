import InsightCard from "../components/InsightCard"
import { getPeakDamageMonth } from "../insights/peakDamage"

//  mock data
const mockTransactions = [
  { date: "2024-03-05", amount: -12000 },
  { date: "2024-03-12", amount: -22000 },
  { date: "2024-02-10", amount: -8000 },
  { date: "2024-03-28", amount: -34000 }
]

export default function PeakDamage() {
  const insight = getPeakDamageMonth(mockTransactions)

  if (!insight) return null

  return (
    <InsightCard
      eyebrow="Your 2024 Wrapped"
      title={`${insight.month} ${insight.year}`}
      value={`₹${insight.totalSpent.toLocaleString()}`}
      subtitle={insight.tagline}
    />
  )
}
