import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const author  = searchParams.get('author')  ?? 'FaithFeed'
  const content = searchParams.get('content') ?? ''

  const display  = content.slice(0, 280) + (content.length > 280 ? '…' : '')
  const fontSize = display.length > 200 ? 24 : 28

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          background: '#0D1117',
          position: 'relative',
        }}
      >
        {/* Decorative background */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', background: 'radial-gradient(circle at 85% 85%, rgba(201,168,76,0.18) 0%, transparent 55%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', background: 'radial-gradient(circle at 10% 5%, rgba(45,27,105,0.35) 0%, transparent 50%)' }} />
        <div style={{ position: 'absolute', inset: 10, border: '2px solid rgba(201,168,76,0.5)', borderRadius: 20, display: 'flex' }} />

        {/* Post content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '50px 80px 20px',
            position: 'relative',
          }}
        >
          {/* Author row */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 28 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 26,
                background: '#2D1B69',
                border: '1.5px solid rgba(201,168,76,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                color: '#C9A84C',
                fontWeight: 700,
                marginRight: 16,
              }}
            >
              {author.charAt(0).toUpperCase()}
            </div>
            <span style={{ display: 'flex', color: '#ffffff', fontSize: 24, fontWeight: 700 }}>{author}</span>
          </div>

          <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', marginBottom: 28, display: 'flex' }} />

          {/* Body text */}
          <div
            style={{
              fontSize,
              color: 'rgba(255,255,255,0.88)',
              lineHeight: 1.6,
              maxWidth: 1040,
            }}
          >
            {display}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(201,168,76,0.12)',
            padding: '16px 70px',
            borderTop: '1px solid rgba(201,168,76,0.2)',
            position: 'relative',
          }}
        >
          <span style={{ display: 'flex', color: '#C9A84C', fontWeight: 700, fontSize: 22 }}>FaithFeed</span>
          <span style={{ display: 'flex', color: 'rgba(255,255,255,0.4)', fontSize: 16 }}>lmwlabs.faith</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
