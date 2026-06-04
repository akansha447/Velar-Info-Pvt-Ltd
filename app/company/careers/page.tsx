import JobCard from '../../../components/careers/JobCard'
import PerksGrid from '../../../components/careers/PerksGrid'
import HiringProcess from '../../../components/careers/HiringProcess'
import PageTransition from '../../../components/PageTransition'
import { jobOpenings } from '../../../lib/constants'

export const metadata = {
    title: 'Careers | Velar Info Pvt LTD',
    description: 'Explore open roles at Velar Info Pvt LTD and join a fast-growing team building AI, automation, and voice solutions for Indian businesses.',
}

export default function CareersPage() {
    return (
        <PageTransition
            title="Careers"
            description="Build your career at Velar Info with meaningful AI work, flexible growth, and strong team support."
        >
            <div className="space-y-20">
                <PerksGrid />
                <section className="space-y-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Open roles</p>
                        <h2 className="mt-3 text-3xl font-extrabold text-white">Join the team that is transforming businesses with AI.</h2>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-2">
                        {jobOpenings.map((job) => (
                            <JobCard
                                key={job.slug}
                                title={job.title}
                                location={job.location}
                                type={job.type}
                                description={job.description}
                                link={`/company/careers#${job.slug}`}
                            />
                        ))}
                    </div>
                </section>
                <HiringProcess />
            </div>
        </PageTransition>
    )
}
