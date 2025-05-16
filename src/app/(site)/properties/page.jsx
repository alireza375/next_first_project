import PropertyCard from '@/app/components/common/property-card'
import React from 'react'

export default function page() {
  return (
    <div className='container mx-auto'> 
       <div className='pt-10 '>
        <p className='text-3xl font-bold'>This is Properties Page</p>
        {/* <selectProperty /> */}
        <PropertyCard/>
       </div>
    </div>
  )
}

