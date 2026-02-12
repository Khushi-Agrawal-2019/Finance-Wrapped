import { Link, useLocation } from "react-router-dom"

export default function WrappedNav() {
  const location = useLocation()

  const navItems = [
    { label: "Stories", path: "/finance-wrapped/stories" },
    { label: "Insights", path: "/finance-wrapped/insights" },
  ]

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex gap-6">
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
    </nav>
  )
}
