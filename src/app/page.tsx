'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Code2,
  Smartphone,
  Brain,
  Truck,
  Globe,
  Zap,
  ChevronRight,
  Mail,
  Phone,
  Calendar,
  ExternalLink,
  Menu,
  X,
  Star,
  Check,
  ArrowRight,
  MessageSquare,
  BookOpen,
  Users,
  BarChart3,
  Shield,
  Clock,
  Github,
  Twitter,
  Quote
} from 'lucide-react'

// ============================================
// NAVIGATION
// ============================================
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="LMW Labs"
              width={56}
              height={56}
              className="w-14 h-14 object-contain"
            />
            <span className="font-display font-bold text-2xl text-white">
              LMW <span className="text-primary-400">Labs</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary-800/30 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm inline-block mt-4">
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-[100px]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(95,111,241,0.3) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(95,111,241,0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
            <Zap className="w-4 h-4 text-accent-400" />
            <span className="text-sm text-gray-300">AI-Powered Development Studio</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up delay-100">
            We Build Apps That
            <span className="block gradient-text">Move Your Business</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl animate-fade-in-up delay-200">
            Full-stack development with AI integration. From concept to launch in weeks, not months. 
            Based in Mississippi, serving clients worldwide.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-in-up delay-300">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#portfolio" className="btn-secondary inline-flex items-center gap-2">
              View Our Work
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up delay-400">
            {[
              { value: '5+', label: 'Apps Shipped' },
              { value: '4 Weeks', label: 'Avg. Delivery' },
              { value: '100%', label: 'AI-Enhanced' },
              { value: '24/7', label: 'Support' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// SERVICES SECTION
// ============================================
function ServicesSection() {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform iOS & Android apps built with Flutter. Native performance, single codebase.',
      features: ['Flutter/Dart', 'Firebase Backend', 'Push Notifications', 'App Store Deployment']
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Modern, fast web apps and platforms. From landing pages to full SaaS products.',
      features: ['Next.js/React', 'TypeScript', 'Responsive Design', 'SEO Optimized']
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'GPT-4, embeddings, RAG systems. Make your app intelligent.',
      features: ['OpenAI Integration', 'Vector Databases', 'Semantic Search', 'Custom AI Features']
    },
    {
      icon: Truck,
      title: 'Logistics Software',
      description: '8+ years in freight. We know the industry and build tools that actually work.',
      features: ['TMS Platforms', 'Load Management', 'GPS Tracking', 'API Integrations']
    },
    {
      icon: Code2,
      title: 'Business Automation',
      description: 'Stop doing things manually. Automate workflows, reports, and processes.',
      features: ['Custom Dashboards', 'API Development', 'Data Integration', 'Workflow Automation']
    },
    {
      icon: BarChart3,
      title: 'Contractor Websites',
      description: 'Professional sites for trades businesses. SEO, lead capture, instant quotes.',
      features: ['Local SEO', 'Quote Forms', 'Mobile-First', 'Google Business']
    },
  ]

  return (
    <section id="services" className="py-24 section-gradient relative">
      <div className="absolute inset-0 noise-overlay" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-900/50 text-primary-400 text-sm font-medium mb-4">
            What We Build
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Full-Stack Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end development for apps, websites, and automation systems. 
            AI-enhanced, rapidly delivered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-6 hover-lift group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600/20 to-primary-400/20 flex items-center justify-center mb-4 group-hover:from-primary-600/30 group-hover:to-primary-400/30 transition-colors">
                <service.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <Check className="w-4 h-4 text-primary-400" />
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

// ============================================
// PORTFOLIO SECTION
// ============================================
function PortfolioSection() {
  const projects = [
    {
      title: 'PropListAI',
      category: 'AI Real Estate Tool',
      description: 'Transform property listings with AI. Save 40+ minutes per listing while generating professional, platform-optimized descriptions for MLS, Zillow, and social media.',
      tech: ['Google Gemini', 'Vanilla JS', 'Real Estate', 'AI Content'],
      color: 'from-emerald-500 to-teal-600',
      stats: ['40+ Min Saved', '3 Platforms', '500+ Listings'],
      link: 'https://proplistai-demo-3otyem3bz-cryptonorths-projects.vercel.app/',
      image: '/images/proplistai.png'
    },
    {
      title: 'VectrLoad TMS',
      category: 'Data Analytics',
      description: 'Advanced data visualization and analytics platform. Powerful insights, beautiful charts, real-time data processing, and custom dashboard building capabilities.',
      tech: ['React', 'D3.js', 'Analytics', 'Data Viz', 'Dashboard'],
      color: 'from-blue-500 to-cyan-600',
      stats: ['25+ Charts', '100K+ Datasets', 'Real-time'],
      link: 'https://vectrloadai-tms.vercel.app/',
      image: '/images/vectr.png'
    },
    {
      title: 'BlacktopProz',
      category: 'Contractor Website',
      description: 'Professional website for asphalt and concrete contractors. Service pages, quote request forms, SEO optimized for local search.',
      tech: ['Next.js', 'Tailwind', 'Vercel', 'SEO'],
      color: 'from-pink-500 to-rose-600',
      stats: ['Local SEO', 'Lead Gen', 'Mobile-First'],
      link: 'https://blacktopproz.com/',
      image: '/images/verbalize.png'
    },
    {
      title: 'FaithFeed',
      category: 'Mobile & Web App',
      description: 'Christian social media platform with AI-powered Bible study tools. 31,000+ verse embeddings, GPT-4 integration, RAG-based scripture search.',
      tech: ['Flutter', 'Next.js', 'Firebase', 'OpenAI', 'Pinecone'],
      color: 'from-blue-600 to-indigo-600',
      stats: ['31K+ Verses', 'AI Study Partner', 'Cross-Platform'],
      link: 'https://beta.faithfeed.ai/'
    },
    {
      title: 'KHCL Logistics',
      category: 'Logistics Platform',
      description: 'Complete freight brokerage platform. Instant quotes, load board, real-time tracking, carrier management.',
      tech: ['Next.js', 'PostgreSQL', 'Supabase', 'Real-time'],
      color: 'from-emerald-500 to-teal-600',
      stats: ['Instant Quotes', 'Load Board', 'GPS Tracking'],
      link: 'https://khcllogistics.com/'
    },
    {
      title: 'Basketball Scouting Platform',
      category: 'Web Application',
      description: 'Player prospecting system for a former Harlem Globetrotter. Video uploads, coach submissions, AI-powered skill analysis.',
      tech: ['Next.js', 'Firebase', 'Cloudflare R2', 'OpenAI'],
      color: 'from-orange-500 to-red-600',
      stats: ['Video Analysis', 'Global Reach', 'Coach Portal'],
      link: 'https://www.globalhoopsnetwork.org/'
    },
    {
      title: 'Cooper Generations Asphalt',
      category: 'Contractor Website',
      description: 'Professional website for 35+ year asphalt company. SEO optimized, service pages, free estimate forms.',
      tech: ['Next.js', 'Tailwind', 'Vercel', 'SEO'],
      color: 'from-amber-500 to-orange-600',
      stats: ['Local SEO', 'Lead Gen', 'Mobile-First'],
      link: 'https://site-taupe-nine.vercel.app/'
    },
  ]

  return (
    <section id="portfolio" className="py-24 section-dark relative">
      <div className="absolute inset-0 noise-overlay" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-900/50 text-primary-400 text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Projects We've Shipped
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real products, real clients, real results. Every project delivered with AI-enhanced development.
          </p>
        </div>

        {/* Projects */}
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-primary-900/30 text-primary-300 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6 text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-6 mb-6">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-400">
                        <Check className="w-4 h-4 text-accent-400" />
                        <span className="text-sm">{stat}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors group-hover:gap-3"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// PRICING SECTION
// ============================================
function PricingSection() {
  const rates = [
    { category: 'Development & Integration', rate: '$100', desc: 'Core coding, API work, lead gen features' },
    { category: 'Design & SEO', rate: '$85', desc: 'UI/UX, marketing strategy, maintenance' },
    { category: 'Setup & Project Management', rate: '$75', desc: 'Environment setup, revisions, media' },
    { category: 'Content & Training', rate: '$65', desc: 'Copywriting, documentation, research' },
    { category: 'Social Media', rate: '$50', desc: 'Content creation, posting, engagement' },
  ]

  const packages = [
    {
      name: 'Starter Website',
      price: '$1,500',
      description: 'Perfect for contractors and small businesses',
      features: [
        '5-7 page responsive website',
        'Mobile-optimized design',
        'Contact & quote forms',
        'Basic SEO setup',
        'Google Business integration',
        '30 days support'
      ],
      popular: false
    },
    {
      name: 'Custom Web App',
      price: '$5,000+',
      description: 'Full-featured web applications',
      features: [
        'Custom functionality',
        'User authentication',
        'Database integration',
        'Admin dashboard',
        'API development',
        '60 days support'
      ],
      popular: true
    },
    {
      name: 'Mobile App',
      price: '$8,000+',
      description: 'Cross-platform iOS & Android',
      features: [
        'Flutter development',
        'iOS & Android deployment',
        'Backend integration',
        'Push notifications',
        'App store submission',
        '90 days support'
      ],
      popular: false
    },
  ]

  return (
    <section id="pricing" className="py-24 section-gradient relative">
      <div className="absolute inset-0 noise-overlay" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-900/50 text-primary-400 text-sm font-medium mb-4">
            Transparent Pricing
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Investment Options
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Competitive rates, clear deliverables. No hidden fees, no surprises.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`card p-8 relative ${pkg.popular ? 'border-primary-500 ring-1 ring-primary-500/20' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 text-white text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="font-display text-xl font-semibold text-white mb-2">
                {pkg.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
              
              <div className="mb-6">
                <span className="font-display text-4xl font-bold text-white">{pkg.price}</span>
                {pkg.price.includes('+') && (
                  <span className="text-gray-500 text-sm ml-2">starting</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={pkg.popular ? 'btn-primary w-full text-center block' : 'btn-secondary w-full text-center block'}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Hourly Rates */}
        <div className="card p-8">
          <h3 className="font-display text-2xl font-semibold text-white mb-6 text-center">
            Hourly Rate Card
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rates.map((rate, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl bg-primary-900/20 border border-primary-800/20"
              >
                <div>
                  <div className="text-white font-medium">{rate.category}</div>
                  <div className="text-gray-500 text-sm">{rate.desc}</div>
                </div>
                <div className="font-display text-2xl font-bold text-primary-400">
                  {rate.rate}
                  <span className="text-sm text-gray-500">/hr</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// TESTIMONIALS SECTION
// ============================================
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Emma Guest',
    role: 'Data Analyst',
    company: 'Advanced Analytics',
    project: 'THREADRIPPER',
    rating: 5,
    review: 'Absolutely incredible work! The AI analysis capabilities exceeded my expectations. The real-time viral thread detection has transformed how we monitor social media trends.',
  },
  {
    id: 2,
    name: 'Mike Craft',
    role: 'Real Estate Agent',
    company: 'United Country',
    project: 'PropListAI',
    rating: 5,
    review: 'PropListAI has saved me hours of work every week. The AI-generated listings are professional and engaging. My clients love the quality of the descriptions!',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Operations Manager',
    company: 'KHCL Logistics',
    project: 'KHCL Logistics Platform',
    rating: 5,
    review: 'The logistics platform LMW Labs built completely transformed our operations. Real-time tracking, automated dispatch - everything we needed and more.',
  },
]

function TestimonialsSection() {
  return (
    <section className="py-24 section-dark relative">
      <div className="absolute inset-0 noise-overlay" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-900/50 text-primary-400 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real feedback from real clients who trusted us with their projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-600/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.review}"
              </p>

              {/* Project Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-primary-900/50 text-primary-400 text-xs font-medium">
                  {testimonial.project}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// CONTACT SECTION
// ============================================
const PROJECT_TYPES = [
  { id: 'mobile', label: 'Scalable Mobile App' },
  { id: 'webapp', label: 'Web App' },
  { id: 'fullstack', label: 'Full Stack Scalable Apps' },
  { id: 'ai', label: 'AI Integration' },
  { id: 'marketing', label: 'Marketing Material & Campaigns' },
  { id: 'social', label: 'Social Media Integration' },
  { id: 'logo', label: 'Logo Enhancement' },
  { id: 'monetize', label: 'Monetizing Current Site' },
  { id: 'niche', label: 'Niche Advisement' },
]

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectTypes: [] as string[],
    budget: '',
    message: ''
  })

  const toggleProjectType = (id: string) => {
    setFormData(prev => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(id)
        ? prev.projectTypes.filter(t => t !== id)
        : [...prev.projectTypes, id]
    }))
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get labels for selected project types
    const selectedTypes = formData.projectTypes
      .map(id => PROJECT_TYPES.find(t => t.id === id)?.label)
      .filter(Boolean)
      .join(', ')

    try {
      const response = await fetch('https://formspree.io/f/mqeekvgl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectTypes: selectedTypes,
          budget: formData.budget,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', projectTypes: [], budget: '', message: '' })
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 section-dark relative">
      <div className="absolute inset-0 noise-overlay" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-primary-900/50 text-primary-400 text-sm font-medium mb-4">
              Let's Talk
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Your Vision?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Every great product starts with a conversation. Tell us where you want to go, and we'll map the journey together.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              <a
                href="mailto:info@lmwlabs.faith"
                className="flex items-center gap-4 p-4 rounded-xl bg-primary-900/20 border border-primary-800/20 hover:border-primary-600/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Email us</div>
                  <div className="text-white font-medium group-hover:text-primary-400 transition-colors">
                    info@lmwlabs.faith
                  </div>
                </div>
              </a>

              <a
                href="tel:+16015551234"
                className="flex items-center gap-4 p-4 rounded-xl bg-primary-900/20 border border-primary-800/20 hover:border-primary-600/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Call us</div>
                  <div className="text-white font-medium group-hover:text-primary-400 transition-colors">
                    (769) 487-5679
                  </div>
                </div>
              </a>

              <a
                href="https://calendly.com/admin-faithfeed/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-primary-900/20 border border-primary-800/20 hover:border-primary-600/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Schedule a call</div>
                  <div className="text-white font-medium group-hover:text-primary-400 transition-colors">
                    Book on Calendly
                  </div>
                </div>
              </a>
            </div>

            {/* Location */}
            <div className="text-gray-500">
              <p className="mb-1">LMW Labs LLC</p>
              <p>Brandon, Mississippi</p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-primary-900/30 border border-primary-800/30 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-primary-900/30 border border-primary-800/30 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-primary-900/30 border border-primary-800/30 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Budget Range</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-primary-900/30 border border-primary-800/30 text-white focus:border-primary-500 focus:outline-none transition-colors"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
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
                <label className="block text-gray-400 text-sm mb-3">Project Type <span className="text-gray-500">(select all that apply)</span></label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {PROJECT_TYPES.map((type) => (
                    <label
                      key={type.id}
                      className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer transition-all ${
                        formData.projectTypes.includes(type.id)
                          ? 'bg-primary-600/30 border-primary-500 text-white'
                          : 'bg-primary-900/30 border-primary-800/30 text-gray-400 hover:border-primary-600/50'
                      } border`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.projectTypes.includes(type.id)}
                        onChange={() => toggleProjectType(type.id)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                        formData.projectTypes.includes(type.id)
                          ? 'bg-primary-500 border-primary-500'
                          : 'border-gray-600'
                      }`}>
                        {formData.projectTypes.includes(type.id) && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className="text-sm">{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Tell us about your project</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-primary-900/30 border border-primary-800/30 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                  placeholder="What are you building? What problem does it solve?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {submitted ? (
                <div className="text-center py-4 px-6 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400">
                  <Check className="w-6 h-6 mx-auto mb-2" />
                  <p className="font-medium">Message sent! We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  return (
    <footer className="py-16 border-t border-primary-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="LMW Labs"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <span className="font-display font-bold text-2xl text-white">
                LMW Labs
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building the future with AI-powered solutions. Transforming businesses through innovative technology and intelligent automation.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/LMW-Labs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-900/30 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-800/50 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/LMW_Labs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-900/30 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-800/50 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@lmwlabs.faith"
                className="w-10 h-10 rounded-lg bg-primary-900/30 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-800/50 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-900/20 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LMW Labs LLC. All rights reserved. Brandon, Mississippi.
          </p>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// MAIN PAGE
// ============================================
export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
