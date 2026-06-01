"use client"
import { motion } from 'framer-motion'

export default function FeaturedPost() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-[2rem] border border-white/10 p-10 shadow-soft"
        >
            <span className="inline-flex rounded-full bg-cyan-300/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
                Featured article
            </span>
            <h2 className="mt-5 text-4xl font-extrabold text-white">How conversational AI is reshaping customer support in 2026.</h2>
            <p className="mt-5 max-w-2xl text-slate-300 leading-8">
                Discover how AI-powered voice bots, intelligent routing, and contextual assistants are reducing response time, improving resolution rates, and unlocking new revenue from service operations.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200">8 min read</span>
                <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200">Productivity</span>
            </div>
        </motion.section>
    )
}
