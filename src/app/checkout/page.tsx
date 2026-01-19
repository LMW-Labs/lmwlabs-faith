'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Loader2, Mail, Github, Twitter } from 'lucide-react'

const TIER_CONFIG = {
  'self-managed': {
    name: 'Self-Managed',
    tagline: 'Full Ownership',
    min: 2500,
    max: 4000,
    monthly: 0,
    description: 'One-time payment. You own 100% of your website.',
  },
  'growth': {
    name: 'Growth',
    tagline: 'Shared Success',
    min: 1500,
    max: 2500,
    monthly: 100,
    description: 'Setup fee + $100/month for hosting, content, and SEO.',
  },
  'authority': {
    name: 'Authority',
    tagline: 'Maximum Value',
    min: 500,
    max: 1000,
    monthly: 150,
    description: 'Setup fee + $150/month for full-service management.',
  },
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

function CheckoutContent() {
  const searchParams = useSearchParams()
  const tierParam = searchParams.get('tier') as keyof typeof TIER_CONFIG | null

  const [selectedTier, setSelectedTier] = useState<keyof typeof TIER_CONFIG>(
    tierParam && TIER_CONFIG[tierParam] ? tierParam : 'growth'
  )
  const [amount, setAmount] = useState<number>(TIER_CONFIG[selectedTier].min)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const tier = TIER_CONFIG[selectedTier]

  const handleTierChange = (newTier: keyof typeof TIER_CONFIG) => {
    setSelectedTier(newTier)
    setAmount(TIER_CONFIG[newTier].min)
  }

  const handleCheckout = async () => {
    if (!name || !email) {
      setError('Please fill in your name and email')
      return
    }

    if (amount < tier.min || amount > tier.max) {
      setError(`Amount must be between $${tier.min} and $${tier.max}`)
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tier: selectedTier,
          amount,
          customerName: name,
          customerEmail: email,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session')
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
      setLoading(false)
    }
  }

  return (
    <main>
      <Navigation />

      <section className="pt-32 pb-24 section-dark relative min-h-screen">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6">
          <Link href="/pricing" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Pricing
          </Link>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
            Complete Your Order
          </h1>
          <p className="text-gray-400 mb-10">
            Select your package and enter your details to proceed to payment.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Form */}
            <div className="space-y-6">
              {/* Tier Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Select Package</label>
                <div className="space-y-3">
                  {(Object.keys(TIER_CONFIG) as Array<keyof typeof TIER_CONFIG>).map((key) => {
                    const t = TIER_CONFIG[key]
                    return (
                      <button
                        key={key}
                        onClick={() => handleTierChange(key)}
                        className={`w-full p-4 rounded-xl border text-left transition-all ${
                          selectedTier === key
                            ? 'border-accent-400 bg-accent-400/10'
                            : 'border-primary-800/50 bg-primary-900/20 hover:border-primary-700'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-display font-semibold text-white">{t.name}</div>
                            <div className="text-sm text-gray-400">{t.tagline}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-semibold">${t.min.toLocaleString()} - ${t.max.toLocaleString()}</div>
                            {t.monthly > 0 && (
                              <div className="text-sm text-accent-400">+ ${t.monthly}/mo</div>
                            )}
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Setup Fee Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    type="number"
                    min={tier.min}
                    max={tier.max}
                    step={100}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 rounded-xl bg-primary-900/30 border border-primary-800/50 text-white focus:outline-none focus:border-accent-400 transition-colors"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Range: ${tier.min.toLocaleString()} - ${tier.max.toLocaleString()}
                </p>
              </div>

              {/* Customer Info */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-xl bg-primary-900/30 border border-primary-800/50 text-white placeholder-gray-500 focus:outline-none focus:border-accent-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-primary-900/30 border border-primary-800/50 text-white placeholder-gray-500 focus:outline-none focus:border-accent-400 transition-colors"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full btn-accent flex items-center justify-center gap-2 py-4"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Continue to Payment
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 text-center">
                Secure payment powered by Stripe
              </p>
            </div>

            {/* Right: Summary */}
            <div>
              <div className="card p-6 sticky top-32">
                <h2 className="font-display text-xl font-semibold text-white mb-4">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">{tier.name} Package</span>
                    <span className="text-white">${amount.toLocaleString()}</span>
                  </div>
                  {tier.monthly > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">+ Monthly service</span>
                      <span className="text-gray-400">${tier.monthly}/mo (billed separately)</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-primary-800/50 pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="font-semibold text-white">Due Today</span>
                    <span className="font-display text-2xl font-bold text-accent-400">
                      ${amount.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="text-sm text-gray-400 space-y-2">
                  <p>{tier.description}</p>
                  {tier.monthly > 0 && (
                    <p className="text-gray-500">
                      Monthly billing will begin after your site launches.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function CheckoutLoading() {
  return (
    <main>
      <Navigation />
      <section className="pt-32 pb-24 section-dark relative min-h-screen">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-accent-400" />
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutLoading />}>
      <CheckoutContent />
    </Suspense>
  )
}
