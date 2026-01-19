import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://lmwlabs.faith'),
  title: {
    default: 'LMW Labs | Professional Websites That Pay For Themselves',
    template: '%s | LMW Labs',
  },
  description: 'SEO-optimized websites with built-in revenue streams for small businesses. From $500 setup. Based in Brandon, Mississippi. Contractor websites, local SEO, affiliate integration.',
  keywords: [
    'website development',
    'SEO websites',
    'small business websites',
    'contractor websites',
    'Mississippi web design',
    'Brandon MS',
    'local SEO',
    'affordable websites',
    'website packages',
    'business websites',
  ],
  authors: [{ name: 'LMW Labs LLC' }],
  creator: 'LMW Labs LLC',
  publisher: 'LMW Labs LLC',
  openGraph: {
    title: 'LMW Labs | Professional Websites That Pay For Themselves',
    description: 'SEO-optimized websites with built-in revenue streams. From $500 setup. Starter, Growth, and Authority tiers for every budget.',
    url: 'https://lmwlabs.faith',
    siteName: 'LMW Labs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LMW Labs | Professional Websites That Pay For Themselves',
    description: 'SEO-optimized websites with built-in revenue streams. From $500 setup.',
    creator: '@LMW_Labs',
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
  other: {
    'contact:email': 'info@lmwlabs.faith',
    'facebook-domain-verification': 'hvi5hcrvyj64shunrm9bhcenr4614a',
  },
}

// LocalBusiness structured data for SEO
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://lmwlabs.faith/#organization',
  name: 'LMW Labs LLC',
  description: 'Professional website development for small businesses. SEO-optimized websites with built-in revenue streams.',
  url: 'https://lmwlabs.faith',
  logo: 'https://lmwlabs.faith/images/logo.png',
  image: 'https://lmwlabs.faith/images/logo.png',
  telephone: '+1-769-487-5679',
  email: 'info@lmwlabs.faith',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Brandon',
    addressRegion: 'MS',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.2732,
    longitude: -89.9862,
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'State', name: 'Mississippi' },
  ],
  priceRange: '$500 - $4,000',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  sameAs: [
    'https://github.com/LMW-Labs',
    'https://x.com/LMW_Labs',
  ],
}

// Service structured data
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Website Development',
  provider: {
    '@type': 'LocalBusiness',
    name: 'LMW Labs LLC',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website Development Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Starter Website Package',
          description: 'Professional 5-7 page website. Full ownership, SEO-ready, mobile-optimized.',
        },
        price: '2500',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '2500',
          maxPrice: '4000',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Growth Website Package',
          description: 'Complete website with ongoing blog content, SEO optimization, and shared affiliate revenue.',
        },
        price: '1500',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '1500',
          maxPrice: '2500',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Authority Website Package',
          description: 'Premium managed website with full content creation, maximum SEO, and lowest upfront cost.',
        },
        price: '500',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '500',
          maxPrice: '1000',
          priceCurrency: 'USD',
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="facebook-domain-verification" content="hvi5hcrvyj64shunrm9bhcenr4614a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
