"use client"
import { motion } from 'framer-motion'
import { trustLogos } from '../lib/constants'

export default function TrustedBy() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative overflow-hidden px-6 py-16 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Trusted by Forward-Thinking Organizations</p>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Trusted by Forward-Thinking Organizations</h2>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl">
          <div className="ticker">
            {trustLogos.concat(trustLogos).map((logo, index) => (
              <div key={`${logo}-${index}`} className="min-w-[14rem] rounded-3xl border border-white/10 bg-slate-950/70 px-6 py-4 text-center text-sm text-slate-200 shadow-glow">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
