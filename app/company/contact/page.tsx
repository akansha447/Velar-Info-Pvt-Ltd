import ContactForm from '../../../components/contact/ContactForm'
import ContactInfo from '../../../components/contact/ContactInfo'
import FAQAccordion from '../../../components/contact/FAQAccordion'
import Link from 'next/link'

export const metadata = {
    title: 'Contact | Velar Info Pvt Ltd',
    description: 'Contact Velar Info for AI strategy, product development, automation, and voice transformation projects.',
}

export default function ContactPage() {
    return (
        <main className="bg-white text-slate-950">
            <section className="relative overflow-hidden bg-slate-950 text-white">
                <img
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1800&q=80"
                    alt="Digital team planning an AI transformation"
                    className="absolute inset-0 h-full w-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/30" />
                <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
                    <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        <div className="max-w-2xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact Us</p>
                            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                                Let’s build your AI roadmap and transform how your business works.
                            </h1>
                            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
                                Share your goal, challenge, or product idea. Our team will help you design a practical AI strategy, define the right solution, and take it into production.
                            </p>
                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <Link
                                    href="/company/about-us"
                                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:border-cyan-300"
                                >
                                    Learn More About Us
                                </Link>
                                <Link
                                    href="mailto:hello@velarinfo.ai"
                                    className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
                                >
                                    Email Our Team
                                </Link>
                            </div>
                        </div>
                        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                            <div className="rounded-[1.75rem] bg-slate-950 p-8 text-white shadow-[0_25px_80px_rgba(15,23,42,.2)]">
                                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Need help fast?</p>
                                <h2 className="mt-4 text-3xl font-black">Get a project review and plan within 48 hours.</h2>
                                <p className="mt-5 text-sm leading-7 text-slate-300">
                                    Tell us about your scope and we’ll recommend the ideal AI solution, timeline, and next steps.
                                </p>
                                <div className="mt-8 space-y-4 text-sm text-slate-200">
                                    <div>
                                        <p className="font-semibold">Office</p>
                                        <p>Plot 123, IT Park, Lucknow, Uttar Pradesh, India</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <p>hello@velarinfo.ai</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Phone</p>
                                        <p>+91 98765 43210</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-20 sm:px-8 lg:px-10">
                <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                    <div className="space-y-10">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700">Get in Touch</p>
                            <h2 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl">
                                Share your business need and we’ll help you define the best AI path.
                            </h2>
                            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                                Whether you want to launch a chatbot, automate workflows, or build a custom AI product, our experts are ready to help across discovery, design, development, and deployment.
                            </p>
                        </div>
                        <ContactInfo />
                    </div>

                    <ContactForm />
                </div>
            </section>

            <section className="bg-[#f8faf7] px-6 py-20 sm:px-8 lg:px-10">
                <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[.95fr_0.85fr]">
                    <div className="space-y-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Why work with us</p>
                        <h2 className="text-4xl font-black text-slate-950 sm:text-5xl">We deliver AI solutions that are designed to scale.</h2>
                        <p className="max-w-2xl text-base leading-8 text-slate-600">
                            From initial discovery to production support, we make sure your AI investment is connected to measurable outcomes, secure systems, and strong user adoption.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-[2rem] border border-slate-950/10 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,.07)]">
                                <h3 className="font-black text-slate-950">Discovery & planning</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600">We run focused workshops to define your priorities, risks, and rollout approach.</p>
                            </div>
                            <div className="rounded-[2rem] border border-slate-950/10 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,.07)]">
                                <h3 className="font-black text-slate-950">Deployment support</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600">We help you deploy with monitoring, security checks, and integration validation.</p>
                            </div>
                        </div>
                    </div>
                    <FAQAccordion />
                </div>
            </section>
        </main>
    )
}
