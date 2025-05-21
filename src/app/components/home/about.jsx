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

        <div className="md:flex flex-col w-1/2">
          <div className="grid grid-cols-2 gap-6 p-2">
              <div className='flex w-[500px]'>
                <Image
                  src={about[0].image1}
                  alt="Image 1"
                  width={500}
                  height={270}
                  className="object-cover rounded-xl"
                />
              </div>
              <div className='flex justify-end'>
                <Image
                  src={about[0].image2}
                  alt="Image 2"
                  width={228}
                  height={270}
                  className="object-cover rounded-lg"
                />
              </div>
          </div>

          <div className="flex gap-6 mt-4 ">
            <div className='flex flex-col'>
              <Image
                src={about[0].image3}
                alt="Image 3"
                width={380}
                height={270}
                className="object-cover rounded-xl"
              />
            </div>
            <div className='flex flex-cols justify-end'>
              <Image
                src={about[0].image4}
                alt="Image 4"
                width={355}
                height={270}
                className="h-[200px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div> 

        <div className='flex-1 flex-col w-1/2 pl-4 justify-between pt-20'
          backgroundImage={ 'url("/images/Bg.png")' }
          backgroundSize="cover"
        >
          <h2 className="mb-8 font-bold leading-tight text-gray-900">
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