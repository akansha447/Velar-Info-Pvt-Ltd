"use client"
import { motion } from 'framer-motion'
import { solutionCards } from '../lib/constants'

export default function Solutions() {
    return (
        <section className="bg-white px-6 py-20 text-slate-950 sm:px-8 lg:px-10 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-700">Solutions</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
                            The results that change the way teams work.
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto">
                        Velar designs AI systems around your operating model, industry constraints, and the teams who need to use them every day.
                    </p>
                </div>

                <div className="mt-12 grid gap-5 xl:grid-cols-3">
                    {solutionCards.map((solution, index) => {
                        const Icon = solution.icon
                        return (
                            <motion.div
                                key={solution.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.08 }}
                                className="border border-slate-950/10 bg-[#f5f1ea] p-8 shadow-[0_18px_60px_rgba(15,23,42,.08)] transition hover:-translate-y-1 hover:border-slate-950/50"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="inline-flex h-14 w-14 items-center justify-center bg-slate-950 text-white shadow-glow">
                                        <Icon size={24} />
                                    </div>
                                    <span className="text-sm font-black uppercase tracking-[0.22em] text-slate-400">0{index + 1}</span>
                                </div>
                                <h3 className="mt-7 text-2xl font-black leading-tight text-slate-950">{solution.title}</h3>
                                <p className="mt-4 leading-7 text-slate-600">{solution.description}</p>
                                <ul className="mt-6 space-y-3 text-slate-700">
                                    {solution.bullets.map((bullet) => (
                                        <li key={bullet} className="flex gap-3 text-sm leading-6">
                                            <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center bg-white text-orange-700">✓</span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-8 inline-flex items-center gap-2 text-sm font-black text-slate-950 transition hover:text-orange-700">
                                    {solution.cta}
                                </button>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
