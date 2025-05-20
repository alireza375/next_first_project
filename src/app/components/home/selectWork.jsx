"use client"
import React, { useEffect, useState } from 'react'
import BasicBar from '../common/basicbar';
import WorkCard from '../common/work-card';
// import ServiceCard from '../common/service-card';

const SelectWork = () => {
//   const swiperRef = useRef(null);

 const works = [
    {  
        _id: "1",
        image: "/images/icon2.png",
        title: "Seaside Serenity Hill House",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    {  
        _id: "2",
        image: "/images/icon1.png",
        title: "Seaside Serenity Hill House",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    {
      _id: "3",
      image: "/images/icon3.png",
      title: "Mountain View Cabin",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
 ]

  const [filterData, setFilterData] = useState(works);

  useEffect(() => {
    setFilterData(works);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="mx-auto text-center">
        <BasicBar
          title="How it Works"
          description="A great platform to buy, sell and rent your properties without any agent or commissions."
        />
        <div className="flex flex-wrap justify-center mt-6 md:mt-8 lg:mt-10">
          {filterData?.length > 0 ? (
            <>
                {filterData.map((work) => (
                  <div key={work._id}>
                    <WorkCard data={work} />
                  </div>
                ))}
            </>
          ) : (
            <Empty description="No work found" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectWork;
