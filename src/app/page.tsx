'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ChevronRight,
  Mail,
  Phone,
  Calendar,
  Menu,
  X,
  Star,
  Check,
  ArrowRight,
  Search,
  TrendingUp,
  DollarSign,
  Zap,
  Shield,
  Users,
  Globe,
  Sparkles,
  Clock,
  Github,
  Twitter
} from 'lucide-react'

// ============================================
// NAVIGATION
// ============================================
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

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
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="LMW Labs"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="font-display font-bold text-xl text-white">
              LMW Labs
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-accent text-sm">
              Book a Call
            </Link>
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
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-accent text-sm inline-block mt-4">
              Book a Call
            </Link>
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

      {/* Large Watermark Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/images/logo.png"
          alt=""
          width={800}
          height={800}
          className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] object-contain opacity-[0.03]"
          priority
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(30,58,95,0.3) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(30,58,95,0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-sm text-gray-300">SEO-Ready Website Development</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up delay-100">
            Professional Websites That
            <span className="block gradient-text">Pay For Themselves</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl animate-fade-in-up delay-200">
            SEO-optimized sites with built-in revenue streams.
            From <span className="text-accent-400 font-semibold">$500 setup</span>.
            Your website should work as hard as you do.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-in-up delay-300">
            <Link href="/pricing" className="btn-accent inline-flex items-center gap-2">
              See Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
              Book a Call
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up delay-400">
            {[
              { value: 'SEO-First', label: 'Development' },
              { value: 'Revenue', label: 'Built-In' },
              { value: 'Mississippi', label: 'Based' },
              { value: 'AI-Powered', label: 'Efficiency' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
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
// PROBLEM/SOLUTION SECTION
// ============================================
function ProblemSolutionSection() {
  return (
    <section className="py-24 section-gradient relative">
      <div className="absolute inset-0 noise-overlay" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <div className="card p-8 border-red-500/20 bg-red-950/10">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-6">
              <X className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              The Problem
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Most small businesses overpay for websites that just sit there.
              You spend thousands on a site that looks nice but doesn't
              <span className="text-red-400 font-medium"> generate leads</span>,
              doesn't <span className="text-red-400 font-medium">rank on Google</span>,
              and doesn't <span className="text-red-400 font-medium">make you money</span>.
            </p>
          </div>

          {/* Solution */}
          <div className="card p-8 border-accent-400/30 bg-accent-950/10">
            <div className="w-12 h-12 rounded-xl bg-accent-400/20 flex items-center justify-center mb-6">
              <Check className="w-6 h-6 text-accent-400" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Our Solution
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              We build sites that <span className="text-accent-400 font-medium">rank</span>,
              attract customers, AND <span className="text-accent-400 font-medium">generate passive income</span>.
              Your website becomes an asset, not an expense.
              SEO-optimized from day one with affiliate revenue streams built in.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// HOW IT WORKS SECTION
// ============================================
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      icon: Users,
      title: 'Choose Your Plan',
      description: 'Starter for full ownership, Growth for hands-off success, or Authority for maximum service at minimum cost.'
    },
    {
      number: '02',
      icon: Globe,
      title: 'We Build Your Site',
      description: 'Professional, SEO-optimized website built to rank. Mobile-first, fast-loading, and ready for growth.'
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Watch It Grow',
      description: 'Traffic increases, customers find you, and your site starts generating revenue through integrated affiliate partnerships.'
    }
  ]

  return (
    <section className="py-24 section-dark relative">
      <div className="absolute inset-0 noise-overlay" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-900/50 text-primary-400 text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From first call to launched website in weeks, not months.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary-600/50 to-transparent" />
              )}

              <div className="card p-8 text-center relative">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent-400 text-primary-950 text-sm font-bold">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600/20 to-primary-400/20 flex items-center justify-center mx-auto mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-primary-400" />
                </div>

                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// TIER OVERVIEW SECTION
// ============================================
function TierOverviewSection() {
  const tiers = [
    {
      name: 'Starter',
      tagline: 'Full Ownership',
      price: '$2,500 - $4,000',
      monthly: '$0',
      description: 'You want full control. We build it right and hand you the keys.',
      features: [
        'Custom 5-8 page website',
        'Mobile responsive design',
        'Basic SEO setup',
        '30-day support',
        'You keep 100% affiliate revenue'
      ],
      href: '/services/starter',
      popular: false
    },
    {
      name: 'Growth',
      tagline: 'Shared Success',
      price: '$1,500 - $2,500',
      monthly: '$100/mo',
      description: 'We handle content, SEO, and maintenance. You handle your business.',
      features: [
        'Everything in Starter',
        'Hosting included',
        '1 SEO blog post per month',
        'Affiliate links integrated',
        'Monthly analytics reports'
      ],
      href: '/services/growth',
      popular: true
    },
    {
      name: 'Authority',
      tagline: 'Maximum Value',
      price: '$500 - $1,000',
      monthly: '$150/mo',
      description: 'Agency-level service at a fraction of the cost. We invest in your success.',
      features: [
        'Everything in Growth',
        '4 SEO blog posts per month',
        'Google Business management',
        'Local SEO optimization',
        'Priority support'
      ],
      href: '/services/authority',
      popular: false
    }
  ]

  return (
    <section className="py-24 section-gradient relative">
      <div className="absolute inset-0 noise-overlay" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-900/50 text-primary-400 text-sm font-medium mb-4">
            Flexible Pricing
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Path
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three tiers designed for different needs. Lower setup cost means we share in your success.
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`tier-card p-8 relative ${tier.popular ? 'featured' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-accent-500 to-accent-400 text-primary-950 text-xs font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <span className="text-accent-400 text-sm font-medium">{tier.tagline}</span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  {tier.name}
                </h3>
              </div>

              <div className="mb-4">
                <span className="font-display text-3xl font-bold text-white">{tier.price}</span>
                <span className="text-gray-500 text-sm ml-2">setup</span>
              </div>
              <div className="mb-6 text-gray-400">
                <span className="text-accent-400 font-medium">{tier.monthly}</span> monthly
              </div>

              <p className="text-gray-400 mb-6 text-sm">
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={`w-full text-center block ${tier.popular ? 'btn-accent' : 'btn-secondary'}`}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Not sure which tier is right for you?</p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Let's Talk
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ============================================
// WHAT MAKES US DIFFERENT SECTION
// ============================================
function DifferentiatorsSection() {
  const differentiators = [
    {
      icon: Search,
      title: 'SEO-First Development',
      description: 'Built to rank from day one. Proper structure, fast loading, and optimized for Google.'
    },
    {
      icon: DollarSign,
      title: 'Affiliate Integration',
      description: 'Your content earns while you sleep. We integrate relevant affiliate links that help your visitors.'
    },
    {
      icon: Shield,
      title: 'Transparent Pricing',
      description: 'No hidden fees, no surprises. You know exactly what you\'re paying for upfront.'
    },
    {
      icon: Zap,
      title: 'AI-Powered Efficiency',
      description: 'Agency quality at freelancer prices. AI helps us work faster without compromising quality.'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Alignment',
      description: 'We succeed when you succeed. Our pricing model means we\'re invested in your growth.'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Weeks, not months. We move fast because we know your time is valuable.'
    }
  ]

  return (
    <section className="py-24 section-dark relative">
      <div className="absolute inset-0 noise-overlay" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-900/50 text-primary-400 text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            What Makes Us Different
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We don't just build pretty pages—we build digital assets that attract customers and generate revenue.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <div key={index} className="card p-6 hover-lift group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600/20 to-primary-400/20 flex items-center justify-center mb-4 group-hover:from-primary-600/30 group-hover:to-primary-400/30 transition-colors">
                <item.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// SOCIAL PROOF SECTION
// ============================================
function SocialProofSection() {
  const testimonials = [
    {
      name: 'Mike Craft',
      role: 'Real Estate Agent',
      company: 'United Country',
      quote: 'PropListAI has saved me hours of work every week. The AI-generated listings are professional and engaging.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Operations Manager',
      company: 'KHCL Logistics',
      quote: 'The logistics platform LMW Labs built completely transformed our operations. Real-time tracking, automated dispatch.',
      rating: 5
    }
  ]

  return (
    <section className="py-24 section-gradient relative">
      <div className="absolute inset-0 noise-overlay" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-900/50 text-primary-400 text-sm font-medium mb-4">
            Trusted by Mississippi Businesses
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results, Real Clients
          </h2>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 mb-16 opacity-60">
          <Image src="/images/cooper.svg" alt="Cooper Generations" width={150} height={50} className="h-12 w-auto" />
          <Image src="/images/faithfeed.png" alt="FaithFeed" width={150} height={50} className="h-10 w-auto" />
          <Image src="/images/blacktopproz.png" alt="BlacktopProz" width={150} height={50} className="h-10 w-auto" />
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </p>

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
// FINAL CTA SECTION
// ============================================
function FinalCTASection() {
  return (
    <section className="py-24 section-dark relative">
      <div className="absolute inset-0 noise-overlay" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Stop Paying for a Website
          <span className="block gradient-text">That Doesn't Work for You?</span>
        </h2>
        <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
          Book a free consultation. No pressure, no obligations—just a conversation about what you need.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-accent inline-flex items-center gap-2 text-lg px-8 py-4">
            Book a Free Consultation
            <Calendar className="w-5 h-5" />
          </Link>
          <Link href="/pricing" className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4">
            View Pricing
            <ChevronRight className="w-5 h-5" />
          </Link>
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
              Professional websites that rank, attract customers, and generate revenue.
              SEO-ready development with built-in affiliate monetization for small businesses.
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
            <h3 className="font-display font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/starter" className="text-gray-400 hover:text-white transition-colors">Starter Tier</Link></li>
              <li><Link href="/services/growth" className="text-gray-400 hover:text-white transition-colors">Growth Tier</Link></li>
              <li><Link href="/services/authority" className="text-gray-400 hover:text-white transition-colors">Authority Tier</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-900/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LMW Labs LLC. All rights reserved. Brandon, Mississippi.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
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
      <ProblemSolutionSection />
      <HowItWorksSection />
      <TierOverviewSection />
      <DifferentiatorsSection />
      <SocialProofSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
