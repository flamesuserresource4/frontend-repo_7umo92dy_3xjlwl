import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Demo from './components/Demo'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-10%,rgba(56,189,248,0.15),transparent),radial-gradient(700px_400px_at_90%_10%,rgba(147,197,253,0.12),transparent)]" />
      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Demo />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}

export default App
