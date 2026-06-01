"use client"
import { ArrowRight, CheckSquare } from 'lucide-react'

const steps = [
  {title:'Understand',desc:'Comprehend user intent and context.'},
  {title:'Decide',desc:'Plan actions and next steps.'},
  {title:'Act',desc:'Execute across systems securely.'},
]

export default function Workflow(){
  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">From Understanding to Execution — Responsibly</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {steps.map((s,idx)=> (
            <div key={s.title} className="flex-1 glass-card p-6 rounded-lg text-center">
              <div className="text-primaryMid mx-auto w-12 h-12 flex items-center justify-center rounded-full">{idx+1}</div>
              <h3 className="text-lg font-semibold text-white mt-4">{s.title}</h3>
              <p className="text-gray-300 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-400">Human-in-the-loop controls available at every stage.</div>
      </div>
    </section>
  )
}
