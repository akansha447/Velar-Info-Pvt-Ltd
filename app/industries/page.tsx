import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { industryData } from '../../lib/constants'

export const metadata = {
    title: 'Industry Solutions | Velar Info',
    description:
        'AI systems engineered for healthcare, BFSI, e-commerce, legal, logistics, and real estate industry workflows.',
}

export default function IndustriesPage() {
    return (
        <main className="min-h-screen bg-white text-slate-950">
            <section className="relative overflow-hidden bg-slate-950 px-6 pb-16 pt-36 text-white sm:px-8 lg:px-10 lg:pb-24 lg:pt-44">
                <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(34,211,238,.24),transparent_28%),linear-gradient(90deg,rgba(2,6,23,.98),rgba(2,6,23,.74)_54%,rgba(2,6,23,.42))]" />
                <div className="relative mx-auto max-w-7xl">
                    <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">
                        Industry Solutions
                    </p>
                    <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[.98] tracking-normal text-white sm:text-7xl">
                        Deep industry knowledge meets smart technology.
                    </h1>
                    <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-white/72">
                        We build AI systems around the compliance, data structures, service expectations, and operational workflows of your sector.
                    </p>
                    <Link href="/company/contact" className="mt-8 inline-flex items-center gap-3 bg-orange-600 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-orange-700">
                        Discuss Industry AI
                        <ArrowUpRight size={18} />
                    </Link>
                </div>
            </section>

            <section className="px-6 py-20 sm:px-8 lg:px-10">
                <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
                    {industryData.map((industry, index) => (
                        <article
                            key={industry.id}
                            id={industry.id}
                            className="scroll-mt-32 overflow-hidden border border-slate-950/10 bg-white shadow-[0_18px_60px_rgba(15,23,42,.07)]"
                        >
                            <div className="relative h-72 overflow-hidden bg-slate-950">
                                <img src={industry.image} alt="" className="h-full w-full object-cover opacity-80" />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,.05),rgba(2,6,23,.66))]" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">0{index + 1}</span>
                                    <h2 className="mt-3 text-3xl font-black leading-tight text-white">{industry.title}</h2>
                                </div>
                            </div>
                            <div className="p-7 sm:p-8">
                                <p className="font-semibold leading-8 text-slate-600">{industry.summary}</p>
                                <div className="mt-7 space-y-5">
                                    <p>
                                        <span className="font-black text-orange-700">The Problem: </span>
                                        <span className="font-semibold leading-7 text-slate-600">{industry.problem}</span>
                                    </p>
                                    <p>
                                        <span className="font-black text-cyan-700">Our AI Solution: </span>
                                        <span className="font-semibold leading-7 text-slate-600">{industry.solution}</span>
                                    </p>
                                    <p>
                                        <span className="font-black text-emerald-700">Key Benefit: </span>
                                        <span className="font-semibold leading-7 text-slate-600">{industry.benefit}</span>
                                    </p>
                                </div>
                                <div className="mt-7 flex flex-wrap gap-2">
                                    {industry.cases.map((caseItem) => (
                                        <span key={caseItem} className="bg-slate-100 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-slate-600">
                                            {caseItem}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="bg-slate-950 px-6 py-16 text-white sm:px-8 lg:px-10">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Build around your sector</p>
                        <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-5xl">
                            Tell us your workflows, compliance constraints, and operational goals.
                        </h2>
                    </div>
                    <Link
                        href="/company/contact"
                        className="inline-flex w-fit items-center gap-3 bg-orange-600 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-orange-700"
                    >
                        Start a Conversation
                        <ArrowUpRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
    )
}
