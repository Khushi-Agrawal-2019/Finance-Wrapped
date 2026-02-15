type WrappedSummaryCardProps = {
  peakMonth: string
  peakAmount: number
  topCategory: string
}

export default function WrappedSummaryCard({
  peakMonth,
  peakAmount,
  topCategory,
}: WrappedSummaryCardProps) {
  return (
<div
  id="wrapped-summary"
  className="relative rounded-3xl bg-gradient-to-br from-green-900 via-black to-black p-10 text-center max-w-md aspect-[9/16] flex flex-col justify-center border border-white/10"
>

      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Your Finance Wrapped ✨
      </h2>

      <p className="text-white/70 mb-4">
        You spent the most in
      </p>

      <p className="text-2xl font-semibold text-green-400 mb-6">
        {peakMonth} · ₹{peakAmount.toLocaleString()}
      </p>

      <p className="text-white/60 mb-10">
        Your biggest weakness?
        <br />
        <span className="text-white font-medium">{topCategory}</span>
      </p>

      <button className="px-8 py-3 rounded-full bg-green-500 text-black font-semibold hover:scale-105 transition">
        Share my Wrapped
      </button>
    </div>
  )
}
