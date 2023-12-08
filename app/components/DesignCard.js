import Image from "next/image"
import { useEffect } from "react"
export default function DesignCard({name, size, image, price}) {

    useEffect(() => {
        console.log("DesignCard mounted")
    }, [])
    return (
        <div className="DesignCard cursor-pointer bg-white border-black border-2 rounded-3xl shadow-xl w-full h-full p-5">
            <div className="image pb-2">
                <Image src={image} alt={name} width={400} height={240} className="border-2 rounded-2xl" />
            </div>
            <div className="flex flex-col">
                <ul>
                    <li className="font-bold text-xl">{name}</li>
                    <li>{size} in.</li>
                    <li>${price}</li>
                </ul>
            </div>
        </div>
    )
}