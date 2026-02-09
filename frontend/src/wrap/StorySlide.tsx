import { motion } from "framer-motion"

type StorySlideProps = {
  text: string
  index?: number
}

export default function StorySlide({ text, index = 0 }: StorySlideProps) {
  return (
    <section className="snap-start h-screen flex items-center justify-center px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        <p className="text-2xl md:text-4xl font-semibold leading-snug">
          {text}
        </p>
      </motion.div>

      {/* Swipe hint on first slide */}
      {index === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 text-white/50 text-sm tracking-wide"
        >
          Swipe up ↑
        </motion.div>
      )}
    </section>
  )
}
