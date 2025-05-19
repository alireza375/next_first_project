"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn, CiSquareAlert} from "react-icons/ci";
import { TbBed, TbBath} from "react-icons/tb";


const PropertyCard = ({ data }) => {
 const properties = [
    {  
        "_id": "For sale",
        "image": "/images/city1.jpg",
        "price": 255000,
        "title": "Seaside Serenity Hill House",
        "address": "4330 Bell Shoals Rd",
        "details": {
            "beds": 7,
            "baths": 4,
            "area": "1200"
        }
    },
        {  
        "_id": "2",
        "image": "/images/city2.jpg",
        "price": 255000,
        "title": "Seaside Serenity Hill House",
        "address": "4330 Bell Shoals Rd",
        "details": {
            "beds": 7,
            "baths": 4,
            "area": "1200"
        }
    },
        {  
        "_id": "3",
        "image": "/images/city3.jpg",
        "price": 255000,
        "title": "Seaside Serenity Hill House",
        "address": "4330 Bell Shoals Rd",
        "details": {
            "beds": 7,
            "baths": 4,
            "area": "1200"
        }
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
 ]
return (

    <div className="center mx-auto w-full ">
        <div className="relative w-full max-w-[425px] rounded-2xl border-2 border-gray-300 overflow-hidden p-2 hover:shadow-xl transition-shadow duration-300">
            <div className="absolute top-5 left-5 text-[#4cac40] bg-white  text-sm px-3 py-1 rounded-xl z-10 hover:bg-[#4cac40] hover:text-white">
                {"For rent" || "For sale"}
            </div>
            <Link
            href={data?.link || "#"}
            className="block w-full h-[280px] sm:h-[350px] relative mb-2"
            >
            <Image
            src={data?.image ?? "/defaultimg.png"}
            alt={data?.title ?? "Property"}
            width={424}
            height={350}
            className="object-cover w-full h-full rounded-2xl"
            />
                
            </Link>
            <div className="absolute bottom-25 flex justify-between items-center px-2 py-2 h-[153px] rounded-b-2xl">
                <Link
                    href="#"
                    className="relative flex items-center gap-2 bg-white/20 backdrop-blur-sm text-sm font-medium text-white px-4 py-2 rounded-full hover:bg-white/30 transition hover:text-[#4cac40] duration-300"
                >
                    Read more
                    <span className="flex items-center justify-center w-8 h-8 text-black bg-white rounded-full text-xl hover:text-white duration-300 hover:bg-[#4cac40]">
                    →
                    </span>
                </Link>

                <div className="pl-18 text-lg font-semibold text-white hover:text-[#4cac40] duration-300">
                    ${data?.price.toFixed(2)}
                </div>
            </div>



            <div className="bg-[#ebfffd] px-3 py-3 rounded-2xl">
                <h2 className="text-xl font-semibold truncate mb-3 flex items-center">
                {data?.title}
                </h2>

                <p className="text-base text-textMain/70 truncate mb-4 flex items-center">
                <CiLocationOn className="mr-2 text-lg" />
                {data?.address}
                </p>

                <div className="grid grid-cols-3 text-sm font-medium text-textMain gap-2 ">
                    <div className="flex items-center gap-1">
                        <TbBed className="mr-2 text-lg" />
                        {data?.details?.beds} Beds
                    </div>
                    <div className="flex items-center gap-1">
                        <TbBath className="mr-2 text-lg" />
                        {data?.details?.baths} Baths
                    </div>
                    <div className="flex items-center gap-1">
                        <CiSquareAlert className="mr-2 text-lg" />
                        {data?.details?.area} sqft
                    </div>
                </div>
            </div>
        </div>
    </div>
    
);

};

export default PropertyCard;
