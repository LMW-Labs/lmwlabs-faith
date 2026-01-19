import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Check,
  X,
  ArrowRight,
  ArrowLeft,
  Clock,
  Users,
  Shield,
  Code,
  Mail,
  Github,
  Twitter
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Self-Managed | LMW Labs - Full Ownership Website Package',
  description: 'Own your website 100%. Custom 5-8 page website with SEO setup, mobile responsive design, and 30-day support. $2,500-$4,000 one-time.',
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

export default function SelfManagedPage() {
  const included = [
    'Custom 5-8 page website',
    'Mobile responsive design',
    'Basic SEO setup (meta tags, schema, sitemap)',
    'Blog functionality installed',
    'Contact forms',
    '30-day support after launch',
    'Training documentation',
    'Full source code ownership',
    'You keep 100% of affiliate revenue'
  ]

  const notIncluded = [
    'Client Dashboard access',
    'Ongoing hosting (you arrange your own)',
    'Monthly blog content creation',
    'Ongoing SEO optimization',
    'Analytics monitoring',
    'Monthly reports'
  ]

  const process = [
    { step: 1, title: 'Discovery Call', description: 'We discuss your business, goals, and website requirements.' },
    { step: 2, title: 'Design & Planning', description: 'We create wireframes and design mockups for your approval.' },
    { step: 3, title: 'Development', description: 'We build your site with SEO best practices baked in.' },
    { step: 4, title: 'Review & Revisions', description: 'You review and we make adjustments until you\'re happy.' },
    { step: 5, title: 'Launch & Handoff', description: 'We launch your site and hand you the keys.' },
    { step: 6, title: '30-Day Support', description: 'We\'re available for questions and minor tweaks.' },
  ]

  const faqs = [
    {
      q: 'Do I really own everything?',
      a: 'Yes. You own 100% of the website, code, content, and any affiliate revenue it generates. We hand you all the files and access credentials.'
    },
    {
      q: 'What happens after 30 days?',
      a: 'You\'re on your own for maintenance and updates. We can offer hourly support if needed, or you can upgrade to our Growth tier for ongoing service.'
    },
    {
      q: 'Can I add affiliate links myself?',
      a: 'Absolutely. We\'ll set up the structure and show you how. Any revenue from those links is 100% yours.'
    },
    {
      q: 'What if I need help later?',
      a: 'We offer hourly support at $100/hr, or you can upgrade to Growth or Authority tier for ongoing service at any time.'
    }
  ]

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6">
          <Link href="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <span className="inline-block px-4 py-1 rounded-full bg-primary-900/50 text-primary-400 text-sm font-medium mb-4">
            Full Ownership
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Self-Managed
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            You want full control. You're comfortable updating your own site.
            You just need a professional foundation to build on. We'll build it right and hand you the keys.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-12">
            <div>
              <span className="font-display text-4xl font-bold text-white">$2,500 - $4,000</span>
              <span className="text-gray-500 ml-2">one-time</span>
            </div>
            <div className="text-gray-400">
              <span className="text-accent-400 font-semibold">$0</span> monthly
            </div>
          </div>

          <Link href="/contact" className="btn-accent inline-flex items-center gap-2">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 section-gradient relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Who This Is For
              </h2>
              <ul className="space-y-4">
                {[
                  'DIY business owners who want to manage their own site',
                  'Tech-comfortable entrepreneurs',
                  'Businesses with internal marketing resources',
                  'Those who want to maximize ownership and control',
                  'Clients who plan to handle their own SEO and content'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Users className="w-5 h-5 text-accent-400 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-8">
              <h3 className="font-display text-xl font-semibold text-white mb-4">Timeline</h3>
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-accent-400" />
                <div>
                  <div className="text-2xl font-bold text-white">2-4 Weeks</div>
                  <div className="text-gray-400">Typical delivery time</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Depending on scope and content readiness. Rush delivery available for +25%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included / Not Included */}
      <section className="py-24 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Included */}
            <div className="card p-8">
              <h3 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Check className="w-6 h-6 text-accent-400" />
                What's Included
              </h3>
              <ul className="space-y-4">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Included */}
            <div className="card p-8 border-gray-800">
              <h3 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <X className="w-6 h-6 text-gray-500" />
                Not Included
              </h3>
              <ul className="space-y-4">
                {notIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-500">
                    <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-400">
                Want these features? Consider our <Link href="/services/growth" className="text-accent-400 hover:underline">Growth</Link> or <Link href="/services/authority" className="text-accent-400 hover:underline">Authority</Link> tiers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 section-gradient relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-12 text-center">
            The Process
          </h2>
          <div className="space-y-6">
            {process.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-accent-400 text-primary-950 flex items-center justify-center font-bold flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="card p-6">
                <h3 className="font-display text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-gradient relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Book a free consultation and let's discuss your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-accent inline-flex items-center gap-2">
              Book a Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="btn-secondary">
              Compare All Tiers
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
