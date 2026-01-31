import { motion } from "framer-motion"
import { useState } from "react"
import UploadModal from "../components/UploadModal"

export default function FinanceWrappedLanding() {
    const [isUploadOpen, setIsUploadOpen] = useState(false)

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#020617] via-[#020617] to-black text-white overflow-x-hidden">
      
      {/* MAIN SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          Your money. <br />
          <span className="text-green-400">Wrapped.</span>
        </motion.h1>

        <p className="max-w-2xl text-lg md:text-xl text-white/70 mb-10">
          Finance Wrapped turns boring bank statements into a
          Spotify-style story you’ll actually want to scroll through.
        </p>

        <button
            onClick={() => setIsUploadOpen(true)}
            className="px-8 py-4 rounded-full bg-green-500 text-black font-semibold hover:scale-105 transition"
        >
            Upload your CSV
        </button>

      </section>

      {/* FEATURE PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          "Peak damage month",
          "Spending personality",
          "Your comfort spend"
        ].map((feature) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <h3 className="text-xl font-semibold mb-2">{feature}</h3>
            <p className="text-white/60">
              Insightful. Slightly unhinged. Surprisingly accurate.
            </p>
          </motion.div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-white/40 text-sm">
        Built by Khushi • Finance Wrapped
      </footer>

      <UploadModal
  isOpen={isUploadOpen}
  onClose={() => setIsUploadOpen(false)}
/>

    </div>
  )
}
