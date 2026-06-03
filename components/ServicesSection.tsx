import { ArrowRight, Code2, Cloud, Shield, Sparkles } from 'lucide-react'

const services = [
    {
        title: 'Web & Mobile Engineering',
        description: 'Build scalable applications with intuitive UX, resilient APIs, and strong product architecture for enterprise growth.',
        icon: Code2,
    },
    {
        title: 'Cloud Platform Solutions',
        description: 'Design secure AWS, Azure, and GCP architectures that accelerate rollout, reduce risk, and simplify operations.',
        icon: Cloud,
    },
    {
        title: 'AI & Automation Engineering',
        description: 'Implement intelligent automation, conversational AI, and workflow orchestration for measurable productivity gains.',
        icon: Sparkles,
    },
    {
        title: 'Quality, Testing & Reliability',
        description: 'Deliver enterprise-grade releases with automated QA, monitoring, and performance engineering baked into every sprint.',
        icon: Shield,
    },
]

export default function ServicesSection() {
    return (
        <section id="services" className="bg-white px-6 py-20 text-slate-950 sm:px-8 lg:px-10 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-600">Core services</p>
                        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
                            Technology services engineered for B2B growth.
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto">
                        From product engineering and cloud strategy to AI platforms and quality assurance, we deliver structured technology programs that move enterprise initiatives forward.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {services.map((service) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={service.title}
                                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300/30 hover:bg-white"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-orange-50 text-orange-500 transition group-hover:bg-orange-100">
                                    <Icon size={24} />
                                </div>
                                <h3 className="mt-8 text-2xl font-black text-slate-950">{service.title}</h3>
                                <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
                                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-orange-600 transition group-hover:text-orange-700">
                                    Learn more
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
