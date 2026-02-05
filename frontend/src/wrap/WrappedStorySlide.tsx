import { motion } from "framer-motion"

type Props = {
  text: string
  index: number
}

export default function WrappedStorySlide({ text, index }: Props) {
  return (
    <section className="snap-start h-screen w-full flex items-center justify-center bg-[#020617] px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="max-w-3xl text-center"
      >
        <p className="text-sm text-white/40 mb-4">
          Story {index + 1}
        </p>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
          {text}
        </h1>
      </motion.div>
    </section>
  )
}
