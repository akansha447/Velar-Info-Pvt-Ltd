"use client"
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { heroBullets, heroStats } from '../lib/constants'

const counterTick = (start: number, end: number, duration: number, onUpdate: (value: number) => void) => {
  let startTime: number | null = null
  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp
    const progress = Math.min((timestamp - startTime) / duration, 1)
    const current = Math.floor(progress * (end - start) + start)
    onUpdate(current)
    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }
  requestAnimationFrame(step)
}

export default function Hero() {
  const [values, setValues] = useState<number[]>(heroStats.map(() => 0))
  const statsRef = useRef<HTMLDivElement | null>(null)
  const animatedRef = useRef(false)

  useEffect(() => {
    if (!statsRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!animatedRef.current && entry.isIntersecting) {
          animatedRef.current = true
          heroStats.forEach((stat, index) => {
            counterTick(0, stat.value, 1200, (current) => {
              setValues((prev) => {
                const copy = [...prev]
                copy[index] = current
                return copy
              })
            })
          })
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10">
      <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-gradient-to-br from-primaryFrom to-primaryMid opacity-40 blur-3xl animate-float" />
      <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-gradient-to-br from-primaryTo to-primaryMid opacity-30 blur-3xl animate-float" />
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl md:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.18),_transparent_35%),radial-gradient(circle_at_30%_20%,_rgba(6,182,212,0.16),_transparent_20%)]" />
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-cyan-200">
                ✦ India's Next-Gen AI Platform
              </span>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Automate. Converse. Transform.
                <br />
                With AI Built for Your Business.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Velar Info delivers enterprise-grade AI Chatbots, Voice Agents, and Automation Workflows — helping Enterprises, SMBs, and Government bodies operate smarter and faster.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {heroBullets.map((label) => (
                  <div key={label} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-slate-950/60 p-4 shadow-glow">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primaryFrom via-primaryMid to-primaryTo text-sm font-semibold text-slate-950">
                      ✓
                    </span>
                    <p className="text-sm leading-6 text-slate-200">{label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primaryFrom via-primaryMid to-primaryTo px-7 py-3 text-sm font-semibold text-slate-950 shadow-glow transition duration-300 hover:opacity-95">
                  Explore Our Services
                </button>
                <button className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:border-primaryMid hover:text-white">
                  Book a Free Demo
                </button>
              </div>
            </div>

            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-soft backdrop-blur-2xl">
              <div className="grid gap-4 sm:grid-cols-2">
                {heroStats.map((stat, index) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-3xl font-semibold text-white">
                      {values[index]}
                      {stat.suffix}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
