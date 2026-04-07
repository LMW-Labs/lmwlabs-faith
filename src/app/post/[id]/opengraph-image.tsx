import { ImageResponse } from 'next/og'
import { faithfeedSupabase } from '@/lib/faithfeed-supabase'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const { data: post } = await faithfeedSupabase
    .from('posts')
    .select('content, author:profiles(full_name)')
    .eq('id', id)
    .single()

  const content = post?.content?.slice(0, 240) ?? ''
  const author = (post?.author as { full_name?: string } | null)?.full_name ?? 'Anonymous'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#0D1117',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Gold glow bottom-right */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 85% 85%, rgba(201,168,76,0.18) 0%, transparent 55%)',
          display: 'flex',
        }} />
        {/* Purple tint top-left */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 10% 5%, rgba(45,27,105,0.35) 0%, transparent 50%)',
          display: 'flex',
        }} />
        {/* Gold border */}
        <div style={{
          position: 'absolute', inset: 10,
          border: '2px solid rgba(201,168,76,0.5)',
          borderRadius: 20,
          display: 'flex',
        }} />

        {/* Author row */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40, position: 'relative' }}>
          <div style={{
            width: 64, height: 64, borderRadius: '50%',
            background: '#2D1B69',
            border: '1.5px solid rgba(201,168,76,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 28, color: '#C9A84C', fontWeight: 700,
            marginRight: 20,
          }}>
            {author.charAt(0).toUpperCase()}
          </div>
          <span style={{ color: '#fff', fontSize: 32, fontWeight: 700 }}>{author}</span>
        </div>

        {/* Divider */}
        <div style={{
          height: 1, background: 'rgba(255,255,255,0.1)',
          marginBottom: 48, position: 'relative', display: 'flex',
        }} />

        {/* Post content */}
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center',
          color: 'rgba(255,255,255,0.85)', fontSize: 38,
          lineHeight: 1.55, position: 'relative',
        }}>
          {content}{content.length === 240 ? '…' : ''}
        </div>

        {/* Branding bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'rgba(201,168,76,0.1)',
          margin: '40px -60px -60px',
          padding: '20px 60px',
          position: 'relative',
        }}>
          <span style={{ color: '#C9A84C', fontWeight: 700, fontSize: 26 }}>FaithFeed</span>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 18 }}>faithfeed.app</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
