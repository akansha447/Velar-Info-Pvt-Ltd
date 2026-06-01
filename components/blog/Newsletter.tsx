"use client"
import { motion } from 'framer-motion'

export default function Newsletter() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-soft"
        >
            <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">Stay informed</p>
                <h2 className="mt-4 text-3xl font-extrabold text-white">Get the latest AI trends delivered weekly.</h2>
                <p className="mt-4 text-slate-300 leading-7">Subscribe for strategy-focused updates on AI automation, voice assistants, and customer experience innovation.</p>
            </div>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row">
                <input type="email" placeholder="Your email address" className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-white outline-none transition focus:border-cyan-400/60" />
                <button type="submit" className="inline-flex shrink-0 items-center justify-center rounded-3xl bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                    Subscribe
                </button>
            </form>
        </motion.section>
    )
}
