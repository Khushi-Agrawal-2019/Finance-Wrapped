import WrappedNav from "../wrap/WrappedNav"
import { Outlet, useLocation } from "react-router-dom"

export default function AppLayout() {
  const location = useLocation()
  const showNav = location.pathname.startsWith("/finance-wrapped")

  function handleShare() {
    const element = document.getElementById("wrapped-summary")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="w-full min-h-screen relative">
      <Outlet />
      {showNav && <WrappedNav onShare={handleShare} />}
    </div>
  )
}
