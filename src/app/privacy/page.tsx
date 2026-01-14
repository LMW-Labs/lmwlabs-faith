import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | LMW Labs',
  description: 'Privacy policy for LMW Labs LLC website and services.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-white group-hover:text-primary-400 transition-colors">
                LMW Labs
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold text-white mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-400 text-sm mb-8">
              Last updated: January 2026
            </p>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Information We Collect
                </h2>
                <p>
                  When you use our contact form or communicate with us, we may collect:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Name and contact information (email, phone)</li>
                  <li>Project details and requirements you share</li>
                  <li>Budget and timeline preferences</li>
                  <li>Technical specifications for your project</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  How We Use Your Information
                </h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Respond to your inquiries and project requests</li>
                  <li>Provide quotes and proposals for services</li>
                  <li>Communicate about ongoing projects</li>
                  <li>Improve our services and website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Data Protection
                </h2>
                <p>
                  We take reasonable measures to protect your personal information from
                  unauthorized access, alteration, or destruction. We do not sell, trade, or
                  otherwise transfer your personal information to third parties without your
                  consent, except as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Blog & Content
                </h2>
                <p>
                  Our blog may collect additional data such as comments and email subscriptions.
                  Blog content is for informational purposes and may be updated without notice.
                  We are not responsible for the accuracy or completeness of third-party
                  information referenced in blog posts.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Affiliate Links & Advertising
                </h2>
                <p className="mb-4">
                  Some content on this website may contain affiliate links. This means we may
                  earn a commission if you click on a link and make a purchase, at no additional
                  cost to you. Affiliate relationships include but are not limited to:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Software tools and services we recommend</li>
                  <li>Hosting providers and development platforms</li>
                  <li>Courses, books, and educational resources</li>
                  <li>Business tools and productivity software</li>
                </ul>
                <p className="mt-4">
                  We only recommend products and services we genuinely believe provide value.
                  Affiliate partnerships do not influence our editorial content or recommendations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Analytics & Tracking
                </h2>
                <p className="mb-4">
                  We use analytics tools to understand how visitors interact with our website.
                  This helps us improve your experience and our services. We may collect:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Pages visited and time spent on each page</li>
                  <li>Traffic sources (how you found us)</li>
                  <li>Geographic location (city/region level)</li>
                  <li>Device type, browser, and operating system</li>
                  <li>Click patterns and scroll behavior</li>
                  <li>Form interactions and conversion data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Cookies
                </h2>
                <p>
                  Cookies are small files stored on your device. We use cookies for analytics
                  and to remember your preferences. You can disable cookies in your browser
                  settings, though this may affect some website functionality.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Third-Party Services
                </h2>
                <p className="mb-4">
                  We use the following third-party services that may collect data:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li><strong>Google Analytics</strong> - Website traffic and behavior analytics</li>
                  <li><strong>Google Search Console</strong> - Search performance data</li>
                  <li><strong>Microsoft Clarity / Hotjar</strong> - Heatmaps and session recordings</li>
                  <li><strong>Formspree</strong> - Contact form submissions</li>
                  <li><strong>Vercel</strong> - Website hosting and performance</li>
                  <li><strong>Calendly</strong> - Appointment scheduling</li>
                </ul>
                <p className="mt-4">
                  Each service has its own privacy policy governing how they handle your data.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Your Choices
                </h2>
                <p>You can control your data in several ways:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Disable cookies in your browser settings</li>
                  <li>Use browser extensions to block trackers</li>
                  <li>Opt out of Google Analytics at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">tools.google.com/dlpage/gaoptout</a></li>
                  <li>Request deletion of your data by contacting us</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have questions about this privacy policy or your data, please contact
                  us at{' '}
                  <a
                    href="mailto:info@lmwlabs.faith"
                    className="text-primary-400 hover:text-primary-300"
                  >
                    info@lmwlabs.faith
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 section-dark border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LMW Labs LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
