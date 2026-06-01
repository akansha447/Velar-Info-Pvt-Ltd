"use client"
import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative overflow-hidden bg-[#070b1a] px-6 py-20 sm:px-8 lg:px-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.2),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.14),_transparent_20%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/90" />
      <div className="relative mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glow backdrop-blur-xl sm:p-14">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Ready to Transform Your Business with AI?</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Book a free 30-minute AI consultation. No commitment. Just clarity.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Get expert guidance on AI chatbots, voice automation, and customized enterprise AI that accelerates growth.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
            <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primaryFrom via-primaryMid to-primaryTo px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:opacity-95">
              Book Free Demo
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-950/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-primaryMid hover:text-white">
              Talk to an Expert
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-400">🇮🇳 Proudly Made in India | Serving clients across India & globally</p>
      </div>
    </motion.section>
  )
}
