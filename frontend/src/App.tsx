import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppLayout from './layouts/AppLayout'
import Header from './components/Header'
import StatCard from './components/StstCard'
import CsvUploadCard from './components/CsvUploadCard'
import PeakDamage from './pages/PeakDamage'

function App() {
  return <PeakDamage />
}

export default App


