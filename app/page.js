import Image from 'next/image'
import Layout from './components/Layout'
import Lucifer from '../public/Painting-of-Lucifer.jpg'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* main content */}
        <Layout>

          <div className='flex flex-col'>
            <div className='min-w-full left-0 top-0 bottom-4 absolute'>
              <Image src={Lucifer} alt="lucifer" className='min-w-full h-auto' />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-transparent border border-white text-white rounded-md cursor-pointer">
                <Link href="/pages/booking">Book Now!</Link>
              </div>
            </div>   
          </div>

        </Layout>
    </>
  )
}
