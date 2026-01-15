import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | LMW Labs',
  description: 'Insights on AI development, web apps, mobile development, and building scalable software. From the team at LMW Labs.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-dark">
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Insights on AI development, scalable software, and building products that matter.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="relative pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {posts.length === 0 ? (
            <div className="card p-12 text-center">
              <p className="text-gray-400 text-lg">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card p-6 md:p-8 block hover-lift group"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-900/30 text-primary-300 text-xs font-medium"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readingTime}
                    </span>
                    <span>{post.author}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
