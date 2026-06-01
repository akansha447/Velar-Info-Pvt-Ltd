"use client"
import { motion } from 'framer-motion'

const steps = [
    { title: 'Discover', detail: 'Browse open roles, explore our company culture, and find the position that matches your strengths.' },
    { title: 'Connect', detail: 'Submit your application, and our talent team will schedule a conversation to learn more about your goals.' },
    { title: 'Solve', detail: 'Complete a practical exercise or case discussion that reflects the kind of work we do daily.' },
    { title: 'Join', detail: 'Receive an offer, get onboarded quickly, and start building AI products for clients and internal innovation.' },
]

export default function HiringProcess() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
        >
            <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Hiring flow</p>
                <h2 className="mt-3 text-3xl font-extrabold text-white">A fast, clear process built for working professionals.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                {steps.map((step) => (
                    <div key={step.title} className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-soft">
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{step.title}</p>
                        <p className="mt-4 text-slate-300 leading-7">{step.detail}</p>
                    </div>
                ))}
            </div>
        </motion.section>
    )
}
