import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  CheckCircle,
  Layers,
  Code2,
  Database,
} from 'lucide-react'

/* ============================================
   Project Data
   ============================================ */

interface ProjectDetails {
  slug: string
  title: string
  category: string
  tagline: string
  description: string
  challenge: string
  solution: string
  results: string[]
  tech: {
    name: string
    category: string
  }[]
  features: string[]
  color: string
  gradient: string
  stats: {
    label: string
    value: string
  }[]
}

const projects: Record<string, ProjectDetails> = {
  faithfeed: {
    slug: 'faithfeed',
    title: 'FaithFeed',
    category: 'Mobile & Web Platform',
    tagline: 'AI-powered Christian social media with semantic Bible search',
    description:
      'FaithFeed is a comprehensive Christian social platform that combines community features with advanced AI-powered Bible study tools. Users can share faith-based content, connect with their church community, and explore Scripture through semantic search powered by 31,000+ verse embeddings.',
    challenge:
      'Building a social platform that feels native on both mobile and web while integrating sophisticated AI features for Bible study. The system needed to handle real-time feeds, user-generated content, and complex semantic search queries without compromising performance.',
    solution:
      'We architected a scalable system using Flutter for cross-platform mobile apps and Next.js for the web application, with Firebase handling real-time data sync. The AI layer uses OpenAI embeddings stored in Pinecone vector database, enabling semantic search across all 31,102 Bible verses. The RAG (Retrieval Augmented Generation) system provides contextual Bible study responses.',
    results: [
      'Successfully indexed all 31,102 Bible verses with semantic embeddings',
      'Sub-200ms response times for semantic search queries',
      'Real-time feed updates across all connected devices',
      'Cross-platform consistency between iOS, Android, and web',
      'Scalable architecture ready for thousands of concurrent users',
    ],
    tech: [
      { name: 'Flutter', category: 'Mobile' },
      { name: 'Next.js', category: 'Web' },
      { name: 'Firebase', category: 'Backend' },
      { name: 'OpenAI', category: 'AI' },
      { name: 'Pinecone', category: 'Vector DB' },
      { name: 'TypeScript', category: 'Language' },
    ],
    features: [
      'Real-time social feed with likes, comments, and shares',
      'Semantic Bible search across all verses',
      'AI-powered Bible study companion',
      'Church community groups and events',
      'Push notifications for engagement',
      'Offline-first mobile experience',
      'Daily devotional content delivery',
      'User profiles and following system',
    ],
    color: 'from-purple-500 to-indigo-600',
    gradient: 'bg-gradient-to-br from-purple-500/20 to-indigo-600/20',
    stats: [
      { label: 'Verse Embeddings', value: '31K+' },
      { label: 'Query Response', value: '<200ms' },
      { label: 'Platforms', value: '3' },
      { label: 'Architecture', value: 'Scalable' },
    ],
  },
  'basketball-scouting': {
    slug: 'basketball-scouting',
    title: 'Basketball Scouting Platform',
    category: 'Enterprise Web App',
    tagline: 'Professional player prospecting with AI-powered analysis',
    description:
      'A specialized scouting platform built for professional basketball talent evaluation. The system handles large video uploads, provides AI-powered player analysis, and maintains detailed prospect databases for scouts and team executives.',
    challenge:
      'Professional scouts needed a centralized platform to manage player evaluations, share video clips, and collaborate on talent assessment. The system needed to handle large video files, provide intelligent analysis, and maintain data integrity for critical scouting decisions.',
    solution:
      'We built a robust web application using Next.js with Firebase for authentication and real-time data. Video storage leverages Cloudflare R2 for cost-effective, high-performance delivery. OpenAI integration provides automated player analysis from video metadata and scout notes.',
    results: [
      'Streamlined scouting workflow saving hours per evaluation',
      'Secure video storage with fast global delivery',
      'AI-assisted player profiling and comparison',
      'Collaborative evaluation sharing between scouts',
      'Mobile-responsive for on-the-go scouting',
    ],
    tech: [
      { name: 'Next.js', category: 'Framework' },
      { name: 'Firebase', category: 'Backend' },
      { name: 'Cloudflare R2', category: 'Storage' },
      { name: 'OpenAI', category: 'AI' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Tailwind CSS', category: 'Styling' },
    ],
    features: [
      'Large video file uploads and streaming',
      'AI-powered player analysis reports',
      'Prospect database with advanced filtering',
      'Scout collaboration and note sharing',
      'Player comparison tools',
      'Secure role-based access control',
      'Mobile-optimized interface',
      'Export reports for team presentations',
    ],
    color: 'from-orange-500 to-red-600',
    gradient: 'bg-gradient-to-br from-orange-500/20 to-red-600/20',
    stats: [
      { label: 'Video Storage', value: 'Unlimited' },
      { label: 'AI Analysis', value: 'Automated' },
      { label: 'Access Control', value: 'Role-based' },
      { label: 'Delivery', value: 'Global CDN' },
    ],
  },
  'khcl-logistics': {
    slug: 'khcl-logistics',
    title: 'KHCL Logistics',
    category: 'Logistics Platform',
    tagline: 'Full-featured freight brokerage with real-time tracking',
    description:
      'A comprehensive logistics management system for freight brokerage operations. The platform handles instant quoting, load board management, carrier tracking, and real-time GPS integration for complete shipment visibility.',
    challenge:
      'Freight brokers needed a modern system to manage their entire operation—from quote generation to load tracking. Legacy systems were slow, disconnected, and couldn\'t provide real-time visibility into shipment status.',
    solution:
      'We developed a full-stack logistics platform using Next.js with PostgreSQL and Supabase for robust data management. The system includes real-time updates, automated quote calculation, load board functionality, and GPS tracking integration.',
    results: [
      'Reduced quote generation time from hours to minutes',
      'Real-time shipment visibility for all stakeholders',
      'Automated carrier matching and load assignment',
      'Integrated invoicing and payment tracking',
      'Scalable multi-tenant architecture',
    ],
    tech: [
      { name: 'Next.js', category: 'Framework' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Supabase', category: 'Backend' },
      { name: 'Real-time', category: 'Feature' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'GPS APIs', category: 'Integration' },
    ],
    features: [
      'Instant freight quote generation',
      'Load board with advanced filtering',
      'Carrier management and onboarding',
      'Real-time GPS shipment tracking',
      'Automated rate calculation',
      'Document management (BOL, POD)',
      'Invoicing and payment tracking',
      'Multi-tenant architecture',
    ],
    color: 'from-emerald-500 to-teal-600',
    gradient: 'bg-gradient-to-br from-emerald-500/20 to-teal-600/20',
    stats: [
      { label: 'Quote Time', value: 'Minutes' },
      { label: 'Tracking', value: 'Real-time' },
      { label: 'Architecture', value: 'Multi-tenant' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
  'cooper-generations': {
    slug: 'cooper-generations',
    title: 'Cooper Generations Asphalt',
    category: 'Business Website',
    tagline: 'Professional contractor website built for lead generation',
    description:
      'A modern, high-converting website for a 35+ year asphalt paving company. The site showcases their experience, services, and project portfolio while generating consistent leads through optimized forms and local SEO.',
    challenge:
      'An established asphalt company with decades of experience needed a web presence that reflected their professionalism and generated quality leads. Their existing site was outdated and not mobile-friendly.',
    solution:
      'We designed and built a fast, mobile-first website using Next.js and Tailwind CSS. The site features optimized contact forms, service pages targeting local keywords, and a project gallery showcasing their work.',
    results: [
      'Mobile-first design with perfect Lighthouse scores',
      'Local SEO optimization for Brandon, MS area',
      'Consistent lead flow through optimized forms',
      'Professional branding reflecting 35+ years of experience',
      'Fast load times for better user experience',
    ],
    tech: [
      { name: 'Next.js', category: 'Framework' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'Vercel', category: 'Hosting' },
      { name: 'SEO', category: 'Marketing' },
      { name: 'Formspree', category: 'Forms' },
      { name: 'Analytics', category: 'Tracking' },
    ],
    features: [
      'Mobile-responsive design',
      'Service-specific landing pages',
      'Lead capture contact forms',
      'Project portfolio gallery',
      'Local SEO optimization',
      'Fast page load times',
      'SSL security',
      'Analytics integration',
    ],
    color: 'from-slate-500 to-zinc-600',
    gradient: 'bg-gradient-to-br from-slate-500/20 to-zinc-600/20',
    stats: [
      { label: 'Load Time', value: '<2s' },
      { label: 'Mobile Score', value: '95+' },
      { label: 'SEO Score', value: '90+' },
      { label: 'Experience', value: '35+ yrs' },
    ],
  },
  blacktopproz: {
    slug: 'blacktopproz',
    title: 'BlacktopProz',
    category: 'Business System',
    tagline: 'Complete contractor business framework for asphalt professionals',
    description:
      'A comprehensive business system designed for asphalt and concrete contractors. Includes branding, quote templates, invoice systems, customer management workflows, and operational documents.',
    challenge:
      'New contractors entering the asphalt industry needed a complete business system—not just a website, but everything required to run a professional operation: branding, documents, pricing strategies, and customer workflows.',
    solution:
      'We created a turnkey business framework including professional branding, customizable quote and invoice templates, customer communication scripts, job tracking systems, and operational checklists.',
    results: [
      'Professional branding package ready for market',
      'Automated quote system reducing admin time',
      'Standardized processes for consistent service',
      'Scalable document templates for growth',
      'Complete operational playbook',
    ],
    tech: [
      { name: 'Branding', category: 'Design' },
      { name: 'Documents', category: 'Templates' },
      { name: 'Systems', category: 'Operations' },
      { name: 'Templates', category: 'Automation' },
      { name: 'Workflows', category: 'Process' },
      { name: 'Training', category: 'Support' },
    ],
    features: [
      'Professional logo and branding',
      'Quote template system',
      'Invoice and payment tracking',
      'Customer communication templates',
      'Job scheduling workflows',
      'Cost estimation guides',
      'Safety checklists',
      'Growth planning documents',
    ],
    color: 'from-amber-500 to-yellow-600',
    gradient: 'bg-gradient-to-br from-amber-500/20 to-yellow-600/20',
    stats: [
      { label: 'Documents', value: '20+' },
      { label: 'Templates', value: 'Included' },
      { label: 'Branding', value: 'Complete' },
      { label: 'Support', value: 'Training' },
    ],
  },
}

/* ============================================
   Metadata Generation
   ============================================ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    return {
      title: 'Project Not Found | LMW Labs',
    }
  }

  return {
    title: `${project.title} | LMW Labs Portfolio`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} - ${project.category}`,
      description: project.tagline,
      type: 'article',
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}

/* ============================================
   Project Page Component
   ============================================ */

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-white group-hover:text-primary-400 transition-colors">
                LMW Labs
              </span>
            </Link>
            <Link
              href="/#portfolio"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className={`absolute inset-0 ${project.gradient} opacity-30`} />
        <div className="blob-purple -top-40 -right-40 opacity-50" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${project.gradient} text-white`}>
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            {project.title}
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            {project.tagline}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.stats.map((stat, index) => (
              <div key={index} className="card-glass text-center py-4">
                <div className="text-2xl font-display font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 section-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-2xl font-display font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 section-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white">The Challenge</h3>
              </div>
              <p className="text-gray-400">{project.challenge}</p>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white">Our Solution</h3>
              </div>
              <p className="text-gray-400">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 section-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-white mb-8">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10"
              >
                <Database className="w-4 h-4 text-primary-400" />
                <span className="text-white font-medium">{tech.name}</span>
                <span className="text-xs text-gray-500">({tech.category})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 section-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-white mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 card">
                <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 section-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-white mb-8">Results & Impact</h2>
          <div className="space-y-4">
            {project.results.map((result, index) => (
              <div key={index} className="flex items-start gap-4 p-4 card">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-white">{index + 1}</span>
                </div>
                <p className="text-gray-300 pt-1">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Ready to Build Something Like This?
          </h2>
          <p className="text-gray-400 mb-8">
            Let&apos;s discuss your project and create a scalable solution that grows with your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#contact" className="btn-primary">
              Start Your Project
            </Link>
            <Link href="/#portfolio" className="btn-secondary">
              View More Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 section-dark border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-white">LMW Labs</span>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} LMW Labs LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
