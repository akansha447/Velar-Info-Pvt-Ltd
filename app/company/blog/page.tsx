import BlogCard from '../../../components/blog/BlogCard'
import FeaturedPost from '../../../components/blog/FeaturedPost'
import Newsletter from '../../../components/blog/Newsletter'
import PageTransition from '../../../components/PageTransition'
import { blogPosts } from '../../../lib/constants'

export const metadata = {
    title: 'Blog | Velar Info Pvt Ltd',
    description: 'Read insights, customer stories, and product news from Velar Info about AI automation, voice AI, and enterprise innovation.',
}

export default function BlogPage() {
    return (
        <PageTransition
            title="Blog"
            description="Insights, use cases, and product updates from the Velar Info AI team."
        >
            <div className="space-y-20">
                <FeaturedPost />
                <section className="space-y-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Latest insights</p>
                            <h2 className="mt-3 text-3xl font-extrabold text-white">Recent stories from our AI practice.</h2>
                        </div>
                        <div className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-300">
                            Filter by category coming soon
                        </div>
                    </div>
                    <div className="grid gap-6 xl:grid-cols-2">
                        {blogPosts.map((post) => (
                            <BlogCard key={post.slug} title={post.title} summary={post.excerpt} category={post.category} slug={post.slug} />
                        ))}
                    </div>
                </section>
                <Newsletter />
            </div>
        </PageTransition>
    )
}
