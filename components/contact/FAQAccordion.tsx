"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
    {
        question: 'How quickly can I schedule a demo?',
        answer: 'Most demos can be scheduled within 2 business days. We tailor each session to your industry and use case.',
    },
    {
        question: 'Do you support integrations with existing CRMs?',
        answer: 'Yes. We build AI solutions that integrate with common CRM, ticketing, and ERP systems used by Indian enterprises.',
    },
    {
        question: 'What industries do you serve?',
        answer: 'We work with fintech, healthcare, logistics, education, retail, and government services, among others.',
    },
]

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.05 }}
                    className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-soft"
                >
                    <button
                        type="button"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="flex w-full items-center justify-between text-left text-white"
                    >
                        <span className="text-lg font-semibold">{faq.question}</span>
                        <span className="text-2xl font-bold text-cyan-300">{openIndex === index ? '−' : '+'}</span>
                    </button>
                    {openIndex === index && <p className="mt-4 text-slate-300 leading-7">{faq.answer}</p>}
                </motion.div>
            ))}
        </div>
    )
}
