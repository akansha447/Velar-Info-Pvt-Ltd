import { ArrowRight, BarChart3, Layers, Sparkles } from 'lucide-react'

const caseStudies = [
    {
        title: 'Commerce platform modernization',
        description: 'Delivered a headless retail platform with cross-border checkout, personalization, and a 3x faster customer journey.',
        metric: '152% revenue uplift',
        href: '#',
    },
    {
        title: 'AI operations dashboard',
        description: 'Built a single-pane operations command center to monitor processes, automate incidents, and reduce downtime by 38%.',
        metric: '38% fewer incidents',
        href: '#',
    },
    {
        title: 'Cloud migration for enterprise apps',
        description: 'Migrated legacy systems to AWS with secure automation, observability, and a managed deployment pipeline.',
        metric: '45% lower TCO',
        href: '#',
    },
]

export default function PortfolioSection() {
    return (
        <section className="bg-slate-950 px-6 py-20 text-slate-100 sm:px-8 lg:px-10 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Portfolio</p>
                        <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                            Case studies that highlight measurable business outcomes.
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-slate-400 lg:ml-auto">
                        Each delivery is designed for scale, speed, and secure operations — from launch-ready commerce systems to AI-powered enterprise workflows.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 xl:grid-cols-3">
                    {caseStudies.map((item) => (
                        <div key={item.title} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 shadow-soft transition hover:-translate-y-1 hover:border-cyan-400/30">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,.16),transparent_38%)]" />
                            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900 text-cyan-300 shadow-glow">
                                {item.title.includes('AI') ? <Sparkles size={24} /> : item.title.includes('Cloud') ? <Layers size={24} /> : <BarChart3 size={24} />}
                            </div>
                            <h3 className="mt-8 text-2xl font-black text-white">{item.title}</h3>
                            <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                            <p className="mt-6 text-lg font-semibold text-white">{item.metric}</p>
                            <a href={item.href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300 transition hover:text-white">
                                View study
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
