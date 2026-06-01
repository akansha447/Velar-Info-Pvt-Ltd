"use client"
import { ServerCog, Cpu, Brain, MessageSquare, ShieldAlert, BarChart2 } from 'lucide-react'

const cards = [
  {icon:<ServerCog/>,title:'Orchestration Core',desc:'The control plane for agent collaboration'},
  {icon:<Cpu/>,title:'Execution Layer',desc:'Where intelligence turns into action'},
  {icon:<Brain/>,title:'Intelligence Layer',desc:'Contextual reasoning using enterprise data'},
  {icon:<MessageSquare/>,title:'Multichannel Interface',desc:'Chat, Voice, Email, Documents'},
  {icon:<ShieldAlert/>,title:'Governance & Risk Layer',desc:'Bounded autonomy and audit trails'},
  {icon:<BarChart2/>,title:'Observability Layer',desc:'Real-time visibility into agent actions'},
]

export default function PlatformOverview(){
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">One Platform. Many AI Agents. Real Enterprise Work.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map(c=> (
            <div key={c.title} className="glass-card p-6 rounded-lg hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 text-primaryFrom">{c.icon}</div>
              <h3 className="text-lg font-semibold text-white mt-3">{c.title}</h3>
              <p className="mt-2 text-gray-300">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
