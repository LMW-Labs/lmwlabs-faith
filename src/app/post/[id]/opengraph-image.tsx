import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function fetchPost(id: string): Promise<{ content: string; author: string } | null> {
  try {
    const supabaseUrl = process.env.FAITHFEED_SUPABASE_URL
    const supabaseKey = process.env.FAITHFEED_SUPABASE_ANON_KEY
    if (!supabaseUrl || !supabaseKey) return null

    const headers = { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` }

    const postRes = await fetch(
      `${supabaseUrl}/rest/v1/posts?id=eq.${id}&select=content,user_id&limit=1`,
      { headers }
    )
    if (!postRes.ok) return null
    const posts = await postRes.json()
    const post = posts?.[0]
    if (!post) return null

    let authorName = 'FaithFeed'
    if (post.user_id) {
      const profileRes = await fetch(
        `${supabaseUrl}/rest/v1/profiles?id=eq.${post.user_id}&select=full_name&limit=1`,
        { headers }
      )
      if (profileRes.ok) {
        const profiles = await profileRes.json()
        authorName = profiles?.[0]?.full_name ?? 'FaithFeed'
      }
    }

    return { content: post.content ?? '', author: authorName }
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

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [post, logoData] = await Promise.all([fetchPost(id), loadLogo()])

  const content = post?.content ?? 'A post on FaithFeed'
  const author = post?.author ?? 'FaithFeed'
  const display = content.slice(0, 280) + (content.length > 280 ? '…' : '')

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
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 85% 85%, rgba(201,168,76,0.18) 0%, transparent 55%)', display: 'flex' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 10% 5%, rgba(45,27,105,0.35) 0%, transparent 50%)', display: 'flex' }} />
        <div style={{ position: 'absolute', inset: 10, border: '2px solid rgba(201,168,76,0.5)', borderRadius: 20, display: 'flex' }} />

        {/* Content area */}
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
            <div style={{ width: 52, height: 52, borderRadius: 26, background: '#2D1B69', border: '1.5px solid rgba(201,168,76,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: '#C9A84C', fontWeight: 700, marginRight: 16 }}>
              {author.charAt(0).toUpperCase()}
            </div>
            <span style={{ display: 'flex', color: '#ffffff', fontSize: 24, fontWeight: 700 }}>{author}</span>
          </div>

          <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', marginBottom: 28, display: 'flex' }} />

          <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: 1040, color: 'rgba(255,255,255,0.88)', fontSize: 28, lineHeight: 1.6, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
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
