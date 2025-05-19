"use client";
import React from "react";
import Link from "next/link";

const Banner = ({ title }) => {
  return (
     <div
      style={{
        backgroundImage: "url('/images/city1.jpg')",
        backgroundSize: "cover",
      }}
      className=" min-h-fit sm:h-[200px]  lg:h-[258px] h-[130px] work-sans text-white mb-10"
    >
      <div className="bg-black bg-opacity-[50%] h-full ">
        <div className="flex flex-col justify-center h-full text-center font-openSans">
          <h2 className="header-1 md:text-[40px] text-[30px] font-semibold">{(title)}</h2>
          <p className="text-[16px] flex justify-center gap-2 font-medium md:text-lg md:mt-2">
            <Link href="/">
              {('Home')} <span className=" text-primary">/</span>
            </Link>{" "}
            <span className="text-primary">{(title)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
