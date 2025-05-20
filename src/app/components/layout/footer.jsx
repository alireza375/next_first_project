"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative py-2 inset-0 bg-[#125767] h-[550px] bg-opacity-40 mt-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Bg.png')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-white flex h-full">
        {/* Add your content here */}
        <h2 className="text-3xl font-bold">Footer Content</h2>
      </div>
    </div>

  );
};

export default Footer;