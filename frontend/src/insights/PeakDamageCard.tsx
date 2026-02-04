import { motion } from "framer-motion"

type PeakDamageCardProps = {
  month: string
  amount: number
}

export default function PeakDamageCard({ month, amount }: PeakDamageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl p-8 bg-gradient-to-br from-red-500/20 to-pink-500/10 border border-white/10 backdrop-blur-xl"
    >
      <p className="text-sm uppercase tracking-wide text-white/60 mb-2">
        Peak Damage Month
      </p>

      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        {month}
      </h2>

      <p className="text-xl text-white/80">
        You spent{" "}
        <span className="text-red-400 font-semibold">
          ₹{amount.toLocaleString()}
        </span>{" "}
        and felt it emotionally.
      </p>
    </motion.div>
  )
}
