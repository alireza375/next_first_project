import Banner from '@/app/components/common/banner'
import SelectCProperty from '@/app/components/home/selectProperty'
import React from 'react'

export default function page() {
  return (
       <div className='pt-10 '>
        <Banner title={"Properties"}/>
        <SelectCProperty />
        {/* <PropertyCard /> */}
       </div>
  )
}

