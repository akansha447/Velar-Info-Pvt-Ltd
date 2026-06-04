"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, BrainCircuit, Layers, LineChart, ShieldCheck } from 'lucide-react'

const featureCards = [
  {
    eyebrow: 'Intelligent Transformation',
    title: 'AI products built for real-world operations',
    body: 'Automate decisions, support, documents, and internal workflows with production-ready AI systems.',
    href: '/services/generative-ai',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
  },
  {
    eyebrow: 'Real-World Blueprints',
    title: 'Strategies engineered for tangible results',
    body: 'We turn broad ideas into clear roadmaps, secure integrations, and measurable delivery milestones.',
    href: '/services/ai-consulting',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
  },
  {
    eyebrow: 'Trusted Delivery',
    title: 'AI adoption with enterprise control',
    body: 'Governance, handoff rules, monitoring, and secure architecture are built into every engagement.',
    href: '/company/about-us',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
  },
]

const stats = [
  { value: '500+', label: 'Clients served' },
  { value: '10M+', label: 'AI interactions handled' },
  { value: '95%', label: 'Automation accuracy' },
  { value: '24/7', label: 'AI support coverage' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="relative flex min-h-screen items-end overflow-hidden px-6 pb-10 pt-36 sm:px-8 lg:px-10">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-65 saturate-75"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80"
        >
          <source src="https://cdn.coverr.co/videos/coverr-typing-on-computer-keyboard-5634/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(37,99,235,.34),transparent_28%),linear-gradient(90deg,rgba(2,6,23,.98),rgba(2,6,23,.76)_48%,rgba(2,6,23,.34)),linear-gradient(180deg,rgba(2,6,23,.22),rgba(2,6,23,.96))]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-5xl"
          >
            <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-400">
              AI-Powered Products. Smart Technology. Meaningful Impact.
            </p>
            <h1 className="mt-6 max-w-6xl text-5xl font-black leading-[.94] tracking-normal text-white sm:text-7xl lg:text-8xl">
              We build intelligent digital products for ambitious teams.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/74 sm:text-xl">
              Velar Info designs AI chatbots, voice agents, automation workflows, and custom AI platforms that turn complex operations into measurable business outcomes.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/company/contact" className="inline-flex w-fit items-center gap-3 bg-orange-600 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-orange-700">
                Let&apos;s Connect
                <ArrowUpRight size={18} />
              </Link>
              <Link href="/#services" className="inline-flex w-fit items-center gap-3 border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-300">
                Explore Services
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="grid gap-3 border border-white/10 bg-white/10 p-4 backdrop-blur-xl"
          >
            {[
              { icon: BrainCircuit, label: 'AI Strategy', text: 'Roadmaps tied to business outcomes' },
              { icon: Layers, label: 'System Integration', text: 'CRM, ERP, helpdesk, and data workflows' },
              { icon: ShieldCheck, label: 'Enterprise Control', text: 'Governance, monitoring, and secure handoffs' },
              { icon: LineChart, label: 'Measurable ROI', text: 'Adoption metrics and continuous optimization' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="grid grid-cols-[auto_1fr] gap-4 border border-white/10 bg-slate-950/40 p-4">
                  <span className="flex h-11 w-11 items-center justify-center bg-cyan-300 text-slate-950">
                    <Icon size={21} />
                  </span>
                  <span>
                    <span className="block text-base font-black text-white">{item.label}</span>
                    <span className="mt-1 block text-sm leading-6 text-white/62">{item.text}</span>
                  </span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>

      <div className="border-y border-white/10 bg-slate-950/96 px-6 py-0 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-0 py-6 sm:px-6">
              <strong className="block text-4xl font-black text-white">{stat.value}</strong>
              <span className="mt-2 block text-sm font-bold uppercase tracking-[0.16em] text-white/52">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-950 px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {featureCards.map((card, index) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative min-h-[430px] overflow-hidden border border-white/10 bg-slate-900"
            >
              <img src={card.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,.08),rgba(2,6,23,.92))]" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">0{index + 1} / {card.eyebrow}</span>
                <h2 className="mt-4 text-3xl font-black leading-tight text-white">{card.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/68">{card.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-white">
                  Explore
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
