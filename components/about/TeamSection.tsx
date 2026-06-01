"use client"
import { motion } from 'framer-motion'

const team = [
    {
        name: 'Akansha Verma',
        role: 'Founder & CEO',
        bio: 'Leads product strategy, AI partnerships, and enterprise innovation for Velar Info.',
    },
    {
        name: 'Mihir Sharma',
        role: 'Head of Solutions',
        bio: 'Architects custom AI systems that integrate with business workflows and automation pipelines.',
    },
    {
        name: 'Sneha Gupta',
        role: 'Client Success Lead',
        bio: 'Drives customer value, onboarding, and AI performance outcomes across every engagement.',
    },
]

export default function TeamSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
        >
            <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Leadership</p>
                <h2 className="mt-3 text-3xl font-extrabold text-white">Meet the team shaping AI for India.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
                {team.map((member) => (
                    <div key={member.name} className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-soft">
                        <div className="h-14 w-14 rounded-3xl bg-slate-900/80 text-white grid place-items-center text-xl font-bold">{member.name.split(' ').map((part) => part[0]).join('')}</div>
                        <h3 className="mt-5 text-xl font-semibold text-white">{member.name}</h3>
                        <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">{member.role}</p>
                        <p className="mt-4 text-slate-300 leading-7">{member.bio}</p>
                    </div>
                ))}
            </div>
        </motion.section>
    )
}
