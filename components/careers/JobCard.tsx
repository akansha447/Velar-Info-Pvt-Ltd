"use client"
import { motion } from 'framer-motion'

interface JobCardProps {
    title: string
    location: string
    type: string
    description: string
    link: string
}

export default function JobCard({ title, location, type, description, link }: JobCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-soft"
        >
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{location} · {type}</p>
                </div>
                <a href={link} className="rounded-full border border-cyan-300/20 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10">
                    Apply
                </a>
            </div>
            <p className="mt-5 text-slate-300 leading-7">{description}</p>
        </motion.div>
    )
}
