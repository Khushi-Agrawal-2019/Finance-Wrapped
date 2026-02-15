import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import StorySlide from "./StorySlide"
import WrappedSummaryCard from "./WrappedSummaryCard"

export default function FinanceWrappedStories() {
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const rawData = sessionStorage.getItem("financeWrappedData")
  const data = rawData ? JSON.parse(rawData) : null

  if (!data || !data.narratives || data.narratives.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#020617]">
        No stories found. Please upload a CSV first.
      </div>
    )
  }

  const narratives: string[] = data.narratives
  const totalSlides = narratives.length + 2 // +2 for WrappedSummaryCard and CTA slide

  const gradients = [
    "from-indigo-900 via-black to-black",      // intro
    "from-rose-900 via-black to-black",            // damage
    "from-slate-700 via-black to-black",         // habits
    "from-yellow-700 via-black to-black",           // patterns
    "from-purple-900 via-black to-black",         // merchants
  ]
  const { highestSpendingMonth, monthlyBreakdown } = data.monthlyInsights

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onScroll = () => {
      const scrollTop = container.scrollTop
      const height = window.innerHeight
      const index = Math.min(Math.round(scrollTop / height), totalSlides - 1) // Clamp index
      setActiveIndex(index)
    }

    container.addEventListener("scroll", onScroll)
    return () => container.removeEventListener("scroll", onScroll)
  }, [totalSlides])

  return (
    <div className="relative h-screen bg-[#020617] text-white">
      
      {/* PROGRESS DOTS */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === activeIndex
                ? "bg-green-400 scale-125"
                : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* COUNTER */}
      <div className="fixed left-6 top-6 z-50 text-white/50 text-sm">
        {Math.min(activeIndex + 1, totalSlides)} / {totalSlides}
      </div>

      {/* SCROLL CONTAINER */}
      <div
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory"
      >
        {narratives.map((text, index) => {
          const gradient = gradients[index % gradients.length]

          return (
            <section
              key={index}
              className="snap-start h-screen relative overflow-hidden"
            >
              {/* Background layer */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradient} transform scale-110`}
              />

              {/* Foreground content */}
              <div className="relative z-10 flex items-center justify-center h-full px-6">
                <StorySlide text={text} index={index} />
              </div>
            </section>
          )
        })}

        {/* WrappedSummaryCard Slide */}
        <section className="snap-start h-screen bg-gradient-to-br from-green-900 via-black to-black flex items-center justify-center px-6">
          <WrappedSummaryCard
            peakMonth={highestSpendingMonth}
            peakAmount={monthlyBreakdown[highestSpendingMonth].totalSpend}
            topCategory={data.insights.topCategory}
          />
        </section>

        {/* CTA SLIDE */}
        <div className="snap-start h-screen bg-gradient-to-br from-green-900 via-black to-black flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Want the full breakdown?
            </h2>

            <p className="text-white/60 mb-10">
              Dive deeper into your spending patterns, habits, and damage.
            </p>

            <button
              onClick={() => navigate("/finance-wrapped/insights")}
              className="px-10 py-4 rounded-full bg-green-500 text-black font-semibold hover:scale-105 transition"
            >
              View Full Insights →
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
