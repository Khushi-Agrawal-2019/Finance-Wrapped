import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import FinanceWrappedLanding from "./pages/FinanceWrappedLanding"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/finance-wrapped" replace />} />

        {/* Landing page */}
        <Route
          path="/finance-wrapped"
          element={<FinanceWrappedLanding />}
        />

        {/* Insights route (placeholder for now) */}
        <Route
          path="/finance-wrapped/insights"
          element={<div className="min-h-screen flex items-center justify-center text-white bg-black">
            Insights coming soon 👀
          </div>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
