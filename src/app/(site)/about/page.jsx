import Image from 'next/image'
import React from 'react'
import About from '@/app/components/home/about'
import Banner from '@/app/components/common/banner'

export default function page()  {
  return (
    <div className='pt-10 '>
        <Banner title={"about"}/>
        <About />
        {/* <PropertyCard /> */}
       </div>
  )
}

