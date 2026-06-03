import { Briefcase, ShieldCheck, Globe } from 'lucide-react'

const logos = ['Atlas Bank', 'Lumen Healthcare', 'Priya Labs', 'Nexa Retail', 'Orion Logistics', 'Verity Finance']

export default function TrustSection() {
    return (
        <section className="bg-[#f8fafc] px-6 py-16 text-slate-950 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-6 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-600">Trusted by enterprise teams</p>
                        <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">
                            Market leaders partner with us to build secure, scalable digital products.
                        </h2>
                    </div>
                    <p className="text-base leading-8 text-slate-600">
                        We deliver technology programs that improve efficiency, reduce risk, and accelerate growth for ambitious businesses.
                    </p>
                </div>

                <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="ticker gap-6">
                        {logos.concat(logos).map((logo, index) => (
                            <div key={`${logo}-${index}`} className="min-w-[14rem] rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                                {logo}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-3">
                    {[
                        { icon: Briefcase, label: 'Strategic partnerships', value: '50+' },
                        { icon: ShieldCheck, label: 'Compliance-ready launches', value: '100%' },
                        { icon: Globe, label: 'Countries delivered', value: '14+' },
                    ].map((item) => {
                        const Icon = item.icon
                        return (
                            <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="flex items-center gap-3 text-orange-600">
                                    <Icon size={22} />
                                    <span className="text-sm uppercase tracking-[0.22em] text-slate-600">{item.label}</span>
                                </div>
                                <p className="mt-5 text-4xl font-black text-slate-950">{item.value}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
