import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'LMW Labs - AI-Powered Software Development Studio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0f',
          backgroundImage: 'linear-gradient(135deg, #1e1e4b 0%, #0a0a0f 50%, #12121a 100%)',
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 30%, rgba(95, 111, 241, 0.15) 0%, transparent 50%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 70% 70%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              background: 'linear-gradient(135deg, #5f6ff1 0%, #fbbf24 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.02em',
            }}
          >
            LMW Labs
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: '#a0a0a0',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          AI-Powered Software Development Studio
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            background: 'linear-gradient(135deg, #7f95f8 0%, #fbbf24 50%, #5f6ff1 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          We Build Scalable Systems That Grow With You
        </div>

        {/* Location */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: '#666',
            fontSize: 20,
          }}
        >
          <span>Brandon, Mississippi</span>
          <span style={{ margin: '0 12px' }}>•</span>
          <span>lmwlabs.faith</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
