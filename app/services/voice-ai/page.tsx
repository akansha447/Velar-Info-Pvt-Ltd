import ServiceDetailPage from '../../../components/ServiceDetailPage'

export const metadata = {
    title: 'Voice & Conversational AI | Velar Info',
    description:
        'Deploy human-sounding AI voice agents and conversational assistants for inbound calls, outbound outreach, and support automation.',
}

export default function VoiceAIPage() {
    return (
        <ServiceDetailPage
            eyebrow="Voice & Conversational AI"
            title="Voice & Conversational AI"
            subtitle="Create natural, real-time conversations across phone, web, and chat with AI agents that understand intent, language, and context."
            heading="Enterprise Voice & Conversational AI Services"
            paragraphs={[
                'Velar Info designs conversational AI systems that handle inbound calls, outbound outreach, customer support, appointment booking, reminders, and intelligent routing without long waits or rigid IVR trees.',
                'Our voice and chat agents combine speech recognition, natural language understanding, sentiment handling, multilingual support, and secure integrations with CRM, telephony, calendars, and business systems.',
            ]}
            stats={[
                { value: '80%', label: 'Reduction in call-handling cost through AI voice automation' },
                { value: '24/7', label: 'Always-on support across customer touchpoints' },
                { value: '3x', label: 'Faster response times compared with human-only queues' },
            ]}
            services={[
                'Inbound voice agents',
                'Outbound calling bots',
                'Multilingual chat assistants',
                'Smart lead qualification',
                'Appointment booking automation',
                'Human handoff and escalation',
            ]}
            expertise={[
                'Real-time voice AI architecture',
                'Conversation design and testing',
                'Telephony and CRM integration',
                'Sentiment-aware escalation',
            ]}
            industries={[
                'Healthcare & Lifesciences',
                'Finance, Banking & Insurance (BFSI)',
                'E-Commerce & Retail',
                'Legal & Professional Services',
                'Logistics & Supply Chain',
                'Real Estate & PropTech',
            ]}
            caseStudyTitle="AI voice agent for high-volume support"
            caseStudyText="A multilingual voice bot handled repetitive customer calls, reduced queue pressure, and escalated complex cases to live agents with full conversation context."
            whyTitle="Human-like conversations with enterprise control"
            whyText="We combine natural conversation flows with monitoring, analytics, security, and integrations so your AI voice channel is reliable from day one."
            cta="Launch a Voice & Conversational AI agent"
        />
    )
}
