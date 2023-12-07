import Image from "next/image";
import Link from "next/link";
import Instagram from "/public/instagram.png";

export default function Footer() {
    return (
      <div className="flex flex-row w-full p-10 items-center justify-between bg-slate-100">
  
        {/* Logo */}
        <div className="w-100">
          <h1 className="text-black font-extrabold text-4xl text-center italic">© blighted 2023</h1>   
        </div>
  
  
        {/* Additional content (adjust as needed) */}
        <div className="w-1/6">
            <Link className="text-black text-2xl font-extrabold hover:underline italic inline pl-9" href={"https://www.instagram.com/6blighted/"}> 
            <Image src={Instagram} alt="Instagram Icon" className="mr-2 h-8 w-8 absolute" />
            @6blighted
            </Link>
        </div>
  
      </div>
    );
  }