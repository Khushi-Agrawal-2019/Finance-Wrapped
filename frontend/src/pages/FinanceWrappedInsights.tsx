import PeakDamageCard from "../insights/PeakDamageCard"


export default function FinanceWrappedInsights() {
  const rawData = sessionStorage.getItem("financeWrappedData")

  const data = rawData ? JSON.parse(rawData) : null

  if (!data || !data.insights || !data.insights.peakDamageMonth) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        No insights found. Please upload a CSV first.
      </div>
    )
  }
  const peak = data.insights.peakDamageMonth

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-16">
        Your Finance Wrapped 🎧
      </h1>

      <div className="max-w-5xl mx-auto grid gap-12">
        <PeakDamageCard
          month={peak.month}
          amount={peak.amount}
        />
      </div>
    </div>
  )
}
