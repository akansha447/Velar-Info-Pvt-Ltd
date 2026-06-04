import ServiceDetailPage from '../../../components/ServiceDetailPage'

export const metadata = {
    title: 'AI Chatbots & Virtual Assistants | Velar Info',
    description:
        'Deploy intelligent AI chatbots and virtual assistants for support, lead generation, and internal operations.',
}

export default function ChatbotsPage() {
    return (
        <ServiceDetailPage
            eyebrow="AI Chatbots & Virtual Assistants"
            title="AI Chatbots & Virtual Assistants"
            subtitle="Deliver instant, intelligent support across web, WhatsApp, and internal channels with AI assistants trained around your business."
            heading="Enterprise AI Chatbot Development Services"
            paragraphs={[
                'Velar Info builds production-ready chatbots that answer questions, capture leads, resolve support requests, and guide users through business workflows with natural, context-aware conversations.',
                'Our assistants connect with your knowledge base, CRM, helpdesk, ERP, and internal tools so users get accurate answers and teams reduce repetitive support load without losing control.',
            ]}
            stats={[
                { value: '80%', label: 'Reduction in repetitive support ticket volume' },
                { value: '24/7', label: 'Always-on availability across digital channels' },
                { value: '3x', label: 'Faster response and resolution compared with manual queues' },
            ]}
            services={[
                'Website chatbots',
                'WhatsApp assistants',
                'Lead qualification bots',
                'Support desk automation',
                'Internal HR and IT assistants',
                'Human handoff workflows',
            ]}
            expertise={[
                'Conversation flow design',
                'Knowledge-base grounding',
                'CRM and helpdesk integration',
                'Analytics and optimization',
            ]}
            industries={[
                'Healthcare & Lifesciences',
                'Finance, Banking & Insurance (BFSI)',
                'E-Commerce & Retail',
                'Legal & Professional Services',
                'Logistics & Supply Chain',
                'Real Estate & PropTech',
            ]}
            caseStudyTitle="Customer support chatbot rollout"
            caseStudyText="A web and WhatsApp assistant resolved frequent customer questions, captured qualified leads, and routed complex requests to the right team."
            whyTitle="Accurate, branded, and measurable"
            whyText="We tune chatbots around your tone, data, approval process, and support metrics so automation improves service quality instead of just deflecting tickets."
            cta="Deploy an AI chatbot for your business"
        />
    )
}
