import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function fetchVerse(decoded: string) {
  const parts = decoded.match(/^(.+?)\s+(\d+):(\d+)$/)
  if (!parts) return null
  const [, book, chapter, verse] = parts

  const url = `${process.env.FAITHFEED_SUPABASE_URL}/rest/v1/bible_verses?book_name=eq.${encodeURIComponent(book)}&chapter=eq.${chapter}&verse=eq.${verse}&select=text&limit=1`
  const res = await fetch(url, {
    headers: {
      apikey: process.env.FAITHFEED_SUPABASE_ANON_KEY!,
      Authorization: `Bearer ${process.env.FAITHFEED_SUPABASE_ANON_KEY!}`,
    },
  })
  if (!res.ok) return null
  const rows = await res.json()
  return rows?.[0]?.text ?? null
}

export default async function Image({ params }: { params: Promise<{ ref: string }> }) {
  const { ref } = await params
  const decoded = decodeURIComponent(ref)
  const verseText = await fetchVerse(decoded).catch(() => null)
  const display = verseText ? verseText.slice(0, 220) + (verseText.length > 220 ? '…' : '') : decoded

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0D1117',
          padding: '70px',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 85% 85%, rgba(201,168,76,0.18) 0%, transparent 55%)', display: 'flex' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 10% 5%, rgba(45,27,105,0.35) 0%, transparent 50%)', display: 'flex' }} />
        <div style={{ position: 'absolute', inset: 10, border: '2px solid rgba(201,168,76,0.5)', borderRadius: 20, display: 'flex' }} />

        <div style={{ position: 'absolute', top: 80, left: 80, fontSize: 120, color: 'rgba(201,168,76,0.4)', lineHeight: 1, display: 'flex' }}>"</div>

        <div style={{ color: '#fff', fontSize: 42, textAlign: 'center', lineHeight: 1.6, maxWidth: 960, position: 'relative', zIndex: 1 }}>
          {display}
        </div>

        <div style={{ color: '#C9A84C', fontSize: 32, fontStyle: 'italic', marginTop: 40, position: 'relative', zIndex: 1 }}>
          — {decoded}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', background: 'rgba(201,168,76,0.1)', position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 70px' }}>
          <span style={{ color: '#C9A84C', fontWeight: 700, fontSize: 26 }}>FaithFeed</span>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 18 }}>faithfeed.app</span>
        </div>
      </div>
    ),
    { ...size }
  )
}