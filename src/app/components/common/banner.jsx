"use client";
import React from "react";
import Link from "next/link";

const Banner = ({ title }) => {
  return (
     <div
      style={{
        backgroundImage: "url('/images/banner.png')",
        backgroundSize: "cover",
      }}
      className="min-h-fit sm:h-[150px]  lg:h-[200px] h-[150px] work-sans text-black mb-10 shadow-xl"
    >
      <div className="container mx-auto flex">
        <div className="flex flex-col font-openSans justify-center items-start pl-10 pt-8">
          <h2 className="header-1 md:text-[40px] text-[30px] font-semibold">{(title)}</h2>
          <p className="text-[16px] flex gap-2 font-medium md:text-lg md:mt-2">
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
