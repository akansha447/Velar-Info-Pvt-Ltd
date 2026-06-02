"use client"

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  Layers,
  LineChart,
  ShieldCheck,
} from 'lucide-react'

const heroSlides = [
  {
    eyebrow: 'Intelligent Transformation',
    title: 'AI-Powered Products: Smart Technology. Simple Solutions. Meaningful Impact.',
    body: 'We design AI platforms, automation systems, and customer-facing digital products that turn complex business operations into simple, measurable outcomes.',
    cta: 'Explore AI',
    accent: '#f97316',
    icon: BrainCircuit,
  },
  {
    eyebrow: 'Enterprise AI Engineering',
    title: 'We do not just predict the future. We help you build it.',
    body: 'From discovery to deployment, Velar Info builds secure AI workflows, voice agents, and intelligent dashboards for teams that need production-ready results.',
    cta: 'View Services',
    accent: '#14b8a6',
    icon: Layers,
  },
  {
    eyebrow: 'Real-World Blueprints',
    title: 'Strategies engineered for tangible business impact.',
    body: 'Every solution is mapped to workflows, integrations, governance, and user adoption so your AI investment becomes a working business advantage.',
    cta: 'See Solutions',
    accent: '#eab308',
    icon: LineChart,
  },
]

const capabilityCards = [
  'AI Chatbots',
  'Voice AI Agents',
  'Automation Workflows',
  'Custom AI Platforms',
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = heroSlides[activeSlide]
  const SlideIcon = slide.icon

  const panelGradient = useMemo(
    () => ({
      background: `radial-gradient(circle at 24% 18%, ${slide.accent}24, transparent 30%), linear-gradient(135deg, #ffffff, #eef7f4)`,
    }),
    [slide.accent]
  )

  const goToSlide = (direction: number) => {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative -mt-[76px] min-h-screen overflow-hidden bg-[#f8faf7] px-4 pb-6 pt-24 text-slate-950 sm:px-6 lg:px-10">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,#ffffff_0%,#f7f1e8_38%,#e8f5f2_72%,#ffffff_100%)]" />
      <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(15,23,42,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.07)_1px,transparent_1px)] [background-size:58px_58px]" />
      <div className="absolute -right-24 top-20 h-72 w-72 rotate-12 border-[36px] border-teal-600/10" />
      <div className="absolute -left-20 bottom-20 h-64 w-64 rotate-12 border-[28px] border-orange-500/10" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.28)_0%,rgba(248,250,247,.94)_92%)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-3xl pt-8 lg:pt-0"
        >
          <div className="inline-flex border border-slate-950/10 bg-white/75 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-teal-700 shadow-[0_12px_40px_rgba(15,23,42,.06)] backdrop-blur">
            {slide.eyebrow}
          </div>

          <h1 className="mt-8 text-balance text-4xl font-black leading-[1.03] tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
            {slide.title}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {slide.body}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#services"
              className="inline-flex w-fit items-center gap-3 bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
            >
              {slide.cta}
              <ArrowUpRight size={18} />
            </a>
            <a
              href="/company/contact"
              className="inline-flex w-fit items-center gap-3 border border-slate-950/15 bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:border-teal-700 hover:text-teal-800"
            >
              Let&apos;s Talk
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>

        <div className="relative min-h-[500px] lg:min-h-[660px]">
          <motion.div
            key={`${activeSlide}-visual`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute inset-0 border border-slate-950/10 bg-white/80 p-4 shadow-[0_34px_100px_rgba(15,23,42,.14)] backdrop-blur"
          >
            <div className="relative h-full overflow-hidden border border-slate-950/10" style={panelGradient}>
              <img
                src="/images/services-wave-bg.svg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,.06)_1px,transparent_1px),linear-gradient(rgba(15,23,42,.06)_1px,transparent_1px)] [background-size:44px_44px]" />

              <div className="absolute left-6 top-6 flex items-center gap-3 border border-slate-950/10 bg-white/85 px-4 py-3 shadow-[0_14px_50px_rgba(15,23,42,.08)] backdrop-blur">
                <span className="flex h-10 w-10 items-center justify-center bg-slate-950 text-white">
                  <SlideIcon size={22} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Velar AI Studio</p>
                  <p className="text-sm font-semibold text-slate-950">Live strategy board</p>
                </div>
              </div>

              <div className="absolute bottom-24 left-6 right-6 grid gap-3 md:grid-cols-2">
                {capabilityCards.map((item, index) => (
                  <div key={item} className="border border-slate-950/10 bg-white/88 p-4 shadow-[0_14px_50px_rgba(15,23,42,.08)] backdrop-blur">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">0{index + 1}</span>
                      <span className="h-2 w-12 bg-slate-200">
                        <span className="block h-full" style={{ width: index === activeSlide ? '100%' : '45%', backgroundColor: index === activeSlide ? slide.accent : '#cbd5e1' }} />
                      </span>
                    </div>
                    <p className="text-lg font-bold text-slate-950">{item}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">Designed for secure deployment, adoption, and scale.</p>
                  </div>
                ))}
              </div>

              <div className="absolute right-6 top-28 w-64 border border-slate-950/10 bg-white/88 p-5 shadow-[0_14px_50px_rgba(15,23,42,.08)] backdrop-blur">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-950">
                  <ShieldCheck size={18} style={{ color: slide.accent }} />
                  Production Readiness
                </div>
                <div className="mt-5 space-y-3">
                  {['Data governance', 'Workflow mapping', 'Model monitoring'].map((item) => (
                    <div key={item} className="flex items-center justify-between text-xs uppercase tracking-[0.14em] text-slate-500">
                      <span>{item}</span>
                      <span className="h-1.5 w-16 bg-slate-200">
                        <span className="block h-full w-2/3" style={{ backgroundColor: slide.accent }} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 border border-slate-950/10 bg-white/82 p-4 shadow-[0_18px_60px_rgba(15,23,42,.08)] backdrop-blur lg:col-span-2">
          <div className="grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="flex gap-3">
              <button
                aria-label="Previous homepage slide"
                onClick={() => goToSlide(-1)}
                className="flex h-12 w-12 items-center justify-center border border-slate-950/12 text-slate-950 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                aria-label="Next homepage slide"
                onClick={() => goToSlide(1)}
                className="flex h-12 w-12 items-center justify-center border border-slate-950/12 text-slate-950 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroSlides.map((item, index) => (
                <button
                  key={item.eyebrow}
                  onClick={() => setActiveSlide(index)}
                  className={`border p-4 text-left transition ${index === activeSlide ? 'border-slate-950 bg-slate-950 text-white' : 'border-slate-950/10 bg-white text-slate-700 hover:border-teal-700'}`}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] opacity-65">0{index + 1}</span>
                  <span className="mt-2 block text-sm font-bold">{item.eyebrow}</span>
                </button>
              ))}
            </div>

            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Future-ready AI systems
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
