import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Heart,
  Shield,
  TrendingUp,
  Lightbulb,
  Users,
  Mail,
  Github,
  Twitter,
  MapPin
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | LMW Labs - Our Story & Mission',
  description: 'LMW Labs helps small businesses compete online without competing with agency budgets. Based in Brandon, Mississippi. Faith-driven business principles.',
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

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'You always know what you\'re paying for. No hidden fees, no surprises, no fine print.'
    },
    {
      icon: TrendingUp,
      title: 'Alignment',
      description: 'Our success is tied to your success. When your site grows, we both benefit.'
    },
    {
      icon: Lightbulb,
      title: 'Excellence',
      description: 'AI-assisted, human-perfected. We use every tool available to deliver quality work fast.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Faith-based business principles. We do honest work for honest pay.'
    }
  ]

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-900/50 text-primary-400 text-sm font-medium mb-6">
            Our Story
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            About LMW Labs
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Helping small businesses compete online without competing with agency budgets.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 section-gradient relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                The Name Behind the Name
              </h2>
              <p className="text-gray-300 mb-4">
                <strong className="text-white">LMW</strong> stands for the initials of three children—a personal
                reminder of why this work matters. Building something that provides, something that lasts,
                something worth being proud of.
              </p>
              <p className="text-gray-300 mb-4">
                After 8+ years in business and logistics, I taught myself to code. Not at a bootcamp.
                Not with a CS degree. Through hours of building, breaking, and learning—often late at night
                after the kids were asleep.
              </p>
              <p className="text-gray-300">
                Now I combine that self-taught development skill with AI-enhanced workflows to deliver
                agency-quality work at prices small businesses can actually afford.
              </p>
            </div>
            <div className="card p-6 flex flex-col items-center justify-center text-center">
              <MapPin className="w-8 h-8 text-accent-400 mb-4" />
              <div className="text-white font-display font-bold text-xl mb-2">Brandon, Mississippi</div>
              <p className="text-gray-400 text-sm">Serving businesses nationwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Why */}
      <section className="py-24 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="card p-8 border-accent-400/30">
            <h2 className="font-display text-2xl font-bold text-white mb-6">
              Why I Started LMW Labs
            </h2>
            <blockquote className="text-gray-300 text-lg leading-relaxed italic border-l-4 border-accent-400 pl-6">
              "I started LMW Labs because I saw small businesses getting crushed by two options:
              expensive agencies or DIY disasters. There had to be a middle path—professional quality
              at honest prices, with a business model where we both win."
            </blockquote>
            <p className="text-gray-400 mt-6">
              Too many businesses pay $5,000-$10,000 for websites that don't rank, don't convert,
              and don't generate revenue. Or they try to DIY it and end up with something that hurts
              more than it helps.
            </p>
            <p className="text-gray-400 mt-4">
              Our tiered pricing and affiliate revenue model changes that. You get professional work.
              We stay invested in your success. Everyone wins.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 section-gradient relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-2xl text-gray-300 font-display leading-relaxed max-w-2xl mx-auto">
            "To help small businesses compete online
            <span className="text-accent-400"> without competing with agency budgets.</span>"
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card p-6 text-center hover-lift">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-400/20 to-accent-600/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-accent-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 section-gradient relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-12 text-center">
            What Makes Us Different
          </h2>

          <div className="space-y-8">
            <div className="card p-6">
              <h3 className="font-display text-xl font-semibold text-white mb-2">
                AI-Enhanced, Not AI-Replaced
              </h3>
              <p className="text-gray-400">
                We use AI tools to work faster and smarter, but every piece of work is reviewed,
                refined, and perfected by a human. You get the efficiency of AI with the judgment
                of experience.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-display text-xl font-semibold text-white mb-2">
                Revenue Alignment
              </h3>
              <p className="text-gray-400">
                Our affiliate revenue model means we're genuinely invested in your site's success.
                We don't just build and walk away—we have skin in the game.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-display text-xl font-semibold text-white mb-2">
                No Freelance Platform Fees
              </h3>
              <p className="text-gray-400">
                Working directly with us means no 20% platform fees. Those savings go straight
                to you in the form of lower prices and better service.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-display text-xl font-semibold text-white mb-2">
                Real Business Experience
              </h3>
              <p className="text-gray-400">
                8+ years in logistics and business operations. We understand how businesses actually
                work, not just how websites work. That perspective shapes everything we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Let's have a conversation about what you're building.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-accent inline-flex items-center gap-2">
              Book a Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
