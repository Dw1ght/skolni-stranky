import React from "react";
import Image from "next/image"
import Link from "next/link"

export function Navbar() {
    return (
        <div className='fixed w-full h-20 z-[100] flex'>
            <nav className="flex">
                <Image src="/assets/GK-logo.jpg" width={80} height={80} alt="/"></Image>
                <div className="flex fixed top-0 right-0 h-20 w-40 justify-center bg-slate-400">
                    <img src="/assets/menu-icon.svg" width={30}/>
                    <div className="flex items-center">
                        <p className="pl-5 text-2xl pb-1">MENU</p>
                    </div>
                    
                    
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar;