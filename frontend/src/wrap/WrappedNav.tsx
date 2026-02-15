import { Link, useLocation } from "react-router-dom"

type WrappedNavProps = {
  onShare?: () => void
}

export default function WrappedNav({ onShare }: WrappedNavProps) {
  const location = useLocation()

  const navItems = [
    { label: "Home", path: "/finance-wrapped" },
    { label: "Stories", path: "/finance-wrapped/stories" },
    { label: "Insights", path: "/finance-wrapped/insights" },
  ]

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3 flex gap-8 items-center">
      
      {navItems.map((item) => {
        const active = location.pathname === item.path
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`text-sm font-medium transition ${
              active ? "text-green-400" : "text-white/60 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        )
      })}

      <button
        onClick={onShare}
        className="text-sm font-semibold text-green-400 hover:scale-105 transition"
      >
        Share
      </button>
    </nav>
  )
}
