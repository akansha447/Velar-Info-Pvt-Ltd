"use client"

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4200)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] border border-slate-200/70 bg-slate-950/95 p-6 shadow-[0_24px_80px_rgba(15,23,42,.18)] sm:p-8">
            <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Project Inquiry</p>
                <h2 className="mt-3 text-3xl font-black text-white">Tell us what you want to build.</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                    Share a few details and our team will respond with next steps, suggested approach, and a meeting slot.
                </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                    <span className="text-sm font-semibold text-slate-200">First Name*</span>
                    <input
                        name="firstName"
                        required
                        className="mt-3 w-full rounded-3xl border border-slate-700/70 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="First Name"
                    />
                </label>
                <label className="block">
                    <span className="text-sm font-semibold text-slate-200">Last Name</span>
                    <input
                        name="lastName"
                        className="mt-3 w-full rounded-3xl border border-slate-700/70 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Last Name"
                    />
                </label>
                <label className="block">
                    <span className="text-sm font-semibold text-slate-200">Email*</span>
                    <input
                        name="email"
                        type="email"
                        required
                        className="mt-3 w-full rounded-3xl border border-slate-700/70 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Email Address"
                    />
                </label>
                <label className="block">
                    <span className="text-sm font-semibold text-slate-200">Phone Number</span>
                    <input
                        name="phone"
                        className="mt-3 w-full rounded-3xl border border-slate-700/70 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Phone Number"
                    />
                </label>
                <label className="block">
                    <span className="text-sm font-semibold text-slate-200">Company Name</span>
                    <input
                        name="company"
                        className="mt-3 w-full rounded-3xl border border-slate-700/70 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Company Name"
                    />
                </label>
                <label className="block">
                    <span className="text-sm font-semibold text-slate-200">Country Name</span>
                    <input
                        name="country"
                        className="mt-3 w-full rounded-3xl border border-slate-700/70 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Country Name"
                    />
                </label>
            </div>

            <label className="block">
                <span className="text-sm font-semibold text-slate-200">Message*</span>
                <textarea
                    name="message"
                    required
                    rows={6}
                    className="mt-3 min-h-[160px] w-full rounded-[1.75rem] border border-slate-700/70 bg-slate-900/90 px-4 py-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Tell us about your workflow, challenge, audience, or AI idea."
                />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-300">
                    Send Message
                    <Send size={17} />
                </button>
                <p className="text-sm text-slate-400">We usually reply within one business day.</p>
            </div>

            {submitted && (
                <p className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-200">
                    Thanks! Your inquiry has been received. We will contact you shortly.
                </p>
            )}
        </form>
    )
}
