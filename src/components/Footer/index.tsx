import Link from "next/link"
import logo from '../Images/krishna-timber-and-plywood-logo-zip-file/svg/logo-black.svg'
import Image from "next/image"

export default function Footer(){
    return (
        <div className="flex flex-wrap bg-white gap-[30px] p-10 border border-t-grey w-full">
            <div className="flex flex-col gap-[10px]">
            <Link href="/" className="flex text-black font-bold uppercase text-lg">
                <Image src={logo} style={{width: '60px' , height:'60px',borderRadius:'50%', border: '1px solid grey'}} alt={"Krishna Timber and Plywood | Plywood store "}/>
            </Link>
            <h1 className="font-medium">Krishna Timber and Plywood</h1>
            </div>
            
            <div className="flex flex-col gap-[10px] ml-[100px]">
             <h1 className="text-lg font-medium  text-black">Menu</h1>   
             <div className="flex flex-wrap">
                <div className="flex flex-col gap-[10px]">
                    <Link href="/categories/plywood" className="text-sm">
                    Plywood
                    </Link>
                    <Link href="/categories/hdhmr-board" className="text-sm">
                        HDHMR
                    </Link>
                    <Link href="/categories/laminates"   className=" text-sm">
                        Sunmica Laminates
                    </Link>
                </div>
                <div className="flex flex-col gap-[10px] ml-[20px]">
                    <Link href="/categories/flush-door"  className="text-sm">
                        Flush Door
                    </Link>
                    <Link href="/categories/mdf"  className="text-sm">
                        MDF
                    </Link>
                </div>

             </div>
            
            </div>
            <div className="flex flex-col  w-[200px] ml-[50px]">
                <h1 className="font-medium mb-[10px]">Address</h1>
                <div className="text-sm">
                    Krishna Timber and Plywood , 
                    831 A, Ward No. 8 , Mehrauli , New Delhi - 110030
                </div>
                <div className="mt-[10px] font-bold">+91-9899027343</div>
            </div>
            
        </div>
    )
}