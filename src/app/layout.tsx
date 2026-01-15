import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://lmwlabs.faith'),
  title: 'LMW Labs | AI-Powered App & Web Development',
  description: 'Full-stack development studio specializing in AI integration, mobile apps, web platforms, and business automation. Based in Brandon, Mississippi.',
  keywords: ['web development', 'app development', 'AI integration', 'Mississippi', 'React', 'Next.js', 'Flutter', 'Firebase', 'Brandon MS', 'software development'],
  authors: [{ name: 'LMW Labs LLC' }],
  openGraph: {
    title: 'LMW Labs | AI-Powered App & Web Development',
    description: 'Full-stack development studio specializing in AI integration, mobile apps, web platforms, and business automation.',
    url: 'https://lmwlabs.faith',
    siteName: 'LMW Labs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LMW Labs | AI-Powered App & Web Development',
    description: 'Full-stack development studio specializing in AI integration, mobile apps, web platforms, and business automation.',
  },
  other: {
    'contact:email': 'info@lmwlabs.faith',
    'facebook-domain-verification': 'hvi5hcrvyj64shunrm9bhcenr4614a',
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
      </head>
      <body>{children}</body>
    </html>
  )
}
