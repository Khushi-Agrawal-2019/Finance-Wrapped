import WrappedStorySlide from "./WrappedStorySlide"

export default function FinanceWrappedStories() {
  const rawData = sessionStorage.getItem("financeWrappedData")
  const data = rawData ? JSON.parse(rawData) : null

  if (!data || !Array.isArray(data.narratives)) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        No stories found. Please upload a CSV first.
      </div>
    )
  }

  return (
    <main className="
      h-screen 
      overflow-y-scroll 
      snap-y 
      snap-mandatory 
      scroll-smooth
      bg-[#020617]
    ">
      {data.narratives.map((story: string, idx: number) => (
        <WrappedStorySlide
          key={idx}
          text={story}
          index={idx}
        />
      ))}
    </main>
  )
}
