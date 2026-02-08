import { motion } from "framer-motion"

type StorySlideProps = {
  text: string
  index: number
}

export default function StorySlide({ text }: StorySlideProps) {
  return (
    <div className="snap-start h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        <p className="text-3xl md:text-5xl font-bold leading-tight">
          {text}
        </p>
      </motion.div>
    </div>
  )
}
