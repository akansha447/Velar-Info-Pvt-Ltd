import { CheckCircle, ShieldCheck, Sparkles, ServerCog } from 'lucide-react'

const pillars = [
    {
        title: 'Agile delivery with clarity',
        description: 'Transparent roadmaps, rapid sprints, and milestone reviews ensure every engineering phase is aligned with your business outcomes.',
        icon: ShieldCheck,
    },
    {
        title: 'Certified enterprise experts',
        description: 'Our team combines global engineering standards with deep technology experience across cloud, AI, and secure digital transformation.',
        icon: Sparkles,
    },
    {
        title: 'Process-driven quality',
        description: 'From discovery to launch, we embed compliance, testing, and observability into every release for reliable enterprise operations.',
        icon: ServerCog,
    },
]

const stack = [
    'React',
    'Next.js',
    'Node.js',
    'AWS',
    'Docker',
    'Kubernetes',
    'MongoDB',
    'Magento',
]

export default function WhyChooseSection() {
    return (
        <section className="bg-[#f8fafc] px-6 py-20 text-slate-950 sm:px-8 lg:px-10 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-600">Why choose us</p>
                        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
                            Engineering teams, frameworks, and processes built for enterprise confidence.
                        </h2>
                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                            We combine agile product engineering, certified cloud practices, and measurable delivery to help ambitious businesses accelerate digital transformation.
                        </p>

                        <div className="mt-10 space-y-4">
                            {pillars.map((pillar) => {
                                const Icon = pillar.icon
                                return (
                                    <div key={pillar.title} className="flex gap-4 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
                                        <div className="grid h-14 w-14 place-items-center rounded-3xl bg-orange-50 text-orange-600">
                                            <Icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-950">{pillar.title}</h3>
                                            <p className="mt-2 text-sm leading-7 text-slate-600">{pillar.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                        <div className="grid gap-4 sm:grid-cols-2">
                            {stack.map((tech) => (
                                <div key={tech} className="rounded-3xl border border-slate-200/80 bg-slate-50 px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-800 transition hover:border-orange-300/70 hover:bg-orange-50">
                                    {tech}
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 rounded-3xl border border-slate-200/80 bg-slate-50 p-6">
                            <div className="flex items-center gap-3 text-orange-600">
                                <CheckCircle size={20} />
                                <span className="text-sm font-semibold uppercase tracking-[0.22em]">Trusted frameworks</span>
                            </div>
                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                Enterprise-ready technologies that support scalable product delivery, secure integration, and rapid innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
