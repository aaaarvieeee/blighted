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
            <div className=''>
              <Image src={Lucifer} className='w-full top-0 right-0 absolute' />
            </div>   

            <div>
              {/* <DesignList/> */}
              <p>
                
              </p>
            </div>
          </div>

        </Layout>
    </>
  )
}
