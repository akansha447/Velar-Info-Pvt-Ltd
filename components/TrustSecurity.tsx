export default function TrustSecurity(){
  const cards = [
    {title:'Controlled Autonomy',desc:'Fine-grained policies and guards.'},
    {title:'Full Auditability',desc:'Complete action trails and logs.'},
    {title:'Role-Based Access',desc:'Secure access and approvals.'},
    {title:'Explainability',desc:'Traceable decisions and reasons.'},
  ]
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6">Agentic AI You Can Trust</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {cards.map(c=> (
            <div key={c.title} className="glass-card p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-lg font-semibold text-white">{c.title}</h3>
              <p className="text-gray-300 mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
