import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | LMW Labs',
  description: 'Terms of service for LMW Labs LLC website and services.',
}

export default function TermsPage() {
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
            Terms of Service
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-400 text-sm mb-8">
              Last updated: January 2026
            </p>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Agreement to Terms
                </h2>
                <p>
                  By accessing or using the LMW Labs website and services, you agree to be
                  bound by these Terms of Service. If you do not agree with any part of these
                  terms, you may not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Services
                </h2>
                <p>
                  LMW Labs LLC provides software development services including but not limited
                  to:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Mobile application development</li>
                  <li>Web application development</li>
                  <li>AI integration and implementation</li>
                  <li>Logistics software solutions</li>
                  <li>Business automation</li>
                  <li>Website design and development</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Project Agreements
                </h2>
                <p>
                  All project work is governed by separate project agreements or statements of
                  work that outline specific deliverables, timelines, payment terms, and
                  intellectual property rights. These project-specific agreements take
                  precedence over these general terms where applicable.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Payment Terms
                </h2>
                <p>
                  Payment terms are specified in individual project agreements. Generally:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Deposits may be required before work begins</li>
                  <li>Milestone payments may apply for larger projects</li>
                  <li>Final payment is due upon project completion</li>
                  <li>Late payments may incur additional fees</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Intellectual Property
                </h2>
                <p>
                  Upon full payment, clients receive full ownership of custom code and designs
                  created specifically for their project. LMW Labs retains the right to use
                  general techniques, tools, and frameworks in other projects. Third-party
                  libraries and frameworks remain subject to their respective licenses.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Limitation of Liability
                </h2>
                <p>
                  LMW Labs LLC shall not be liable for any indirect, incidental, special, or
                  consequential damages arising from the use of our services. Our liability is
                  limited to the amount paid for the specific services in question.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Confidentiality
                </h2>
                <p>
                  We treat all client information as confidential and will not disclose project
                  details, business information, or technical specifications to third parties
                  without explicit consent.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Blog Content
                </h2>
                <p>
                  Our blog provides educational and informational content about software
                  development, technology, and business. Blog content is provided "as is"
                  without warranties of any kind. We do not guarantee specific results from
                  implementing advice or strategies discussed. You are responsible for your
                  own decisions based on blog content.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Affiliate Disclosure
                </h2>
                <p className="mb-4">
                  This website participates in affiliate marketing programs. When you click
                  certain links and make purchases, we may receive compensation. This includes:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Product and service recommendations</li>
                  <li>Software tools and platforms</li>
                  <li>Educational resources and courses</li>
                  <li>Third-party services we partner with</li>
                </ul>
                <p className="mt-4">
                  Affiliate relationships are clearly disclosed where applicable. Our opinions
                  and recommendations are our own and are not influenced by compensation.
                  Prices are not affected by our affiliate status.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  External Links
                </h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible
                  for the content, privacy practices, or terms of service of external sites.
                  Clicking external links is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be
                  effective immediately upon posting to our website. Continued use of our
                  services after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Contact
                </h2>
                <p>
                  For questions about these terms, please contact us at{' '}
                  <a
                    href="mailto:info@lmwlabs.faith"
                    className="text-primary-400 hover:text-primary-300"
                  >
                    info@lmwlabs.faith
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">
                  Governing Law
                </h2>
                <p>
                  These terms are governed by the laws of the State of Mississippi. Any
                  disputes shall be resolved in the courts of Rankin County, Mississippi.
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
