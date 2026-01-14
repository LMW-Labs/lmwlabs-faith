'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Menu,
  X,
  ArrowRight,
  Smartphone,
  Globe,
  Brain,
  Truck,
  Zap,
  Building2,
  Check,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Send,
  Layers,
  Database,
  Shield,
  TrendingUp,
  Users,
  Clock,
  Code2,
  Rocket,
  Target,
} from 'lucide-react'

/* ============================================
   Type Definitions
   ============================================ */

interface Project {
  slug: string
  title: string
  category: string
  description: string
  tech: string[]
  stats: string
  color: string
  gradient: string
}

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

interface PricingPackage {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}

/* ============================================
   Data
   ============================================ */

const projects: Project[] = [
  {
    slug: 'faithfeed',
    title: 'FaithFeed',
    category: 'Mobile & Web Platform',
    description: 'Christian social media platform with AI-powered Bible study. Built to scale with 31K+ verse embeddings, real-time feeds, and RAG-based semantic search.',
    tech: ['Flutter', 'Next.js', 'Firebase', 'OpenAI', 'Pinecone'],
    stats: '31K+ embeddings | Real-time sync | Production-ready',
    color: 'from-purple-500 to-indigo-600',
    gradient: 'bg-gradient-to-br from-purple-500/20 to-indigo-600/20',
  },
  {
    slug: 'basketball-scouting',
    title: 'Basketball Scouting Platform',
    category: 'Enterprise Web App',
    description: 'Player prospecting system for professional scouts. Handles large video uploads, AI-powered player analysis, and scalable data pipelines.',
    tech: ['Next.js', 'Firebase', 'Cloudflare R2', 'OpenAI'],
    stats: 'Video processing | AI analysis | Scalable storage',
    color: 'from-orange-500 to-red-600',
    gradient: 'bg-gradient-to-br from-orange-500/20 to-red-600/20',
  },
  {
    slug: 'khcl-logistics',
    title: 'KHCL Logistics',
    category: 'Logistics Platform',
    description: 'Full-featured freight brokerage system with instant quoting, load board management, carrier tracking, and real-time GPS integration.',
    tech: ['Next.js', 'PostgreSQL', 'Supabase', 'Real-time'],
    stats: 'Load management | Live tracking | Multi-tenant',
    color: 'from-emerald-500 to-teal-600',
    gradient: 'bg-gradient-to-br from-emerald-500/20 to-teal-600/20',
  },
  {
    slug: 'cooper-generations',
    title: 'Cooper Generations Asphalt',
    category: 'Business Website',
    description: 'Professional website for a 35+ year asphalt company. Optimized for local SEO, lead generation, and mobile-first performance.',
    tech: ['Next.js', 'Tailwind', 'Vercel', 'SEO'],
    stats: 'Local SEO | Lead forms | Fast load times',
    color: 'from-slate-500 to-zinc-600',
    gradient: 'bg-gradient-to-br from-slate-500/20 to-zinc-600/20',
  },
  {
    slug: 'blacktopproz',
    title: 'BlacktopProz',
    category: 'Business System',
    description: 'Complete contractor business framework including quote system, invoicing, customer management, and operational documents.',
    tech: ['Branding', 'Documents', 'Systems', 'Templates'],
    stats: 'Full system | Quote automation | Scalable ops',
    color: 'from-amber-500 to-yellow-600',
    gradient: 'bg-gradient-to-br from-amber-500/20 to-yellow-600/20',
  },
]

const services: Service[] = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps built with Flutter. Production-ready architecture that scales from launch to millions of users.',
    features: ['Flutter/Dart', 'iOS & Android', 'Firebase Backend', 'Push Notifications', 'Offline-first'],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Web Applications',
    description: 'Full-stack web applications with modern frameworks. Built for performance, security, and long-term maintainability.',
    features: ['Next.js/React', 'TypeScript', 'PostgreSQL/Supabase', 'Authentication', 'API Development'],
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'AI Integration',
    description: 'Intelligent features that add real value. From semantic search to automated workflows, we integrate AI where it matters.',
    features: ['OpenAI/GPT-4', 'Vector Databases', 'RAG Systems', 'Embeddings', 'Custom Models'],
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Logistics Software',
    description: 'Specialized systems for freight, delivery, and supply chain. Real-time tracking, load management, and carrier integration.',
    features: ['TMS Systems', 'Load Management', 'GPS Tracking', 'Carrier Integration', 'Rate Calculation'],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Business Automation',
    description: 'Eliminate manual processes with custom automation. Dashboards, workflows, and integrations that save hours every week.',
    features: ['Custom Dashboards', 'API Integrations', 'Workflow Automation', 'Reporting', 'Data Pipelines'],
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Contractor Websites',
    description: 'High-converting websites for service businesses. Local SEO, lead capture, and professional branding that wins jobs.',
    features: ['Local SEO', 'Quote Forms', 'Mobile Optimized', 'Fast Loading', 'Lead Generation'],
  },
]

const pricingPackages: PricingPackage[] = [
  {
    name: 'Starter Website',
    price: '$1,500',
    description: 'Professional web presence for small businesses',
    features: [
      '5-7 page responsive website',
      'Mobile-optimized design',
      'Contact forms with notifications',
      'Basic SEO setup',
      'Google Analytics integration',
      '30 days post-launch support',
    ],
  },
  {
    name: 'Custom Web App',
    price: '$5,000+',
    description: 'Full-featured web applications built to scale',
    features: [
      'Custom feature development',
      'User authentication & roles',
      'Database design & integration',
      'Admin dashboard',
      'API development',
      '60 days post-launch support',
    ],
    popular: true,
  },
  {
    name: 'Mobile App',
    price: '$8,000+',
    description: 'Cross-platform mobile apps for iOS & Android',
    features: [
      'Flutter cross-platform build',
      'iOS & Android deployment',
      'Backend API & database',
      'Push notifications',
      'App store submission',
      '90 days post-launch support',
    ],
  },
]

const hourlyRates = [
  { category: 'Development & Integration', rate: '$100/hr', description: 'Core coding, API work, feature development' },
  { category: 'Design & SEO', rate: '$85/hr', description: 'UI/UX design, marketing strategy, optimization' },
  { category: 'Setup & Project Management', rate: '$75/hr', description: 'Environment setup, planning, coordination' },
  { category: 'Content & Training', rate: '$65/hr', description: 'Copywriting, documentation, onboarding' },
  { category: 'Social Media', rate: '$50/hr', description: 'Content creation, posting, engagement' },
]

/* ============================================
   Navigation Component
   ============================================ */

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-display font-bold text-white group-hover:text-primary-400 transition-colors">
              LMW Labs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary text-sm px-6 py-3"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white font-medium py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-sm px-6 py-3 text-center mt-2"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

/* ============================================
   Hero Section
   ============================================ */

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="blob-purple -top-40 -left-40 animate-float" />
      <div className="blob-gold top-1/2 -right-40 animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
            <Rocket className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium text-gray-300">
              AI-Powered Development Studio
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-6 animate-fade-in-up delay-100">
            We Build{' '}
            <span className="gradient-text">Scalable Systems</span>
            {' '}That Grow With You
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Not just MVPs — production-ready software built for scale.
            From mobile apps to enterprise platforms, we deliver AI-integrated solutions
            that handle real traffic and real business growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-300">
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="#portfolio" className="btn-secondary w-full sm:w-auto">
              View Our Work
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up delay-400">
            {[
              { icon: <Code2 className="w-5 h-5" />, value: '5+', label: 'Apps Shipped' },
              { icon: <Clock className="w-5 h-5" />, value: '4 Weeks', label: 'Avg Delivery' },
              { icon: <Brain className="w-5 h-5" />, value: '100%', label: 'AI-Enhanced' },
              { icon: <Users className="w-5 h-5" />, value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="card-glass text-center py-4 px-3">
                <div className="flex items-center justify-center gap-2 text-primary-400 mb-1">
                  {stat.icon}
                  <span className="text-2xl font-display font-bold text-white">{stat.value}</span>
                </div>
                <span className="text-sm text-gray-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-20 text-center animate-fade-in-up delay-500">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass">
            <Target className="w-5 h-5 text-accent-400" />
            <span className="text-gray-300">
              <span className="text-white font-semibold">Brandon, Mississippi</span> — Serving clients nationwide
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   Why Scalable Section
   ============================================ */

function WhyScalableSection() {
  const points = [
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Production Architecture',
      description: 'Every system is designed with proper database schemas, caching layers, and API structures that handle growth.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security Built-In',
      description: 'Authentication, authorization, data encryption, and security best practices from day one — not bolted on later.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Ready to Scale',
      description: 'Whether you have 100 users or 100,000, our systems are architected to handle real-world traffic and data.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance First',
      description: 'Optimized queries, efficient caching, lazy loading, and smart data fetching keep your apps fast at any scale.',
    },
  ]

  return (
    <section className="py-20 section-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Why <span className="gradient-text">Scalable Systems</span> Matter
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            MVPs get you started. Scalable systems get you to market and keep you there.
            We build software that works today and grows with your business tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => (
            <div key={index} className="card hover-lift">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-4">
                <div className="text-primary-400">{point.icon}</div>
              </div>
              <h3 className="text-lg font-display font-semibold text-white mb-2">
                {point.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   Services Section
   ============================================ */

function ServicesSection() {
  return (
    <section id="services" className="py-20 section-dark relative overflow-hidden">
      <div className="blob-purple top-0 right-0 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-primary-400 font-medium mb-4">
            What We Build
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Full-Stack Development Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From mobile apps to enterprise platforms, we deliver production-ready software
            with AI integration where it adds real value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card hover-lift group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-5 group-hover:animate-pulse-glow">
                <div className="text-white">{service.icon}</div>
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-5">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-primary-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   Portfolio Section
   ============================================ */

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 section-gradient relative overflow-hidden">
      <div className="blob-gold -left-40 top-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-accent-400 font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Projects Built to Scale
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real systems handling real users. Every project is built with production-ready
            architecture and designed to grow.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="block group"
            >
              <div className="card hover-lift flex flex-col lg:flex-row gap-6 overflow-hidden">
                {/* Color Bar */}
                <div className={`lg:w-2 w-full h-2 lg:h-auto rounded-full bg-gradient-to-b ${project.color}`} />

                {/* Content */}
                <div className="flex-1 py-2">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.gradient} text-white`}>
                      {project.category}
                    </span>
                    <h3 className="text-xl font-display font-semibold text-white group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">|</span>
                    <span className="text-sm text-primary-400">{project.stats}</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-end lg:justify-center px-4">
                  <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   Pricing Section
   ============================================ */

function PricingSection() {
  return (
    <section id="pricing" className="py-20 section-dark relative overflow-hidden">
      <div className="blob-purple -right-40 top-0 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-primary-400 font-medium mb-4">
            Investment
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Fixed-price packages for common projects, or flexible hourly rates for custom work.
            No hidden fees, no surprises.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pricingPackages.map((pkg, index) => (
            <div
              key={index}
              className={`card hover-lift relative ${
                pkg.popular ? 'border-primary-500 border-2' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-display font-semibold text-white mb-2">
                  {pkg.name}
                </h3>
                <div className="text-4xl font-display font-bold gradient-text mb-2">
                  {pkg.price}
                </div>
                <p className="text-sm text-gray-400">{pkg.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full ${pkg.popular ? 'btn-primary' : 'btn-secondary'} text-center`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Hourly Rates */}
        <div className="card max-w-4xl mx-auto">
          <h3 className="text-xl font-display font-semibold text-white mb-6 text-center">
            Hourly Rates
          </h3>
          <div className="space-y-4">
            {hourlyRates.map((rate, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/10 last:border-0"
              >
                <div>
                  <h4 className="font-semibold text-white">{rate.category}</h4>
                  <p className="text-sm text-gray-400">{rate.description}</p>
                </div>
                <span className="text-lg font-display font-bold text-primary-400 mt-2 sm:mt-0">
                  {rate.rate}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   Contact Section
   ============================================ */

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    projectType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Formspree integration - replace YOUR_FORM_ID with actual ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          budget: '',
          projectType: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 section-gradient relative overflow-hidden">
      <div className="blob-gold top-0 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-accent-400 font-medium mb-4">
            Let&apos;s Talk
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Ready to Build Something Scalable?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tell us about your project. We&apos;ll get back to you within 24 hours with a
            clear plan and honest assessment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Get In Touch
              </h3>
              <p className="text-gray-400">
                Whether you need a simple website or a complex enterprise platform,
                we&apos;re here to help you build software that scales.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:contact@lmwlabs.faith"
                className="flex items-center gap-4 p-4 card hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email us at</p>
                  <p className="text-white font-medium group-hover:text-primary-400 transition-colors">
                    contact@lmwlabs.faith
                  </p>
                </div>
              </a>

              <a
                href="tel:+16015551234"
                className="flex items-center gap-4 p-4 card hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call us at</p>
                  <p className="text-white font-medium group-hover:text-primary-400 transition-colors">
                    (601) 555-1234
                  </p>
                </div>
              </a>

              <a
                href="https://calendly.com/lmwlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Schedule a call</p>
                  <p className="text-white font-medium group-hover:text-accent-400 transition-colors">
                    Book on Calendly
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 card">
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Located in</p>
                  <p className="text-white font-medium">Brandon, Mississippi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="">Select budget</option>
                    <option value="1-3k">$1,000 - $3,000</option>
                    <option value="3-5k">$3,000 - $5,000</option>
                    <option value="5-10k">$5,000 - $10,000</option>
                    <option value="10k+">$10,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="input"
                >
                  <option value="">Select project type</option>
                  <option value="website">Website</option>
                  <option value="webapp">Web Application</option>
                  <option value="mobile">Mobile App</option>
                  <option value="ai">AI Integration</option>
                  <option value="logistics">Logistics Software</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="input resize-none"
                  placeholder="What are you looking to build? Any specific features or requirements?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-accent w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-center text-green-400 text-sm">
                  Thanks! We&apos;ll be in touch within 24 hours.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-center text-red-400 text-sm">
                  Something went wrong. Please email us directly at contact@lmwlabs.faith
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   Footer
   ============================================ */

function Footer() {
  return (
    <footer className="py-12 section-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-display font-bold text-white">
              LMW Labs
            </span>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} LMW Labs LLC. All rights reserved.
          </p>

          {/* Links */}
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
  )
}

/* ============================================
   Main Page Component
   ============================================ */

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <WhyScalableSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
