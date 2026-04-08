import { Metadata } from 'next'
import { getFaithfeedSupabase } from '@/lib/faithfeed-supabase'
import AppRedirect from '@/components/AppRedirect'

type Props = { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params

  const sb = getFaithfeedSupabase()
  const { data: post } = await sb.from('posts').select('content, user_id').eq('id', id).single()

  let authorName = 'FaithFeed'
  if (post?.user_id) {
    const { data: profile } = await sb
      .from('profiles')
      .select('full_name')
      .eq('id', post.user_id)
      .single()
    authorName = profile?.full_name ?? 'FaithFeed'
  }

  const content = post?.content ?? 'A post on FaithFeed'
  const title   = `${authorName} on FaithFeed`

  const imageUrl = new URL('/api/og/post', 'https://lmwlabs.faith')
  imageUrl.searchParams.set('author', authorName)
  imageUrl.searchParams.set('content', content.slice(0, 280))

  return {
    title,
    description: content.slice(0, 200),
    openGraph: {
      title,
      description: content.slice(0, 200),
      url: `https://lmwlabs.faith/post/${id}`,
      siteName: 'FaithFeed',
      type: 'article',
      images: [{ url: imageUrl.toString(), width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: content.slice(0, 200),
      images: [imageUrl.toString()],
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { id } = await params
  return <AppRedirect deepLink={`faithfeed://post/${id}`} />
}
