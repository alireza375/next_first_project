"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";






const PropertyCard = ({  }) => {
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
    }
 ]


  return (
    <div className="px-5 grid grid-cols-3 gap-4">
        {properties.map((item, index) => (
            <div key={index} className="w-[475px] h-[570px] rounded-2xl border border-gray-300 overflow-hidden p-3">
                <Link href={item?.link || "#"} className="block w-full h-[400px] relative mb-2">
                    <Image
                    src={item?.image ?? "/defaultimg.png"}
                    alt={item?.title ?? "Property"}
                    width={424}
                    height={404}
                    className="object-cover w-full h-full rounded-2xl"
                    />
                </Link>

                <div className="px-4 rounded-2xl bg-[#ebfffd] pt-6 pb-2">
                    <h2 className="text-2xl font-semibold text-textMain truncate mb-2">
                    {item?.title}
                    </h2>

                    <p className="text-lg text-textMain/70 truncate mb-3">
                    <CiLocationOn className="inline-block mr-2 text-textMain" />
                    {item?.address}
                    </p>

                    <div className="grid grid-cols-3 text-sm font-medium text-textMain gap-2 m-2">
                        <div className="flex items-center gap-2">
                            🛏 {item?.details?.beds} beds
                        </div>
                        <div className="flex items-center gap-2">
                            🛁 {item?.details?.baths} baths
                        </div>
                        <div className="flex items-center gap-2">
                            📐 {item?.details?.area} sqft
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>

  );
};

export default PropertyCard;
