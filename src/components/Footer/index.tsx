import Link from "next/link"
import logo from '../Images/krishna-timber-and-plywood-logo-zip-file/svg/logo-black.svg'
import Image from "next/image"
import phoneIcon from '../Images/icons8-call .gif';

export default function Footer(){
    return (
        <div className="flex flex-wrap bg-white gap-[30px] p-10 border border-t-grey w-[100%]">
            <div className="flex flex-col gap-[10px]">
            <Link href="/" className="flex text-black font-bold uppercase text-lg">
                <Image src={logo} style={{width: '60px' , height:'60px',borderRadius:'50%', border: '1px solid grey'}} alt={"Krishna Timber and Plywood | Plywood store "}/>
            </Link>
            <h1 className="font-medium">Krishna Timber and Plywood</h1>
            </div>
            
            <div className="flex flex-col gap-[10px]">
             <h1 className="text-lg font-medium  text-black">Menu</h1>   
             <div className="grid grid-cols-2 gap-3">
                    <Link href="/categories/plywood" className="text-sm">
                    Plywood
                    </Link>
                    <Link href="/categories/hdhmr" className="text-sm">
                        HDHMR
                    </Link>
                    <Link href="/categories/laminates"   className=" text-sm">
                        Sunmica Laminates
                    </Link>
            
                    <Link href="/categories/flush-door"  className="text-sm">
                        Flush Door
                    </Link>
                    <Link href="/categories/mdf"  className="text-sm">
                        MDF
                    </Link>
                    <Link href="/categories/veneers"  className="text-sm">
                        Veneers
                    </Link>
                    <Link href="/categories/mouldings"  className="text-sm">
                        Misc.
                    </Link>
             </div>
            
            </div>
            <div className="flex flex-col  w-[200px]">
                <h1 className="font-medium mb-[10px]">Address</h1>
                <div className="text-sm">
                    Krishna Timber and Plywood , 
                    831 A, Ward No. 8 , Mehrauli , New Delhi - 110030
                </div>
               
            </div>
            <Link target="_blank" href="tel:9899027343" className="flex gap-[5px] text-sm mt-[5px] mr-[20px] font-bold">
                     <Image
                        alt="Krishna Timber and Plywood Logo"
                        src={phoneIcon}
                        style={{ width:"30px" , height:"30px", color: 'white'}}
                    />
                    +91-9899027343
            </Link>
            
        </div>
    )
}