import Image from 'next/image'
import React from 'react'
import SelectCity from '@/app/components/home/selectCity'
import Banner from '@/app/components/common/banner'

export default function page()  {
  return (
    <div className='pt-10 '>
        <Banner title={"Cities"}/>
        <SelectCity />
        {/* <PropertyCard /> */}
       </div>
  )
}

