import Link from 'next/link'
import {
    ArrowUpRight,
    BrainCircuit,
    CheckCircle2,
    Cloud,
    Code2,
    Database,
    Layers,
    MessageSquare,
    ShieldCheck,
    Sparkles,
    Users,
    Workflow,
} from 'lucide-react'
import { servicesData } from '../../../lib/constants'

export const metadata = {
    title: 'About Us | Velar Info Pvt LTD',
    description:
        'Learn how Velar Info builds AI products, automation workflows, voice agents, and custom AI platforms for modern businesses.',
}

const highlights = [
    { value: '500+', label: 'Clients and business teams supported' },
    { value: '10M+', label: 'AI interactions handled across workflows' },
    { value: '95%', label: 'Target automation accuracy for defined workflows' },
    { value: '24/7', label: 'Support automation availability' },
]

const expertise = [
    { title: 'AI Chatbots & Virtual Assistants', icon: MessageSquare },
    { title: 'AI Agents & Workflows', icon: Workflow },
    { title: 'Voice & Conversational AI', icon: BrainCircuit },
    { title: 'Generative AI Services', icon: Sparkles },
    { title: 'Custom AI Development', icon: Code2 },
    { title: 'AI Consulting & Integration', icon: Layers },
]

const techStack = [
    'Next.js',
    'React',
    'Node.js',
    'Python',
    'OpenAI',
    'LangChain',
    'Vector Databases',
    'AWS',
    'Azure',
    'PostgreSQL',
    'MongoDB',
    'Docker',
]

const whyClientsChooseUs = [
    'We map every AI solution to a practical business workflow before writing code.',
    'We design for security, handoff rules, monitoring, and long-term maintainability.',
    'We combine product strategy, UX, AI engineering, cloud, and integration work in one delivery team.',
    'We keep communication clear, timelines visible, and outcomes measurable.',
]

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-slate-950">
            <section className="relative overflow-hidden bg-slate-950 px-6 pb-16 pt-36 text-white sm:px-8 lg:px-10 lg:pb-24 lg:pt-44">
                <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80"
                    alt="Technology team collaborating on an AI product strategy"
                    className="absolute inset-0 h-full w-full object-cover opacity-45"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(34,211,238,.24),transparent_28%),linear-gradient(90deg,rgba(2,6,23,.98),rgba(2,6,23,.78)_54%,rgba(2,6,23,.42))]" />
                <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">About Velar Info</p>
                        <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[.98] tracking-normal text-white sm:text-7xl">
                            We build AI systems that make business operations smarter.
                        </h1>
                        <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-white/72">
                            Velar Info Pvt LTD is an AI-first technology partner helping organizations design, build, integrate, and scale intelligent digital products, automation workflows, and conversational experiences.
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Link href="/company/contact" className="inline-flex w-fit items-center gap-3 bg-orange-600 px-6 py-3 text-sm font-black text-white transition hover:bg-orange-700">
                                Talk to Our Team
                                <ArrowUpRight size={18} />
                            </Link>
                            <Link href="/#services" className="inline-flex w-fit items-center gap-3 border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:border-cyan-300">
                                Explore Services
                                <ArrowUpRight size={18} />
                            </Link>
                        </div>
                    </div>
                    <div className="grid gap-3 border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                        {highlights.map((item) => (
                            <div key={item.label} className="border border-white/10 bg-slate-950/40 p-5">
                                <strong className="block text-4xl font-black text-white">{item.value}</strong>
                                <span className="mt-2 block text-sm font-bold leading-6 text-white/64">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-20 sm:px-8 lg:px-10">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.88fr_1.12fr] lg:items-center">
                    <div className="relative min-h-[520px] overflow-hidden bg-slate-950">
                        <img
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1100&q=80"
                            alt="AI engineering team working together"
                            className="absolute inset-0 h-full w-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,.08),rgba(2,6,23,.72))]" />
                        <div className="absolute bottom-6 left-6 right-6 border border-white/10 bg-white/10 p-5 text-white backdrop-blur-xl">
                            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">What We Believe</p>
                            <p className="mt-3 text-2xl font-black leading-tight">
                                AI works best when it is practical, measurable, secure, and easy for teams to adopt.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-700">Company Introduction</p>
                        <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-normal text-slate-950 sm:text-6xl">
                            A focused AI partner for modern business teams.
                        </h2>
                        <div className="mt-7 space-y-5 text-base font-semibold leading-8 text-slate-600">
                            <p>
                                We help clients move from AI curiosity to real implementation. Our team studies your workflows, identifies automation opportunities, designs user-friendly experiences, and ships production-ready systems that connect with your existing tools.
                            </p>
                            <p>
                                Our work spans AI chatbots, voice agents, generative AI assistants, custom AI products, enterprise integrations, data workflows, and cloud-backed software platforms.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f8faf7] px-6 py-20 sm:px-8 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-5 lg:grid-cols-2">
                        <article className="border border-slate-950/10 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,.07)] sm:p-10">
                            <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-700">Mission</p>
                            <h2 className="mt-4 text-3xl font-black text-slate-950">Make intelligent automation accessible, useful, and trustworthy.</h2>
                            <p className="mt-5 font-semibold leading-8 text-slate-600">
                                Our mission is to help organizations reduce repetitive work, improve customer experience, and unlock better decisions through AI systems that are thoughtfully designed and responsibly deployed.
                            </p>
                        </article>
                        <article className="border border-slate-950/10 bg-slate-950 p-8 text-white shadow-[0_18px_60px_rgba(15,23,42,.12)] sm:p-10">
                            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Vision</p>
                            <h2 className="mt-4 text-3xl font-black">Become a trusted AI transformation partner for businesses across India and beyond.</h2>
                            <p className="mt-5 font-semibold leading-8 text-white/68">
                                We envision a future where every team has secure AI assistants, automated workflows, and intelligent products that help people focus on higher-value work.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="px-6 py-20 sm:px-8 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 lg:grid-cols-[.82fr_1fr] lg:items-end">
                        <div>
                            <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-700">Expertise</p>
                            <h2 className="mt-4 text-4xl font-black leading-[1.05] text-slate-950 sm:text-6xl">
                                Our core services and capabilities.
                            </h2>
                        </div>
                        <p className="max-w-2xl text-base font-semibold leading-8 text-slate-600 lg:ml-auto">
                            These services match the dedicated service pages across your website, keeping the homepage, About page, navigation, and service architecture consistent.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {expertise.map((item) => {
                            const Icon = item.icon
                            const service = servicesData.find((entry) => entry.title === item.title)
                            return (
                                <Link key={item.title} href={service?.href ?? '/#services'} className="group border border-slate-950/10 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,.06)] transition hover:-translate-y-1 hover:border-orange-600/50">
                                    <span className="flex h-12 w-12 items-center justify-center bg-slate-950 text-white transition group-hover:bg-orange-600">
                                        <Icon size={22} />
                                    </span>
                                    <h3 className="mt-6 text-xl font-black text-slate-950">{item.title}</h3>
                                    <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">{service?.description}</p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-slate-950 px-6 py-20 text-white sm:px-8 lg:px-10">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Why Clients Choose Us</p>
                        <h2 className="mt-4 text-4xl font-black leading-[1.05] sm:text-6xl">
                            Built for real deployment, not showroom AI.
                        </h2>
                        <p className="mt-6 max-w-xl font-semibold leading-8 text-white/66">
                            We care about the whole system: business process, user experience, data quality, security, integration, launch, and measurable adoption.
                        </p>
                    </div>
                    <div className="grid gap-4">
                        {whyClientsChooseUs.map((item) => (
                            <div key={item} className="flex gap-4 border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                                <CheckCircle2 className="mt-1 shrink-0 text-cyan-200" size={22} />
                                <p className="font-semibold leading-7 text-white/78">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-20 sm:px-8 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
                        <div>
                            <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-700">Technology Stack</p>
                            <h2 className="mt-4 text-4xl font-black leading-[1.05] text-slate-950 sm:text-6xl">
                                Technologies we work with.
                            </h2>
                            <p className="mt-5 font-semibold leading-8 text-slate-600">
                                We select tools based on your architecture, security needs, integrations, and scalability goals.
                            </p>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {techStack.map((tech) => (
                                <div key={tech} className="border border-slate-950/10 bg-[#f8faf7] px-5 py-4 text-sm font-black text-slate-700">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 grid gap-5 md:grid-cols-3">
                        {[
                            { title: 'Product-minded team', body: 'We think beyond implementation and help shape workflows, UX, and adoption.', icon: Users },
                            { title: 'Cloud-ready delivery', body: 'We build deployable systems with observability, security, and support in mind.', icon: Cloud },
                            { title: 'Data-aware architecture', body: 'We connect AI to clean knowledge, reliable systems, and business context.', icon: Database },
                        ].map((item) => {
                            const Icon = item.icon
                            return (
                                <div key={item.title} className="border border-slate-950/10 bg-white p-7 shadow-[0_14px_40px_rgba(15,23,42,.06)]">
                                    <Icon className="text-orange-700" size={28} />
                                    <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
                                    <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">{item.body}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-[#f8faf7] px-6 py-20 sm:px-8 lg:px-10">
                <div className="mx-auto grid max-w-7xl gap-8 bg-slate-950 p-8 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Start With Confidence</p>
                        <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-5xl">
                            Have an AI idea, workflow problem, or automation opportunity?
                        </h2>
                        <p className="mt-4 max-w-2xl font-semibold leading-8 text-white/66">
                            Share your goals with our team. We will help you identify the most practical path from concept to implementation.
                        </p>
                    </div>
                    <Link href="/company/contact" className="inline-flex w-fit items-center gap-3 bg-orange-600 px-6 py-3 text-sm font-black text-white transition hover:bg-orange-700">
                        Contact Velar Info
                        <ArrowUpRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
    )
}
