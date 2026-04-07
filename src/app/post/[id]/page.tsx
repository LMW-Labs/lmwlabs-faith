import { Metadata } from 'next'
import { faithfeedSupabase } from '@/lib/faithfeed-supabase'
import AppRedirect from '@/components/AppRedirect'

type Props = { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params

  const { data: post } = await faithfeedSupabase
    .from('posts')
    .select('content, author:profiles(full_name)')
    .eq('id', id)
    .single()

  const content = post?.content?.slice(0, 200) ?? 'A post on FaithFeed'
  const author = (post?.author as { full_name?: string } | null)?.full_name ?? 'FaithFeed'
  const title = `${author} on FaithFeed`

  return {
    title,
    description: content,
    openGraph: {
      title,
      description: content,
      url: `https://lmwlabs.faith/post/${id}`,
      siteName: 'FaithFeed',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: content,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { id } = await params
  return <AppRedirect deepLink={`faithfeed://post/${id}`} />
}
