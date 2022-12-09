import React from 'react'
import './App.css'
import Convert from './components/Convert'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllCurrencies from './components/AllCurrencies'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Convert />} />
          <Route path="/currencies" element={<AllCurrencies />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
