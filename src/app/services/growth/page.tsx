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
  BarChart3,
  Mail,
  Github,
  Twitter
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Growth Tier | LMW Labs - Hands-Off Website Success',
  description: 'Website + ongoing SEO + content. We handle maintenance while you focus on business. $1,500-$2,500 setup + $100/month.',
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

export default function GrowthTierPage() {
  const included = [
    'Everything in Self-Managed tier',
    'Custom 5-10 page website',
    'Client Dashboard access',
    'Hosting included',
    '1 SEO blog post per month',
    'Affiliate links integrated into content',
    'Monthly analytics report',
    'Ongoing maintenance and updates',
    'Security monitoring',
    'Unlimited support',
    'You own the website'
  ]

  const notIncluded = [
    'Google Business Profile management',
    'Local SEO optimization',
    'Social media graphics',
    'Priority support (same-day response)'
  ]

  const affiliateExplanation = {
    title: 'How the 70/30 Split Works',
    description: 'When we create content for your site, we integrate relevant affiliate links—products your customers might actually want. If someone clicks and buys, we earn a small commission. This lets us charge less upfront while staying invested in your site\'s success.',
    breakdown: [
      { label: 'LMW Labs', percent: 70, description: 'We keep 70% of affiliate revenue' },
      { label: 'You', percent: 30, description: 'You receive 30% of affiliate revenue' }
    ]
  }

  const process = [
    { step: 1, title: 'Discovery Call', description: 'We discuss your business, goals, and website requirements.' },
    { step: 2, title: 'Design & Planning', description: 'We create wireframes and design mockups for your approval.' },
    { step: 3, title: 'Development', description: 'We build your site with SEO best practices baked in.' },
    { step: 4, title: 'Launch', description: 'We deploy your site and set up hosting.' },
    { step: 5, title: 'Monthly Content', description: 'We create and publish 1 SEO blog post each month.' },
    { step: 6, title: 'Monthly Reports', description: 'You receive analytics and performance updates.' },
  ]

  const faqs = [
    {
      q: 'Do I still own my website?',
      a: 'Yes. You own the website and all its content. The only difference is the affiliate revenue split on content we create.'
    },
    {
      q: 'What if I want to cancel?',
      a: 'You can cancel anytime. You keep your website. We simply stop providing monthly services and you take over hosting.'
    },
    {
      q: 'What kind of blog posts do you create?',
      a: 'SEO-optimized content relevant to your industry. We research keywords, write valuable content, and naturally integrate affiliate links where appropriate.'
    },
    {
      q: 'How does the affiliate revenue work?',
      a: 'We track affiliate revenue through our links. Each month, 30% of any commissions earned goes to you. Most clients see this offset a significant portion of their monthly fee.'
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

          <div className="inline-block px-4 py-1 rounded-full bg-accent-400 text-primary-950 text-sm font-bold mb-4">
            Most Popular
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Growth Tier
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            You want growth without the grind. We handle the content, SEO, and maintenance.
            You handle your business. The affiliate revenue we generate helps offset your costs—some clients end up paying almost nothing net.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-12">
            <div>
              <span className="font-display text-4xl font-bold text-white">$1,500 - $2,500</span>
              <span className="text-gray-500 ml-2">setup</span>
            </div>
            <div className="text-gray-400">
              + <span className="text-accent-400 font-semibold">$100</span>/month
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
                  'Busy business owners wanting hands-off growth',
                  'Companies that want consistent content without hiring',
                  'Businesses ready to invest in long-term SEO',
                  'Those who want professional maintenance included',
                  'Clients who see value in shared success models'
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
                  <div className="text-gray-400">Initial build</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Then ongoing monthly content and maintenance.
              </p>
              <div className="flex items-center gap-4">
                <FileText className="w-8 h-8 text-primary-400" />
                <div>
                  <div className="text-xl font-bold text-white">1 Post/Month</div>
                  <div className="text-gray-400">SEO content delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Explanation */}
      <section className="py-24 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="card p-8 border-accent-400/30">
            <h2 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-accent-400" />
              {affiliateExplanation.title}
            </h2>
            <p className="text-gray-300 mb-8">{affiliateExplanation.description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              {affiliateExplanation.breakdown.map((item, i) => (
                <div key={i} className="bg-primary-900/30 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">{item.percent}%</div>
                  <div className="text-accent-400 font-semibold mb-1">{item.label}</div>
                  <div className="text-gray-400 text-sm">{item.description}</div>
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-sm mt-6 text-center">
              Better content = more traffic = more revenue = we both win.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included / Not Included */}
      <section className="py-24 section-gradient relative">
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
                Want the full package? Check out our <Link href="/services/authority" className="text-accent-400 hover:underline">Authority tier</Link>.
              </p>
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
            Ready to Grow?
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
