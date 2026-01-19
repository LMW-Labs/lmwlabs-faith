'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react'
import { supabase } from '@/lib/supabase'

// Admin emails - must match the list in admin/page.tsx
const ADMIN_EMAILS = [
  'admin@lmwlabs.faith',
  'awyrick@lmwlabs.faith',
  'info@lmwlabs.faith'
]

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>('login')
  const [message, setMessage] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    // Redirect admins to admin dashboard, others to client portal
    const userEmail = data.user?.email?.toLowerCase() || ''
    if (ADMIN_EMAILS.includes(userEmail)) {
      router.push('/admin')
    } else {
      router.push('/portal')
    }
    setLoading(false)
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/portal`
      }
    })

    if (error) {
      setError(error.message)
    } else {
      setMessage('Check your email for a confirmation link!')
    }
    setLoading(false)
  }

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/portal`
    })

    if (error) {
      setError(error.message)
    } else {
      setMessage('Check your email for a password reset link!')
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-3 mb-8">
          <Image src="/images/logo.png" alt="LMW Labs" width={48} height={48} className="w-12 h-12 object-contain" />
          <span className="font-display font-bold text-2xl text-white">LMW Labs</span>
        </Link>

        {/* Card */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8">
          <h1 className="text-2xl font-bold text-white text-center mb-2">
            {mode === 'login' && 'Client Portal'}
            {mode === 'signup' && 'Create Account'}
            {mode === 'forgot' && 'Reset Password'}
          </h1>
          <p className="text-gray-400 text-center mb-8">
            {mode === 'login' && 'Sign in to access your projects'}
            {mode === 'signup' && 'Sign up to get started'}
            {mode === 'forgot' && 'Enter your email to reset password'}
          </p>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {message && (
            <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
              <p className="text-green-400 text-sm">{message}</p>
            </div>
          )}

          <form onSubmit={mode === 'login' ? handleLogin : mode === 'signup' ? handleSignup : handleForgotPassword}>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {mode !== 'forgot' && (
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="password"
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? 'Please wait...' : (
                  <>
                    {mode === 'login' && 'Sign In'}
                    {mode === 'signup' && 'Create Account'}
                    {mode === 'forgot' && 'Send Reset Link'}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Mode Switchers */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center space-y-2">
            {mode === 'login' && (
              <>
                <button
                  onClick={() => { setMode('forgot'); setError(''); setMessage(''); }}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Forgot your password?
                </button>
                <p className="text-gray-500 text-sm">
                  Don't have an account?{' '}
                  <button
                    onClick={() => { setMode('signup'); setError(''); setMessage(''); }}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Sign up
                  </button>
                </p>
              </>
            )}
            {mode === 'signup' && (
              <p className="text-gray-500 text-sm">
                Already have an account?{' '}
                <button
                  onClick={() => { setMode('login'); setError(''); setMessage(''); }}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Sign in
                </button>
              </p>
            )}
            {mode === 'forgot' && (
              <button
                onClick={() => { setMode('login'); setError(''); setMessage(''); }}
                className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
              >
                Back to sign in
              </button>
            )}
          </div>
        </div>

        {/* Back to site */}
        <p className="text-center mt-6">
          <Link href="/" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
            &larr; Back to LMW Labs
          </Link>
        </p>
      </div>
    </main>
  )
}
