import Image from 'next/image'
import React from 'react'

export default function page()  {
  return (
    <div className='container mx-auto justify-center'>
        <div className='pt-10 '>
           <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold text-gray-900">Explore Cities</h2>
                    <p className="text-gray-500 mt-2">
                    Exploring cities unveils vibrant cultures, stunning architecture, and unique histories.
                    <span className="hidden md:inline"> Wander through bustling streets, savor local flavors, and discover hidden gems that tell the story of each urban landscape.</span>
                    </p>
                </div>

                <div className="mt-6 md:mt-0 md:flex-cols flex items-center">
                    <a href="#" className="text-sm font-semibold text-black flex items-center gap-1">
                    View all city
                    <span className="text-lg">→</span>
                    </a>
                </div>
            </div>
            <div className=''>
                <div className=' pt-10'>
                    <div className='flex gap-5'>
                        <div className="relative w-[800px] h-[300px] rounded-xl overflow-hidden">
                            <img src="/images/city1.jpg" alt="New York" className="w-full h-full object-cover" />
                            <div className="w-[200px] absolute top-5 left-5 bg-white/20 backdrop-blur-sm text-white p-3 rounded-[8px]">
                                <p className="text-sm">8 Properties</p>
                                <h3 className="text-lg font-normal">New York</h3>
                            </div>
                        </div>

                        <div className="relative w-[350px] h-[300px] rounded-xl overflow-hidden">
                            <img src="/images/city2.jpg" alt="San Diego" className="w-full h-full object-cover" />
                            <div className="w-[200px] absolute top-5 left-5 bg-white/20 backdrop-blur-sm text-white p-3 rounded-[8px]">
                                <p className="text-sm">8 Properties</p>
                                <h3 className="text-lg font-normal">San Diego</h3>
                            </div>
                        </div>
                        
                        <div className="relative w-[350px] h-[300px] rounded-xl overflow-hidden">
                            <img src="/images/city4.jpg" alt="San Diego" className="w-full h-full object-cover" />
                            <div className="w-[200px] absolute top-5 left-5 bg-white/20 backdrop-blur-sm text-white p-3 rounded-[8px]">
                                <p className="text-sm">8 Properties</p>
                                <h3 className="text-lg font-normal">San Diego</h3>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-5 pt-5'>
                        <div className="relative w-[350px] h-[300px] rounded-xl overflow-hidden">
                            <img src="/images/city3.jpg" alt="New York" className="w-full h-full object-cover" />
                            <div className="w-[200px] absolute top-5 left-5 bg-white/20 backdrop-blur-sm text-white p-3 rounded-[8px]">
                                <p className="text-sm">8 Properties</p>
                                <h3 className="text-lg font-normal">New York</h3>
                            </div>
                        </div>

                        <div className="relative w-[350px] h-[300px] rounded-xl overflow-hidden">
                            <img src="/images/city5.jpg" alt="San Diego" className="w-full h-full object-cover" />
                            <div className="w-[200px] absolute top-5 left-5 bg-white/20 backdrop-blur-sm text-white p-3 rounded-[8px]">
                                <p className="text-sm">8 Properties</p>
                                <h3 className="text-lg font-normal">San Diego</h3>
                            </div>
                        </div>
                        
                        <div className="relative w-[800px] h-[300px] rounded-xl overflow-hidden">
                            <img src="/images/city6.jpg" alt="San Diego" className="w-full h-full object-cover" />
                            <div className="w-[200px] absolute top-5 left-5 bg-white/20 backdrop-blur-sm text-white p-3 rounded-[8px]">
                                <p className="text-sm">8 Properties</p>
                                <h3 className="text-lg font-normal">San Diego</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

