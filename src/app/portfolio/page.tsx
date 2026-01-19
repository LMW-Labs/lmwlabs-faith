import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ExternalLink,
  Check,
  Mail,
  Github,
  Twitter
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfolio | LMW Labs - Our Work',
  description: 'See examples of our website and web application work. Contractor websites, logistics platforms, AI integrations, and more.',
}

function Navigation() {
  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="LMW Labs" width={40} height={40} className="w-10 h-10 object-contain" />
            <span className="font-display font-bold text-xl text-white">LMW Labs</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors font-medium">{link.label}</Link>
            ))}
            <Link href="/contact" className="btn-accent text-sm">Book a Call</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="py-16 border-t border-primary-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo.png" alt="LMW Labs" width={48} height={48} className="w-12 h-12 object-contain" />
              <span className="font-display font-bold text-2xl text-white">LMW Labs</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">Professional websites that rank, attract customers, and generate revenue.</p>
            <div className="flex gap-4">
              <a href="https://github.com/LMW-Labs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary-900/30 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-800/50 transition-all"><Github className="w-5 h-5" /></a>
              <a href="https://x.com/LMW_Labs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary-900/30 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-800/50 transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="mailto:info@lmwlabs.faith" className="w-10 h-10 rounded-lg bg-primary-900/30 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-800/50 transition-all"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/starter" className="text-gray-400 hover:text-white transition-colors">Starter Tier</Link></li>
              <li><Link href="/services/growth" className="text-gray-400 hover:text-white transition-colors">Growth Tier</Link></li>
              <li><Link href="/services/authority" className="text-gray-400 hover:text-white transition-colors">Authority Tier</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-primary-900/20 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} LMW Labs LLC. Brandon, Mississippi.</p>
        </div>
      </div>
    </footer>
  )
}

export default function PortfolioPage() {
  const projects = [
    {
      slug: 'cooper-generations',
      title: 'Cooper Generations Asphalt',
      category: 'Contractor Website',
      description: 'Professional website for 35+ year asphalt company. SEO optimized, service pages, free estimate forms. Local business focus.',
      image: '/images/cooper.svg',
      tech: ['Next.js', 'Tailwind', 'Vercel', 'SEO'],
      results: ['Local SEO', 'Lead Gen', 'Mobile-First'],
      link: 'https://site-taupe-nine.vercel.app/',
      color: 'from-slate-500 to-zinc-600',
    },
    {
      slug: 'blacktopproz',
      title: 'BlacktopProz',
      category: 'Contractor Website',
      description: 'Professional website for asphalt and concrete contractors. Service pages, quote request forms, SEO optimized for local search.',
      image: '/images/blacktopproz.png',
      tech: ['Next.js', 'Tailwind', 'Vercel', 'SEO'],
      results: ['Local SEO', 'Lead Gen', 'Mobile-First'],
      link: 'https://blacktopproz.com/',
      color: 'from-pink-500 to-rose-600',
    },
    {
      slug: 'faithfeed',
      title: 'FaithFeed',
      category: 'Mobile & Web App',
      description: 'Christian social media platform with AI-powered Bible study tools. 31,000+ verse embeddings, GPT-4 integration, RAG-based scripture search.',
      image: '/images/faithfeed.png',
      tech: ['Flutter', 'Next.js', 'Firebase', 'OpenAI', 'Pinecone'],
      results: ['31K+ Verses', 'AI Study Partner', 'Cross-Platform'],
      link: 'https://beta.faithfeed.ai/',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      slug: 'khcl-logistics',
      title: 'VectrLoad TMS',
      category: 'Logistics Platform',
      description: 'Complete freight brokerage TMS. Load management, carrier dispatch, real-time tracking, rate confirmations.',
      image: '/images/khcl-tms.png',
      tech: ['Next.js', 'PostgreSQL', 'Supabase', 'Real-time'],
      results: ['Load Board', 'Carrier Dispatch', 'GPS Tracking'],
      link: 'https://freightflow-tms.vercel.app/',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      slug: 'proplistai',
      title: 'PropListAI',
      category: 'AI Real Estate Tool',
      description: 'Transform property listings with AI. Save 40+ minutes per listing while generating professional, platform-optimized descriptions.',
      image: '/images/proplistai.png',
      tech: ['Google Gemini', 'Vanilla JS', 'Real Estate', 'AI Content'],
      results: ['40+ Min Saved', '3 Platforms', '500+ Listings'],
      link: 'https://proplistai-demo-3otyem3bz-cryptonorths-projects.vercel.app/',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      slug: 'basketball-scouting',
      title: 'Global Hoops Network',
      category: 'Web Application',
      description: 'Player prospecting system for a former Harlem Globetrotter. Video uploads, coach submissions, AI-powered skill analysis.',
      tech: ['Next.js', 'Firebase', 'Cloudflare R2', 'OpenAI'],
      results: ['Video Analysis', 'Global Reach', 'Coach Portal'],
      link: 'https://www.globalhoopsnetwork.org/',
      color: 'from-orange-500 to-red-600',
    },
  ]

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-900/50 text-primary-400 text-sm font-medium mb-6">
            Our Work
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Projects We've Shipped
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real projects, real clients, real results. From contractor websites to AI-powered platforms.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 section-gradient relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card overflow-hidden hover-lift group"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Project Image */}
                  <div className="lg:w-96 h-56 lg:h-auto relative overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center p-8`}>
                        <div className="text-center">
                          <div className="text-white/90 font-display text-2xl font-bold mb-2">
                            {project.title}
                          </div>
                          <div className="text-white/60 text-sm">
                            {project.category}
                          </div>
                        </div>
                      </div>
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-accent-400/20 text-accent-400 text-xs font-medium">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-primary-900/30 text-primary-300 text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-6 mb-6">
                      {project.results.map((result, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-400">
                          <Check className="w-4 h-4 text-accent-400" />
                          <span className="text-sm">{result}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      {project.slug && (
                        <Link
                          href={`/portfolio/${project.slug}`}
                          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
                        >
                          View Case Study
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-medium transition-colors"
                        >
                          Visit Site
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Your Project Could Be Here
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Let's discuss what you're building and how we can help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-accent inline-flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="btn-secondary">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
