import Image from 'next/image'
import authorImage from '@/public/images/profileImg.png'
//avatars.githubusercontent.com/u/58728418?v=4&size=64
export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-center gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Kan.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a Developer based in Sydney, Australia. I&#39;m passionate
          about learning new technologies and sharing knowledge with others.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg hue-rotate-30 saturate-100 transition-all ease-linear hover:scale-105'
          src={authorImage}
          alt='Kan Dhillon'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
