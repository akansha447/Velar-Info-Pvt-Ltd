import Link from 'next/link'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

interface ServiceStat {
    value: string
    label: string
}

interface ServiceDetailPageProps {
    eyebrow: string
    title: string
    subtitle: string
    heading: string
    paragraphs: string[]
    stats: ServiceStat[]
    services: string[]
    expertise: string[]
    industries: string[]
    caseStudyTitle: string
    caseStudyText: string
    whyTitle: string
    whyText: string
    cta: string
}

const serviceTabs = [
    'Overview',
    'Services',
    'Expertise',
    'Industries',
    'Case studies',
    'Why us?',
]

export default function ServiceDetailPage({
    eyebrow,
    title,
    subtitle,
    heading,
    paragraphs,
    stats,
    services,
    expertise,
    industries,
    caseStudyTitle,
    caseStudyText,
    whyTitle,
    whyText,
    cta,
}: ServiceDetailPageProps) {
    return (
        <main className="min-h-screen bg-white text-slate-950">
            <section className="relative overflow-hidden bg-slate-950 px-6 pb-16 pt-36 text-white sm:px-8 lg:px-10 lg:pb-24 lg:pt-44">
                <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(34,211,238,.24),transparent_28%),linear-gradient(90deg,rgba(2,6,23,.98),rgba(2,6,23,.78)_54%,rgba(2,6,23,.42))]" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/58">
                        <Link href="/" className="transition hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/#services" className="transition hover:text-white">Services</Link>
                        <span>/</span>
                        <span className="text-cyan-200">{eyebrow}</span>
                    </div>

                    <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
                        <div>
                            <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-400">{eyebrow}</p>
                            <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[.98] tracking-normal text-white sm:text-7xl">
                                {title}
                            </h1>
                            <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-white/72">
                                {subtitle}
                            </p>
                            <Link
                                href="/company/contact"
                                className="mt-8 inline-flex items-center gap-3 bg-orange-600 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-orange-700"
                            >
                                Talk to our experts
                                <ArrowUpRight size={18} />
                            </Link>
                        </div>

                        <div className="grid gap-3 border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                            {stats.map((stat) => (
                                <div key={stat.value} className="border border-white/10 bg-slate-950/40 p-5">
                                    <p className="text-4xl font-black text-white">{stat.value}</p>
                                    <p className="mt-2 text-sm font-bold leading-6 text-white/64">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <nav className="sticky top-[88px] z-30 border-y border-slate-950/10 bg-white/95 px-6 py-3 backdrop-blur-xl sm:px-8 lg:px-10">
                <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto text-sm font-bold text-slate-700">
                    {serviceTabs.map((tab) => (
                        <a key={tab} href={`#${tab.toLowerCase().replace('?', '').replaceAll(' ', '-')}`} className="shrink-0 px-4 py-2 transition hover:bg-slate-100 hover:text-orange-700">
                            {tab}
                        </a>
                    ))}
                    <Link href="/company/contact" className="ml-auto hidden shrink-0 items-center gap-2 bg-slate-950 px-4 py-2 text-white transition hover:bg-orange-700 md:inline-flex">
                        Contact us
                        <ArrowUpRight size={15} />
                    </Link>
                </div>
            </nav>

            <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
                <section id="overview" className="grid gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-start">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-700">Overview</p>
                        <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-normal text-slate-950 sm:text-6xl">
                            {heading}
                        </h2>
                    </div>
                    <div className="space-y-7 text-base font-semibold leading-8 text-slate-600">
                        {paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </section>

                <section id="services" className="mt-20">
                    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <div>
                            <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-700">What We Build</p>
                            <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-5xl">Service coverage</h2>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <div key={service} className="border border-slate-950/10 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,.06)] transition hover:-translate-y-1 hover:border-orange-600/50">
                                <CheckCircle2 className="text-orange-700" size={22} />
                                <p className="mt-5 text-lg font-black text-slate-950">{service}</p>
                                <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
                                    Strategy, build, integration, optimization, and long-term support for secure adoption.
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="expertise" className="mt-20 grid gap-8 bg-slate-950 p-7 text-white sm:p-10 lg:grid-cols-[.72fr_1fr]">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Expertise</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">From AI idea to production rollout</h2>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {expertise.map((item) => (
                            <div key={item} className="border border-white/10 bg-white/10 p-5 text-sm font-bold leading-6 text-white/78">
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <section id="industries" className="mt-20">
                    <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-700">Industries</p>
                    <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-5xl">Industries we support</h2>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {industries.map((industry) => (
                            <Link key={industry} href="/industries" className="border border-slate-950/10 bg-slate-50 px-5 py-4 text-sm font-black text-slate-800 transition hover:border-orange-600/50 hover:bg-white hover:text-orange-700">
                                {industry}
                            </Link>
                        ))}
                    </div>
                </section>

                <section id="case-studies" className="mt-20 grid gap-5 lg:grid-cols-2">
                    <div className="border border-slate-950/10 bg-slate-50 p-8">
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-700">Case studies</p>
                        <h3 className="mt-4 text-2xl font-black text-slate-950">{caseStudyTitle}</h3>
                        <p className="mt-4 font-semibold leading-7 text-slate-600">{caseStudyText}</p>
                    </div>
                    <div id="why-us" className="border border-slate-950/10 bg-slate-50 p-8">
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-700">Why us?</p>
                        <h3 className="mt-4 text-2xl font-black text-slate-950">{whyTitle}</h3>
                        <p className="mt-4 font-semibold leading-7 text-slate-600">{whyText}</p>
                    </div>
                </section>

                <section className="mt-20 grid gap-8 bg-slate-950 p-8 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Ready to start?</p>
                        <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">{cta}</h2>
                    </div>
                    <Link
                        href="/company/contact"
                        className="inline-flex w-fit items-center gap-3 bg-orange-600 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-orange-700"
                    >
                        Contact us
                        <ArrowUpRight size={18} />
                    </Link>
                </section>
            </div>
        </main>
    )
}
