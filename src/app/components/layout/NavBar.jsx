"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";


export default function NavBar() {

  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  const subLists = [
    { title: "Work", link: "/work" },
    { title: "About", link: "/about" },
    { title: "Gallery", link: "/gallery" },
    { title: "Contact", link: "/contact" },
    { title: "Privacy Policy", link: "/privacy-policy" },
    { title: "Terms & Conditions", link: "/terms-and-conditions" },
  ];

  if ( !pathname.includes('dashboard') ) {
    return (
      <div className='mx-auto py-8 w-full shadow-xl'>
          <nav className='flex justify-center relative'>
            <ul className='flex justify-between gap-6 '>
              <Link className='font-bold bg-amber-200 rounded-sm px-4 py-2 hover:bg-[#4cac40] hover:text-white'  href={'/'}>Home</Link>
              {/* <Link className='font-bold bg-amber-200 rounded-sm px-4 py-2 hover:bg-[#4cac40] hover:text-white' href={'/about'}>About</Link> */}
              <Link className='font-bold bg-amber-200 rounded-sm px-4 py-2 hover:bg-[#4cac40] hover:text-white' href={'/cities'}>Cities</Link>
              <Link className='font-bold bg-amber-200 rounded-sm px-4 py-2 hover:bg-[#4cac40] hover:text-white' href={'/properties'}>Properties</Link>
              <Link className='font-bold bg-amber-200 rounded-sm px-4 py-2 hover:bg-[#4cac40] hover:text-white' href={'/services'}>Service</Link>

             <button
                className="font-bold bg-amber-200 rounded-sm px-4 py-2 hover:bg-[#4cac40] hover:text-white "
                onClick={() => setShowMenu(!showMenu)}
              >
                More <IoIosArrowDown className="inline ml-2" />

              </button>

              {showMenu && (
                <div className="lg:hidden absolute lg:left-4 bg-gray-700 lg:!text-[#2b2b2b] h-[200px] overflow-y-auto  text-white font-lora rounded-lg z-50 p-3 hide-scrollbar">
                  {subLists.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="lg:px-4 lg:py-2 py-[2px] hover:bg-gray-200 leading-[25px] text-sm"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </ul>
          </nav>  
      </div>
    )
  } else {
    return <></>
  }
 
}
