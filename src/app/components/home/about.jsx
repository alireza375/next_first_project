"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';


const AboutPage = () => {

//   const [ data, getData ] = useFetch(fetchAboutUs);
    const about = [
        {
            heading: "Planning & Designing Your Dream House",
            description: "As the complexity of buildings to increase, the field of architecture.",
            image1: "/images/image1.png",
            image2: "/images/image2.png",
            image3: "/images/image3.png",
            image4: "/images/image4.png",
            title: [
                "Planning & Designing Your Dream House",
                "Planning & Designing Your Dream House",
                "Planning & Designing Your Dream House",
            ]
        }
    ]


    const [filterData, setFilterData] = useState(about);

    useEffect(() => {
        setFilterData(about);
    }, []);

  
  return (
    <div className="container py-16 mx-auto">
      <div className="flex flex-col justify-between gap-4 md:flex-row">

        {/* <div className="hidden md:flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl">
                <Image
                    src="/images/image1.png"
                    alt="about image 1"
                    width={450}
                    height={270}
                    className="rounded-2xl object-cover w-full h-full"
                />
                </div>

                <div className="overflow-hidden rounded-2xl">
                <Image
                    src="/images/image2.png"
                    alt="about image 2"
                    width={208}
                    height={270}
                    className="rounded-2xl object-cover w-full h-full"
                />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="md:col-span-2 overflow-hidden rounded-2xl">
                <Image
                    src="/images/image3.png"
                    alt="about image 3"
                    width={364}
                    height={430}
                    className="rounded-2xl object-cover w-full h-full"
                />
                </div>

                <div className="overflow-hidden rounded-2xl">
                <Image
                    src="/images/image4.png"
                    alt="about image 4"
                    width={300}
                    height={340}
                    className="rounded-2xl object-cover w-full h-full"
                />
                </div>
            </div>
        </div>  */}

        <div className='flex-1 flex-col mt-10' >
          <h2 className="mb-8 text-5xl font-bold leading-tight text-gray-900">
            {(about.heading)}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {about?.map((item) => (
              <div key={item.id}>
                <h4 className="mb-2 text-lg font-semibold text-gray-800">{(item?.heading)}</h4>
                <p className="text-sm text-gray-600">
                {(item?.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default AboutPage;