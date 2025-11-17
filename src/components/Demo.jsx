import React from 'react'

export default function Demo() {
  return (
    <section id="demo" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white">See it in action</h3>
            <p className="mt-2 text-white/70">Watch a quick walkthrough of managing orders, inventory, and analytics dashboards.</p>
            <ul className="mt-6 space-y-2 text-white/80 text-sm list-disc pl-4">
              <li>Automated PO creation and approvals</li>
              <li>Real-time stock sync across warehouses</li>
              <li>Forecasting and margin insights</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-video w-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-2">
              <div className="h-full w-full rounded-xl bg-black/60 flex items-center justify-center text-white/70">Demo video placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
