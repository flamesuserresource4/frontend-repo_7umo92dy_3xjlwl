import React from 'react'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'forever',
    features: [
      '100 orders / month',
      '1 warehouse',
      'Basic inventory',
      'Email support'
    ],
    cta: 'Start Free',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$199',
    cadence: 'per month',
    features: [
      'Unlimited orders',
      'Multi-warehouse',
      'Automations',
      'Priority support'
    ],
    cta: 'Upgrade',
    highlight: true,
    badge: 'Most Popular'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    features: [
      'Advanced analytics',
      'SSO & RBAC',
      'Dedicated CSM',
      'Onboarding & training'
    ],
    cta: 'Talk to Sales',
    highlight: false,
    badge: 'Premium'
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-2 text-white/70">Choose a plan that scales with your business.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl border p-6 ${tier.highlight ? 'border-sky-400/40 bg-sky-400/10' : 'border-white/10 bg-white/5'}`}>
              {tier.badge && (
                <div className="absolute -top-3 right-4 text-xs px-2 py-1 rounded-full bg-amber-400 text-slate-900 font-medium shadow">{tier.badge}</div>
              )}
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
              </div>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                {tier.cadence && <span className="ml-2 text-white/60">{tier.cadence}</span>}
              </div>
              <ul className="mt-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-white/80">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20">
                      <Check className="h-3 w-3 text-emerald-300" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 font-medium transition ${tier.highlight ? 'bg-white text-slate-900 hover:bg-slate-100' : 'border border-white/20 text-white hover:bg-white/10'}`}>
                {tier.cta}
              </a>
              {tier.name !== 'Starter' && (
                <p className="mt-3 text-xs text-white/60">Includes premium features: Advanced Analytics, Security</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
