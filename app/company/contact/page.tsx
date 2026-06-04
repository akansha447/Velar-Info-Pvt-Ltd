import ContactForm from '../../../components/contact/ContactForm'

export const metadata = {
    title: 'Contact | Velar Info Pvt LTD',
    description: 'Contact Velar Info Pvt LTD for AI projects, digital transformation, and business automation solutions.',
}

export default function ContactPage() {
    return (
        <main className="bg-slate-950 text-white">
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(96,165,250,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.18),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.96),rgba(15,23,42,0.74))]" />
                <img
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1800&q=80"
                    alt="Digital network background"
                    className="absolute inset-0 h-full w-full object-cover opacity-40"
                />
                <div className="relative mx-auto max-w-7xl px-6 py-28 sm:px-8 lg:px-10">
                    <div className="max-w-3xl border-l-2 border-cyan-400/80 pl-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Contact Us</p>
                        <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                            Let’s Connect!
                        </h1>
                    </div>
                </div>
            </section>

            <section className="relative px-6 py-20 sm:px-8 lg:px-10">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-white shadow-[0_40px_120px_rgba(15,23,42,0.12)] text-slate-950">
                    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                        <div className="bg-slate-950 px-8 py-12 sm:px-12 sm:py-16 text-white">
                            <div className="max-w-xl">
                                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Have Questions?</p>
                                <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
                                    Let’s Talk!
                                </h2>
                                <p className="mt-6 text-base leading-8 text-slate-300">
                                    Fill out this form to drop us an email, and we will reach out to shape something extraordinary.
                                </p>
                            </div>
                        </div>
                        <div className="px-6 py-10 sm:px-10 sm:py-14">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
