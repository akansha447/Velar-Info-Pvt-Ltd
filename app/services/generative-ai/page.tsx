import ServiceDetailPage from '../../../components/ServiceDetailPage'

export const metadata = {
    title: 'Generative AI Services | Velar Info',
    description:
        'Enterprise-grade Generative AI services for copilots, RAG assistants, document automation, and intelligent workflows.',
}

export default function GenerativeAIPage() {
    return (
        <ServiceDetailPage
            eyebrow="Generative AI Services"
            title="Generative AI Services"
            subtitle="Accelerate transformation with secure, scalable, and production-ready Generative AI solutions designed for measurable business impact."
            heading="Enterprise Generative AI Development Services"
            paragraphs={[
                'Unlock the potential of next-gen AI through enterprise-grade Generative AI services that enable automation, hyper-personalization, and intelligent decision-making. Velar Info combines LLM engineering, multimodal AI, enterprise RAG orchestration, agentic automation, and responsible governance to help businesses launch production-ready AI beyond demo-stage experiments.',
                'Our tailored Generative AI solutions cover autonomous agents, knowledge-based AI assistants, multimodal systems for voice, image, video, and text, domain-specialized LLMs, and context-aware frameworks that modernize workflows and accelerate decision intelligence at scale.',
            ]}
            stats={[
                { value: '60%', label: 'Reduction in manual effort through GenAI-led workflow automation' },
                { value: '50%', label: 'Reduction in operational costs through intelligent process automation' },
                { value: '3x', label: 'Faster content, research, and decision-support cycles' },
            ]}
            services={[
                'Enterprise AI copilots',
                'Knowledge-base assistants',
                'Document summarization',
                'RAG and vector search',
                'Content generation engines',
                'Agentic workflow automation',
            ]}
            expertise={[
                'LLM strategy and model selection',
                'Prompt engineering and guardrails',
                'Secure private-data grounding',
                'Workflow and API integration',
            ]}
            industries={[
                'Healthcare & Lifesciences',
                'Finance, Banking & Insurance (BFSI)',
                'E-Commerce & Retail',
                'Legal & Professional Services',
                'Logistics & Supply Chain',
                'Real Estate & PropTech',
            ]}
            caseStudyTitle="AI knowledge assistant for operations"
            caseStudyText="A secure RAG assistant connected teams to policies, SOPs, and project documents, cutting search time and improving answer consistency."
            whyTitle="Built for real business outcomes"
            whyText="Velar Info focuses on governance, integrations, measurable ROI, and long-term maintainability so your Generative AI system keeps improving after launch."
            cta="Build a secure Generative AI solution with Velar Info"
        />
    )
}
