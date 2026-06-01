"use client"
import { motion } from 'framer-motion'
import { Eye, Target } from 'lucide-react'

const cards = [
    {
        title: 'Our Mission',
        icon: Target,
        text: 'To democratize AI for Indian businesses — making intelligent automation, conversational AI, and voice technology accessible, affordable, and impactful for organizations of every size.',
    },
    {
        title: 'Our Vision',
        icon: Eye,
        text: 'To become India’s most trusted AI partner — powering the next generation of enterprise operations with AI that is transparent, reliable, and deeply integrated into how businesses work.',
    },
]

export default function MissionVision() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="grid gap-6 lg:grid-cols-2"
        >
            {cards.map((card) => {
                const Icon = card.icon
                return (
                    <div key={card.title} className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-soft">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-primaryFrom via-primaryMid to-primaryTo text-white shadow-glow">
                            <Icon size={24} />
                        </div>
                        <h3 className="mt-6 text-2xl font-semibold text-white">{card.title}</h3>
                        <p className="mt-4 text-slate-300 leading-7">{card.text}</p>
                    </div>
                )
            })}
        </motion.section>
    )
}
