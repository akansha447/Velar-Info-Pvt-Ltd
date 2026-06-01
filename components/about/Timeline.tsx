"use client"
import { motion } from 'framer-motion'

const steps = [
    { year: '2022', title: 'Company Founded', detail: 'Velar Info launched with the mission of delivering practical AI solutions to Indian businesses.' },
    { year: '2023', title: 'First Enterprise Deals', detail: 'Signed customer engagements across fintech, healthcare, and logistics with measurable automation value.' },
    { year: '2024', title: 'AI Product Launch', detail: 'Introduced proprietary voice and chatbot solutions for customer support and operations.' },
    { year: '2025', title: 'Growth and Expansion', detail: 'Expanded our delivery teams and launched new services for regional and global clients.' },
]

export default function Timeline() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
        >
            <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Our Journey</p>
                <h2 className="mt-3 text-3xl font-extrabold text-white">Milestones that define where we are headed.</h2>
            </div>
            <div className="space-y-6">
                {steps.map((step) => (
                    <div key={step.year} className="relative rounded-[2rem] border border-white/10 bg-slate-950/40 p-6 shadow-soft">
                        <div className="absolute -left-4 top-6 h-3.5 w-3.5 rounded-full bg-cyan-400" />
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{step.year}</p>
                        <h3 className="mt-3 text-2xl font-semibold text-white">{step.title}</h3>
                        <p className="mt-3 text-slate-300 leading-7">{step.detail}</p>
                    </div>
                ))}
            </div>
        </motion.section>
    )
}
