import AboutHero from '../../../components/about/WhoWeAre'
import CoreValues from '../../../components/about/CoreValues'
import MissionVision from '../../../components/about/MissionVision'
import TeamSection from '../../../components/about/TeamSection'
import Timeline from '../../../components/about/Timeline'
import PageTransition from '../../../components/PageTransition'

export const metadata = {
    title: 'About Us | Velar Info Pvt Ltd',
    description: 'Learn how Velar Info builds AI products, accelerates enterprise automation, and serves Indian businesses with conversational intelligence.',
}

export default function AboutPage() {
    return (
        <PageTransition
            title="About Us"
            description="We build AI products and services that empower Indian enterprises and government organizations."
        >
            <div className="space-y-20">
                <AboutHero />
                <MissionVision />
                <CoreValues />
                <TeamSection />
                <Timeline />
            </div>
        </PageTransition>
    )
}
