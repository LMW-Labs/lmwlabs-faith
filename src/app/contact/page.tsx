'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  ArrowRight,
  Check,
  Github,
  Twitter
} from 'lucide-react'
import { supabase } from '@/lib/supabase'

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
              <li><Link href="/services/self-managed" className="text-gray-400 hover:text-white transition-colors">Self-Managed</Link></li>
              <li><Link href="/services/growth" className="text-gray-400 hover:text-white transition-colors">Growth Tier</Link></li>
              <li><Link href="/services/authority" className="text-gray-400 hover:text-white transition-colors">Authority Tier</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    website: '',
    tier: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save to Supabase contacts table
      const { error: supabaseError } = await supabase.from('contacts').insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.business || null,
        website: formData.website || null,
        tier_interest: formData.tier || null,
        message: formData.message,
        source: 'lmwlabs.faith contact form'
      })

      if (supabaseError) {
        console.error('Supabase error:', supabaseError)
      }

      // Also send to Formspree for email notification
      const response = await fetch('https://formspree.io/f/mqeekvgl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok || !supabaseError) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', business: '', website: '', tier: '', message: '' })
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-900/50 text-primary-400 text-sm font-medium mb-6">
            Get in Touch
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Talk About
            <span className="block gradient-text">Your Project</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Book a free consultation. No pressure, no obligations—just a conversation about what you need.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 section-gradient relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Info */}
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Reach out directly or fill out the form. We typically respond within 24 hours.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4 mb-12">
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
                  href="tel:+17694875679"
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
                  className="flex items-center gap-4 p-4 rounded-xl bg-accent-400/10 border border-accent-400/20 hover:border-accent-400/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-400/20 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Schedule a call</div>
                    <div className="text-white font-medium group-hover:text-accent-400 transition-colors">
                      Book on Calendly
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-900/20 border border-primary-800/20">
                  <div className="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Location</div>
                    <div className="text-white font-medium">
                      Brandon, Mississippi
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="card p-6 border-accent-400/20">
                <h3 className="font-display text-lg font-semibold text-white mb-3">
                  What Happens Next?
                </h3>
                <p className="text-gray-400">
                  After you submit, we'll review your info and reach out within 24 hours to schedule
                  a free consultation. No pressure, no obligations—just a conversation about what you need.
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-white mb-6">
                Tell Us About Your Project
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent-400/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-accent-400" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    We'll be in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Name *</label>
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
                      <label className="block text-gray-400 text-sm mb-2">Email *</label>
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
                      <label className="block text-gray-400 text-sm mb-2">Business Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-primary-900/30 border border-primary-800/30 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="Your Business"
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Current Website</label>
                      <input
                        type="url"
                        className="w-full px-4 py-3 rounded-xl bg-primary-900/30 border border-primary-800/30 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="https://yoursite.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Which tier interests you?</label>
                      <select
                        className="w-full px-4 py-3 rounded-xl bg-primary-900/30 border border-primary-800/30 text-white focus:border-primary-500 focus:outline-none transition-colors"
                        value={formData.tier}
                        onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                      >
                        <option value="">Select a tier</option>
                        <option value="starter">Starter ($2,500-$4,000)</option>
                        <option value="growth">Growth ($1,500-$2,500 + $100/mo)</option>
                        <option value="authority">Authority ($500-$1,000 + $150/mo)</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Tell us about your project *</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-primary-900/30 border border-primary-800/30 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                      placeholder="What are you looking to build? What problems are you trying to solve? Any specific features or requirements?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-accent w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
