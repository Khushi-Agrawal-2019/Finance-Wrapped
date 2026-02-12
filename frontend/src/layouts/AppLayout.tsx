import WrappedNav from "../wrap/WrappedNav"
import { Outlet, useLocation } from "react-router-dom"

export default function AppLayout() {
  const location = useLocation()
  const showNav = location.pathname.startsWith("/finance-wrapped")

  return (
    <div className="w-full min-h-screen relative">
      <Outlet />
      {showNav && <WrappedNav />}
    </div>
  )
}
