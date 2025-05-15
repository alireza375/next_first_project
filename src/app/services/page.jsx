import Link from 'next/link'
import React from 'react'

export default function page() {
    const data = [
        {
            "_id": "1a2b3c4d5e",
            "service_name": "Web Development",
            "service_image": `/images/web.jpg`,
            "service_description": "Professional web development services, including front-end and back-end development."
        },
        {
            "_id": "6f7g8h9i0j",
            "service_name": "Graphic Design",
            "service_image": "/images/images.png",
            "service_description": "Creative graphic design solutions for branding, marketing, and digital presence."
        },
        {
            "_id": "a1b2c3d4e5",
            "service_name": "SEO Optimization",
            "service_image": "/images/images.jpg",
            "service_description": "Boost your website's visibility and search rankings with our SEO optimization services."
        },
        {
            "_id": "f6g7h8i9j0",
            "service_name": "Digital Marketing",
            "service_image": "/images/npl.jpg",
            "service_description": "Comprehensive digital marketing strategies to increase brand awareness and sales."
        },
        {
            "_id": "k1l2m3n4o5",
            "service_name": "Mobile App Development",
            "service_image": "/images/web_ser.jpg",
            "service_description": "Custom mobile app development for Android and iOS platforms."
        }
    ]
          
  return (
    <div className='container mx-auto'>
      <p className='text-3xl font-bold'>This is Services page</p>
      <div  className='flex '>
        {
            data.map((item) => (
                <div key={item._id} className='bg-slate-300 p-2 rounded-2xl m-2'>
                    <Link href={`/services/${item._id}`}>
                        <img className='rounded-2xl' src={item.service_image} alt={item.service_name} />
                    </Link>
                    <h1>{item.service_name}</h1>
                    <p>{item.service_description}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}




