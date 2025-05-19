"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Empty } from "antd";
import BasicBar from "../common/basicbar";
import PropertyCard from "../common/property-card";

const SelectProperty = () => {
  const swiperRef = useRef(null);
  const [tabActive, setTabActive] = useState("All, Sale, Rent");

  const properties = [
    {
      _id: "1",
      image: "/images/city1.jpg",
      price: 255000,
      title: "Seaside Serenity Hill House",
      address: "4330 Bell Shoals Rd",
      details: {
        beds: 7,
        baths: 4,
        area: "1200",
      },
    },
    {
      _id: "2",
      image: "/images/city2.jpg",
      price: 255000,
      title: "Urban Oasis Apartment",
      address: "2893 Lakeview Dr",
      details: {
        beds: 5,
        baths: 3,
        area: "950",
      },
    },
    {
      _id: "3",
      image: "/images/city3.jpg",
      price: 255000,
      title: "Mountain View Cabin",
      address: "8127 Sunset Blvd",
      details: {
        beds: 4,
        baths: 2,
        area: "1350",
      },
    },
     {
      _id: "4",
      image: "/images/city6.jpg",
      price: 255000,
      title: "Mountain View Cabin",
      address: "8127 Sunset Blvd",
      details: {
        beds: 4,
        baths: 2,
        area: "1350",
      },
    },
     
  ];

  const [filterData, setFilterData] = useState(properties);

  useEffect(() => {
    setFilterData(properties);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="mx-auto text-center">
        <BasicBar
          title="Featured Properties"
          description="These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories."
        />

        {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-6 md:mt-8 lg:mt-10">
            {/* All Tab */}
            <div
              onClick={() => {
                setTabActive("All");
                setFilterData(properties);
              }}
              className={`cursor-pointer px-4 py-2 rounded-lg border text-base ${
                tabActive === "All"
                  ? "bg-[#4cac40] text-white"
                  : "bg-white text-[#0B0A0A] border-gray-300"
              }`}
            >
              All
            </div>

            {/* For Sale Tab */}
            <div
              onClick={() => {
                setTabActive("Sale");
                setFilterData(properties);
              }}
              className={`cursor-pointer px-4 py-2 rounded-lg border text-base ${
                tabActive === "Sale"
                  ? "bg-[#4cac40] text-white"
                  : "bg-white text-[#0B0A0A] border-gray-300"
              }`}
            >
              For Sale
            </div>

            {/* For Rent Tab */}
            <div
              onClick={() => {
                setTabActive("Rent");
                setFilterData(properties);
              }}
              className={`cursor-pointer px-4 py-2 rounded-lg border text-base ${
                tabActive === "Rent"
                  ? "bg-[#4cac40] text-white"
                  : "bg-white text-[#0B0A0A] border-gray-300"
              }`}
            >
              For Rent
            </div>
          </div>


        {/* Swiper Carousel */}
        <div className="mt-6 md:mt-8 lg:mt-10">
          {filterData?.length > 0 ? (
            <>
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                loop={true}
                navigation={false}
                pagination={false}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                  1440: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                }}
                className="!py-2"
              >
                {filterData.map((property) => (
                  <SwiperSlide key={property._id}>
                    <PropertyCard data={property} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Arrows */}
              <div className="flex justify-center pt-6 sm:pt-10 gap-6">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="group border border-[#A2A8AF] w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] bg-white rounded-[4px] hover:border-white hover:bg-primary transition duration-500 flex items-center justify-center"
                >
                  <IoMdArrowBack className="text-[#A2A8AF] group-hover:text-white transition duration-500" />
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="group border border-[#A2A8AF] w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] bg-white rounded-[4px] hover:border-white hover:bg-primary transition duration-500 flex items-center justify-center"
                >
                  <IoMdArrowForward className="text-[#A2A8AF] group-hover:text-white transition duration-500" />
                </button>
              </div>
            </>
          ) : (
            <Empty description="No properties found" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectProperty;
