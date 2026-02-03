export default function FinanceWrappedInsights() {
    const rawData = sessionStorage.getItem("financeWrappedData")
    const data = rawData ? JSON.parse(rawData) : null
  
    if (!data) {
      return (
        <div className="min-h-screen flex items-center justify-center text-white">
          No insights found. Please upload a CSV first.
        </div>
      )
    }
  
    return (
      <div className="min-h-screen bg-[#020617] text-white px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-10">
          Your Finance Wrapped 🎧
        </h1>
  
        <pre className="bg-white/5 p-6 rounded-xl overflow-auto text-sm">
          {JSON.stringify(data.insights, null, 2)}
        </pre>
      </div>
    )
  }
  