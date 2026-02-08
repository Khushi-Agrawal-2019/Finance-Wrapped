import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import StorySlide from "./StorySlide"

export default function FinanceWrappedStories() {
  const navigate = useNavigate()

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

  return (
    <div
      className="
        h-screen
        overflow-y-scroll
        snap-y snap-mandatory
        bg-[#020617]
        text-white
      "
    >
      {narratives.map((text, index) => (
        <StorySlide key={index} text={text} index={index} />
      ))}

      {/* FINAL CTA SLIDE */}
      <div className="snap-start h-screen flex items-center justify-center px-6">
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
  )
}
