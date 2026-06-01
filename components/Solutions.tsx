"use client"
import { motion } from 'framer-motion'
import { solutionCards } from '../lib/constants'

export default function Solutions() {
    return (
        <section className="px-6 py-20 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">AI Solutions for Every Organization</p>
                    <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">AI Solutions for Every Organization</h2>
                </div>

                <div className="mt-12 grid gap-6 xl:grid-cols-3">
                    {solutionCards.map((solution, index) => {
                        const Icon = solution.icon
                        return (
                            <motion.div
                                key={solution.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.08 }}
                                className="glass-card rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft hover:-translate-y-1 hover:shadow-glow"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-r from-primaryFrom via-primaryMid to-primaryTo text-white shadow-glow">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                                </div>
                                <p className="mt-5 text-slate-300 leading-7">{solution.description}</p>
                                <ul className="mt-6 space-y-3 text-slate-300">
                                    {solution.bullets.map((bullet) => (
                                        <li key={bullet} className="flex gap-3 text-sm leading-6">
                                            <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-cyan-300">✓</span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white">
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
