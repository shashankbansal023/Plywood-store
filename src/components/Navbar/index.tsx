"use client"
import Link from "next/link"
// import plyLogo from '../Images/plywood-logo.jpeg';
import Image from "next/image";
// import KrishnaPlywoodLogo from '../Images/krishna-logo.png';
// import whitePhone from '../Images/ph.png';
import logo from '../Images/krishna-timber-and-plywood-logo-zip-file/svg/logo-black.svg'
import phoneIcon from '../Images/icons8-call .gif';
import menuIcon from '../Images/menu-icon.png';
import crossIcon from '../Images/cross.png';
import { useState } from "react";

export default function Navbar() {
   
    const [isMenuOpen , setMenuOpen] = useState(false);
    return (
        <section className="flex bg-white w-[100%] p-[10px] items-center border border-b-[1px] border-grey">
            <nav className="flex justify-between w-[100%]">
            <div className="flex items-center">
                 <Link href="/" className="flex items-center text-black font-bold">
                    <Image
                        alt="Krishna Timber and Plywood Logo"
                        src={logo}
                        style={{ width: '60px', height: '60px' , borderRadius: '50%' , border:'1px solid grey'}}
                    />
                   <span className="hidden md:flex text-black ml-[15px] text-[15px]">Krishna Timber and Plywood</span>
                  </Link>
            </div>
            <section className="hidden md:flex gap-[10px] text-black items-center">
            <Link href="tel:9899027343" className="flex gap-[5px] text-sm mt-[5px] mr-[20px] font-bold">
                     <Image
                        alt="Krishna Timber and Plywood Logo"
                        src={phoneIcon}
                        style={{ width:"30px" , height:"30px", color: 'white'}}
                    />
                    +91-9899027343
            </Link>
            <Link href="/categories/plywood" className=" text-sm">Plywood</Link>
            <Link href="/categories/hdhmr" className=" text-sm">HDHMR</Link>
            <Link href="/categories/veneers" className=" text-sm">Veneers</Link>
            <Link href="/categories/flush-door" className=" text-sm">Flush Door</Link>
            <Link href="/categories/mdf" className="text-sm">MDF</Link>
            <Link href="/categories/adhesives" className=" text-sm">Adhesives</Link>
            </section>
            <section className="flex items-center md:hidden">
                <div className="flex items-center">
                <Link target="_blank" href="tel:9899027343" className="flex gap-[5px] text-sm mt-[5px] mr-[20px] font-bold">
                     <Image
                        alt="Krishna Timber and Plywood Logo"
                        src={phoneIcon}
                        style={{ width:"30px" , height:"30px", color: 'white'}}
                    />
                    9899027343
                </Link>
                <Link href="" className="flex gap-[5px] text-sm mt-[5px] mr-[20px] font-bold" onClick={() => setMenuOpen(true)}>
                     <Image
                        alt="Menu Icon"
                        src={menuIcon}
                        style={{ width:"30px" , height:"30px", color: 'white'}}
                    />
                </Link>
                </div>
                <div className={`flex flex-col items-center justify-center gap-2 bg-white absolute top-0 left-0 w-[100%] h-[100vh] z-30 ${!isMenuOpen ?'hidden' : 'overflow-hidden'}`}>
                    <button className="flex gap-[5px] text-sm mt-[5px] mr-[20px] top-2 right-2 absolute font-bold" onClick={() => setMenuOpen(false)}>
                        <Image
                            alt="Menu Icon"
                            src={crossIcon}
                            style={{ width:"30px" , height:"30px", color: 'white'}}
                        />
                    </button>
                    <Link href="/categories/plywood" className="text-lg uppercase font-medium">Plywood</Link>
                    <Link href="/categories/hdhmr" className=" text-lg uppercase font-medium">HDHMR</Link>
                    <Link href="/categories/veneers" className=" text-lg uppercase font-medium">Veneers</Link>
                    <Link href="/categories/flush-door" className=" text-lg uppercase font-medium">Flush Door</Link>
                    <Link href="/categories/mdf" className="text-lg uppercase font-medium">MDF</Link>
                    <Link href="/categories/adhesives" className=" text-lg uppercase font-medium">Adhesives</Link>
                </div>
            </section>
            </nav>
        </section>
        
    )
}