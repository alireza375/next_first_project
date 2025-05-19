"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn, CiSquareAlert} from "react-icons/ci";


const ServiceCard = ({ data }) => {
//  const services = [
//     {  
//         _id: "1",
//         image: "/images/icon4.png",
//         title: "Seaside Serenity Hill House",
//         description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        
//     },
//        {  
//         _id: "2",
//         image: "/images/icon5.png",
//         title: "Seaside Serenity Hill House",
//         description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        
//     },
//     {
//       _id: "3",
//       image: "/images/icon6.png",
//       title: "Mountain View Cabin",
//       description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },
//  ]
return (


    <div className="flex p-4 w-full mt-4">
        <div className="flex flex-col p-3 w-full max-w-[400px] overflow-hidden transition-shadow duration-300 hover:shadow-xl rounded-2xl">
            <Link href={data?.link || "#"} className="block w-full mb-2">
                <Image
                src={data?.image ?? "/defaultimg.png"}
                alt={data?.title ?? "Service Image"}
                width={330}
                height={200}
                className="object-center transition-transform duration-300 hover:scale-105"
                />
            </Link>

            <div className="px-3 py-3 mt-4">
                <h2 className="mb-3 text-xl font-semibold">{data?.title}</h2>
                <p className="mb-4 text-base text-gray-400 text-textMain/70 ">{data?.description}</p>

                <button className="px-5 py-2 text-sm text-white bg-[#4cac40] rounded-xl hover:bg-white hover:text-[#4cac40] border-1">
                    Place an Ad
                </button>
            </div>
        </div>
    </div>

  );

};

export default ServiceCard;
