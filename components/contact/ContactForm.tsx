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
        <form onSubmit={handleSubmit} className="border border-slate-950/10 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,.08)] sm:p-8">
            <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-700">Project Inquiry</p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950">
                    Tell us what you want to build.
                </h2>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
                    Share a few details and our team will respond with next steps, suggested approach, and a meeting slot.
                </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="block">
                    <span className="text-sm font-black text-slate-700">Full name</span>
                    <input
                        name="name"
                        required
                        className="mt-3 w-full border border-slate-950/10 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-orange-600"
                        placeholder="Your full name"
                    />
                </label>
                <label className="block">
                    <span className="text-sm font-black text-slate-700">Work email</span>
                    <input
                        name="email"
                        type="email"
                        required
                        className="mt-3 w-full border border-slate-950/10 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-orange-600"
                        placeholder="you@company.com"
                    />
                </label>
                <label className="block">
                    <span className="text-sm font-black text-slate-700">Phone number</span>
                    <input
                        name="phone"
                        className="mt-3 w-full border border-slate-950/10 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-orange-600"
                        placeholder="+91 98765 43210"
                    />
                </label>
                <label className="block">
                    <span className="text-sm font-black text-slate-700">Company</span>
                    <input
                        name="company"
                        className="mt-3 w-full border border-slate-950/10 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-orange-600"
                        placeholder="Company name"
                    />
                </label>
                <label className="block">
                    <span className="text-sm font-black text-slate-700">Service interest</span>
                    <select
                        name="service"
                        className="mt-3 w-full border border-slate-950/10 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-orange-600"
                    >
                        <option>AI Chatbots & Virtual Assistants</option>
                        <option>AI Agents & Workflows</option>
                        <option>Voice & Conversational AI</option>
                        <option>Generative AI Services</option>
                        <option>Custom AI Development</option>
                        <option>AI Consulting & Integration</option>
                    </select>
                </label>
                <label className="block">
                    <span className="text-sm font-black text-slate-700">Estimated timeline</span>
                    <select
                        name="timeline"
                        className="mt-3 w-full border border-slate-950/10 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-orange-600"
                    >
                        <option>Immediately</option>
                        <option>Within 1 month</option>
                        <option>1-3 months</option>
                        <option>Planning stage</option>
                    </select>
                </label>
            </div>

            <label className="mt-5 block">
                <span className="text-sm font-black text-slate-700">Project details</span>
                <textarea
                    name="message"
                    required
                    rows={6}
                    className="mt-3 w-full border border-slate-950/10 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-orange-600"
                    placeholder="Tell us about your workflow, challenge, audience, systems to integrate, or AI idea."
                />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button type="submit" className="inline-flex w-fit items-center gap-3 bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:bg-orange-700">
                    Send Inquiry
                    <Send size={17} />
                </button>
                <p className="text-sm font-semibold leading-6 text-slate-500">
                    We usually reply within one business day.
                </p>
            </div>

            {submitted && (
                <p className="mt-5 border border-emerald-600/20 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700">
                    Thanks. Your inquiry has been received. Our team will contact you shortly.
                </p>
            )}
        </form>
    )
}
