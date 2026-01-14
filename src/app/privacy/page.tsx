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
                  Cookies and Analytics
                </h2>
                <p>
                  We may use cookies and analytics tools (such as Google Analytics or Vercel
                  Analytics) to understand how visitors use our website. This helps us improve
                  the user experience. You can disable cookies in your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Third-Party Services
                </h2>
                <p>
                  We may use third-party services for form handling (Formspree), hosting
                  (Vercel), and analytics. These services have their own privacy policies
                  governing their use of your data.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have questions about this privacy policy or your data, please contact
                  us at{' '}
                  <a
                    href="mailto:contact@lmwlabs.faith"
                    className="text-primary-400 hover:text-primary-300"
                  >
                    contact@lmwlabs.faith
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
