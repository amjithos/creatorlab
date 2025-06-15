import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Videos from './pages/Videos'
import Audio from './pages/Audio'
import About from './pages/About'
import './css/App.css'
import './css/index.css'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#181e29]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/audio" element={<Audio />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
