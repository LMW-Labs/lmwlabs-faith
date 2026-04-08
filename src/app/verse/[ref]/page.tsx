import { Metadata } from 'next'
import { getFaithfeedSupabase } from '@/lib/faithfeed-supabase'
import AppRedirect from '@/components/AppRedirect'

type Props = { params: Promise<{ ref: string }> }

async function fetchVerseText(encodedRef: string): Promise<string | null> {
  let ref = decodeURIComponent(encodedRef)
  if (ref.includes('%')) { try { ref = decodeURIComponent(ref) } catch {} }
  const parts = ref.match(/^(.+?)\s+(\d+):(\d+)/)
  if (!parts) return null

  const [, book, chapter, verse] = parts
  const { data } = await getFaithfeedSupabase()
    .from('bible_verses')
    .select('text')
    .eq('book_name', book)
    .eq('chapter_number', parseInt(chapter))
    .eq('verse_number', parseInt(verse))
    .single()

  return data?.text ?? null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ref }  = await params
  let decoded    = decodeURIComponent(ref)
  if (decoded.includes('%')) { try { decoded = decodeURIComponent(decoded) } catch {} }

  const verseText = await fetchVerseText(ref)
  const text      = verseText ?? 'Read this verse on FaithFeed'
  const title     = `${decoded} — FaithFeed`

  const imageUrl = new URL('/api/og/verse', 'https://lmwlabs.faith')
  imageUrl.searchParams.set('ref', decoded)
  imageUrl.searchParams.set('text', verseText ?? '')

  return {
    title,
    description: `"${text.slice(0, 200)}"`,
    openGraph: {
      title,
      description: `"${text.slice(0, 200)}"`,
      url: `https://lmwlabs.faith/verse/${ref}`,
      siteName: 'FaithFeed',
      type: 'article',
      images: [{ url: imageUrl.toString(), width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: `"${text.slice(0, 200)}"`,
      images: [imageUrl.toString()],
    },
  }
}

export default async function VersePage({ params }: Props) {
  const { ref } = await params
  return <AppRedirect deepLink={`faithfeed://verse/${ref}`} />
}
