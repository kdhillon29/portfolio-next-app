import Image from 'next/image'
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'

const Loading = () => {
  return (
    <div className='absolute left-80 top-60 mx-auto h-16 w-16 animate-spin'>
      <Image fill src='/images/loader-icon.png' alt='loader' />
      {/* <Skeleton count={5} /> */}
      {/* Five-line loading skeleton */}
    </div>
  )
}

export default Loading
