// Desc: Booking page
"use client";
import Link from "next/link";
import Layout from "../../components/Layout";
import {useState} from "react";
import Image from "next/image";
import instagram from "/public/instagram.png";

export default function Booking() {
    const [email, setEmail] = useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = () => {
        if (!emailRegex.test(email)) {
            Alert.alert('Invalid Email', 'Please enter a valid email address');
            return;
        }
    }

    return(
        <Layout>
            <div className="flex flex-col">
                {/* header */}
                <div className="mb-10">
                    <h1 className="text-black text-6xl font-black italic">BOOKING</h1>
                </div>

                <div className="flex flex-row">
                    {/* left side */}
                    {/*input boxes*/}
                    <div className="flex flex-col w-1/2">

                        {/* first name/last name inputs */}
                        <div className="flex flex-row justify-between">
                            <input required type="text"  className="input input-bordered w-full" />
                            <input required type="text" className="input input-bordered w-full" />
                        </div>

                        <input required type="text" placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} className="input input-bordered" />
                        <input required type="text" placeholder="Phone Number" className="input input-bordered mt-4" />
                        <input required type="text" placeholder="Tattoo Idea" className="input input-bordered mt-4" />
                        <button className="btn btn-primary mt-4">Submit</button>
                    </div>
                        
                    {/* right side */}
                    <div className="flex flex-col">
                        <p className="text-black text-6xl"> hi</p>
                        <div className="flex flex-row w-full">
                            <Image src={instagram} alt="Instagram Icon" width={35} height={30} className="mr-2" />
                            <Link className="text-black text-2xl font-extrabold hover:underline italic inline" href={"https://www.instagram.com/6blighted/"}> @6blighted</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}