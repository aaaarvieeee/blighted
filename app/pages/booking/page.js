// Desc: Booking page
'use client';
import Link from "next/link";
import Layout from "../../components/Layout";
import {useState} from "react";
import Image from "next/image";
import instagram from "/public/instagram.png";
import mail from "/public/mail.png";
import Map from "../../components/Map";
import { EmailTemplate } from 'app/components/EmailTemplate';
import { Resend } from 'resend';

export default function Booking() {
    const emailAddress = "your.email@example.com";
    const subject = "Inquiry";
    const body = "Hello, I have a question.";

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!emailRegex.test(email)) {
            console.log('invalid email');
            return;
        }
        // const res = await fetch('/pages/api', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({firstName, lastName, email, PhoneNumber, message})
        // });

        // if(res.status === 200) {
        //     alert('Email sent!');
        // }

        const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
  
        try {
        //   const body = await request.json();
        //   console.log(body);
        //   const { firstName, lastName, PhoneNumber, email, message } = body;
          const data = await resend.emails.send({
            from: 'blighted <info@blighted.art>',
            to: email,
            subject: 'Confirmation Email',
            react: EmailTemplate({ first: firstName, last: lastName, phone: PhoneNumber, msg: message }),
          });
      
          return Response.json(data);
        } catch (error) {
          return Response.json({ error });
        };
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
                    <div className="flex flex-col w-1/2 mr-10 border border-black-700 p-5 rounded shadow-lg ">
                        {/* first name/last name inputs */}
                        <div className="grid grid-cols-2 gap-3 pb-5">
                            <p className="text-black">First Name</p>
                            <p className="text-black">Last Name</p>
                            <input required type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input input-bordered bg-white text-black" />
                            <input required type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input input-bordered  bg-white text-black" />
                        </div>
                        
                        <div className="flex flex-col mr-10 w-full">
                            <p className="text-black">Email</p>
                            <input required type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered bg-white text-black" />
                            
                            <p className="text-black pt-5">Phone Number</p>
                            <input required type="text" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="input input-bordered mt-1 bg-white text-black" />
                            
                            <p className="text-black pt-5 pb-2">Tattoo Idea and Placement</p>
                            <textarea required type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="textarea textarea-bordered textarea-md w-full max-w-x bg-white border text-black" />
                            
                            <button onClick={onSubmit} className="btn btn-primary mt-4">Submit</button>
                        </div>
                    </div>
                        
                    {/* right side */}
                    <div className="flex flex-col border border-black-700 w-1/2 p-5 rounded shadow-lg">
                        <div className="mapHolder">
                            <h2 className="text-black text-xl font-semibold italic">My Studio&apos;s Location:</h2>
                            <Map/>
                        </div>
                        <div>
                            <div className="pt-3">
                                <ul>
                                    <li className="text-black text-l font-semibold"> When stating your tattoo idea, please include your desired size and your placement.</li>
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
                </div>
            </div>
        </Layout>

    )
}