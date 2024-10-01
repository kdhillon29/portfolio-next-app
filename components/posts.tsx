import Link from 'next/link'

import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className='flex flex-col gap-8'>
      {posts.map(post => (
        <li key={post.slug}>
          <Link href={`/posts/${post.slug}`} className='flex gap-x-4 gap-y-1'>
            {post.image && (
              <div className='relative h-16 w-full overflow-hidden rounded-lg sm:w-16'>
                <Image
                  src={post.image}
                  alt={post.title || ''}
                  className=''
                  fill
                />
              </div>
            )}
            <div className='max-w-lg'>
              <p className='text-lg font-semibold'>{post.title}</p>
              <p className='mt-1 line-clamp-1 text-sm font-light text-muted-foreground'>
                {post.summary}
              </p>
              {post.publishedAt && (
                <p className='mt-1 text-sm font-light'>
                  {formatDate(post.publishedAt)}
                </p>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
