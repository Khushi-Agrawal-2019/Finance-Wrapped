import React from 'react';

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
      <div className="rounded-3xl bg-white/5 border border-white/10 p-10 text-center backdrop-blur-xl max-w-xl">
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
  