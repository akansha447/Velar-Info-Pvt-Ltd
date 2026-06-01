"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'

interface BlogCardProps {
    title: string
    summary: string
    category: string
    slug: string
}

export default function BlogCard({ title, summary, category, slug }: BlogCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="glass-card group rounded-[2rem] border border-white/10 p-6 shadow-soft transition hover:-translate-y-1 hover:border-cyan-300/30"
        >
            <div className="flex items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{category}</p>
                <span className="text-xs uppercase tracking-[0.28em] text-slate-400">Read</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
            <p className="mt-4 text-slate-300 leading-7">{summary}</p>
            <Link href={`/company/blog/${slug}`} className="mt-6 inline-flex text-sm font-semibold text-cyan-300 transition group-hover:text-white">
                Read article →
            </Link>
        </motion.article>
    )
}
