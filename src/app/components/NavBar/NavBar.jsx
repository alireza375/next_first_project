"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function NavBar() {
  const pathname = usePathname();
  console.log(pathname);
  if ( !pathname.includes('dashboard') ) {
    return (
      <div className='container mx-auto pt-10 w-full '>
          <nav className='flex justify-center '>
            <ul className='flex justify-between gap-6'>
              <Link className='font-bold bg-amber-200 rounded-sm px-4 py-2'  href={'/'}>Home</Link>
              <Link className='font-bold bg-amber-200 rounded-sm px-4 py-2' href={'/about'}>About</Link>
              <Link className='font-bold bg-amber-200 rounded-sm px-4 py-2' href={'/cities'}>Cities</Link>
              <Link className='font-bold bg-amber-200 rounded-sm px-4 py-2' href={'/properties'}>Properties</Link>
              <Link className='font-bold bg-amber-200 rounded-sm px-4 py-2' href={'/services'}>Service</Link>
              {/* <li>Home</li>
              <li>About</li>
              <li>Services</li> */}
            </ul>
          </nav>  
      </div>
    )
  } else {
    return <></>
  }
 
}
