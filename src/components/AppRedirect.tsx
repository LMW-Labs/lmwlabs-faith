'use client'

import { useEffect } from 'react'

const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.faithfeed.app'
const APP_STORE  = 'https://apps.apple.com/app/faithfeed/id0000000000' // TODO: replace with real App Store ID

interface Props {
  deepLink: string  // e.g. "faithfeed://post/abc123"
}

export default function AppRedirect({ deepLink }: Props) {
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase()
    const isAndroid = /android/.test(ua)
    const isIOS = /iphone|ipad|ipod/.test(ua)

    if (isAndroid) {
      // intent:// URI opens app if installed, falls back to Play Store
      const path = deepLink.replace('faithfeed://', '')
      const intentUri = `intent://${path}#Intent;scheme=faithfeed;package=com.faithfeed.app;S.browser_fallback_url=${encodeURIComponent(PLAY_STORE)};end`
      window.location.href = intentUri
    } else if (isIOS) {
      window.location.href = deepLink
      setTimeout(() => { window.location.href = APP_STORE }, 1500)
    }
    // Desktop: just show the page (download buttons below)
  }, [deepLink])

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#0D1117',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        padding: '2rem',
        color: '#fff',
      }}
    >
      {/* Logo / brand */}
      <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>✝</div>
      <h1 style={{ color: '#C9A84C', fontSize: '2rem', margin: '0 0 0.5rem' }}>FaithFeed</h1>
      <p style={{ color: '#aaa', marginBottom: '2.5rem', textAlign: 'center' }}>
        Where Scripture Meets Scroll
      </p>

      <p style={{ color: '#ccc', marginBottom: '2rem', textAlign: 'center', maxWidth: 400 }}>
        Opening FaithFeed&hellip; If the app isn't installed yet, download it below.
      </p>

      <a
        href={PLAY_STORE}
        style={{
          background: '#C9A84C',
          color: '#0D1117',
          padding: '0.85rem 2rem',
          borderRadius: 8,
          fontWeight: 700,
          textDecoration: 'none',
          marginBottom: '1rem',
          fontSize: '1rem',
        }}
      >
        Download on Google Play
      </a>

      <a
        href={APP_STORE}
        style={{
          background: 'transparent',
          color: '#C9A84C',
          padding: '0.85rem 2rem',
          borderRadius: 8,
          fontWeight: 700,
          textDecoration: 'none',
          border: '1px solid #C9A84C',
          fontSize: '1rem',
        }}
      >
        Download on App Store
      </a>
    </main>
  )
}