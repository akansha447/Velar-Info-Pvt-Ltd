"use client"
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const caseStudies = [
    {
        title: 'Audible Content Operations Transformation',
        company: 'AudioStream Global',
        summary:
            'Built an intelligent content operations platform that improved review velocity, reduced manual handoffs, and delivered real-time visibility across global teams.',
        href: '/case-studies/audio-content-operations',
    },
    {
        title: 'Legal Workflow Automation for Fast Compliance',
        company: 'LegalEdge Solutions',
        summary:
            'Delivered a secure legal intake and contract review assistant that cut turnaround time by 45% and reduced compliance risk for enterprise teams.',
        href: '/case-studies/legal-workflow-automation',
    },
    {
        title: 'Market Forecasting with AI-Driven Insights',
        company: 'InsightPulse',
        summary:
            'Launched a data platform that combined AI models, forecasting workflows, and automation to turn market signals into faster decisions.',
        href: '/case-studies/market-forecasting-ai',
    },
]

export default function CaseStudies() {
    return (
        <section className="bg-white px-6 py-20 text-slate-950 sm:px-8 lg:px-10 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-700">Case Studies</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
                            The results that changed the game.
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto">
                        Explore real projects where AI, automation, and smart engineering delivered measurable business outcomes.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 xl:grid-cols-3">
                    {caseStudies.map((item, index) => (
                        <div
                            key={item.title}
                            className="group overflow-hidden rounded-3xl border border-slate-950/10 bg-[#f8faf7] p-8 shadow-soft transition hover:-translate-y-1 hover:border-slate-950/20"
                        >
                            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{item.company}</div>
                            <h3 className="mt-4 text-2xl font-black text-slate-950">{item.title}</h3>
                            <p className="mt-5 text-sm leading-7 text-slate-600">{item.summary}</p>
                            <Link
                                href={item.href}
                                className="mt-8 inline-flex items-center gap-2 text-sm font-black text-slate-950 transition hover:text-orange-700"
                            >
                                Read case study
                                <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
