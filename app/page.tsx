import Intro from '@/components/intro'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default function Home() {
  const content = `# this is mdx content `

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <Intro />
        <MDXRemote source={content} />
      </div>
    </section>
  )
}
