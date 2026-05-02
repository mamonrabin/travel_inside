"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { bannerList } from "@/src/api/bannerApi";

const Banner = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative text-white overflow-hidden">
      <Swiper
        slidesPerView={1}
        loop={true}
        modules={[Autoplay, Pagination]}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        speed={800}
        pagination={{ el: ".custom-pagination", clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {bannerList?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-140 w-full">
              <Image
                src={item.image}
                alt={`Banner ${item.id}`}
                width={1920}
                height={600}
                className="w-full h-full object-cover"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Optional Content */}
              <div className="absolute inset-0 flex items-center flex-col justify-center z-10 px-8">
                <p className="font-bold text-base py-2">{item.subTitle}</p>
                <h2 className="text-white text-center md:text-7xl text-5xl font-bold md:w-110 mt-2">
                  {item.title}
                </h2>
                <p className="text-lg md:w-150 text-center mt-4">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center justify-center gap-6">
                  <button
                    className="relative overflow-hidden z-10 inline-flex items-center gap-2 
  bg-[#55BEEF] text-white text-base font-medium px-6 py-3 rounded-md 
  transition-all duration-500 hover:text-white group cursor-pointer"
                  >
                    <span className="relative z-10"> এখনই বুক করুন</span>

                    <span className="transform group-hover:translate-x-1 relative z-10 transition duration-300">
                      →
                    </span>

                    {/* Hover Background Effect */}
                    <span
                      className="absolute inset-0 bg-[#0f9ed8] scale-x-0 origin-left 
    transition-transform duration-500 group-hover:scale-x-100 z-0"
                    ></span>
                  </button>

                  <button className="hover:text-[#55BEEF] duration-300 cursor-pointer">আরও জানুন</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-pagination  flex justify-center gap-2 z-20 relative top-20"></div>

      {/* Custom Styles */}
    </div>
  );
};

export default Banner;
