import ContactForm from '../../../components/contact/ContactForm'
import ContactInfo from '../../../components/contact/ContactInfo'
import FAQAccordion from '../../../components/contact/FAQAccordion'
import PageTransition from '../../../components/PageTransition'

export const metadata = {
    title: 'Contact | Velar Info Pvt Ltd',
    description: 'Get in touch with Velar Info for AI demos, partnerships, careers, and customer support inquiries.',
}

export default function ContactPage() {
    return (
        <PageTransition
            title="Contact Us"
            description="Talk to our AI experts. We help you discover the right automation, conversational, and voice solutions for your business."
        >
            <div className="space-y-20">
                <section className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-extrabold text-white">Reach out and start your AI journey.</h2>
                        <p className="max-w-xl text-slate-300 leading-8">
                            Whether you’re evaluating AI pilots, scheduling a demo, hiring talent, or need support for an existing deployment — our team is ready to help.
                        </p>
                    </div>
                    <ContactInfo />
                </section>
                <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr]">
                    <ContactForm />
                    <FAQAccordion />
                </div>
            </div>
        </PageTransition>
    )
}
