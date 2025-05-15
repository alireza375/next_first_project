"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function NavBar() {
  const pathname = usePathname();
  console.log(pathname);
  if ( !pathname.includes('dashboard') ) {
    return (
      <div>
          <nav className='flex justify-center'>
            <ul className='flex justify-between gap-6'>
              <Link href={'/'}>Home</Link>
              <Link href={'/about'}>About</Link>
              <Link href={'/services'}>Services</Link>
              <Link href={'/cities'}>Cities</Link>
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
