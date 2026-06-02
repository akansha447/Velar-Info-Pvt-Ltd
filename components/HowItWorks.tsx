"use client"
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { howItWorks } from '../lib/constants'

export default function HowItWorks() {
    return (
        <section className="bg-[#f5f1ea] px-6 py-20 text-slate-950 sm:px-8 lg:px-10 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-teal-700">Process</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
                            We build with intent, and it shows in the rollout.
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto">
                        A clear path from discovery to scale keeps stakeholders aligned, technical risk visible, and business outcomes measurable.
                    </p>
                </div>

                <div className="mt-12 grid gap-5 lg:grid-cols-3">
                    {howItWorks.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <div key={step.step} className="relative border border-slate-950/10 bg-white p-7 shadow-soft">
                                <div className="flex items-start justify-between gap-6">
                                    <div className="inline-flex h-14 w-14 items-center justify-center bg-teal-700 text-white shadow-glow">
                                        <Icon size={24} />
                                    </div>
                                    <span className="text-5xl font-black leading-none text-slate-950/10">0{index + 1}</span>
                                </div>
                                <div className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-teal-700">{step.step}</div>
                                <h3 className="mt-4 text-2xl font-black text-slate-950">{step.title}</h3>
                                <p className="mt-4 leading-7 text-slate-600">{step.description}</p>
                                {index < howItWorks.length - 1 ? (
                                    <div className="hidden lg:absolute lg:right-[-1.5rem] lg:top-1/2 lg:z-10 lg:flex lg:h-12 lg:w-12 lg:-translate-y-1/2 lg:items-center lg:justify-center lg:bg-[#f5f1ea]">
                                        <ArrowRight className="text-orange-600" size={24} />
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
