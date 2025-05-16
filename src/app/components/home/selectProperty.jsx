"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropertyCard from "./property-card";
import { Spin, Empty } from "antd";
import BasicBar from "../common/basicbar";

const selectProperty = () => {

    const category = [
      {
        _id: "All",
        name: "All",
      },
      {
        _id: "Sedan",
        name: "Sedan",
      },
      {
        _id: "Hatchback",
        name: "Hatchback",
      }
    ]

  return (
    <div className="container mx-auto grid grid-cols-3">
      <div className="mx-auto text-center">
        <BasicBar
          title="Choose The Car You Need"
          description="Choose the perfect car for your lifestyle—fuel-efficient, stylish, reliable, and comfortable. Explore our wide range of trusted models today."
        />
        <div className="flex flex-row flex-wrap items-center justify-center gap-2  sm:gap-4 lg:mt-10 md:mt-8 mt-6">
          <div
            onClick={() => setTabActive("All")}
            className={`cursor-pointer px-2 py-1 sm:px-4 sm:py-2 rounded-lg border text-sm sm:text-base ${tabActive === "All"
              ? "bg-[#ED5B1C] text-white"
              : "bg-white text-[#0B0A0A] border-gray-300"
              }`}
          >
            All
          </div>
          {category?.map((item) => (
            <div
              key={item._id}
              onClick={() => setTabActive(item._id)}
              className={`cursor-pointer px-2 py-1 sm:px-4 sm:py-2 rounded-lg border text-sm sm:text-base ${tabActive === item._id
                ? "bg-[#ED5B1C] text-white"
                : "bg-white text-[#0B0A0A] border-gray-300"
                }`}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className="lg:mt-10 md:mt-8 mt-6">
          {filterData?.length > 0 ? (
            <>
              <Swiper
                loop={true}
                // onSwiper={(swiper) => {
                //   swiperRef.current = swiper;
                // }}
                breakpoints={{
                  0: {
                    spaceBetween: 10,
                    slidesPerView: 1,
                  },
                  640: {
                    spaceBetween: 16,
                    slidesPerView: 2,
                  },
                  768: {
                    spaceBetween: 24,
                    slidesPerView: 2,
                  },
                  1024: {
                    spaceBetween: 24,
                    slidesPerView: 3,
                  },
                  1440: {
                    spaceBetween: 24,
                    slidesPerView: 4,
                  },
                }}
                className="mySwiper !py-2"
              >
                {filterData?.map((property, index) => (
                  <SwiperSlide key={property._id || index}>
                    <PropertyCard data={property} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          ) : (
            <Empty description="No property found" />
          )}
        </div>
      </div>
    </div>
  );
};

export default selectProperty;
