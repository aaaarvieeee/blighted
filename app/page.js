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
              <Image src={Lucifer} className='w-full' />
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
