import React from 'react'

import Banner from '@/app/components/common/banner'
import SelectWork from '@/app/components/home/selectWork'

export default function page() {
  return (
    <div className='mx-auto'> 
       <div className='pt-10 '>
        <Banner title={"works"}/>
        <SelectWork />
       </div>
    </div>
  )
}

