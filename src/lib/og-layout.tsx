/**
 * Shared OG card layout for all opengraph-image.tsx files.
 *
 * Satori rules enforced here so individual cards never need to remember them:
 *  - Every element needs display:'flex' (satori ignores block layout)
 *  - No width:'100%' on text — use explicit width in px (maxWidth is ignored by satori)
 *  - wordBreak + overflowWrap required for text wrapping
 *  - No position:absolute on text containers (breaks satori flow)
 */

export const OG_SIZE = { width: 1200, height: 630 }

/** Inner content width after padding (1200 - 2*80px padding) */
export const OG_CONTENT_WIDTH = 1040

interface OgCardProps {
  children: React.ReactNode
  logoData: ArrayBuffer | null
}

/**
 * Full-bleed card shell with FaithFeed dark/gold theme.
 * Renders a flex column: decorative background + content slot + bottom bar.
 */
export function OgCard({ children, logoData }: OgCardProps) {
  return (
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

      {/* Content area — callers render into this slot */}
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
        {children}
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
  )
}

/**
 * Satori-safe text block. Always wraps correctly.
 * Use this instead of a raw <div> for any text content in OG images.
 */
export function OgText({
  children,
  fontSize = 28,
  color = '#ffffff',
  style = {},
}: {
  children: React.ReactNode
  fontSize?: number
  color?: string
  style?: React.CSSProperties
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: OG_CONTENT_WIDTH,
        color,
        fontSize,
        lineHeight: 1.6,
        wordBreak: 'break-word',
        overflowWrap: 'anywhere',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

/** Loads the omega logo for use in OG images */
export async function loadOgLogo(): Promise<ArrayBuffer | null> {
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
