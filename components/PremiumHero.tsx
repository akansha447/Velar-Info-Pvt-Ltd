"use client"
import { ArrowRight, Play, ShieldCheck, Sparkles, Terminal } from 'lucide-react'

const heroStats = [
    { label: 'Enterprise clients', value: '60+' },
    { label: 'Average delivery', value: '8 weeks' },
    { label: 'Global teams', value: '12+' },
]

export default function PremiumHero() {
    return (
        <section className="relative overflow-hidden bg-[#0b132b] text-white">
            <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top_left,_rgba(255,138,84,0.22),transparent_45%)] opacity-90" />
            <div className="absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),transparent_48%)] opacity-80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(59,130,246,.14),transparent_25%),linear-gradient(180deg,rgba(11,19,43,.95),rgba(11,19,43,.99))] pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-3 rounded-full border border-orange-200/60 bg-orange-50/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.26em] text-orange-300 backdrop-blur-xl">
                            Digital transformation for bold growth
                        </div>
                        <h1 className="mt-8 text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                            Enterprise software engineering that scales with ambition.
                        </h1>
                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                            Premium product teams, cloud platforms, and automation systems designed to deliver measurable business results fast.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(255,138,84,0.24)] transition hover:brightness-110"
                            >
                                Start your project
                                <ArrowRight size={18} className="ml-3" />
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:border-orange-300/40 hover:text-orange-100"
                            >
                                View services
                            </a>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            {heroStats.map((stat) => (
                                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                                    <p className="text-3xl font-black text-white">{stat.value}</p>
                                    <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-300">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(11,19,43,0.35)] backdrop-blur-xl">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,138,84,.14),transparent_35%)] opacity-80" />
                            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] bg-[#071024]">
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,19,43,.25),transparent_15%)]" />
                                <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-200">
                                    Live preview
                                </div>
                                <div className="absolute inset-0 grid place-items-center">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-orange-400/30 bg-orange-500/10 text-orange-300 shadow-[0_20px_60px_rgba(255,138,84,0.2)]">
                                        <Play size={28} />
                                    </div>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(11,19,43,.95))]" />
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_48px_rgba(11,19,43,0.22)]">
                                <div className="flex items-center gap-3 text-orange-300">
                                    <ShieldCheck size={20} />
                                    <span className="text-sm font-semibold uppercase tracking-[0.22em]">Security-first delivery</span>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-slate-300">
                                    Enterprise-grade security, compliance controls, and hardened deployment guardrails.
                                </p>
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_48px_rgba(11,19,43,0.22)]">
                                <div className="flex items-center gap-3 text-orange-300">
                                    <Sparkles size={20} />
                                    <span className="text-sm font-semibold uppercase tracking-[0.22em]">Future-ready systems</span>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-slate-300">
                                    Intelligent automation, AI orchestration, and modern cloud-native system design.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_48px_rgba(11,19,43,0.22)]">
                            <div className="flex items-center gap-3 text-orange-300">
                                <Terminal size={20} />
                                <span className="text-sm font-semibold uppercase tracking-[0.22em]">Platform-ready delivery</span>
                            </div>
                            <p className="mt-4 text-sm leading-6 text-slate-300">
                                From strategy and architecture to launch, we accelerate your product delivery with confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
