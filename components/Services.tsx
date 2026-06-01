"use client"
import { motion } from 'framer-motion'
import { servicesData } from '../lib/constants'
import Link from 'next/link'

const pillStyles = [
    'border-pink-400 text-pink-300 shadow-[0_0_28px_rgba(236,72,153,0.55)] lg:left-[7%] lg:top-[26%]',
    'border-yellow-300 text-yellow-200 shadow-[0_0_28px_rgba(250,204,21,0.45)] lg:left-[3%] lg:top-[48%]',
    'border-orange-400 text-orange-300 shadow-[0_0_28px_rgba(251,146,60,0.45)] lg:left-[14%] lg:bottom-[16%]',
    'border-cyan-300 text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.5)] lg:right-[7%] lg:top-[26%]',
    'border-emerald-300 text-emerald-300 shadow-[0_0_28px_rgba(52,211,153,0.45)] lg:right-[4%] lg:top-[48%]',
    'border-purple-300 text-purple-200 shadow-[0_0_28px_rgba(168,85,247,0.5)] lg:right-[16%] lg:bottom-[16%]',
]

const shortServiceNames = [
    'AI Chatbots',
    'AI Agents & Workflows',
    'Voice & Conversational AI',
    'Custom AI',
    'AI Consulting',
]

export default function Services() {
    const generativeAI = servicesData.find((service) => service.href === '/services/generative-ai')
    const orbitServices = servicesData.filter((service) => service.href !== '/services/generative-ai')

    return (
        <section id="services" className="relative overflow-hidden bg-black px-6 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_42%,rgba(236,72,153,0.18),transparent_24%),radial-gradient(circle_at_84%_48%,rgba(34,211,238,0.16),transparent_24%),linear-gradient(180deg,rgba(3,7,18,0.25),#000_90%)]" />
            <div className="absolute -left-28 bottom-8 hidden h-80 w-80 rotate-[-32deg] rounded-[3rem] border-[42px] border-cyan-950/70 lg:block" />

            <div className="relative mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.34em] text-cyan-300">
                        One Platform. Six AI Solutions.
                    </p>
                    <h2 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                        Our{' '}
                        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                            AI Transformation
                        </span>{' '}
                        Services
                    </h2>
                </motion.div>

                <div className="relative mt-12 min-h-[560px] lg:mt-16">
                    <div className="pointer-events-none absolute left-1/2 top-[45%] hidden h-[520px] w-[360px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2.5rem] shadow-[0_0_80px_rgba(236,72,153,0.22)] lg:block">
                        <img
                            src="/images/services-wave-bg.svg"
                            alt=""
                            aria-hidden="true"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="pointer-events-none absolute left-1/2 top-[45%] hidden h-[520px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] bg-gradient-to-b from-transparent via-black/5 to-black/35 lg:block" />

                    <div className="pointer-events-none mx-auto mb-8 h-[420px] max-w-[330px] overflow-hidden rounded-[2rem] shadow-[0_0_54px_rgba(236,72,153,0.2)] lg:hidden">
                        <img
                            src="/images/services-wave-bg.svg"
                            alt=""
                            aria-hidden="true"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:block">
                        {orbitServices.map((service, index) => {
                            const Icon = service.icon
                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: index * 0.08 }}
                                    className={`lg:absolute ${pillStyles[index] ?? pillStyles[0]}`}
                                >
                                    <Link
                                        href={service.href ?? '#'}
                                        className="group flex min-h-[64px] items-center gap-3 rounded-full border-4 bg-black/70 px-5 py-3 text-lg font-semibold backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-950 sm:px-6 sm:text-xl"
                                    >
                                        <Icon size={22} />
                                        <span>{shortServiceNames[index] ?? service.title}</span>
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </div>

                    {generativeAI ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="mt-8 flex justify-center lg:absolute lg:left-1/2 lg:top-[42%] lg:mt-0 lg:-translate-x-1/2 lg:-translate-y-1/2"
                        >
                            <Link
                                href={generativeAI.href ?? '#'}
                                className="inline-flex items-center gap-2 rounded-full border-4 border-pink-500 bg-black px-7 py-4 text-xl font-bold text-white shadow-[0_0_42px_rgba(217,70,239,0.7)] transition duration-300 hover:scale-105 hover:bg-white hover:text-slate-950"
                            >
                                Generative AI <span aria-hidden="true">&gt;</span>
                            </Link>
                        </motion.div>
                    ) : null}

                    <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-8 text-slate-300 lg:absolute lg:bottom-4 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2">
                        Explore Velar Info services built for automation, customer conversations, knowledge systems, and custom AI products.
                    </p>
                </div>
            </div>
        </section>
    )
}
