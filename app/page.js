import Image from 'next/image'
import Layout from './components/Layout'
import DesignList from './components/DesignList'
import Lucifer from '../public/Painting-of-Lucifer.jpg'

export default function Home() {
  return (
    <>
      {/* main content */}
        <Layout>

          <div className='flex flex-col'>
            <div className='w-full'>
              <Image src={Lucifer} alt="lucifer" className='w-full h-auto' />
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-transparent border border-white text-white rounded-md cursor-pointer"
              >
                Book Now
              </button>
            </div>   

            <div>
              <p>
                
              </p>
            </div>
          </div>

        </Layout>
    </>
  )
}
