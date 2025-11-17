import React from 'react'
import { Mail, MessageSquare } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-white/80">
            <img src="/flame-icon.svg" className="h-6" alt="logo" />
            <span>© {new Date().getFullYear()} Your Company. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="mailto:support@yourco.com" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/15 text-white/90 hover:bg-white/10 transition">
              <Mail className="h-4 w-4" /> support@yourco.com
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-200 transition">
              <MessageSquare className="h-4 w-4" /> Chat with us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
