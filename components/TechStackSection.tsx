const stack = [
    'React',
    'Next.js',
    'Node.js',
    'AWS',
    'Docker',
    'Kubernetes',
    'GraphQL',
    'Magento',
    'MongoDB',
    'Redis',
]

export default function TechStackSection() {
    return (
        <section className="bg-slate-950 px-6 py-20 text-slate-100 sm:px-8 lg:px-10 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-soft backdrop-blur-xl">
                    <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Tech foundation</p>
                            <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                                Built with the modern stack that powers resilient enterprise platforms.
                            </h2>
                            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
                                We use proven cloud, frontend, backend, and integration technologies to reduce risk and accelerate delivery across every engagement.
                            </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {stack.map((tech) => (
                                <div key={tech} className="rounded-3xl border border-white/10 bg-slate-950/70 px-5 py-4 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/30 hover:bg-slate-900/95">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
