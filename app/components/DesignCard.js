export default function DesignCard({design}) {
    return (
        <div className="DesignCard cursor-pointer bg-white border-black">
            <div className="image">
                <img src={design.image} alt={design.title} />
            </div>
            <div className="flex flex-col">
                <ul>
                    <li className="font-bold text-xl">{design.name}</li>
                    <li>{design.size}</li>
                    <li>{design.price}</li>
                </ul>
            </div>
        </div>
    )
}