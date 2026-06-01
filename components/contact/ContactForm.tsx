"use client"
import { useState } from 'react'

export default function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3400)
    }

    return (
        <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-soft">
            <h2 className="text-3xl font-extrabold text-white">Let’s talk about your next AI project.</h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                        <span className="text-sm font-semibold text-slate-300">Name</span>
                        <input
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60"
                            placeholder="Your full name"
                        />
                    </label>
                    <label className="block">
                        <span className="text-sm font-semibold text-slate-300">Email</span>
                        <input
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60"
                            placeholder="you@example.com"
                        />
                    </label>
                </div>
                <label className="block">
                    <span className="text-sm font-semibold text-slate-300">Message</span>
                    <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60"
                        placeholder="Tell us about your challenge or opportunity"
                    />
                </label>
                <button type="submit" className="inline-flex items-center justify-center rounded-3xl bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                    Send message
                </button>
                {submitted && <p className="text-sm text-emerald-300">Thanks! Your message has been received.</p>}
            </form>
        </div>
    )
}
