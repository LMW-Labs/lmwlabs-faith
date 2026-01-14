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
  title: 'LMW Labs | AI-Powered Development Studio | Scalable Software Solutions',
  description: 'LMW Labs LLC builds scalable, production-ready software systems. From mobile apps to enterprise logistics platforms, we deliver AI-integrated solutions that grow with your business. Based in Brandon, Mississippi.',
  keywords: [
    'software development',
    'AI integration',
    'mobile app development',
    'web applications',
    'logistics software',
    'scalable systems',
    'enterprise software',
    'Brandon Mississippi',
    'Flutter development',
    'Next.js development',
  ],
  authors: [{ name: 'LMW Labs LLC' }],
  creator: 'LMW Labs LLC',
  publisher: 'LMW Labs LLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lmwlabs.faith',
    siteName: 'LMW Labs',
    title: 'LMW Labs | AI-Powered Development Studio',
    description: 'We build scalable, production-ready software systems that grow with your business. AI-integrated mobile apps, web platforms, and enterprise solutions.',
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
    title: 'LMW Labs | AI-Powered Development Studio',
    description: 'We build scalable, production-ready software systems that grow with your business.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
