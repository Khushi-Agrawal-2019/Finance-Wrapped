type InsightCardProps = {
    eyebrow: string
    title: string
    value: string
    subtitle: string
  }
  
  export default function InsightCard({
    eyebrow,
    title,
    value,
    subtitle
  }: InsightCardProps) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white px-6">
        <div className="max-w-md w-full rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          <p className="uppercase tracking-widest text-xs text-white/60 mb-3">
            {eyebrow}
          </p>
  
          <h1 className="text-4xl font-extrabold leading-tight mb-4">
            {title}
          </h1>
  
          <p className="text-5xl font-black text-green-400 mb-4">
            {value}
          </p>
  
          <p className="text-white/70 text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    )
  }
  