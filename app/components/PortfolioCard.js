import Image from "next/image"

export default function Portfolio({art}) {
    return (
        <div className="DesignCard cursor-pointer bg-white border-black">
            <div className="image">
                <Image src={art.image} alt={art.title} />
            </div>
            <div className="flex flex-col">
                <ul>
                    <li className="font-bold text-xl">{art.name}</li>
                </ul>
            </div>
        </div>
    )
}