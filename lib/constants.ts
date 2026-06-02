import type { LucideIcon } from 'lucide-react'
import {
    BarChart,
    BadgeDollarSign,
    Briefcase,
    Building2,
    Code2,
    Flag,
    Hand,
    Heart,
    Laptop,
    Lightbulb,
    MessageSquare,
    Mic,
    Rocket,
    Search,
    Settings,
    Shield,
    Target,
    TrendingUp,
    Users,
    Wrench,
    Zap,
} from 'lucide-react'

export const heroBullets = [
    'Deploy AI Chatbots in days, not months',
    'Automate repetitive workflows end-to-end',
    'Voice AI that understands Indian languages',
    'Custom AI built for your exact business needs',
]

export const heroStats = [
    { label: 'Clients Served', value: 500, suffix: '+' },
    { label: 'AI Interactions Handled', value: 10, suffix: 'M+' },
    { label: 'Automation Accuracy', value: 95, suffix: '%' },
    { label: 'Industries Served', value: 5, suffix: '+' },
    { label: 'AI Support Uptime', value: 24, suffix: '/7' },
]

export const trustLogos = [
    'Enterprise Client',
    'Govt. Body',
    'FinTech Co.',
    'Public Sector',
    'Retail Chain',
    'Healthcare PSU',
    'Logistics Firm',
    'SaaS Startup',
]

export const companyNavItems = [
    { label: 'About Us', href: '/company/about-us' },
    { label: 'Careers', href: '/company/careers' },
    { label: 'Blog', href: '/company/blog' },
    { label: 'Contact Us', href: '/company/contact' },
]

export const industryNavItems = [
    { label: 'Industry Solutions', href: '/industries' },
    { label: 'Healthcare & Lifesciences', href: '/industries#healthcare-lifesciences' },
    { label: 'Finance, Banking & Insurance', href: '/industries#finance-banking-insurance' },
    { label: 'E-Commerce & Retail', href: '/industries#e-commerce-retail' },
    { label: 'Legal & Professional Services', href: '/industries#legal-professional-services' },
    { label: 'Logistics & Supply Chain', href: '/industries#logistics-supply-chain' },
    { label: 'Real Estate & PropTech', href: '/industries#real-estate-proptech' },
]

export const careerPerks = [
    {
        title: 'High-Impact Work',
        description:
            'Your work directly powers AI tools used by thousands of users across India every single day.',
        icon: Zap,
    },
    {
        title: 'Learn & Grow Fast',
        description:
            'Work with cutting-edge LLMs, NLP models, and cloud infrastructure. We invest heavily in learning.',
        icon: TrendingUp,
    },
    {
        title: 'Remote-Friendly',
        description:
            'Work from anywhere in India. We’re a hybrid-first team with flexible hours and async-friendly culture.',
        icon: Laptop,
    },
    {
        title: 'Competitive Compensation',
        description:
            'Market-competitive salaries, performance bonuses, and meaningful ESOPs for early team members.',
        icon: BadgeDollarSign,
    },
    {
        title: 'Collaborative Culture',
        description:
            'Flat hierarchy. Your ideas matter here — from intern to CTO, everyone has a voice.',
        icon: Users,
    },
    {
        title: 'Build with Purpose',
        description:
            'We’re building AI that genuinely helps people work smarter. Come build something that matters.',
        icon: Target,
    },
]

export const jobOpenings = [
    {
        slug: 'senior-ai-ml-engineer',
        title: 'Senior AI/ML Engineer',
        department: 'AI/ML',
        location: 'Remote — India',
        type: 'Full-Time',
        description:
            'Build and fine-tune LLMs, NLP pipelines, and conversational AI models. 3+ years in ML, strong Python & Hugging Face experience required.',
        responsibilities: [
            'Design and implement AI models for conversational applications.',
            'Optimize model performance for latency and accuracy.',
            'Collaborate with product and engineering teams.',
            'Deploy models to production with observability and monitoring.',
        ],
        requirements: [
            '3+ years experience in machine learning and NLP.',
            'Strong Python and Hugging Face experience.',
            'Experience deploying AI models in production.',
            'Excellent communication skills with cross-functional teams.',
        ],
    },
    {
        slug: 'full-stack-developer-nextjs-nodejs',
        title: 'Full Stack Developer (Next.js + Node.js)',
        department: 'Engineering',
        location: 'Remote — India',
        type: 'Full-Time',
        description:
            'Develop scalable web apps and AI dashboards. Proficient in Next.js, Node.js, TypeScript, and REST APIs. 2+ years experience required.',
        responsibilities: [
            'Build responsive dashboards and internal tools.',
            'Integrate front-end interfaces with backend AI services.',
            'Maintain code quality and testing best practices.',
            'Support deployment automation and monitoring.',
        ],
        requirements: [
            '2+ years experience in Next.js and Node.js development.',
            'Strong TypeScript and REST API skills.',
            'Familiarity with modern frontend frameworks and tooling.',
            'Ability to work in an agile, fast-paced team.',
        ],
    },
    {
        slug: 'ai-sales-executive',
        title: 'AI Sales Executive',
        department: 'Sales',
        location: 'Bangalore / Mumbai',
        type: 'Full-Time',
        description:
            'Drive B2B sales of our AI products to enterprises and government clients. 2+ years in SaaS or enterprise sales.',
        responsibilities: [
            'Prospect and close enterprise-level AI deals.',
            'Manage pipeline and forecasts in CRM tools.',
            'Build relationships with decision-makers.',
            'Collaborate with the product and delivery teams.',
        ],
        requirements: [
            '2+ years experience in SaaS or enterprise sales.',
            'Strong communication and negotiation skills.',
            'Experience selling to enterprises or government clients.',
            'Self-driven with a track record of meeting targets.',
        ],
    },
    {
        slug: 'conversational-ai-designer',
        title: 'Conversational AI Designer',
        department: 'Design',
        location: 'Remote — India',
        type: 'Full-Time',
        description:
            'Design chatbot conversation flows, voice UX scripts, and AI interaction patterns. Experience with Botpress or Dialogflow preferred.',
        responsibilities: [
            'Design intuitive conversational experiences.',
            'Create dialogue flows and voice scripts.',
            'Test and refine interactions for clarity.',
            'Work closely with engineering and product teams.',
        ],
        requirements: [
            'Experience designing chatbot or voice experiences.',
            'Familiarity with conversation design tools.',
            'Strong writing and UX skills.',
            'Ability to iterate quickly based on user feedback.',
        ],
    },
    {
        slug: 'devops-cloud-engineer',
        title: 'DevOps / Cloud Engineer',
        department: 'Engineering',
        location: 'Remote — India',
        type: 'Full-Time',
        description:
            'Manage AWS/GCP infrastructure, CI/CD pipelines, and AI model deployment. Experience with Docker, Kubernetes required.',
        responsibilities: [
            'Manage cloud infrastructure and deployments.',
            'Build CI/CD pipelines for AI services.',
            'Ensure reliability and scalability of production systems.',
            'Monitor performance and troubleshoot incidents.',
        ],
        requirements: [
            'Experience with AWS or GCP infrastructure.',
            'Strong Docker and Kubernetes skills.',
            'Knowledge of CI/CD tools and best practices.',
            'Background in production reliability and monitoring.',
        ],
    },
    {
        slug: 'ai-research-intern',
        title: 'AI Research Intern',
        department: 'AI/ML',
        location: 'Remote — India',
        type: 'Internship',
        description:
            'Assist in training and evaluating NLP/LLM models. Final year CS/AI students or recent graduates. 3-6 month internship.',
        responsibilities: [
            'Support model training and evaluation.',
            'Conduct literature review and prototyping.',
            'Help prepare datasets and experiments.',
            'Collaborate with research and engineering teams.',
        ],
        requirements: [
            'Final year CS/AI student or recent graduate.',
            'Strong programming skills in Python.',
            'Interest in NLP, ML, and LLM research.',
            'Good communication and collaboration skills.',
        ],
    },
]

export const hiringSteps = [
    'Apply Online',
    'HR Screening Call',
    'Technical / Role-Specific Interview',
    'Final Round + Offer',
]

export const featuredPost = {
    category: 'AI Trends',
    title: 'How Conversational AI is Transforming Customer Support in Indian Enterprises',
    excerpt:
        'Discover how empathetic, multilingual agents are redefining support operations and reducing response times across India.',
    author: 'Priya Sharma',
    date: 'Jan 15, 2025',
    readTime: '7 min read',
    slug: 'conversational-ai-transforming-customer-support',
}

export const blogPosts = [
    {
        slug: 'why-every-indian-smb-needs-an-ai-chatbot-in-2025',
        category: 'AI Trends',
        title: 'Why Every Indian SMB Needs an AI Chatbot in 2025',
        excerpt:
            'From reducing support costs to improving customer satisfaction — here’s why AI chatbots are no longer optional for small businesses.',
        author: 'Priya Sharma',
        date: 'Jan 15, 2025',
        readTime: '5 min read',
    },
    {
        slug: 'how-a-government-psu-automated-70-of-citizen-queries',
        category: 'Use Cases',
        title: 'How a Government PSU Automated 70% of Citizen Queries with Velar Info Voice AI',
        excerpt:
            'A deep dive into how we deployed a multilingual voice bot handling 5,000+ daily calls for a state government body.',
        author: 'Rahul Mehta',
        date: 'Feb 3, 2025',
        readTime: '8 min read',
    },
    {
        slug: 'introducing-velar-autoflow-no-code-ai-automation',
        category: 'Product Updates',
        title: 'Introducing Velar AutoFlow: No-Code AI Automation for Indian Businesses',
        excerpt:
            'Today we’re launching our most powerful product yet — a drag-and-drop AI workflow builder that connects to 100+ tools.',
        author: 'Arjun Kapoor',
        date: 'Feb 20, 2025',
        readTime: '4 min read',
    },
    {
        slug: 'hindi-voice-ai-accent-accuracy-matters',
        category: 'Voice AI',
        title: 'Hindi Voice AI: Why Accent Accuracy Matters More Than You Think',
        excerpt:
            'Building voice AI for India isn’t just about translation — it’s about cultural nuance, regional accents, and contextual understanding.',
        author: 'Sneha Iyer',
        date: 'Mar 5, 2025',
        readTime: '6 min read',
    },
    {
        slug: 'llms-in-the-enterprise-what-indian-cios-need-to-know',
        category: 'AI Trends',
        title: 'LLMs in the Enterprise: What Indian CIOs Need to Know in 2025',
        excerpt:
            'A practical guide for Indian enterprise leaders evaluating large language models for internal deployment.',
        author: 'Rahul Mehta',
        date: 'Mar 18, 2025',
        readTime: '10 min read',
    },
    {
        slug: 'ai-for-grievance-redressal-lessons-from-3-deployments',
        category: 'Government AI',
        title: 'AI for Grievance Redressal: Lessons from 3 Government Deployments',
        excerpt:
            'What we learned deploying AI chatbots across three state government grievance portals — challenges, wins, and what to do differently.',
        author: 'Priya Sharma',
        date: 'Apr 2, 2025',
        readTime: '7 min read',
    },
]

export const faqItems = [
    {
        question: 'How long does it take to deploy an AI chatbot?',
        answer:
            'Most standard chatbot deployments take 7–14 days. Custom AI projects may take 4–8 weeks depending on complexity and integrations required.',
    },
    {
        question: 'Do you support Hindi and regional Indian languages?',
        answer:
            'Yes. Our Conversational AI and Voice AI products support Hindi, Tamil, Telugu, Marathi, Bengali, and more. Language support is added based on client needs.',
    },
    {
        question: 'Can your AI integrate with our existing CRM/ERP?',
        answer:
            'Absolutely. We integrate with Salesforce, SAP, Zoho, Freshdesk, WhatsApp Business API, and 100+ tools via REST APIs and webhooks.',
    },
    {
        question: 'Is on-premise deployment available for government clients?',
        answer:
            'Yes. We offer both cloud (AWS/GCP) and on-premise deployment options — especially for government and regulated industry clients with data sovereignty requirements.',
    },
    {
        question: 'What pricing models do you offer?',
        answer:
            'We offer subscription-based SaaS pricing, one-time project pricing for custom builds, and enterprise annual contracts. Contact our sales team for a custom quote.',
    },
]

export const contactCards = [
    {
        title: 'Sales Inquiry',
        icon: Briefcase,
        label: 'Interested in our AI products?',
        email: 'sales@velarinfo.com',
        buttonText: 'Email Sales Team',
    },
    {
        title: 'Technical Support',
        icon: Wrench,
        label: 'Already a client? Get help fast.',
        email: 'support@velarinfo.com',
        buttonText: 'Raise a Ticket',
    },
    {
        title: 'Partnership',
        icon: Hand,
        label: 'Resellers, integrators, investors.',
        email: 'partners@velarinfo.com',
        buttonText: 'Partner With Us',
    },
]

export const journeyTimeline = [
    {
        date: '2024 Q1',
        title: 'Velar Info Pvt Ltd incorporated.',
        description: 'Core team assembled.',
    },
    {
        date: '2024 Q2',
        title: 'First AI Chatbot deployed.',
        description: 'Delivered the first chatbot for a fintech client.',
    },
    {
        date: '2024 Q3',
        title: 'Voice AI product launched.',
        description: 'First government sector pilot completed.',
    },
    {
        date: '2024 Q4',
        title: 'Crossed 50 enterprise clients.',
        description: 'Team grew to 20+ members.',
    },
    {
        date: '2025 Q1',
        title: 'Launched AI Automation Platform.',
        description: 'Series A fundraising begins.',
    },
    {
        date: '2025 Q2',
        title: 'Expanded to 5+ industries.',
        description: 'Reached 1M+ AI interactions milestone.',
    },
]

export const teamMembers = [
    {
        initials: 'VK',
        name: 'Vikram Kapoor',
        role: 'Founder & CEO',
        bio: 'AI entrepreneur with 8+ years in enterprise software and NLP. Previously led AI products at a leading SaaS firm.',
    },
    {
        initials: 'AS',
        name: 'Ananya Singh',
        role: 'Co-Founder & CTO',
        bio: 'Machine learning engineer with deep expertise in LLMs, conversational AI, and scalable cloud architectures.',
    },
    {
        initials: 'MB',
        name: 'Madhav Bose',
        role: 'Head of Business Development',
        bio: '10+ years in B2B enterprise sales across India, SaaS and government sector experience.',
    },
]

export const coreValues = [
    {
        title: 'Innovation First',
        description:
            'We push boundaries every day — building AI solutions that didn’t exist yesterday and making them production-ready for tomorrow.',
        icon: Lightbulb,
    },
    {
        title: 'Customer Obsession',
        description:
            'Every line of code, every AI model, every integration is built around one question: does this actually help our customer?',
        icon: Heart,
    },
    {
        title: 'Transparency',
        description:
            'We believe AI must be explainable, auditable, and trustworthy. No black boxes. Full visibility into what our AI does and why.',
        icon: Shield,
    },
    {
        title: 'India-First Approach',
        description:
            'Built for Indian languages, workflows, regulations, and business culture — not just adapted from Western products.',
        icon: Flag,
    },
]

export const aboutMetrics = [
    { label: 'Founded', value: '2024' },
    { label: 'Team Members', value: '20+' },
    { label: 'Clients Served', value: '50+' },
    { label: 'AI Interactions', value: '1M+' },
]

interface NavItem {
    label: string
    href?: string
}

interface NavGroup {
    label: string
    items: NavItem[]
}

export const navGroups: NavGroup[] = [
    {
        label: 'Services',
        items: [
            { label: 'AI Chatbots & Virtual Assistants', href: '/services/ai-chatbots' },
            { label: 'AI Agents & Workflows', href: '/services/ai-automation' },
            { label: 'Voice & Conversational AI', href: '/services/voice-ai' },
            { label: 'Generative AI Services', href: '/services/generative-ai' },
            { label: 'Custom AI Development', href: '/services/custom-ai' },
            { label: 'AI Consulting & Integration', href: '/services/ai-consulting' },
        ],
    },
    {
        label: 'AI & GenX Platforms',
        items: [
            { label: 'Enterprise AI Solutions' },
            { label: 'SMB & Startup AI Solutions' },
            { label: 'Government & Public Sector AI' },
        ],
    },
    {
        label: 'Industries',
        items: industryNavItems,
    },
    {
        label: 'Company',
        items: companyNavItems,
    },
]

interface ServiceCard {
    title: string
    description: string
    icon: LucideIcon
    href?: string
}

export const servicesData: ServiceCard[] = [
    {
        title: 'AI Chatbots & Virtual Assistants',
        href: '/services/ai-chatbots',
        description:
            'Deploy intelligent chatbots that handle customer queries, support tickets, and lead generation — 24/7, across WhatsApp, Web, and Mobile.',
        icon: MessageSquare,
    },
    {
        title: 'AI Agents & Workflows',
        href: '/services/ai-automation',
        description:
            'Connect people, data, and tools with AI agents that automate approvals, documents, tickets, and multi-step workflows.',
        icon: Zap,
    },
    {
        title: 'Voice & Conversational AI',
        href: '/services/voice-ai',
        description:
            'Deploy AI voice agents and conversational assistants for calls, chat, lead qualification, and customer support.',
        icon: Mic,
    },
    {
        title: 'Generative AI Services',
        href: '/services/generative-ai',
        description:
            'Build enterprise-ready AI assistants, content engines, and knowledge tools powered by secure generative AI models.',
        icon: Lightbulb,
    },
    {
        title: 'Custom AI Development',
        href: '/services/custom-ai',
        description:
            'Need something unique? We build custom AI models, NLP engines, and LLM-powered applications tailored to your exact business logic.',
        icon: Code2,
    },
    {
        title: 'AI Consulting & Integration',
        href: '/services/ai-consulting',
        description:
            'Not sure where to start? Our AI consultants audit your processes, identify automation opportunities, and roadmap your AI journey.',
        icon: BarChart,
    },
]

export const howItWorks = [
    {
        step: 'DISCOVER',
        title: 'Discover',
        description: 'We audit your business workflows and identify the highest-impact AI opportunities.',
        icon: Search,
    },
    {
        step: 'BUILD',
        title: 'Build',
        description:
            'Our team designs, trains, and integrates your custom AI solution — chatbot, voice bot, or automation pipeline.',
        icon: Settings,
    },
    {
        step: 'SCALE',
        title: 'Scale',
        description: 'Go live, measure results, and continuously improve with real-time analytics and ongoing AI support.',
        icon: TrendingUp,
    },
]

export const solutionCards = [
    {
        title: 'Enterprises & Large Corporates',
        icon: Building2,
        description: 'Scale AI across departments — customer support, HR, finance, and operations.',
        bullets: [
            'Multi-department AI agents',
            'Enterprise-grade security & compliance',
            'Integration with SAP, Salesforce, Oracle',
            'Dedicated implementation team',
        ],
        cta: 'Explore Enterprise AI →',
    },
    {
        title: 'SMBs & Startups',
        icon: Rocket,
        description:
            'Affordable, fast-to-deploy AI tools that give small teams the power of large enterprises.',
        bullets: [
            'Ready-to-use chatbot templates',
            'WhatsApp & website bot integration',
            'Pay-as-you-grow pricing',
            'Onboarding in under 7 days',
        ],
        cta: 'Explore SMB Solutions →',
    },
    {
        title: 'Government & Public Sector',
        icon: Building2,
        description: 'AI built for citizen services, public grievance handling, and government workflows.',
        bullets: [
            'Multilingual chatbots (Hindi + regional languages)',
            'Grievance redressal automation',
            'Secure on-premise deployment options',
            'Compliant with government data policies',
        ],
        cta: 'Explore Govt. Solutions →',
    },
]

export const comparisonRows = [
    {
        feature: 'India-first AI approach',
        velar: 'Yes, Hindi + English',
        other: 'Mostly English only',
    },
    {
        feature: 'Custom AI Development',
        velar: 'Fully custom-built',
        other: 'Template-based only',
    },
    {
        feature: 'Deployment Time',
        velar: '7–14 days',
        other: '2–6 months',
    },
    {
        feature: 'Pricing',
        velar: 'Flexible & startup-friendly',
        other: 'Enterprise pricing only',
    },
    {
        feature: 'Government-ready AI',
        velar: 'Yes, compliant',
        other: 'Rarely available',
    },
    {
        feature: 'Post-launch Support',
        velar: 'Dedicated team',
        other: 'Ticket-based only',
    },
    {
        feature: 'On-premise Deployment',
        velar: 'Available',
        other: 'Cloud only',
    },
]

export const testimonials = [
    {
        quote:
            'Velar Info deployed an AI chatbot for our customer support in just 10 days. Our resolution rate jumped by 70%.',
        name: 'Rajesh M.',
        role: 'VP Operations, FinTech Co.',
    },
    {
        quote:
            'Their Voice AI bot handles 3,000+ calls daily in Hindi and English. Incredibly accurate and reliable.',
        name: 'Priya S.',
        role: 'IT Head, Govt. PSU',
    },
    {
        quote:
            'As a startup, we couldn’t afford a large tech team. Velar Info’s AI automation saved us 40 hours per week.',
        name: 'Arjun K.',
        role: 'Founder, D2C Brand',
    },
]
