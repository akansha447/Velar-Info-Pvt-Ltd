import Link from 'next/link'
import PageTransition from '../../components/PageTransition'
import { companyNavItems } from '../../lib/constants'

export const metadata = {
    title: 'Company | Velar Info Pvt Ltd',
    description: 'Learn about Velar Info, our careers, blog, and how to contact us for AI solutions.',
}

export default function CompanyIndexPage() {
    return (
        <PageTransition
            title="Company"
            description="Explore our story, careers, blog, and the best way to connect with Velar Info."
        >
            <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {companyNavItems.map((item) => (
                    <Link key={item.href} href={item.href} className="glass-card rounded-[2rem] border border-white/10 p-8 text-white transition hover:-translate-y-1 hover:border-cyan-300/30">
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{item.label}</p>
                        <p className="mt-5 text-xl font-semibold">Explore</p>
                    </Link>
                ))}
            </section>
        </PageTransition>
    )
}
