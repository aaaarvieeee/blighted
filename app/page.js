import Image from 'next/image'
import Layout from './components/Layout'
import DesignList from './components/DesignList'
import Lucifer from '../public/Painting-of-Lucifer.jpg'

export default function Home() {
  return (
    <main className='bg-white min-h-screen'>
      {/* main content */}
        <Layout>
          
          <div className='flex flex-col'>
            <div>
              <Image src={Lucifer} className='w-4/6 top-0 right-0 absolute' />
            </div>   

            <div>
              {/* <DesignList/> */}
            </div>
          </div>
          {/* intro image/slideshow */}

        </Layout>
    </main>
  )
}
