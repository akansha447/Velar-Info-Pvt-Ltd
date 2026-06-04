"use client"

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const caseStudies = [
    {
        title: 'AI customer support transformation',
        company: 'FinTech Operations',
        summary:
            'A web and WhatsApp assistant resolved frequent questions, captured qualified leads, and routed complex requests to the right team.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    },
    {
        title: 'Legal workflow automation for faster reviews',
        company: 'Professional Services',
        summary:
            'A secure legal intake and contract review assistant reduced manual review pressure and improved compliance visibility.',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80',
    },
    {
        title: 'Voice AI for high-volume customer calls',
        company: 'Service Operations',
        summary:
            'A multilingual voice agent handled repetitive customer calls and escalated complex cases with full conversation context.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    },
]

export default function CaseStudies() {
    return (
        <section className="bg-white px-6 py-24 text-slate-950 sm:px-8 lg:px-10 lg:py-32">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-8 lg:grid-cols-[.78fr_1fr] lg:items-end">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-700">Case Studies</p>
                        <h2 className="mt-4 max-w-4xl text-4xl font-black leading-[1.04] tracking-normal text-slate-950 sm:text-6xl">
                            The results that changed the game.
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base font-semibold leading-8 text-slate-600 lg:ml-auto">
                        Practical AI systems, workflow automation, and conversational products designed to create measurable operational gains.
                    </p>
                </div>

                <div className="mt-14 grid gap-5 xl:grid-cols-3">
                    {caseStudies.map((item) => (
                        <article
                            key={item.title}
                            className="group overflow-hidden border border-slate-950/10 bg-[#f8faf7] shadow-[0_18px_60px_rgba(15,23,42,.07)] transition hover:-translate-y-1 hover:shadow-soft"
                        >
                            <div className="relative h-64 overflow-hidden bg-slate-950">
                                <img src={item.image} alt="" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,.04),rgba(2,6,23,.46))]" />
                            </div>
                            <div className="p-7">
                                <div className="text-sm font-black uppercase tracking-[0.22em] text-slate-500">{item.company}</div>
                                <h3 className="mt-4 text-2xl font-black leading-tight text-slate-950">{item.title}</h3>
                                <p className="mt-5 text-sm leading-7 text-slate-600">{item.summary}</p>
                                <Link
                                    href="/company/contact"
                                    className="mt-8 inline-flex items-center gap-2 text-sm font-black text-slate-950 transition hover:text-orange-700"
                                >
                                    Discuss similar project
                                    <ArrowUpRight size={16} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
