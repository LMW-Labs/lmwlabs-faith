import { ImageResponse }                        from 'next/og'
import { OgCard, OgText, loadOgLogo, OG_SIZE } from '@/lib/og-layout'

export const runtime     = 'nodejs'
export const size        = OG_SIZE
export const contentType = 'image/png'

async function fetchPost(id: string): Promise<{ content: string; author: string } | null> {
  try {
    const supabaseUrl = process.env.FAITHFEED_SUPABASE_URL
    const supabaseKey = process.env.FAITHFEED_SUPABASE_ANON_KEY
    if (!supabaseUrl || !supabaseKey) return null

    const headers = { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` }

    const postRes = await fetch(
      `${supabaseUrl}/rest/v1/posts?id=eq.${id}&select=content,user_id&limit=1`,
      { headers, cache: 'no-store' }
    )
    if (!postRes.ok) return null
    const posts = await postRes.json()
    const post  = posts?.[0]
    if (!post) return null

    let authorName = 'FaithFeed'
    if (post.user_id) {
      const profileRes = await fetch(
        `${supabaseUrl}/rest/v1/profiles?id=eq.${post.user_id}&select=full_name&limit=1`,
        { headers, cache: 'no-store' }
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

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id }                = await params
  const [post, logoData]      = await Promise.all([fetchPost(id), loadOgLogo()])
  const content               = post?.content ?? 'A post on FaithFeed'
  const author                = post?.author  ?? 'FaithFeed'
  const display               = content.slice(0, 280) + (content.length > 280 ? '…' : '')

  return new ImageResponse(
    (
      <OgCard logoData={logoData}>
        {/* Author row */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 28 }}>
          <div style={{ width: 52, height: 52, borderRadius: 26, background: '#2D1B69', border: '1.5px solid rgba(201,168,76,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: '#C9A84C', fontWeight: 700, marginRight: 16 }}>
            {author.charAt(0).toUpperCase()}
          </div>
          <span style={{ display: 'flex', color: '#ffffff', fontSize: 24, fontWeight: 700 }}>{author}</span>
        </div>

        <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', marginBottom: 28, display: 'flex' }} />

        <OgText color="rgba(255,255,255,0.88)">
          {display}
        </OgText>
      </OgCard>
    ),
    { ...size }
  )
}
