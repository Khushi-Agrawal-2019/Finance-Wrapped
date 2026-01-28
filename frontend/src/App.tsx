import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppLayout from './layouts/AppLayout'
import Header from './components/Header'
import StatCard from './components/StstCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppLayout>
      <Header />

      <main className="rounded-xl bg-gray-800 p-8">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    <StatCard
      title="Total Spend"
      value="₹1,24,560"
      subtitle="Last 12 months"
    />
    <StatCard
      title="Top Category"
      value="Food & Dining"
      subtitle="32% of spending"
    />
    <StatCard
      title="Avg Monthly Spend"
      value="₹10,380"
      subtitle="Consistent trend"
    />
  </div>
</main>

    </AppLayout>

  );
}

export default App
