import Image from 'next/image'
import React from 'react'

export default function page()  {
  return (
    <div className='container mx-auto'>
        <div className='pt-10 '>
            <h1 className='text-4xl font-bold'>Explore Cities</h1>
            <p className='pt-4 text-gray-400'>Explore cities unveils vibrant cultures, stunning architectural wonders, and captivating culinary delights. 
                Immerse yourself in diverse landscapes, vibrant communities, and culinary delights.</p>

            <div>
                <div className='pt-10 grid grid-cols-4 gap-4'>
                    <div className='col-span-2'>
                        <img src={'/images/city1.jpg'} height={400} alt=''/>
                    </div>
                    <div className=''>
                        <img src={'/images/city2.jpg'} height={400} alt=''/>
                    </div>
                    <div className=''>
                        <img src={'/images/city3.jpg'} height={400} alt=''/>
                    </div>
                </div>

                <div className='pt-10 grid grid-cols-4 gap-4'>
                    <div className=''>
                        <img src={'/images/city4.jpg'} height={400} alt=''/>
                    </div>
                    <div className=''>
                        <img src={'/images/city5.jpg'} height={400} alt=''/>
                    </div>
                    <div className='col-span-2'>
                        <img src={'/images/city6.jpg'} height={400} alt=''/>
                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

