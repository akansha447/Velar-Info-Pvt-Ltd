"use client"
const industries = [
  {title:'Banking & Insurance',cases:['Fraud Triage','Claims Automation','KYC enrichment','Loan processing']},
  {title:'Retail & Enterprises',cases:['Personalized support','Order management','Returns automation','Loyalty workflows']},
  {title:'Telecom & Utilities',cases:['Network ops','Billing support','Service provisioning','Outage response']},
  {title:'Healthcare & Pharma',cases:['Patient triage','Clinical summarization','Claims','Regulatory workflows']},
  {title:'Travel & Hospitality',cases:['Booking assistants','Cancellations','Itinerary management','Feedback analysis']},
  {title:'Public Sector & PSUs',cases:['Citizen services','Case routing','Document processing','Compliance']},
]

export default function Industries(){
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6">Discover AI Agents Built for Every Industry</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map(i=> (
            <div key={i.title} className="glass-card p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-lg font-semibold text-white">{i.title}</h3>
              <ul className="mt-3 text-sm text-gray-300 space-y-1">
                {i.cases.map(c=> <li key={c}>• {c}</li>)}
              </ul>
              <div className="mt-4 text-sm text-primaryFrom font-semibold">Explore Solutions →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
