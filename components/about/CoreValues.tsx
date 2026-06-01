"use client"
import { motion } from 'framer-motion'
import { coreValues } from '../../lib/constants'

export default function CoreValues() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
        >
            <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">What We Stand For</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {coreValues.map((value) => {
                    const Icon = value.icon
                    return (
                        <div key={value.title} className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-soft">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-primaryFrom via-primaryMid to-primaryTo text-white shadow-glow">
                                <Icon size={20} />
                            </div>
                            <h3 className="mt-5 text-xl font-semibold text-white">{value.title}</h3>
                            <p className="mt-3 text-slate-300 leading-7">{value.description}</p>
                        </div>
                    )
                })}
            </div>
        </motion.section>
    )
}
