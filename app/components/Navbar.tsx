import React from 'react'
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <div className='flex flex-row px-10 py-5 items-center justify-between bg-[#040812] text-white font-bold sticky top-0 z-50' >
         <Image src="/logo.png" alt="logo" width={800} height={800}  /> 
    
      <div className='flex flex-row gap-10 items-center justify-center text-[18px] font-medium'>
          <a href="#about">About</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
      </div>
    </div>
    </div>
  ) 
}
