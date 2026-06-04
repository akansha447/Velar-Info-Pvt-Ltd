import ServiceDetailPage from '../../../components/ServiceDetailPage'

export const metadata = {
    title: 'AI Consulting & Integration | Velar Info',
    description:
        'Plan, prioritize, and integrate AI across your business with strategy, audits, roadmaps, and implementation support.',
}

export default function ConsultingPage() {
    return (
        <ServiceDetailPage
            eyebrow="AI Consulting & Integration"
            title="AI Consulting & Integration"
            subtitle="Move from AI curiosity to a practical implementation roadmap with expert guidance, architecture, and integration support."
            heading="Enterprise AI Consulting & Integration Services"
            paragraphs={[
                'Velar Info helps leadership and technology teams identify the right AI opportunities, estimate ROI, reduce implementation risk, and create a clear roadmap for adoption across departments.',
                'We audit workflows, data readiness, software architecture, governance needs, and vendor options, then help integrate AI into CRMs, ERPs, support platforms, analytics tools, and custom systems.',
            ]}
            stats={[
                { value: '30d', label: 'Typical timeline for AI opportunity audit and roadmap' },
                { value: '5+', label: 'High-impact use cases prioritized for implementation' },
                { value: '2x', label: 'Faster adoption through guided architecture and rollout planning' },
            ]}
            services={[
                'AI readiness audits',
                'Use-case discovery workshops',
                'Implementation roadmaps',
                'Vendor and model evaluation',
                'System integration planning',
                'Governance and risk controls',
            ]}
            expertise={[
                'Business process analysis',
                'AI architecture strategy',
                'Security and compliance planning',
                'Change management support',
            ]}
            industries={[
                'Healthcare & Lifesciences',
                'Finance, Banking & Insurance (BFSI)',
                'E-Commerce & Retail',
                'Legal & Professional Services',
                'Logistics & Supply Chain',
                'Real Estate & PropTech',
            ]}
            caseStudyTitle="AI roadmap for multi-team rollout"
            caseStudyText="A structured audit identified automation opportunities, technical constraints, and a phased roadmap that helped leadership approve the first AI implementation sprint."
            whyTitle="Strategy tied to execution"
            whyText="We do not stop at slide decks. Our consulting connects directly to implementation, integration, measurement, and continuous improvement."
            cta="Plan your AI transformation roadmap"
        />
    )
}
