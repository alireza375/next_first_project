"use client";
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function page() {
  const router = useRouter();

  // If I set the value "true" it will redirect me to the address page
  // If I set the value "false" it will redirect me to the home page
  const isLoggedIn = false;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push('/about/address');
    } else {
      router.push('/');
    }
  }

  return (
    <div className='container mx-auto'>
      <p className='text-3xl font-bold'>This is About page</p>
      {/* <Link href={'/about/address'}>Address</Link> */}
      <button className='font-bold bg-amber-300 rounded-2xl p-2' type='button' onClick={handleNavigation}>Address</button>
    </div>
  )
}
