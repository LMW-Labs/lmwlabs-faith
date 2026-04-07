import { Metadata } from 'next'
import { getFaithfeedSupabase } from '@/lib/faithfeed-supabase'
import AppRedirect from '@/components/AppRedirect'

type Props = { params: Promise<{ ref: string }> }

async function fetchVerse(encodedRef: string) {
  const ref = decodeURIComponent(encodedRef) // e.g. "John 3:16"
  const parts = ref.match(/^(.+?)\s+(\d+):(\d+)$/)
  if (!parts) return null

  const [, book, chapter, verse] = parts
  const { data } = await getFaithfeedSupabase()
    .from('bible_verses')
    .select('text, book_name, chapter, verse')
    .eq('book_name', book)
    .eq('chapter_number', parseInt(chapter))
    .eq('verse_number', parseInt(verse))
    .single()

  return data
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ref } = await params
  const decoded = decodeURIComponent(ref)
  const verse = await fetchVerse(ref)

  const text = verse?.text?.slice(0, 200) ?? 'Read this verse on FaithFeed'
  const title = `${decoded} — FaithFeed`

  return {
    title,
    description: `"${text}"`,
    openGraph: {
      title,
      description: `"${text}"`,
      url: `https://lmwlabs.faith/verse/${ref}`,
      siteName: 'FaithFeed',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: `"${text}"`,
    },
  }
}

export default async function VersePage({ params }: Props) {
  const { ref } = await params
  return <AppRedirect deepLink={`faithfeed://verse/${ref}`} />
}