import { Mail, Phone, MapPin } from 'lucide-react'

const contacts = [
    {
        title: 'Office',
        icon: MapPin,
        detail: 'Plot 123, IT Park, Lucknow, Uttar Pradesh, India',
    },
    {
        title: 'Email',
        icon: Mail,
        detail: 'hello@velarinfo.ai',
    },
    {
        title: 'Phone',
        icon: Phone,
        detail: '+91 98765 43210',
    },
]

export default function ContactInfo() {
    return (
        <div className="grid gap-4 sm:grid-cols-3">
            {contacts.map((item) => {
                const Icon = item.icon
                return (
                    <div key={item.title} className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-soft">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/15 text-cyan-300">
                            <Icon size={20} />
                        </div>
                        <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-3 text-slate-300 leading-7">{item.detail}</p>
                    </div>
                )
            })}
        </div>
    )
}
