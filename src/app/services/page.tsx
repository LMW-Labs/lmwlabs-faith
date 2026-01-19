import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Search,
  DollarSign,
  Shield,
  Zap,
  TrendingUp,
  Check,
  X,
  ArrowRight,
  Users,
  Globe,
  FileText,
  Headphones,
  BarChart3,
  Settings,
  Mail,
  Github,
  Twitter,
  Compass,
  Smartphone,
  Code,
  Brain,
  Truck,
  Cog,
  Hammer,
  Wrench
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | LMW Labs - SEO-Ready Website Development',
  description: 'Professional websites with SEO optimization and built-in affiliate revenue. Choose from Starter, Growth, or Authority tiers. From $500 setup.',
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
              <a href="https://github.com/LMW-Labs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary-900/30 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-800/50 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://x.com/LMW_Labs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary-900/30 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-800/50 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:info@lmwlabs.faith" className="w-10 h-10 rounded-lg bg-primary-900/30 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-800/50 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/starter" className="text-gray-400 hover:text-white transition-colors">Starter Tier</Link></li>
              <li><Link href="/services/growth" className="text-gray-400 hover:text-white transition-colors">Growth Tier</Link></li>
              <li><Link href="/services/authority" className="text-gray-400 hover:text-white transition-colors">Authority Tier</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

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

export default function ServicesPage() {
  const services = [
    {
      icon: Compass,
      title: 'Strategy & Discovery',
      description: 'Define scope, user flows, and architecture before writing code. Prevents scope creep, aligns expectations, and creates a blueprint for development.',
      deliverables: [
        'Discovery call & stakeholder interviews',
        'Project scope document',
        'User flow diagrams',
        'Technical architecture plan',
        'Tech stack recommendations',
        'Timeline & milestone schedule',
        'Budget estimate breakdown',
        'Go/no-go recommendation'
      ],
      priceNote: '$750 flat fee — credited toward projects $5,000+',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform iOS & Android apps built with Flutter. Native performance, single codebase.',
      deliverables: [
        'Project kickoff & requirements document',
        'UI/UX wireframes and design mockups',
        'Cross-platform Flutter/Dart codebase',
        'Firebase backend setup (auth, database, storage)',
        'Push notification configuration',
        'Third-party API integrations',
        'App Store & Google Play submission',
        '90-day post-launch bug support'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Code,
      title: 'Web Applications',
      description: 'Modern, fast web apps and platforms. From landing pages to full SaaS products.',
      deliverables: [
        'Discovery call & scope document',
        'Responsive UI/UX design (Figma)',
        'Next.js/React frontend build',
        'Database schema & setup',
        'User authentication system',
        'Admin dashboard (if applicable)',
        'Hosting & deployment (Vercel/Netlify)',
        'SEO meta tags & sitemap',
        '60-day post-launch support'
      ],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'GPT-4, embeddings, RAG systems. Make your app intelligent.',
      deliverables: [
        'AI feasibility assessment',
        'Data pipeline architecture',
        'OpenAI/GPT-4 API integration',
        'Vector database setup (Pinecone/Supabase)',
        'RAG system implementation',
        'Prompt engineering & optimization',
        'Usage monitoring dashboard',
        'Documentation & training session'
      ],
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: Truck,
      title: 'Logistics Software',
      description: '8+ years in freight. We know the industry and build tools that actually work.',
      deliverables: [
        'Requirements gathering & workflow mapping',
        'Load management module',
        'Carrier/driver dispatch system',
        'Real-time GPS tracking integration',
        'Rate confirmation & invoicing',
        'Reporting & analytics dashboard',
        'API integrations (DAT, Trucker Tools, etc.)',
        'User training documentation'
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Cog,
      title: 'Business Automation',
      description: 'Stop doing things manually. Automate workflows, reports, and processes.',
      deliverables: [
        'Current workflow audit',
        'Automation opportunity report',
        'Custom API development',
        'Third-party integrations (Zapier, webhooks)',
        'Automated reporting system',
        'Custom dashboard build',
        'Testing & QA',
        'Handoff documentation'
      ],
      color: 'from-slate-500 to-zinc-600'
    },
    {
      icon: Hammer,
      title: 'Contractor Websites',
      description: 'Professional sites for trades businesses. SEO, lead capture, instant quotes.',
      deliverables: [
        'Discovery call & content outline',
        '5-7 page responsive website',
        'Mobile-first design',
        'Service area pages (local SEO)',
        'Quote/contact form with email routing',
        'Google Business Profile optimization',
        'Schema markup for local search',
        '30-day post-launch support'
      ],
      color: 'from-amber-500 to-yellow-600'
    }
  ]

  const retainerPlans = [
    {
      name: 'Basic',
      price: '$200',
      bestFor: 'Contractor sites & small web apps',
      features: [
        'Bug fixes & security patches',
        'CMS/content updates (up to 2 requests)',
        'Uptime monitoring & alerts',
        'Monthly backup verification',
        '2 hours dev/design time',
        'Email support (48hr response)'
      ]
    },
    {
      name: 'Standard',
      price: '$400',
      bestFor: 'Web apps & small SaaS platforms',
      popular: true,
      features: [
        'Everything in Basic',
        'Hosting management & optimization',
        'Monthly analytics review',
        'Performance monitoring',
        '5 hours dev/design time',
        'Priority email support (24hr response)',
        'Quarterly strategy call'
      ]
    },
    {
      name: 'Premium',
      price: '$750',
      bestFor: 'Mobile apps & mission-critical platforms',
      features: [
        'Everything in Standard',
        'Priority bug fixes (same-day start)',
        'Feature enhancements & iterations',
        '10 hours dev/design time',
        'Dedicated Slack/Discord channel',
        'Monthly strategy call',
        'App store update management'
      ]
    }
  ]

  const differentiators = [
    {
      icon: Search,
      title: 'SEO-First Development',
      description: 'Built to rank from day one. Proper semantic structure, fast loading, optimized images, and schema markup.'
    },
    {
      icon: DollarSign,
      title: 'Affiliate Integration',
      description: 'Your content earns while you sleep. We integrate relevant affiliate links that actually help your visitors.'
    },
    {
      icon: Shield,
      title: 'Transparent Pricing',
      description: 'No hidden fees, no surprises. You know exactly what you\'re paying for and how our model works.'
    },
    {
      icon: Zap,
      title: 'AI-Powered Efficiency',
      description: 'Agency quality at freelancer prices. AI helps us work faster without compromising on quality.'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Alignment',
      description: 'We succeed when you succeed. Our pricing model means we\'re genuinely invested in your growth.'
    }
  ]

  const comparisonFeatures = [
    { feature: 'Setup Cost', starter: '$2,500-4,000', growth: '$1,500-2,500', authority: '$500-1,000' },
    { feature: 'Monthly Cost', starter: '$0', growth: '$100', authority: '$150' },
    { feature: 'Pages Included', starter: '5-8', growth: '5-10', authority: '10-15' },
    { feature: 'Blog Posts/Month', starter: '0', growth: '1', authority: '4' },
    { feature: 'Site Ownership', starter: true, growth: true, authority: 'Licensed' },
    { feature: 'Affiliate Revenue', starter: 'You keep 100%', growth: '70/30 split', authority: 'LMW keeps' },
    { feature: 'Hosting Included', starter: false, growth: true, authority: true },
    { feature: 'Support Duration', starter: '30 days', growth: 'Unlimited', authority: 'Priority' },
    { feature: 'SEO Setup', starter: 'Basic', growth: 'Ongoing', authority: 'Full Service' },
    { feature: 'Analytics Reports', starter: false, growth: 'Monthly', authority: 'Weekly' },
    { feature: 'Google Business Mgmt', starter: false, growth: false, authority: true },
    { feature: 'Local SEO', starter: false, growth: false, authority: true },
  ]

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-900/50 text-primary-400 text-sm font-medium mb-6">
            Our Services
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Every Business Deserves a Website That
            <span className="block gradient-text">Works As Hard As They Do</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We don't just build pretty pages—we build digital assets that attract customers and generate revenue.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 section-gradient relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              What Makes Us Different
            </h2>
          </div>

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

      {/* Services Section */}
      <section className="py-24 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-900/50 text-primary-400 text-sm font-medium mb-4">
              What We Build
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Services & Deliverables
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Clear scope, transparent deliverables. You know exactly what you're getting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-8 hover-lift group">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-accent-400 text-sm font-medium">Deliverables:</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <Check className="w-4 h-4 text-accent-400 flex-shrink-0 mt-1" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                {service.priceNote && (
                  <div className="pt-4 border-t border-primary-800/30">
                    <span className="text-accent-400 text-sm font-medium">{service.priceNote}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 section-gradient relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Compare Our Tiers
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the plan that fits your needs. Lower setup cost means we share in your success.
            </p>
          </div>

          {/* Table Header */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4 text-gray-400 font-normal">Feature</th>
                  <th className="text-center p-4">
                    <Link href="/services/starter" className="block hover:opacity-80 transition-opacity">
                      <span className="block text-white font-display font-bold text-lg">Starter</span>
                      <span className="text-gray-500 text-sm">Self-Maintained</span>
                    </Link>
                  </th>
                  <th className="text-center p-4 bg-accent-400/5 rounded-t-xl">
                    <Link href="/services/growth" className="block hover:opacity-80 transition-opacity">
                      <span className="inline-block px-3 py-1 rounded-full bg-accent-400 text-primary-950 text-xs font-bold mb-2">Popular</span>
                      <span className="block text-white font-display font-bold text-lg">Growth</span>
                      <span className="text-gray-500 text-sm">Shared Success</span>
                    </Link>
                  </th>
                  <th className="text-center p-4">
                    <Link href="/services/authority" className="block hover:opacity-80 transition-opacity">
                      <span className="block text-white font-display font-bold text-lg">Authority</span>
                      <span className="text-gray-500 text-sm">Full Service</span>
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className="border-t border-primary-800/20">
                    <td className="p-4 text-gray-300">{row.feature}</td>
                    <td className="p-4 text-center">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <Check className="w-5 h-5 text-accent-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-white">{row.starter}</span>
                      )}
                    </td>
                    <td className="p-4 text-center bg-accent-400/5">
                      {typeof row.growth === 'boolean' ? (
                        row.growth ? (
                          <Check className="w-5 h-5 text-accent-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-white">{row.growth}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.authority === 'boolean' ? (
                        row.authority ? (
                          <Check className="w-5 h-5 text-accent-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-white">{row.authority}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-primary-800/20">
                  <td className="p-4"></td>
                  <td className="p-4 text-center">
                    <Link href="/services/starter" className="btn-secondary text-sm inline-block">
                      Learn More
                    </Link>
                  </td>
                  <td className="p-4 text-center bg-accent-400/5 rounded-b-xl">
                    <Link href="/services/growth" className="btn-accent text-sm inline-block">
                      Learn More
                    </Link>
                  </td>
                  <td className="p-4 text-center">
                    <Link href="/services/authority" className="btn-secondary text-sm inline-block">
                      Learn More
                    </Link>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* Ongoing Support Section */}
      <section className="py-24 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-900/50 text-primary-400 text-sm font-medium mb-4">
              Ongoing Support
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Maintenance & Retainer Plans
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Your project doesn't end at launch. Keep your app secure, updated, and evolving with dedicated monthly support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {retainerPlans.map((plan, index) => (
              <div
                key={index}
                className={`card p-8 relative ${plan.popular ? 'border-accent-400/30 ring-1 ring-accent-400/20' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-accent-500 to-accent-400 text-primary-950 text-xs font-bold">
                      Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Best for: {plan.bestFor}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="font-display text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full text-center block ${plan.popular ? 'btn-accent' : 'btn-secondary'}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400">
              Need more hours? Additional dev time billed at <span className="text-accent-400 font-semibold">$85/hr</span> for retainer clients (20% discount).
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-gradient relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Which Tier Is Right?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Let's talk. We'll help you find the perfect fit for your business and budget.
          </p>
          <Link href="/contact" className="btn-accent inline-flex items-center gap-2 text-lg px-8 py-4">
            Book a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
