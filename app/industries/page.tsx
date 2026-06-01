import Link from 'next/link'

const industries = [
    {
        id: 'healthcare-lifesciences',
        title: 'Healthcare & Lifesciences',
        problem:
            'Doctors and clinicians spend up to 40% of their day on manual charting, paperwork, and compliance logging, leading to severe burnout and less patient face-time.',
        solution:
            'We deploy secure, HIPAA-compliant Generative AI scribes and Voice AI assistants that automatically listen to patient consultations and draft structured medical notes instantly.',
        benefit:
            'Reduces clinical documentation time by 50% while maintaining absolute patient data privacy.',
    },
    {
        id: 'finance-banking-insurance',
        title: 'Finance, Banking & Insurance (BFSI)',
        problem:
            'Financial institutions deal with massive amounts of unstructured document data, fraud risks, and lengthy underwriting processes that slow down customer onboarding.',
        solution:
            'Custom machine learning models analyze transaction patterns in real time to flag fraud, combined with Advanced RAG systems that parse multi-page loan and insurance applications instantly.',
        benefit:
            'Boosts loan processing speeds by up to 70% and secures operations with real-time predictive risk modeling.',
    },
    {
        id: 'e-commerce-retail',
        title: 'E-Commerce & Retail',
        problem:
            'Modern buyers expect instant, 24/7 personalized shopping experiences, but human support and sales teams cannot scale to handle peak holiday traffic sustainably.',
        solution:
            'Next-gen Voice AI and Chatbots act as virtual digital shopping assistants, handling package tracking, returns, and dynamic product suggestions based on user behavior.',
        benefit:
            'Eliminates customer hold times entirely while lifting average order value through automated, intelligent cross-selling.',
    },
    {
        id: 'legal-professional-services',
        title: 'Legal & Professional Services',
        problem:
            'Law firms and corporate legal teams lose thousands of billable hours scanning through mountains of dense discovery documents, case files, and multi-page contracts looking for loopholes.',
        solution:
            'Tailored Generative AI contract analysis systems instantly highlight high-risk clauses, verify regulatory compliance, and automatically draft standardized legal agreements.',
        benefit:
            'Cuts document review times from days to mere minutes without compromising analytical accuracy.',
    },
    {
        id: 'logistics-supply-chain',
        title: 'Logistics & Supply Chain',
        problem:
            'Fragmented communication, volatile fuel costs, and unpredictable shipping delays cause massive operational inefficiencies across warehouse and freight networks.',
        solution:
            'Autonomous AI workflow agents coordinate inventory levels, optimize freight routing using real-time weather and traffic data, and use Vision AI to check for damaged packaging.',
        benefit:
            'Optimizes fleet utilization and significantly drives down warehouse overhead costs through proactive predictive planning.',
    },
    {
        id: 'real-estate-proptech',
        title: 'Real Estate & PropTech',
        problem:
            'Real estate agencies waste hundreds of hours chasing unverified internet leads, playing phone tag, and scheduling property viewings with cold prospects.',
        solution:
            'Outbound and inbound Conversational Voice AI agents instantly answer property inquiries, qualify leads based on budget and timeline, and sync appointments directly to human agents calendars.',
        benefit:
            'Converts passive web traffic into verified hot leads 24/7, keeping your sales pipeline moving continuously.',
    },
]

export const metadata = {
    title: 'Industry Solutions | Velar Info',
    description:
        'AI systems engineered for healthcare, finance, retail, legal, logistics, and real estate industry workflows.',
}

export default function IndustriesPage() {
    return (
        <main className="min-h-screen bg-slate-950 px-6 py-16 text-white sm:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft sm:p-10 lg:p-12">
                    <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
                    <div className="absolute -bottom-32 left-16 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
                    <div className="relative max-w-4xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                            Industry Solutions
                        </p>
                        <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            Engineered for High-Impact Industries.
                        </h1>
                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            We do not believe in generic software. Our AI systems are fine-tuned on
                            the compliance, data structures, and operational frameworks of your
                            specific sector.
                        </p>
                    </div>
                </section>

                <section className="mt-10 grid gap-6 lg:grid-cols-2">
                    {industries.map((industry, index) => (
                        <article
                            key={industry.id}
                            id={industry.id}
                            className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/5 p-7 shadow-soft backdrop-blur-xl"
                        >
                            <div className="flex items-start gap-4">
                                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-primaryFrom via-primaryMid to-primaryTo text-lg font-extrabold text-slate-950">
                                    {index + 1}
                                </span>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">{industry.title}</h2>
                                    <div className="mt-5 space-y-5 text-slate-300">
                                        <p>
                                            <span className="font-semibold text-pink-300">The Problem: </span>
                                            {industry.problem}
                                        </p>
                                        <p>
                                            <span className="font-semibold text-cyan-300">Our AI Solution: </span>
                                            {industry.solution}
                                        </p>
                                        <p>
                                            <span className="font-semibold text-emerald-300">Key Benefit: </span>
                                            {industry.benefit}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="mt-10 rounded-3xl border border-white/10 bg-slate-900/80 p-8 text-center">
                    <h2 className="text-3xl font-extrabold text-white">Build AI around your sector.</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                        Tell us your industry, workflows, compliance constraints, and operational goals. We will map the AI systems that can produce measurable impact.
                    </p>
                    <Link
                        href="/company/contact"
                        className="mt-6 inline-flex rounded-full bg-gradient-to-r from-primaryFrom via-primaryMid to-primaryTo px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:opacity-95"
                    >
                        Discuss Industry AI
                    </Link>
                </section>
            </div>
        </main>
    )
}
