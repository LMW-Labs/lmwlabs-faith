import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import {
  ArrowRight,
  Mail,
  Github,
  Twitter,
  ChevronDown
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ | LMW Labs - Frequently Asked Questions',
  description: 'Common questions about our website development services, pricing tiers, affiliate model, and how we work with clients.',
}

// FAQ Schema for structured data
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes LMW Labs different from other web designers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We focus on SEO from day one and use an affiliate revenue model that keeps us invested in your long-term success. We\'re not just building a site—we\'re building a digital asset that generates traffic and revenue.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build my website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most websites launch within 2-4 weeks, depending on scope and how quickly you can provide content and feedback. Rush delivery (under 2 weeks) is available for an additional 25%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is Authority tier cheaper upfront than Starter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because we earn through affiliate revenue instead of a higher setup fee. With Authority, we\'re investing in your site\'s long-term success. We keep the affiliate revenue, which means we\'re motivated to create content that actually ranks and converts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the affiliate revenue share work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When we create content, we integrate relevant affiliate links—products your customers might actually want. With Starter, you keep 100%. With Growth, it\'s 70/30 (LMW/You). With Authority, LMW keeps 100%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I own my website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With Starter and Growth tiers, yes—you own 100% of the site. With Authority tier, you have an exclusive license to use the site while we retain ownership. After 12 months, you can purchase full ownership.',
      },
    },
    {
      '@type': 'Question',
      name: 'What platform do you build on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use Next.js for most sites—it\'s fast, SEO-friendly, and scales well. We don\'t use WordPress unless you specifically need it.',
      },
    },
  ],
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

export default function FAQPage() {
  const faqCategories = [
    {
      title: 'General Questions',
      faqs: [
        {
          q: 'What makes LMW Labs different from other web designers?',
          a: 'We focus on SEO from day one and use an affiliate revenue model that keeps us invested in your long-term success. We\'re not just building a site—we\'re building a digital asset that generates traffic and revenue. Plus, our AI-enhanced workflow lets us deliver agency-quality work at freelancer prices.'
        },
        {
          q: 'How long does it take to build my website?',
          a: 'Most websites launch within 2-4 weeks, depending on scope and how quickly you can provide content and feedback. We move fast, but never at the expense of quality. Rush delivery (under 2 weeks) is available for an additional 25%.'
        },
        {
          q: 'Do I need to provide content?',
          a: 'For Starter tier, yes—you\'ll need to provide your core content (about your business, services, etc.). For Growth and Authority tiers, we create ongoing blog content for you. We can also help with initial content creation at our hourly rate.'
        },
        {
          q: 'What if I already have a website?',
          a: 'We can either redesign your existing site or build a new one and migrate your content. During our consultation, we\'ll assess what makes the most sense for your situation. Sometimes a fresh start is better; sometimes it\'s not.'
        }
      ]
    },
    {
      title: 'Pricing Questions',
      faqs: [
        {
          q: 'Why is Authority tier cheaper upfront than Starter?',
          a: 'Because we earn through affiliate revenue instead of a higher setup fee. With Authority, we\'re investing in your site\'s long-term success. We keep the affiliate revenue, which means we\'re motivated to create content that actually ranks and converts. You get agency-level service at a fraction of the cost.'
        },
        {
          q: 'How does the affiliate revenue share work?',
          a: 'When we create content, we integrate relevant affiliate links—products your customers might actually want. If someone clicks and buys, we earn a commission. With Starter, you keep 100%. With Growth, it\'s 70/30 (LMW/You). With Authority, LMW keeps 100% (which is why setup is so low).'
        },
        {
          q: 'Are there any hidden fees?',
          a: 'No. The prices on our site are the prices you pay. Setup is a one-time fee. Monthly fees (for Growth and Authority) cover hosting, maintenance, and content. If you need add-on services, those are clearly listed on our pricing page.'
        },
        {
          q: 'What happens if I want to switch tiers?',
          a: 'You can upgrade anytime. Moving from Starter to Growth or Authority just means starting monthly payments. Moving from Growth to Authority adjusts your monthly payment. We\'ll work out the details during a quick call.'
        }
      ]
    },
    {
      title: 'Technical Questions',
      faqs: [
        {
          q: 'What platform do you build on?',
          a: 'We use Next.js for most sites—it\'s fast, SEO-friendly, and scales well. Depending on your needs, we might use other modern frameworks. We don\'t use WordPress unless you specifically need it.'
        },
        {
          q: 'Will my site be mobile-friendly?',
          a: 'Absolutely. Every site we build is mobile-first and fully responsive. Over 60% of web traffic is mobile, so this isn\'t optional—it\'s essential.'
        },
        {
          q: 'Do you handle hosting?',
          a: 'For Growth and Authority tiers, yes—hosting is included in your monthly fee. For Starter tier, you arrange your own hosting (we recommend Vercel or Netlify and can help you set it up).'
        },
        {
          q: 'What about security?',
          a: 'All our sites use HTTPS by default. For Growth and Authority tiers, we monitor for security issues as part of ongoing maintenance. Modern hosting platforms like Vercel provide additional security features automatically.'
        }
      ]
    },
    {
      title: 'Ownership Questions',
      faqs: [
        {
          q: 'Do I own my website?',
          a: 'With Starter and Growth tiers, yes—you own 100% of the site. With Authority tier, you have an exclusive license to use the site while we retain ownership (this is how we keep setup costs so low). After 12 months, you can purchase full ownership.'
        },
        {
          q: 'What happens if I cancel?',
          a: 'For Starter, there\'s nothing to cancel—you own everything. For Growth, you keep your site and take over hosting. For Authority, we help you transition—either to a new site or you can purchase ownership of the existing one.'
        },
        {
          q: 'Can I move my site elsewhere?',
          a: 'For Starter and Growth tiers, absolutely—it\'s your site. For Authority tier, you\'d need to purchase ownership first, then you can move it wherever you like.'
        },
        {
          q: 'What about the content you create?',
          a: 'Content ownership depends on the tier. Starter: you own it. Growth: you own it (we just get affiliate revenue share). Authority: we retain content ownership (it\'s part of how we recoup our investment in creating it).'
        }
      ]
    }
  ]

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 section-dark relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-900/50 text-primary-400 text-sm font-medium mb-6">
            FAQ
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about working with LMW Labs.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      {faqCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-24 relative ${categoryIndex % 2 === 0 ? 'section-gradient' : 'section-dark'}`}
        >
          <div className="absolute inset-0 noise-overlay" />
          <div className="relative max-w-3xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold text-white mb-8">
              {category.title}
            </h2>
            <div className="space-y-6">
              {category.faqs.map((faq, faqIndex) => (
                <div key={faqIndex} className="card p-6">
                  <h3 className="font-display text-lg font-semibold text-white mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 section-gradient relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Book a free consultation. We're happy to answer anything not covered here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-accent inline-flex items-center gap-2">
              Book a Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="mailto:info@lmwlabs.faith" className="btn-secondary inline-flex items-center gap-2">
              Email Us
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

        <Footer />
      </main>
    </>
  )
}
