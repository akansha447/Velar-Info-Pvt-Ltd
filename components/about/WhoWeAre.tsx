"use client"
import { motion } from 'framer-motion'
import { aboutMetrics } from '../../lib/constants'

export default function WhoWeAre() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]"
        >
            <div className="space-y-6">
                <h2 className="text-3xl font-extrabold text-white">Who We Are</h2>
                <p className="max-w-xl text-base leading-8 text-slate-300">
                    Velar Info Pvt LTD is an Indian AI technology company specializing in Conversational AI, Intelligent Automation, Voice AI, and Custom AI Development. We partner with enterprises, SMBs, startups, and government organizations to deploy AI that drives real business outcomes.
                </p>
                <p className="max-w-xl text-base leading-8 text-slate-300">
                    We don't just build AI tools — we build AI that works inside your existing systems, understands your industry, and operates reliably at scale.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                {aboutMetrics.map((metric) => (
                    <div key={metric.label} className="glass-card rounded-[1.75rem] border border-white/10 p-6 text-center shadow-soft">
                        <p className="text-4xl font-semibold text-white">{metric.value}</p>
                        <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-400">{metric.label}</p>
                    </div>
                ))}
            </div>
        </motion.section>
    )
}
