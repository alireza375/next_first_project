import Link from 'next/link';
import React from 'react'

export default function ServiceDetailsPage({params}) {
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

    const id = params?._id; 


    const singleData = data.find((item) => item._id === id);
  return (
        <div className=''>
            <h1>Service Details Page</h1>
            <p>ID: {id}</p>
            <img src={singleData.service_image} alt="Service" />
            <p>Service Name: {singleData.service_name}</p>

            <div>
                <Link className='font-bold bg-amber-300 rounded-2xl p-2' href={'/services'}>Back to Services</Link>
            </div>
        </div>
  )
}
