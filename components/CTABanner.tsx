"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTABanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative overflow-hidden bg-[#f8faf7] px-6 py-20 text-slate-950 sm:px-8 lg:px-10"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(249,115,22,.12),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(20,184,166,.16),transparent_26%)]" />
      <div className="relative mx-auto max-w-6xl border border-slate-950/10 bg-white p-8 shadow-[0_24px_90px_rgba(15,23,42,.10)] sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-teal-700">Contact</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
              Ready to build the AI system your team actually needs?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Book a free 30-minute consultation and leave with a practical AI roadmap for chatbots, voice automation, or custom enterprise systems.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
            <Link href="/company/contact" className="inline-flex items-center justify-center bg-slate-950 px-6 py-3 text-sm font-black text-white shadow-glow transition hover:bg-orange-700">
              Book Free Demo
            </Link>
            <Link href="/company/contact" className="inline-flex items-center justify-center border border-slate-950/10 bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:border-orange-700 hover:text-orange-700">
              Talk to an Expert
            </Link>
          </div>
        </div>

        <p className="mt-8 border-t border-slate-950/10 pt-6 text-center text-sm text-slate-500">Proudly made in India. Serving clients across India and globally.</p>
      </div>
    </motion.section>
  )
}
