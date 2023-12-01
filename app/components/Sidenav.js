import Link from "next/link";
import Image from "next/image";
import User from "/public/user.png";

export default function Sidenav() {

    return(
        <div className="sidenav w-1/6 min-h-screen fixed z-1 top-0 left-0 pt-20 border-r-2 border-black-500 basis-1/6 bg-white">

            <div className="account top-0 right-0 pt-5 pr-5 absolute">
                <Image src={User} alt="Account Icon" width={30} height={30} />
            </div>

            <div className="logo w-full py-10">
                {/* <img src="/images/logo.png" alt="Blighted Logo" /> */}
                <h1 className="text-black font-extrabold text-3xl text-center italic">blighted</h1>
            </div>

            <div className="nav flex flex-col w-full">
                <Link className="text-black py-2 text-center hover:underline" href="/">home</Link>
                <Link className="text-black py-2 text-center hover:underline" href="/pages/designs">designs</Link>
                <Link className="text-black py-2 text-center hover:underline" href="/pages/booking">booking</Link>
                <Link className="text-black py-2 text-center hover:underline" href="/pages/portfolio">portfolio</Link>
                <Link className="text-black py-2 text-center hover:underline" href="/pages/faq">faq</Link>
            </div>
            
        </div>
    )
}