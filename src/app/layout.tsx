import type { Metadata } from 'next'
import { Space_Grotesk, Outfit } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lmwlabs.faith'),
  title: {
    default: 'LMW Labs | AI-Powered Software Development Studio | Brandon, MS',
    template: '%s | LMW Labs',
  },
  description: 'LMW Labs builds scalable, production-ready software. Mobile apps, web applications, AI integration, and logistics software. Based in Brandon, Mississippi, serving clients nationwide.',
  keywords: [
    'software development company',
    'AI software development',
    'mobile app development',
    'web application development',
    'logistics software',
    'TMS software',
    'Flutter app development',
    'Next.js development',
    'React development',
    'custom software',
    'Brandon Mississippi developer',
    'Mississippi software company',
    'scalable software solutions',
    'enterprise software development',
    'AI integration services',
  ],
  authors: [{ name: 'LMW Labs LLC', url: 'https://lmwlabs.faith' }],
  creator: 'LMW Labs LLC',
  publisher: 'LMW Labs LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lmwlabs.faith',
    siteName: 'LMW Labs',
    title: 'LMW Labs | AI-Powered Software Development',
    description: 'We build scalable, production-ready software systems. Mobile apps, web platforms, AI integration, and logistics software that grows with your business.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LMW Labs - Scalable Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LMW Labs | AI-Powered Software Development',
    description: 'We build scalable, production-ready software systems that grow with your business.',
    images: ['/images/og-image.png'],
    creator: '@lmwlabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://lmwlabs.faith',
  },
  verification: {
    // Add these when you have them:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  category: 'technology',
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LMW Labs LLC',
  url: 'https://lmwlabs.faith',
  logo: 'https://lmwlabs.faith/images/logo.png',
  description: 'AI-powered software development studio specializing in scalable mobile apps, web applications, and logistics software.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Brandon',
    addressRegion: 'MS',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-601-212-5714',
    contactType: 'sales',
    email: 'contact@lmwlabs.faith',
    availableLanguage: 'English',
  },
  sameAs: [
    // Add social media URLs when available
  ],
  founder: {
    '@type': 'Person',
    name: 'LMW Labs',
  },
  foundingDate: '2024',
  areaServed: 'US',
  serviceType: [
    'Mobile App Development',
    'Web Application Development',
    'AI Integration',
    'Logistics Software',
    'Custom Software Development',
  ],
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://lmwlabs.faith',
  name: 'LMW Labs LLC',
  image: 'https://lmwlabs.faith/images/og-image.png',
  telephone: '+1-601-212-5714',
  email: 'contact@lmwlabs.faith',
  url: 'https://lmwlabs.faith',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Brandon',
    addressRegion: 'Mississippi',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.2732,
    longitude: -89.9862,
  },
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
