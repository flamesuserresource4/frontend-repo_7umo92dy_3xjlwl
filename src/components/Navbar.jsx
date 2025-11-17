import React from 'react'
import { Menu, Phone, Mail } from 'lucide-react'

const Logo = () => {
  const [src, setSrc] = React.useState('/logo.svg')
  return (
    <img
      src={src}
      onError={() => setSrc('/flame-icon.svg')}
      alt="Company logo"
      className="h-8 w-auto"
    />
  )
}

export default function Navbar() {
  return (
    <header className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="sr-only">Home</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#customers" className="hover:text-white transition">Customers</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:sales@yourco.com" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/15 text-white/90 hover:bg-white/10 transition">
            <Mail className="h-4 w-4" /> Contact
          </a>
          <a href="tel:+1234567890" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-200 transition">
            <Phone className="h-4 w-4" /> Call
          </a>
        </div>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 text-white backdrop-blur border border-white/20">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
