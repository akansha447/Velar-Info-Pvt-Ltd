"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { servicesData } from '../lib/constants'

const serviceImages = [
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
]

const proofPoints = [
  'Discovery and workflow mapping',
  'Secure AI architecture',
  'Production deployment and support',
]

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white px-6 py-24 text-slate-950 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[.86fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-700">Services</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[1.04] tracking-normal text-slate-950 sm:text-6xl">
              Building the future of your business, today.
            </h2>
          </div>
          <p className="max-w-2xl text-base font-semibold leading-8 text-slate-600 lg:ml-auto">
            Your existing service pages are now reflected directly on the homepage. Each capability links to its dedicated page and keeps Velar Info&apos;s AI-first positioning intact.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[.82fr_1.18fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="relative min-h-[560px] overflow-hidden border border-slate-950/10 bg-slate-950 text-white shadow-soft"
          >
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1100&q=80"
              alt="Velar Info team planning an AI product"
              className="absolute inset-0 h-full w-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,.12),rgba(2,6,23,.94)),radial-gradient(circle_at_20%_15%,rgba(34,211,238,.28),transparent_28%)]" />
            <div className="relative flex h-full min-h-[560px] flex-col justify-between p-7 sm:p-9">
              <div className="grid grid-cols-3 gap-3">
                {['AI', 'UX', 'Cloud'].map((item) => (
                  <span key={item} className="border border-white/10 bg-white/10 px-3 py-3 text-xs font-black uppercase tracking-[0.18em] text-white/72">
                    {item}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-200">Delivery Model</p>
                <h3 className="mt-4 max-w-xl text-3xl font-black leading-tight sm:text-4xl">
                  From business problem to working AI system.
                </h3>
                <div className="mt-7 grid gap-3">
                  {proofPoints.map((point) => (
                    <div key={point} className="flex items-center gap-3 border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white/82 backdrop-blur">
                      <CheckCircle2 size={18} className="text-cyan-200" />
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
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="group overflow-hidden border border-slate-950/10 bg-white shadow-[0_18px_60px_rgba(15,23,42,.07)] transition duration-300 hover:-translate-y-1 hover:border-orange-600/60 hover:shadow-soft"
                >
                  <Link href={service.href ?? '#'} className="block">
                    <div className="relative h-40 overflow-hidden bg-slate-950">
                      <img src={serviceImages[index]} alt="" className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,.05),rgba(2,6,23,.64))]" />
                      <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center bg-white text-orange-700">
                        <Icon size={22} />
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-black leading-snug text-slate-950">{service.title}</h3>
                        <ArrowUpRight size={20} className="shrink-0 text-slate-400 transition group-hover:text-orange-700" />
                      </div>
                      <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
                      <span className="mt-6 inline-flex text-sm font-black text-slate-950 transition group-hover:text-orange-700">
                        Explore service
                      </span>
                    </div>
                  </Link>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
