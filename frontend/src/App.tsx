import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import FinanceWrappedLanding from "./pages/FinanceWrappedLanding"
import FinanceWrappedInsights from "./pages/FinanceWrappedInsights"
import FinanceWrappedStories from "./wrap/FinanceWrappedStories"
import AppLayout from "./layouts/AppLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/finance-wrapped" element={<FinanceWrappedLanding />} />
          <Route path="/finance-wrapped/stories" element={<FinanceWrappedStories />} />
          <Route path="/finance-wrapped/insights" element={<FinanceWrappedInsights />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
