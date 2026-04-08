import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const ref  = searchParams.get('ref')  ?? ''
  const text = searchParams.get('text') ?? ''

  const display  = text || ref
  const fontSize = display.length > 280 ? 20
                 : display.length > 160 ? 24
                 : 28

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

        {/* Verse content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 80px 0',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: 1040,
            }}
          >
            <div
              style={{
                fontSize,
                color: '#ffffff',
                lineHeight: 1.6,
                textAlign: 'center',
                maxWidth: 1040,
              }}
            >
              {display}
            </div>
            {text && ref && (
              <div style={{ display: 'flex', color: '#C9A84C', fontSize: 22, marginTop: 28, fontStyle: 'italic' }}>
                — {ref}
              </div>
            )}
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
