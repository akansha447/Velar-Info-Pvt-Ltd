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
            className="bg-white px-6 py-20 text-slate-950 sm:px-8 lg:px-10 lg:py-28"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-teal-700">Why Velar</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
                            Built for real deployment, not showroom AI.
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto">
                        We focus on measurable workflows, India-first language needs, and practical integration choices that make AI easier to adopt.
                    </p>
                </div>

                <div className="mt-12 overflow-hidden border border-slate-950/10 bg-white shadow-soft">
                    <div className="grid grid-cols-1 gap-0 divide-y divide-slate-950/10 md:grid-cols-[1.8fr_1fr_1fr] md:divide-y-0 md:divide-x">
                        <div className="bg-[#f5f1ea] p-6 text-slate-700">
                            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Feature</div>
                        </div>
                        <div className="bg-[#f5f1ea] p-6 text-slate-700">
                            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">Velar Info</div>
                        </div>
                        <div className="bg-[#f5f1ea] p-6 text-slate-700">
                            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Typical Vendors</div>
                        </div>
                    </div>
                    {comparisonRows.map((row) => (
                        <div key={row.feature} className="grid grid-cols-1 gap-0 divide-y divide-slate-950/10 border-t border-slate-950/10 bg-white md:grid-cols-[1.8fr_1fr_1fr] md:divide-y-0 md:divide-x">
                            <div className="p-6 font-semibold text-slate-950">{row.feature}</div>
                            <div className="p-6 text-slate-700">{row.velar}</div>
                            <div className="p-6 text-slate-600">{row.other}</div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
