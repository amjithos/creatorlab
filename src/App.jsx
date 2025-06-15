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
import useWindowWidth from './hooks/useWindowWidth'

function App() {
  const width = useWindowWidth();
  const isMobile = width < 640;
  // Adjust this value to match your navbar height + margin
  const navPad = isMobile ? 80 : 88;
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#181e29]">
        <Navbar />
        <main className="flex-1" style={{ paddingTop: navPad }}>
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
