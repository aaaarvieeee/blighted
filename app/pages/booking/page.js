// Desc: Booking page
"use client";
import Link from "next/link";
import Layout from "../../components/Layout";
import {useState} from "react";
import Image from "next/image";
import instagram from "/public/instagram.png";
import mail from "/public/mail.png";
import Footer from "@/app/components/Footer";

export default function Booking() {
    const emailAddress = "your.email@example.com";
    const subject = "Inquiry";
    const body = "Hello, I have a question.";

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
                    <div className="flex flex-col w-1/2 mr-10">

                        {/* first name/last name inputs */}
                        <div className="grid grid-cols-2 gap-3 pb-5">
                            <p className="text-black">First Name</p>
                            <p className="text-black">Last Name</p>
                            <input required type="text"  className="input input-bordered w-full bg-white" />
                            <input required type="text" className="input input-bordered w-full bg-white" />
                        </div>
                        
                        <div className="flex flex-col mr-10">
                            <p className="text-black">Email</p>
                            <input required type="text" value={email} onChangeText={(text) => setEmail(text)} className="input input-bordered bg-white" />
                            
                            <p className="text-black">Phone Number</p>
                            <input required type="text" className="input input-bordered mt-1 bg-white" />
                            
                            <p className="text-black">Tattoo Idea and Placement</p>
                            <textarea required type="text" className="textarea textarea-bordered textarea-md mt-1 bg-white border" />
                            
                            <button className="btn btn-primary mt-4">Submit</button>
                        </div>
                    </div>
                        
                    {/* right side */}
                    <div className="flex flex-col">
                        <h1 className="text-black text-4xl font-semibold italic">Booking Details</h1>
                        <div className="pt-3">
                            <ul>
                                <li className="text-black text-l font-semibold"> When stating your tattoo idea, please include your desired size and your placement.</li>
                                <li className="text-black text-l font-semibold"></li>
                                <li className="text-black text-l font-semibold"></li>
                                <li className="text-black text-l font-semibold"></li>
                                <li className="text-black text-l font-semibold">If you have any further questions, please refer to the&nbsp;
                                <Link className="text-black text-l font-semibold hover:underline" href="/pages/faq">FAQ</Link> page or contact me on my socials below!
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-row w-full">
                            <Image src={instagram} alt="Instagram Icon" className="mr-2 h-8 w-8 absolute" />
                            <Link className="text-black text-2xl font-extrabold hover:underline italic inline pl-9" href={"https://www.instagram.com/6blighted/"}> @6blighted</Link>
                        </div>
                        <div>
                            <Image src={mail} alt="Mail Icon" className="mr-2 h-8 w-8 absolute" />
                            <Link className="text-black text-2xl font-extrabold hover:underline italic inline pl-9" href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}> info@blighted.com</Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </Layout>

    )
}