import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function fetchVerse(decoded: string): Promise<string | null> {
  try {
    const parts = decoded.match(/^(.+?)\s+(\d+):(\d+)$/)
    if (!parts) return null
    const [, book, chapter, verse] = parts

    const supabaseUrl = process.env.FAITHFEED_SUPABASE_URL
    const supabaseKey = process.env.FAITHFEED_SUPABASE_ANON_KEY
    if (!supabaseUrl || !supabaseKey) return null

    const url = `${supabaseUrl}/rest/v1/bible_verses?book_name=eq.${encodeURIComponent(book)}&chapter=eq.${chapter}&verse=eq.${verse}&select=text&limit=1`
    const res = await fetch(url, {
      headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` },
    })
    if (!res.ok) return null
    const rows = await res.json()
    return rows?.[0]?.text ?? null
  } catch {
    return null
  }
}

async function loadLogo(): Promise<ArrayBuffer | null> {
  try {
    const base = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'
    const res = await fetch(`${base}/images/omega.png`)
    if (!res.ok) return null
    return res.arrayBuffer()
  } catch {
    return null
  }
}

export default async function Image({ params }: { params: Promise<{ ref: string }> }) {
  const { ref } = await params
  const decoded = decodeURIComponent(ref)
  const [verseText, logoData] = await Promise.all([fetchVerse(decoded), loadLogo()])
  const display = verseText
    ? verseText.slice(0, 280) + (verseText.length > 280 ? '…' : '')
    : decoded

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#0D1117',
          position: 'relative',
        }}
      >
        {/* Background gradients */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 85% 85%, rgba(201,168,76,0.18) 0%, transparent 55%)', display: 'flex' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 10% 5%, rgba(45,27,105,0.35) 0%, transparent 50%)', display: 'flex' }} />
        <div style={{ position: 'absolute', inset: 10, border: '2px solid rgba(201,168,76,0.5)', borderRadius: 20, display: 'flex' }} />

        {/* Centered content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '50px 90px 20px',
            position: 'relative',
          }}
        >
          <div style={{ position: 'absolute', top: 20, left: 55, fontSize: 80, color: 'rgba(201,168,76,0.3)', lineHeight: 1, display: 'flex' }}>"</div>

          <div style={{ display: 'flex', color: '#ffffff', fontSize: 28, textAlign: 'center', lineHeight: 1.65, maxWidth: 960 }}>
            {display}
          </div>

          <div style={{ display: 'flex', color: '#C9A84C', fontSize: 22, fontStyle: 'italic', marginTop: 24 }}>
            — {decoded}
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
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {logoData && (
              // @ts-expect-error – ImageResponse accepts ArrayBuffer src
              <img src={logoData} width={32} height={32} style={{ objectFit: 'contain' }} />
            )}
            <span style={{ display: 'flex', color: '#C9A84C', fontWeight: 700, fontSize: 22 }}>FaithFeed</span>
          </div>
          <span style={{ display: 'flex', color: 'rgba(255,255,255,0.4)', fontSize: 16 }}>lmwlabs.faith</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
