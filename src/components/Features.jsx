import React from 'react'
import { Boxes, BarChart3, ClipboardList, ShieldCheck, Rocket } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, desc, badge }) => (
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
    <div className="flex items-center gap-2">
      <div className="rounded-xl bg-white text-slate-900 p-2">
        <Icon className="h-5 w-5" />
      </div>
      {badge && (
        <span className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/20">Premium</span>
      )}
    </div>
    <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
    <p className="mt-2 text-white/70 text-sm leading-relaxed">{desc}</p>
  </div>
)

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Rocket className="h-3.5 w-3.5" /> Built for scale and reliability
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">Everything you need to run wholesale operations</h2>
          <p className="mt-2 text-white/70">Powerful tools to automate and optimize your workflows.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={ClipboardList} title="Order Management" desc="Consolidate POs, automate approvals, and keep every stakeholder aligned with real-time updates." />
          <FeatureCard icon={Boxes} title="Inventory Tracking" desc="Live stock levels, multi-warehouse support, and low-stock alerts to prevent stockouts." />
          <FeatureCard icon={BarChart3} title="Advanced Analytics" desc="Forecast demand, analyze margins, and monitor KPIs with customizable dashboards." badge />
          <FeatureCard icon={ShieldCheck} title="Enterprise-Grade Security" desc="SSO, RBAC, and audit logs keep your data safe and compliant." badge />
        </div>
      </div>
    </section>
  )
}
