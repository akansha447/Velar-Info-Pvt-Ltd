import Link from 'next/link'

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
    'Videos',
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
        <main className="min-h-screen bg-white px-6 py-8 text-slate-950 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl space-y-8">
                <section className="relative overflow-hidden rounded-3xl bg-[#06131f] px-8 py-12 text-white shadow-soft sm:px-10 lg:min-h-[346px] lg:px-12">
                    <div className="absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden lg:block">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_38%,rgba(244,63,94,0.65),transparent_14%),radial-gradient(circle_at_50%_58%,rgba(6,182,212,0.55),transparent_18%),linear-gradient(135deg,rgba(15,23,42,0.1),rgba(15,23,42,0.85))]" />
                        <div className="absolute right-10 top-1/2 h-40 w-40 -translate-y-1/2 rotate-45 rounded-3xl border border-cyan-300/40 bg-slate-950/80 shadow-[0_0_80px_rgba(236,72,153,0.55)]">
                            <div className="absolute inset-4 rounded-2xl border border-fuchsia-400/50 bg-slate-900" />
                            <div className="absolute inset-0 flex -rotate-45 items-center justify-center text-5xl font-extrabold text-cyan-200">
                                AI
                            </div>
                        </div>
                        <div className="absolute right-0 top-0 h-full w-full bg-[linear-gradient(90deg,#06131f_0%,rgba(6,19,31,0.82)_20%,rgba(6,19,31,0.08)_62%)]" />
                        <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(90deg,rgba(236,72,153,0.35)_1px,transparent_1px),linear-gradient(0deg,rgba(6,182,212,0.25)_1px,transparent_1px)] [background-size:46px_46px]" />
                    </div>

                    <div className="relative max-w-3xl">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-cyan-100">
                            <Link href="/" className="transition hover:text-white">Home</Link>
                            <span>&gt;</span>
                            <Link href="/#services" className="transition hover:text-white">Services</Link>
                            <span>&gt;</span>
                            <span>{eyebrow}</span>
                        </div>
                        <h1 className="mt-11 text-4xl font-extrabold tracking-tight sm:text-5xl">
                            {title}
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-100">
                            {subtitle}
                        </p>
                        <Link
                            href="/company/contact"
                            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-pink-500 to-blue-500 px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:opacity-95"
                        >
                            Talk to our experts
                        </Link>
                    </div>
                </section>

                <nav className="flex flex-wrap items-center gap-2 rounded-full bg-slate-100 px-5 py-4 text-sm text-slate-700 shadow-sm">
                    {serviceTabs.map((tab) => (
                        <a key={tab} href={`#${tab.toLowerCase().replace('?', '').replaceAll(' ', '-')}`} className="rounded-full px-4 py-2 transition hover:bg-white hover:text-slate-950">
                            {tab}
                        </a>
                    ))}
                    <Link
                        href="/company/contact"
                        className="ml-auto inline-flex items-center gap-3 rounded-full px-4 py-2 font-medium text-slate-800 transition hover:bg-white"
                    >
                        Contact us
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-pink-600 text-white">
                            &gt;
                        </span>
                    </Link>
                </nav>

                <section id="overview" className="grid gap-10 py-8 lg:grid-cols-[1fr_320px]">
                    <div>
                        <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                            {heading}
                        </h2>
                        <div className="mt-10 space-y-7 text-base leading-8 text-slate-950">
                            {paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <aside className="border-l border-slate-200 pl-8">
                        <div className="space-y-9">
                            {stats.map((stat) => (
                                <div key={stat.value}>
                                    <p className="text-4xl font-extrabold text-purple-600">{stat.value}</p>
                                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-950">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </aside>
                </section>

                <section id="services" className="grid gap-6 py-8 lg:grid-cols-3">
                    {services.map((service) => (
                        <div key={service} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <p className="text-lg font-bold text-slate-950">{service}</p>
                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                Strategy, build, integration, and optimization for secure enterprise adoption.
                            </p>
                        </div>
                    ))}
                </section>

                <section id="expertise" className="grid gap-8 rounded-3xl bg-slate-950 p-8 text-white lg:grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Expertise</p>
                        <h2 className="mt-4 text-3xl font-extrabold">From AI idea to production rollout</h2>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {expertise.map((item) => (
                            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm font-semibold text-slate-100">
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <section id="industries" className="py-8">
                    <h2 className="text-3xl font-extrabold text-slate-950">Industries We Support</h2>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {industries.map((industry) => (
                            <span key={industry} className="rounded-2xl bg-slate-100 px-5 py-4 text-sm font-semibold text-slate-800">
                                {industry}
                            </span>
                        ))}
                    </div>
                </section>

                <section id="case-studies" className="grid gap-6 py-8 lg:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">Case studies</p>
                        <h3 className="mt-4 text-2xl font-extrabold text-slate-950">{caseStudyTitle}</h3>
                        <p className="mt-4 leading-7 text-slate-600">{caseStudyText}</p>
                    </div>
                    <div id="why-us" className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">Why us?</p>
                        <h3 className="mt-4 text-2xl font-extrabold text-slate-950">{whyTitle}</h3>
                        <p className="mt-4 leading-7 text-slate-600">{whyText}</p>
                    </div>
                </section>

                <section className="rounded-3xl bg-slate-950 p-8 text-white sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Ready to start?</p>
                        <h2 className="mt-3 text-3xl font-extrabold">{cta}</h2>
                    </div>
                    <Link
                        href="/company/contact"
                        className="mt-6 inline-flex rounded-full bg-gradient-to-r from-pink-500 to-blue-500 px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:opacity-95 sm:mt-0"
                    >
                        Contact us
                    </Link>
                </section>
            </div>
        </main>
    )
}
