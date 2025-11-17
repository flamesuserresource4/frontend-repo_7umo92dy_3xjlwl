import React from 'react'

const logos = [
  'https://static-00.iconduck.com/assets.00/shopify-icon-2048x2048-bp8xwz4p.png',
  'https://static-00.iconduck.com/assets.00/stripe-icon-512x321-x5khjbsp.png',
  'https://static-00.iconduck.com/assets.00/notion-icon-2048x2048-7j9n4x2w.png',
  'https://static-00.iconduck.com/assets.00/airbnb-icon-2048x2048-xk7r87pt.png'
]

export default function Testimonials() {
  return (
    <section id="customers" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3 items-center">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold text-white">Trusted by modern wholesalers</h3>
            <p className="mt-2 text-white/70">Teams use us to process millions of dollars in orders every month.</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-80">
            {logos.map((src, i) => (
              <img key={i} src={src} alt="logo" className="h-8 w-auto object-contain grayscale invert" />
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
              <p className="text-sm text-white/80">“We cut order processing time by 60% and finally have real-time visibility across warehouses.”</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20" />
                <div>
                  <div className="font-medium">Operations Lead</div>
                  <div className="text-xs text-white/60">Mid-market distributor</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
