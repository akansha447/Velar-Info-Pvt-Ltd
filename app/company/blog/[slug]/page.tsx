import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageTransition from '../../../../components/PageTransition'
import { blogPosts } from '../../../../lib/constants'

interface BlogPageProps {
    params: {
        slug: string
    }
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
    const post = blogPosts.find((postItem) => postItem.slug === params.slug)
    if (!post) {
        return {
            title: 'Post not found | Velar Info Pvt Ltd',
            description: 'The requested blog article could not be found.',
        }
    }

    return {
        title: `${post.title} | Velar Info Blog`,
        description: post.excerpt,
    }
}

export default function BlogPostPage({ params }: BlogPageProps) {
    const post = blogPosts.find((postItem) => postItem.slug === params.slug)
    if (!post) {
        notFound()
    }

    return (
        <PageTransition title="Blog article" description={post.title}>
            <div className="space-y-12">
                <section className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/60 p-10 shadow-soft">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                        <span>{post.category}</span>
                        <span>•</span>
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>
                    <p className="mt-6 text-lg text-slate-300 leading-8">{post.excerpt}</p>
                </section>
                <article className="space-y-8 text-slate-300">
                    <p>
                        At Velar Info, we’re exploring how generative AI and conversational voice agents unlock operational efficiency and customer satisfaction across Indian enterprises.
                    </p>
                    <p>
                        This article highlights how teams can adopt conversational AI in their service operations while keeping language support, regional nuance, and production reliability at the center of every deployment.
                    </p>
                    <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 shadow-soft">
                        <h3 className="text-2xl font-semibold text-white">Key takeaways</h3>
                        <ul className="space-y-4 list-disc pl-5 text-slate-300">
                            <li>Conversational AI reduces support cycles and makes enterprise automation more human-centric.</li>
                            <li>Regional language support is vital for adoption across India.</li>
                            <li>Production-ready AI must combine strong NLP with robust monitoring and integration.</li>
                        </ul>
                    </div>
                    <p className="leading-8">
                        Want to learn more? Visit our blog homepage for additional case studies, product updates, and practical AI strategy advice for Indian businesses.
                    </p>
                </article>
            </div>
        </PageTransition>
    )
}
