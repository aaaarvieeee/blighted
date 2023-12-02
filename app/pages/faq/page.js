"use client";
import React from 'react';
import Layout from "../../components/Layout";

export default function Faq() {
    return(
        <Layout>
            <div>

                {/* header */}
                <div>
                    <h1 className='text-black font-black italic text-6xl'>FAQ</h1>
                </div>

                {/* questions */}
                <div>
                    <h2 className='text-black font-black italic text-2xl'>Aftercare Tips </h2>
                    <ul>
                        <li className='text-black  italic text-l'>Do not touch your tattoo without washing your hands first.</li>
                        <li className='text-black  italic text-l'>Wash your tattoo with warm water and unscented soap. Pat dry with a clean towel.</li>
                        <li className='text-black  italic text-l'>Apply a thin layer of unscented lotion to your tattoo.</li>
                        <li className='text-black  italic text-l'>Do not pick or scratch your tattoo.</li>
                        <li className='text-black  italic text-l'>Do not soak your tattoo in water. This includes baths, hot tubs, and swimming pools.</li>
                        <li className='text-black  italic text-l'>Do not expose your tattoo to direct sunlight.</li>
                        <li className='text-black  italic text-l'>Do not wear tight clothing over your tattoo.</li>
                        <li className='text-black  italic text-l'>Do not let your tattoo dry out.</li>
                        <li className='text-black  italic text-l'>Do not shave over your tattoo.</li>
                        <li className='text-black  italic text-l'>Do not apply Vaseline to your tattoo.</li>
                        <li className='text-black  italic text-l'>Do not apply Neosporin to your tattoo.</li>
                        <li className='text-black  italic text-l'>Do not apply sunscreen to your tattoo until it is fully healed.</li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-black font-black italic text-2xl'>How do I book an appointment?</h2>
                    <p className='text-black  italic text-l'>You can book an appointment by filling out the form on the booking page.</p>
                </div>
                
                <div>
                    <h2 className='text-black font-black italic text-2xl'>How much do you charge?</h2>
                    <p className='text-black  italic text-l'>Flashes are a flat fee, but I charge $40 per hour for customs</p>
                </div>

                <div>
                    <h2 className='text-black font-black italic text-2xl'>How do I pay?</h2>
                    <p className='text-black  italic text-l'>E-transfers for the deposits, then cash in-person</p>
                </div>
                
                <div>
                    <h2 className='text-black font-black italic text-2xl'>How much is the deposit?</h2>
                    <p className='text-black  italic text-l'>The deposit is $100.</p>
                </div>

                <div>
                    <h2 className='text-black font-black italic text-2xl'>How long have you been tattooing for?</h2>
                    <p className='text-black  italic text-l'>
                        I actually haven't started tattooing at all! this website is a passion/school project that I do plan to use in the near future. But for now, take some
                        of the information on this website with a grain of salt (except the aftercare stuff, that's important). But for the time being, I'm cooking in my sketchbooks,
                        making designs, and eventually will move on to practicing on fake skin. Hope to work with y'all in the future!
                    </p>
                </div>
            </div>
        </Layout>
    )
}