import { ImageResponse }              from 'next/og'
import { OgCard, OgText, loadOgLogo, OG_SIZE } from '@/lib/og-layout'

export const runtime     = 'nodejs'
export const size        = OG_SIZE
export const contentType = 'image/png'

async function fetchVerse(decoded: string): Promise<string | null> {
  try {
    // Allow verse ranges like "3:5-6" — grab the starting verse number only
    const parts = decoded.match(/^(.+?)\s+(\d+):(\d+)/)
    if (!parts) return null
    const [, book, chapter, verse] = parts

    const supabaseUrl = process.env.FAITHFEED_SUPABASE_URL
    const supabaseKey = process.env.FAITHFEED_SUPABASE_ANON_KEY
    if (!supabaseUrl || !supabaseKey) return null

    const url = `${supabaseUrl}/rest/v1/bible_verses?book_name=eq.${encodeURIComponent(book)}&chapter_number=eq.${parseInt(chapter, 10)}&verse_number=eq.${parseInt(verse, 10)}&select=text&limit=1`
    const res = await fetch(url, {
      headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` },
      cache: 'no-store',
    })
    if (!res.ok) return null
    const rows = await res.json()
    return rows?.[0]?.text ?? null
  } catch {
    return null
  }
}

export default async function Image({ params }: { params: Promise<{ ref: string }> }) {
  const { ref } = await params

  // Some sharing platforms double-encode the URL — decode twice if needed
  let decoded = decodeURIComponent(ref)
  if (decoded.includes('%')) {
    try { decoded = decodeURIComponent(decoded) } catch {}
  }

  const [verseText, logoData] = await Promise.all([fetchVerse(decoded), loadOgLogo()])
  const display               = verseText ?? decoded
  const fontSize              = display.length > 300 ? 22 : 28

  return new ImageResponse(
    (
      <OgCard logoData={logoData}>
        {/* Opening quote mark */}
        <div style={{ position: 'absolute', top: 20, left: 55, fontSize: 80, color: 'rgba(201,168,76,0.3)', lineHeight: 1, display: 'flex' }}>"</div>

        <div style={{ display: 'flex', flexDirection: 'column', width: 1040 }}>
          <OgText fontSize={fontSize} style={{ textAlign: 'center', justifyContent: 'center' }}>
            {display}
          </OgText>

          <div style={{ display: 'flex', color: '#C9A84C', fontSize: 22, fontStyle: 'italic', marginTop: 24 }}>
            — {decoded}
          </div>
        </div>
      </OgCard>
    ),
    { ...size }
  )
}
