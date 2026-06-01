import ServiceDetailPage from '../../../components/ServiceDetailPage'

export const metadata = {
    title: 'Custom AI Development | Velar Info',
    description:
        'Build custom AI models, NLP systems, data intelligence products, and LLM-powered applications tailored to your business.',
}

export default function CustomAIPage() {
    return (
        <ServiceDetailPage
            eyebrow="Custom AI Development"
            title="Custom AI Development"
            subtitle="Build AI products around your exact business logic, data, users, and operational constraints."
            heading="Custom AI Software Development Services"
            paragraphs={[
                'Velar Info develops custom AI systems for organizations that need more than an off-the-shelf tool. We design solutions around your data, domain, workflows, security requirements, and performance goals.',
                'Our team builds NLP engines, recommendation systems, prediction models, LLM applications, AI dashboards, and integrated intelligence layers that fit directly into your existing software environment.',
            ]}
            stats={[
                { value: '100%', label: 'Tailored to your data, workflows, and business requirements' },
                { value: '5+', label: 'Industry domains supported with custom AI delivery' },
                { value: '4-8w', label: 'Typical timeline for focused prototype-to-production builds' },
            ]}
            services={[
                'Custom LLM applications',
                'NLP and text intelligence',
                'Predictive analytics',
                'Recommendation engines',
                'AI dashboards',
                'Model deployment and monitoring',
            ]}
            expertise={[
                'AI product discovery',
                'Data pipeline architecture',
                'Model evaluation and tuning',
                'Cloud deployment and MLOps',
            ]}
            industries={[
                'Healthcare',
                'Finance',
                'Manufacturing',
                'Retail',
                'Logistics',
                'SaaS platforms',
            ]}
            caseStudyTitle="Custom AI decision-support platform"
            caseStudyText="A tailored AI system combined business data, predictive models, and dashboards to help teams prioritize actions and reduce manual analysis."
            whyTitle="Built around your business advantage"
            whyText="We do not force your problem into a generic template. We design the model, product, and integration strategy around the outcome you need."
            cta="Build a custom AI product"
        />
    )
}
