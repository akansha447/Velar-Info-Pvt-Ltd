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
      className="relative overflow-hidden bg-[#f8faf7] px-6 py-24 text-slate-950 sm:px-8 lg:px-10"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(249,115,22,.10),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(20,184,166,.14),transparent_26%)]" />
      <div className="relative mx-auto max-w-7xl overflow-hidden border border-slate-950/10 bg-white shadow-[0_24px_90px_rgba(15,23,42,.10)]">
        <div className="grid lg:grid-cols-[1.05fr_.95fr]">
          <div className="p-8 sm:p-12 lg:p-14">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-teal-700">Contact</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
              Ready to build the AI system your team actually needs?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Book a free 30-minute consultation and leave with a practical AI roadmap for chatbots, voice automation, or custom enterprise systems.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/company/contact" className="inline-flex items-center justify-center bg-slate-950 px-6 py-3 text-sm font-black text-white shadow-glow transition hover:bg-orange-700">
                Book Free Demo
              </Link>
              <Link href="/company/contact" className="inline-flex items-center justify-center border border-slate-950/10 bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:border-orange-700 hover:text-orange-700">
                Talk to an Expert
              </Link>
            </div>

            <p className="mt-8 border-t border-slate-950/10 pt-6 text-sm font-semibold text-slate-500">
              Proudly made in India. Serving clients across India and globally.
            </p>
          </div>

          <div className="relative min-h-[360px] bg-slate-950 lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"
              alt="AI technology visualization for digital transformation"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,.10),rgba(2,6,23,.76)),radial-gradient(circle_at_28%_20%,rgba(34,211,238,.32),transparent_30%)]" />
            <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {['AI Strategy', 'Automation', 'Secure Rollout'].map((item) => (
                <div key={item} className="border border-white/10 bg-white/10 p-4 text-white backdrop-blur-xl">
                  <span className="block text-sm font-black">{item}</span>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.16em] text-white/58">Velar Info Pvt LTD</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
