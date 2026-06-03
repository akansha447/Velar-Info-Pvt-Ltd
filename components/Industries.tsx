"use client"
const industries = [
  { title: 'Banking & Insurance', cases: ['Fraud Triage', 'Claims Automation', 'KYC enrichment', 'Loan processing'] },
  { title: 'Retail & Enterprises', cases: ['Personalized support', 'Order management', 'Returns automation', 'Loyalty workflows'] },
  { title: 'Telecom & Utilities', cases: ['Network ops', 'Billing support', 'Service provisioning', 'Outage response'] },
  { title: 'Healthcare & Pharma', cases: ['Patient triage', 'Clinical summarization', 'Claims', 'Regulatory workflows'] },
  { title: 'Travel & Hospitality', cases: ['Booking assistants', 'Cancellations', 'Itinerary management', 'Feedback analysis'] },
  { title: 'Public Sector & PSUs', cases: ['Citizen services', 'Case routing', 'Document processing', 'Compliance'] },
]

export default function Industries() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-teal-300">Industries</p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            Deep industry knowledge meets smart technology.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            We deliver AI systems and automation platforms engineered for the unique demands of banking, healthcare, retail, telecom, logistics, and government services.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.title} className="glass-card rounded-3xl border border-white/10 p-6 shadow-soft transition hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white">{industry.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {industry.cases.map((caseItem) => (
                  <li key={caseItem} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-teal-300" />
                    <span>{caseItem}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-sm font-semibold text-teal-200">Explore Solutions →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
