"use client"
import { motion } from 'framer-motion'
import { comparisonRows } from '../lib/constants'

export default function WhyVelar() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="px-6 py-20 sm:px-8 lg:px-10"
        >
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Why Choose Velar Info Over Others?</p>
                    <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Why Choose Velar Info Over Others?</h2>
                </div>

                <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-soft backdrop-blur-xl">
                    <div className="grid grid-cols-1 gap-0 divide-y divide-white/10 md:grid-cols-[1.8fr_1fr_1fr] md:divide-y-0 md:divide-x">
                        <div className="bg-slate-950/60 p-6 text-slate-300">
                            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Feature</div>
                        </div>
                        <div className="bg-slate-950/40 p-6 text-slate-300">
                            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Velar Info ✅</div>
                        </div>
                        <div className="bg-slate-950/40 p-6 text-slate-300">
                            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Other AI Vendors ❌</div>
                        </div>
                    </div>
                    {comparisonRows.map((row) => (
                        <div key={row.feature} className="grid grid-cols-1 gap-0 divide-y divide-white/10 bg-slate-950/30 md:grid-cols-[1.8fr_1fr_1fr] md:divide-y-0 md:divide-x">
                            <div className="p-6 text-white">{row.feature}</div>
                            <div className="p-6 text-slate-200">{row.velar}</div>
                            <div className="p-6 text-slate-200">{row.other}</div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
