"use client";
import React from 'react';
import Layout from "../../components/Layout";

export default function Portfolio() {
    return(
        <Layout>
            <div className='flex flex-col'>

                {/* header */}
                <div className="mb-10">
                    <h1 className="text-black text-6xl font-black italic">PORTFOLIO</h1>
                    <h2 className="text-black text-2xl font-black italic">Here are some of my favourite pieces</h2>
                </div>

                <div className=''>
                    {/* <Image src={Lucifer} className='w-5/6 top-0 right-0 absolute' /> */}
                </div>   

                <div className="flex flex-row text-black">
                    <h1>
                        under construction ! 🚧
                    </h1>
                </div>
                <div>
                    {/* <DesignList/> */}
                </div>
            </div>
            {/* intro image/slideshow */}
        </Layout>
    )
}