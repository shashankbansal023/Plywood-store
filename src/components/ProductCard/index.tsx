import Image from "next/image";

export default function ProductCard({title , description, imageSrc} : {
    title: string;
    description: string;
    imageSrc: any;
}){
    return (
        <div className="flex flex-col items-center p-2">
            {imageSrc}
            <div className="flex text-sm font-medium text-green-950">{title}</div>
            <div className="flex text-xs">{description}</div>
        </div>
    )
}   