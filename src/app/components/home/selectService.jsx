"use client"
import React, { useEffect, useState } from 'react'
import BasicBar from '../common/basicbar';
import ServiceCard from '../common/service-card';

const SelectService = () => {
//   const swiperRef = useRef(null);

 const services = [
    {  
        _id: "1",
        image: "/images/icon6.png",
        title: "Seaside Serenity Hill House",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        
    },
       {  
        _id: "2",
        image: "/images/icon6.png",
        title: "Seaside Serenity Hill House",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        
    },
    {
      _id: "3",
      image: "/images/icon6.png",
      title: "Mountain View Cabin",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
 ]

  const [filterData, setFilterData] = useState(services);

  useEffect(() => {
    setFilterData(services);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="mx-auto text-center">
        <BasicBar
          title="Agent Provide service to help"
          description="Realtors offer expert assistance in navigating the real estate market, finding the right property within your budget. They also handle negotiations and paperwork, ensuring a smooth buying or selling process."
        />
        <div className="flex flex-wrap justify-center mt-6 md:mt-8 lg:mt-10">
          {filterData?.length > 0 ? (
            <>
                {filterData.map((service) => (
                  <div key={service._id}>
                    <ServiceCard data={service} />
                  </div>
                ))}
            </>
          ) : (
            <Empty description="No Services found" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectService;
