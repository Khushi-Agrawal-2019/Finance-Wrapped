import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import FinanceWrappedLanding from "./pages/FinanceWrappedLanding"
import FinanceWrappedInsights from "./pages/FinanceWrappedInsights"
import FinanceWrappedStories from "./wrap/FinanceWrappedStories"

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

      <Route path="/finance-wrapped/insights" element={<FinanceWrappedInsights />} />
      <Route path="/finance-wrapped/stories" element={<FinanceWrappedStories />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
