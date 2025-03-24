import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div>
        <nav className='flex justify-center'>
          <ul className='flex justify-between gap-6'>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/services'}>Services</Link>
            {/* <li>Home</li>
            <li>About</li>
            <li>Services</li> */}
          </ul>
        </nav>  
    </div>
  )
}
