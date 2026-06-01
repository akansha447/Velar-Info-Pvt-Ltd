"use client"
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { howItWorks } from '../lib/constants'

export default function HowItWorks() {
    return (
        <section className="px-6 py-20 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">From Onboarding to AI in 3 Simple Steps</p>
                    <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">From Onboarding to AI in 3 Simple Steps</h2>
                </div>

                <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    {howItWorks.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <div key={step.step} className="relative flex-1 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl">
                                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-950 text-cyan-200 shadow-glow">
                                    <Icon size={24} />
                                </div>
                                <div className="mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">{step.step}</div>
                                <h3 className="mt-4 text-2xl font-semibold text-white">{step.title}</h3>
                                <p className="mt-4 text-slate-300 leading-7">{step.description}</p>
                                {index < howItWorks.length - 1 ? (
                                    <div className="hidden lg:absolute lg:right-[-3.5rem] lg:top-1/2 lg:flex lg:h-24 lg:w-24 lg:-translate-y-1/2 lg:items-center lg:justify-center">
                                        <span className="hidden lg:inline-flex h-px w-20 bg-white/10" />
                                        <ArrowRight className="mx-2 text-cyan-300" size={24} />
                                        <span className="hidden lg:inline-flex h-px w-20 bg-white/10" />
                                    </div>
                                ) : null}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
