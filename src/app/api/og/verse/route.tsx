import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

const W = 1080
const H = 1080
const TEXT_W = 520   // ~48% of card width — satori-safe, won't overflow

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const ref  = searchParams.get('ref')  ?? ''
  const text = searchParams.get('text') ?? ''

  const display  = (text || ref).slice(0, 120)
  const fontSize = display.length > 80 ? 26 : 32

  return new ImageResponse(
    (
      <div
        style={{
          width: W,
          height: H,
          display: 'flex',
          flexDirection: 'column',
          background: '#0D1117',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, display: 'flex', background: 'radial-gradient(circle at 85% 85%, rgba(201,168,76,0.18) 0%, transparent 55%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', background: 'radial-gradient(circle at 10% 5%, rgba(45,27,105,0.35) 0%, transparent 50%)' }} />
        <div style={{ position: 'absolute', inset: 10, border: '2px solid rgba(201,168,76,0.5)', borderRadius: 24, display: 'flex' }} />

        {/* Verse text */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: TEXT_W,
            }}
          >
            <div
              style={{
                fontSize,
                color: '#ffffff',
                lineHeight: 1.7,
                textAlign: 'center',
                whiteSpace: 'pre-wrap',
                width: TEXT_W,
              }}
            >
              {display}
            </div>
            {ref && (
              <div style={{ display: 'flex', color: '#C9A84C', fontSize: 22, marginTop: 32, fontStyle: 'italic' }}>
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
            padding: `20px ${PAD}px`,
            borderTop: '1px solid rgba(201,168,76,0.2)',
            position: 'relative',
          }}
        >
          <span style={{ display: 'flex', color: '#C9A84C', fontWeight: 700, fontSize: 26 }}>FaithFeed</span>
          <span style={{ display: 'flex', color: 'rgba(255,255,255,0.4)', fontSize: 18 }}>lmwlabs.faith</span>
        </div>
      </div>
    ),
    { width: W, height: H }
  )
}
