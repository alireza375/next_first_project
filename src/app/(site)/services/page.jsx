import React from 'react'
import SelectService from '@/app/components/home/selectService'
import ServiceCard from '@/app/components/common/service-card'

export default function page() {
  return (
    <div className='container mx-auto'> 
       <div className='pt-10 '>
        <SelectService />
       </div>
    </div>
  )
}

