"use client"
import { motion } from 'framer-motion'

const perks = [
    'Flexible work hours',
    'Remote and hybrid-friendly',
    'Learning stipend and certifications',
    'Fast growth career ladder',
    'Health coverage and wellness support',
    'Meaningful AI projects with real clients',
]

export default function PerksGrid() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
        >
            <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Why join us</p>
                <h2 className="mt-3 text-3xl font-extrabold text-white">Benefits designed for high-growth AI talent.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {perks.map((perk) => (
                    <div key={perk} className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-soft">
                        <p className="text-lg font-semibold text-white">{perk}</p>
                    </div>
                ))}
            </div>
        </motion.section>
    )
}
