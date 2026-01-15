import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found | LMW Labs',
    }
  }

  return {
    title: `${post.title} | LMW Labs Blog`,
    description: post.excerpt,
  }
}

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-display text-3xl md:text-4xl font-bold text-white mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-8 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-display text-xl md:text-2xl font-bold text-white mt-6 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-gray-300 leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-gray-300" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-primary-400 hover:text-primary-300 underline" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-primary-900/30 text-primary-300 px-2 py-1 rounded text-sm" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-primary-950 p-4 rounded-lg overflow-x-auto mb-4 text-sm" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-400 my-4" {...props} />
  ),
  hr: () => <hr className="border-primary-800 my-8" />,
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-dark">
      {/* Header */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px]" />

        <div className="relative max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

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

          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>

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
        </div>
      </section>

      {/* Content */}
      <section className="relative pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <article className="prose prose-invert max-w-none">
            <MDXRemote source={post.content} components={components} />
          </article>
        </div>
      </section>

      {/* Back to blog */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>
        </div>
      </section>
    </main>
  )
}
