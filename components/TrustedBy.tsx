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
      className="relative overflow-hidden bg-[#f8faf7] px-6 py-16 text-slate-950 sm:px-8 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-teal-700">Partnerships</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
              Driving solutions through strong partnerships
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto">
            We work with teams that want practical AI adoption: faster support, sharper operations, cleaner workflows, and smarter customer experiences.
          </p>
        </div>

        <div className="relative overflow-hidden border border-slate-950/10 bg-white p-6 shadow-soft">
          <div className="ticker">
            {trustLogos.concat(trustLogos).map((logo, index) => (
              <div key={`${logo}-${index}`} className="min-w-[14rem] border border-slate-950/10 bg-[#f5f1ea] px-6 py-4 text-center text-sm font-bold text-slate-700 shadow-glow">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
