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
  TrendingUp,
  FileText,
  Crown,
  Headphones,
  MapPin,
  Mail,
  Github,
  Twitter
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Authority Tier | LMW Labs - Full Service Website Package',
  description: 'Maximum service, minimum price. 4 SEO posts/month, Google Business management, local SEO, priority support. $500-$1,000 setup + $150/month.',
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

export default function AuthorityTierPage() {
  const included = [
    'Everything in Growth tier',
    'Custom 10-15 page website',
    '4 SEO blog posts per month',
    'Google Business Profile management',
    'Local SEO optimization',
    'Quarterly strategy calls',
    'Priority support (same-day response)',
    'Social media graphics (4/month)',
    'Weekly analytics reports',
    'Exclusive license to use the site'
  ]

  const notIncluded = [
    'Full site ownership (you license it exclusively)',
    'Affiliate revenue (LMW keeps 100%)'
  ]

  const whyLowerCost = {
    title: 'Why Is Setup So Low?',
    points: [
      {
        icon: TrendingUp,
        title: 'We Invest in Your Success',
        description: 'We earn through affiliate partnerships on the content we create, not inflated invoices. This means we\'re genuinely motivated to make your site succeed.'
      },
      {
        icon: Crown,
        title: 'Agency-Level Service',
        description: 'You get the same quality and attention that agencies charge $5,000+ for, at a fraction of the cost.'
      },
      {
        icon: FileText,
        title: 'Continuous Value',
        description: '4 blog posts per month, ongoing SEO, Google Business management—services that would cost $1,000+/month elsewhere.'
      }
    ]
  }

  const process = [
    { step: 1, title: 'Strategy Call', description: 'Deep dive into your business, competitors, and local market.' },
    { step: 2, title: 'Design & Build', description: 'We create a comprehensive 10-15 page website tailored to your needs.' },
    { step: 3, title: 'Launch & Optimize', description: 'We deploy, set up Google Business, and begin local SEO.' },
    { step: 4, title: 'Weekly Content', description: 'We publish 4 SEO-optimized posts every month.' },
    { step: 5, title: 'Quarterly Reviews', description: 'Strategy calls to review progress and plan next steps.' },
    { step: 6, title: 'Ongoing Growth', description: 'Continuous optimization, updates, and priority support.' },
  ]

  const faqs = [
    {
      q: 'What does "licensed" mean?',
      a: 'You have exclusive rights to use the website for your business. LMW Labs retains ownership to ensure we can maintain quality and continue earning affiliate revenue. If you cancel, you can purchase full ownership or we help transition to a new site.'
    },
    {
      q: 'Why do you keep all the affiliate revenue?',
      a: 'This is how we keep setup costs so low. Instead of charging $4,000+ upfront, we invest in building content that earns over time. You get agency-level service at a fraction of the cost.'
    },
    {
      q: 'What if I want to own my site later?',
      a: 'After 12 months, you can purchase full ownership for the difference between what you paid and our Starter tier price. We want long-term partnerships, not lock-in.'
    },
    {
      q: 'How is this different from renting a website?',
      a: 'You\'re not renting—you have exclusive license and full control of your site. We just retain ownership to protect our investment in content creation. Think of it like a car lease with a buyout option.'
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

          <div className="flex items-center gap-3 mb-4">
            <Crown className="w-6 h-6 text-accent-400" />
            <span className="text-accent-400 font-medium">Maximum Value</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Authority Tier
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Maximum service, minimum price. We invest in your success by keeping setup costs low and building content that ranks.
            You get agency-level service at a fraction of the cost. We earn through affiliate partnerships, not inflated invoices.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-12">
            <div>
              <span className="font-display text-4xl font-bold text-white">$500 - $1,000</span>
              <span className="text-gray-500 ml-2">setup</span>
            </div>
            <div className="text-gray-400">
              + <span className="text-accent-400 font-semibold">$150</span>/month
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
                  'Local businesses wanting to dominate their market',
                  'Companies that want full-service without full-service prices',
                  'Businesses serious about local SEO and Google visibility',
                  'Those who value results over ownership structure',
                  'Clients who want a true partner invested in their success'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Users className="w-5 h-5 text-accent-400 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="card p-6">
                <div className="flex items-center gap-4">
                  <Clock className="w-8 h-8 text-accent-400" />
                  <div>
                    <div className="text-xl font-bold text-white">2-4 Weeks</div>
                    <div className="text-gray-400">Initial build</div>
                  </div>
                </div>
              </div>
              <div className="card p-6">
                <div className="flex items-center gap-4">
                  <FileText className="w-8 h-8 text-primary-400" />
                  <div>
                    <div className="text-xl font-bold text-white">4 Posts/Month</div>
                    <div className="text-gray-400">SEO content delivered</div>
                  </div>
                </div>
              </div>
              <div className="card p-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-8 h-8 text-accent-400" />
                  <div>
                    <div className="text-xl font-bold text-white">Local SEO</div>
                    <div className="text-gray-400">Google Business managed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why So Low */}
      <section className="py-24 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-12 text-center">
            {whyLowerCost.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyLowerCost.points.map((point, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-400/20 to-accent-600/20 flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-8 h-8 text-accent-400" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">{point.title}</h3>
                <p className="text-gray-400 text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included / Not Included */}
      <section className="py-24 section-gradient relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Included */}
            <div className="card p-8 border-accent-400/30">
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

            {/* Trade-offs */}
            <div className="card p-8 border-gray-800">
              <h3 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <X className="w-6 h-6 text-gray-500" />
                The Trade-off
              </h3>
              <ul className="space-y-4">
                {notIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-500">
                    <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-accent-400/10 rounded-xl border border-accent-400/20">
                <p className="text-gray-300 text-sm">
                  <strong className="text-accent-400">Why this works:</strong> You get $5,000+ worth of service for $500-$1,000 upfront.
                  We earn on affiliate revenue instead. After 12 months, you can buy full ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 section-dark relative">
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
      <section className="py-24 section-gradient relative">
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
      <section className="py-24 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Full-Service Growth?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Book a free consultation and let's discuss how we can help your business dominate online.
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
