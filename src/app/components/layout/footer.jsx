"use client";
import React from "react";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";
import { BsSend } from "react-icons/bs";
import { FaApple, FaGooglePlay } from "react-icons/fa";


import Link from "next/link";

import Image from "next/image";

const Footer = () => {

  // const [form] = Form.useForm();
  const icons = [
    { icon: <GrFacebookOption />, link: "/public/images/facebook.png"},
    { icon: <GrTwitter />, link: "/public/images/twitter.png"},
    { icon: <GrInstagram />, link: "/public/images/instagram.png"}, 
    {
      icon: <SiWhatsapp />, 
      link: "/public/images/whatsapp.png",
    },
  ];

  return (
    <div className="relative py-2 inset-0 bg-[#125767] bg-opacity-40 mt-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Bg.png')",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto relative z-10 text-white flex">
        {/* Add your content here */}
        <div className="flex flex-col h-auto gap-8 px-4 py-4 mx-auto">
        {/* Newsletter Section */}
        <div className="flex flex-col py-4 md:flex-row md:gap-0">
          {/* Logo */}
          <div className="w-full md:w-[35%]">
            {(
              <Image
                src={'/images/logo.png'}
                alt="roofstick Logo"
                width={100}
                height={60}
                // className="w-[120px] md:w-[100px] lg:w-[125px] h-[40px] md:h-[50px] lg:h-[56px]"
              />
            )}
          </div>
          <div className="flex-1 gap-4 mt-4 md:mt-2">
            <div className="flex items-center gap-4 flex-wrap justify-end">
              <h3 className="font-bold text-white font-lora md:text-xl whitespace-nowrap">
                Follow Us
              </h3>
              <ul className="flex gap-3 text-white">
                {icons.map(
                  (icon, index) =>
                    icon.link && (
                      <li key={index}>
                        <Link
                          href={icon.link}
                          target="_blank"
                          className="flex items-center justify-center w-8 h-8 transition-colors duration-300 rounded-full text-bold bg-[#4CAC40] text-white hover:bg-white hover:text-[#4CAC40]"
                        >
                          {icon.icon}
                        </Link>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>

        </div>
        <hr className="h-px bg-[#E8EAE8] border-0 dark:bg-white-700 w-full mx-auto" />

        <div className="flex flex-col lg:flex-row md:gap-8 ">
          {/* Subscription Section */}
          <div className="w-full md:w-[30%]">
            <h3 className="gap-0 text-lg font-medium text-white font-lora md:text-xl xl:text-2xl mb-5">
              Subscribe to our Newsletter
            </h3>
           <form className="bg-white rounded-lg relative">
              <div className="mb-4">
                <input
                  className="shadow appearance-none border w-full h-[50px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="example@gmail.com"
                />
                
              </div>
             <BsSend
                className="absolute top-2 right-2 w-8 h-8 flex
                      rounded-full bg-[#125767] text-white transition-colors duration-300 
                        hover:bg-white hover:text-[#125767] hover:border-1"
                  />

            </form>

            <p className="leading-6 text-white lg:leading-7 md:mt-8">
              Use securing confined his shutters. Delightful as he it acceptance
              an solicitude discretion.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap w-full md:w-[70%] sm:pl-5 md:mt-0 flex-col md:flex-row gap-8 lg:justify-between">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-medium text-white font-lora md:text-xl xl:text-2xl">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-2 mt-4 text-white md:mt-5">
                {/* <link><a href="/">Blogs</a></link> */}
                <li className="duration-500 hover:text-primary hover:underline">
                  <a href="/about">About Us</a>
                </li>
                <li className="duration-500 hover:text-primary hover:underline">
                  <a href="/contact">Contact Us</a>
                </li>
                <li className="duration-500 hover:text-primary hover:underline">
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li className="duration-500 hover:text-primary hover:underline">
                  <a href="/terms-condition">Terms & Conditions</a>
                </li>
              </ul>
            </div>

              {/* Contact Us */}
            <div>
              <h3 className="text-lg font-medium text-white font-lora md:text-xl xl:text-2xl">
                Contact Us
              </h3>
              <ul className="flex flex-col gap-2 mt-4 text-white md:mt-5">
                {/* <link><a href="/">Blogs</a></link> */}
                <li className="duration-500 hover:text-primary hover:underline">
                  <a href="/about">example@gmail.com <br/>
                                          (123) 456-7890</a>
                </li>
              </ul>
            </div>

            {/* Our address */}
            <div>
              <h3 className="gap-0 text-lg font-medium text-white font-lora md:text-xl xl:text-2xl">
                Our address
              </h3>
              <ul className="flex flex-col gap-2 mt-4 text-white md:mt-5">
                <li className="duration-500 hover:text-primary hover:underline">
                  <a href="/blog">50, KDA Outer Bypass Rd,<br/>Khulna 9100, Bangladesh

                                            </a>
                </li>
                
              </ul>
            </div>

            {/* Social Icons */}
            <div>
              <h3 className="text-lg font-medium text-white font-lora md:text-xl xl:text-2xl">
                Get the app
              </h3>
              <div className="flex flex-col gap-4 mt-5">
                  <button className="flex items-center gap-3 bg-[#4CAC40] hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg w-full">
                <FaApple size={24}/>
                <div className="border border-white h-[40px]"></div>
                <div className="text-left">
                  <p className="text-sm">Download on the</p>
                  <p className="text-lg font-bold">Apple Store</p>
                </div>
              </button>

              <button className="flex items-center gap-3 bg-[#4CAC40] hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg w-full">
                <FaGooglePlay size={24} />
                 <div className="border border-white h-[40px]"></div>
                <div className="text-left">
                  <p className="text-sm">Get in on</p>
                  <p className="text-lg font-bold">Google Play</p>
                </div>
              </button>
              </div>
             
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="h-px bg-[#E8EAE8] border-0 dark:bg-white-700 w-full mx-auto mt-6" />

        {/* Copyright */}
        <div className="flex justify-center px-4 py-4 text-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Appstick, all rights reserved.
          </p>
        </div>
      </div>
      </div>
    </div>

  );
};

export default Footer;