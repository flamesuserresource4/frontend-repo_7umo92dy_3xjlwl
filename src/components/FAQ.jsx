import React from 'react'

const faqs = [
  {
    q: 'How long does onboarding take?',
    a: 'Most teams are live in under a week with guided setup. Enterprise rollouts include white-glove onboarding.'
  },
  {
    q: 'What payment methods do you support?',
    a: 'We accept major cards and ACH. Invoices are available for annual plans and enterprise.'
  },
  {
    q: 'Are advanced analytics included for all plans?',
    a: 'Advanced analytics and security features are available on Professional and Enterprise plans.'
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-bold text-white">Frequently asked questions</h3>
          <p className="mt-2 text-white/70">Answers to common questions about getting started.</p>
        </div>
        <div className="mt-8 grid gap-4">
          {faqs.map((f, i) => (
            <details key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <summary className="cursor-pointer text-white font-medium">{f.q}</summary>
              <p className="mt-2 text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
