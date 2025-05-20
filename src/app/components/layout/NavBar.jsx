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
              <Link className='font-bold bg-amber-200 rounded-sm px-4 py-2 hover:bg-[#4cac40] hover:text-white' href={'/about'}>About</Link>
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
                <div className="absolute right-0 top-0  bg-white  shadow-md mt-2 rounded w-48 z-50 ">
                  {subLists.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="block px-4 py-2 hover:bg-gray-100 text-sm"
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
