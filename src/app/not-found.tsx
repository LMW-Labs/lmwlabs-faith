'use client'

import Link from 'next/link'
import { Home, ArrowLeft, Layers } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-dark flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="blob-purple -top-40 -left-40 animate-float" />
      <div className="blob-gold top-1/2 -right-40 animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 text-center px-4">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
            <Layers className="w-7 h-7 text-white" />
          </div>
          <span className="text-2xl font-display font-bold text-white">LMW Labs</span>
        </div>

        {/* 404 Display */}
        <h1 className="text-8xl sm:text-9xl font-display font-bold gradient-text mb-4">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </main>
  )
}
