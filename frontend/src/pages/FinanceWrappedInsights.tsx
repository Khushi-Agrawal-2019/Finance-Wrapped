import PeakDamageCard from "../insights/PeakDamageCard"


export default function FinanceWrappedInsights() {
  const rawData = sessionStorage.getItem("financeWrappedData")

  const data = rawData ? JSON.parse(rawData) : null

  if (!data || !data.monthlyInsights || !data.monthlyInsights.highestSpendingMonth) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        No insights found. Please upload a CSV first.
      </div>
    )
  }

  const { highestSpendingMonth, monthlyBreakdown } = data.monthlyInsights
  

  function niceMonthLabel(key: string) {

    const [year, month] = key.split("-");
    const d = new Date(Number(year), Number(month) - 1);
    return d.toLocaleString("default", { month: "long", year: "numeric" }); // "January 2025"
  }
  // Extract the month and amount from the monthlyBreakdown
  const peak = highestSpendingMonth && monthlyBreakdown[highestSpendingMonth]
  ? { month: niceMonthLabel(highestSpendingMonth), amount: Math.round(monthlyBreakdown[highestSpendingMonth].totalSpend) }
  : null

  
  if (!peak || typeof peak.amount !== "number") {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Invalid data for insights. Please check your uploaded CSV.
      </div>
    )
  }

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
