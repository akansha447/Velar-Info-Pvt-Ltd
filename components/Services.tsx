"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { servicesData } from '../lib/constants'

const proofPoints = [
  'Production-ready integrations',
  'Secure data handling',
  'Clear delivery ownership',
]

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white px-6 py-20 text-slate-950 sm:px-8 lg:px-10 lg:py-28">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(135deg,transparent,rgba(20,184,166,.10))]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-700">Services</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Your partner in high-impact AI services.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto">
            We take ownership of strategy, delivery, stability, and adoption so every AI system works under real business pressure, not just in a demo.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="relative min-h-[460px] overflow-hidden border border-slate-950/10 bg-[#f5f1ea] text-slate-950 shadow-[0_24px_90px_rgba(15,23,42,.10)]"
          >
            <img
              src="/images/services-wave-bg.svg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-22"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.15),rgba(245,241,234,.94)),linear-gradient(120deg,rgba(249,115,22,.16),transparent_46%)]" />
            <div className="relative flex h-full min-h-[460px] flex-col justify-between p-7 sm:p-9">
              <div className="grid grid-cols-3 gap-3">
                {['01', '02', '03'].map((item) => (
                  <span key={item} className="border border-slate-950/10 bg-white px-3 py-3 text-xs font-bold text-slate-500">
                    {item}
                  </span>
                ))}
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange-700">Delivery Model</p>
                <h3 className="mt-4 max-w-xl text-3xl font-black leading-tight sm:text-4xl">
                  From business problem to working AI system.
                </h3>
                <div className="mt-7 grid gap-3">
                  {proofPoints.map((point) => (
                    <div key={point} className="flex items-center gap-3 border border-slate-950/10 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                      <CheckCircle2 size={18} className="text-teal-700" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {servicesData.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group border border-slate-950/10 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,.08)] transition duration-300 hover:-translate-y-1 hover:border-slate-950/55"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center bg-teal-700 text-white transition group-hover:bg-orange-700">
                      <Icon size={22} />
                    </span>
                    <ArrowUpRight size={20} className="text-slate-400 transition group-hover:text-orange-700" />
                  </div>
                  <h3 className="mt-6 text-xl font-black leading-snug text-slate-950">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
                  <Link href={service.href ?? '#'} className="mt-6 inline-flex text-sm font-black text-slate-950 transition hover:text-orange-700">
                    Explore service
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
