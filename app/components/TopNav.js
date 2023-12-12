import Link from "next/link";
import Image from "next/image";
import User from "/public/user.png";
import Logo from "/public/logo.svg";

export default function TopNav() {
    return (
        <nav className="top-nav w-full bg-black shadow-lg fixed top-0 flex justify-between items-center px-6 py-4 border-b border-black ">
            
            <div className="logo">
                <h1 className="text-white font-extrabold text-2xl text-center italic">blighted</h1>
            </div>

            <div className="nav flex space-x-6 mr-20">
                <Link className="text-white hover:underline" href="/">home</Link>
                <Link className="text-white hover:underline" href="/pages/designs">designs</Link>
                <Link className="text-white hover:underline" href="/pages/booking">booking</Link>
                {/* <Link className="text-white hover:underline" href="/pages/portfolio">portfolio</Link> */}
                <Link className="text-white hover:underline" href="/pages/faq">faq</Link>
            </div>

            <div className="account">
                {/* <Image src={User} alt="Account Icon" width={27} height={27} className="invert" /> */}
            </div>
            
        </nav>
    );
}