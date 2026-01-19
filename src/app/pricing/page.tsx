import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Check,
  X,
  ArrowRight,
  Mail,
  Github,
  Twitter
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing | LMW Labs - Transparent Website Pricing',
  description: 'Clear, honest pricing for professional websites. Starter from $2,500, Growth from $1,500, Authority from $500. No hidden fees.',
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

export default function PricingPage() {
  const tiers = [
    {
      name: 'Starter',
      tagline: 'Full Ownership',
      setup: '$2,500 - $4,000',
      monthly: '$0',
      description: 'You want full control. We build it right and hand you the keys.',
      features: [
        { text: 'Custom 5-8 page website', included: true },
        { text: 'Mobile responsive design', included: true },
        { text: 'Basic SEO setup', included: true },
        { text: '30-day support', included: true },
        { text: 'You own 100%', included: true },
        { text: 'You keep 100% affiliate revenue', included: true },
        { text: 'Hosting included', included: false },
        { text: 'Monthly blog posts', included: false },
        { text: 'Ongoing SEO', included: false },
      ],
      href: '/services/starter',
      popular: false
    },
    {
      name: 'Growth',
      tagline: 'Shared Success',
      setup: '$1,500 - $2,500',
      monthly: '$100',
      description: 'We handle content, SEO, and maintenance. You handle your business.',
      features: [
        { text: 'Custom 5-10 page website', included: true },
        { text: 'Mobile responsive design', included: true },
        { text: 'Ongoing SEO optimization', included: true },
        { text: 'Unlimited support', included: true },
        { text: 'You own the site', included: true },
        { text: '70/30 affiliate split (LMW/You)', included: true },
        { text: 'Hosting included', included: true },
        { text: '1 blog post per month', included: true },
        { text: 'Monthly analytics reports', included: true },
      ],
      href: '/services/growth',
      popular: true
    },
    {
      name: 'Authority',
      tagline: 'Maximum Value',
      setup: '$500 - $1,000',
      monthly: '$150',
      description: 'Agency-level service at a fraction of the cost.',
      features: [
        { text: 'Custom 10-15 page website', included: true },
        { text: 'Mobile responsive design', included: true },
        { text: 'Full SEO service', included: true },
        { text: 'Priority support', included: true },
        { text: 'Exclusive license (buyout available)', included: true },
        { text: 'LMW keeps affiliate revenue', included: true },
        { text: 'Hosting included', included: true },
        { text: '4 blog posts per month', included: true },
        { text: 'Google Business management', included: true },
        { text: 'Local SEO optimization', included: true },
        { text: 'Quarterly strategy calls', included: true },
      ],
      href: '/services/authority',
      popular: false
    }
  ]

  const addOns = [
    { service: 'Additional blog posts', rate: '$65/post' },
    { service: 'Custom landing page', rate: '$300-500' },
    { service: 'Logo design', rate: '$200-400' },
    { service: 'Google Ads setup', rate: '$300 + ad spend' },
    { service: 'Email marketing setup', rate: '$400' },
    { service: 'Rush delivery (< 2 weeks)', rate: '+25%' },
    { service: 'Hourly development work', rate: '$100/hr' },
    { service: 'Hourly design work', rate: '$85/hr' },
  ]

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-900/50 text-primary-400 text-sm font-medium mb-6">
            Transparent Pricing
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Honest Pricing,
            <span className="block gradient-text">No Surprises</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We believe in radical transparency. Here's exactly how our pricing works and why.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 section-gradient relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-6">
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

                <div className="mb-2">
                  <span className="font-display text-3xl font-bold text-white">{tier.setup}</span>
                  <span className="text-gray-500 text-sm ml-2">setup</span>
                </div>
                <div className="mb-6 text-gray-400">
                  + <span className="text-accent-400 font-semibold">{tier.monthly}</span>/month
                </div>

                <p className="text-gray-400 mb-6 text-sm">
                  {tier.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>
                        {feature.text}
                      </span>
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
        </div>
      </section>

      {/* Affiliate Explanation */}
      <section className="py-24 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="card p-8 border-accent-400/30">
            <h2 className="font-display text-2xl font-bold text-white mb-4">
              How the Affiliate Model Works
            </h2>
            <p className="text-gray-300 mb-6">
              When we create content for your site, we integrate relevant affiliate links—products
              your customers might actually want. If someone clicks and buys, we earn a small commission.
            </p>
            <p className="text-gray-300 mb-6">
              This lets us charge less upfront while staying invested in your site's success.
              Better content = more traffic = more revenue = <strong className="text-accent-400">we both win</strong>.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-primary-900/30 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-white mb-1">Starter</div>
                <div className="text-accent-400 font-semibold">You keep 100%</div>
              </div>
              <div className="bg-primary-900/30 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-white mb-1">Growth</div>
                <div className="text-accent-400 font-semibold">70/30 split</div>
                <div className="text-gray-500 text-sm">(LMW/You)</div>
              </div>
              <div className="bg-primary-900/30 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-white mb-1">Authority</div>
                <div className="text-accent-400 font-semibold">LMW keeps 100%</div>
                <div className="text-gray-500 text-sm">(lowest setup cost)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-24 section-gradient relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Add-On Services
            </h2>
            <p className="text-gray-400">
              Need something extra? Here are our a la carte options.
            </p>
          </div>

          <div className="card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary-800/30">
                  <th className="text-left p-4 text-gray-400 font-normal">Service</th>
                  <th className="text-right p-4 text-gray-400 font-normal">Rate</th>
                </tr>
              </thead>
              <tbody>
                {addOns.map((addon, index) => (
                  <tr key={index} className="border-b border-primary-800/20 last:border-0">
                    <td className="p-4 text-gray-300">{addon.service}</td>
                    <td className="p-4 text-right font-display font-semibold text-white">{addon.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Book a free consultation. We'll help you find the right tier for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-accent inline-flex items-center gap-2">
              Book a Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="btn-secondary">
              Compare Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
