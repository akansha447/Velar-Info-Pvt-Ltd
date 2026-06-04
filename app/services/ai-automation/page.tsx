import ServiceDetailPage from '../../../components/ServiceDetailPage'

export const metadata = {
    title: 'AI Agents & Workflows | Velar Info',
    description:
        'Automate repetitive work with AI agents, workflow orchestration, document processing, and business-system integrations.',
}

export default function AutomationPage() {
    return (
        <ServiceDetailPage
            eyebrow="AI Agents & Workflows"
            title="AI Agents & Workflows"
            subtitle="Connect people, data, and tools with AI agents that execute repeatable workflows accurately and at scale."
            heading="Enterprise AI Agents & Workflow Automation Services"
            paragraphs={[
                'Velar Info builds AI agents and workflow automations that remove repetitive manual work, accelerate approvals, process documents, trigger actions, and connect fragmented systems into one intelligent operating layer.',
                'From finance approvals and HR onboarding to IT support and compliance workflows, our automation solutions combine LLM reasoning, deterministic business rules, API integrations, audit trails, and human review when needed.',
            ]}
            stats={[
                { value: '70%', label: 'Reduction in manual processing time across repeatable workflows' },
                { value: '10x', label: 'Faster multi-step approvals and document processing' },
                { value: '0', label: 'Copy-paste errors in automated data handoffs' },
            ]}
            services={[
                'Autonomous task agents',
                'Document processing workflows',
                'Approval automation',
                'CRM and ERP integration',
                'Email and ticket automation',
                'Monitoring and audit trails',
            ]}
            expertise={[
                'Workflow discovery and mapping',
                'Agent orchestration design',
                'API and legacy-system integration',
                'Governance, logging, and approvals',
            ]}
            industries={[
                'Healthcare & Lifesciences',
                'Finance, Banking & Insurance (BFSI)',
                'E-Commerce & Retail',
                'Legal & Professional Services',
                'Logistics & Supply Chain',
                'Real Estate & PropTech',
            ]}
            caseStudyTitle="Invoice workflow automation"
            caseStudyText="An AI workflow extracted invoice data, matched purchase orders, routed approvals, and logged every step for audit-ready finance operations."
            whyTitle="Automation that respects business rules"
            whyText="We balance AI flexibility with predictable workflows, permissions, observability, and human checkpoints so automation stays controlled."
            cta="Automate your highest-value workflows"
        />
    )
}
