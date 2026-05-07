"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { bannerList } from "@/src/api/bannerApi";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative text-white overflow-hidden">
      <Swiper
        slidesPerView={1}
        loop={true}
        modules={[Autoplay, Pagination]}
        speed={800}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        pagination={{ el: ".custom-pagination", clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {bannerList?.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-150 w-full">
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

              {/* Animated Content */}
              <div className="absolute inset-0 flex items-center flex-col justify-center z-10 px-8">
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 80 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.8 }}
                      className="flex flex-col items-center"
                    >
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-bold text-base py-2"
                      >
                        {item.subTitle}
                      </motion.p>

                      <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-white text-center md:text-7xl text-5xl font-bold md:w-112.5 mt-2"
                      >
                        {item.title}
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg md:w-162.5 text-center mt-4"
                      >
                        {item.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-8 flex items-center justify-center gap-6"
                      >
                        <Link href="/tour">
                          <button className="relative overflow-hidden z-10 inline-flex items-center gap-2 bg-[#55BEEF] text-white text-base font-medium px-6 py-3 rounded-md transition-all duration-500 hover:text-white group cursor-pointer">
                            <span className="relative z-10">
                              এখনই বুক করুন
                            </span>

                            <span className="transform group-hover:translate-x-1 relative z-10 transition duration-300">
                              →
                            </span>

                            <span className="absolute inset-0 bg-[#0f9ed8] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0"></span>
                          </button>
                        </Link>

                        <Link href="/about">
                          <button className="hover:text-[#55BEEF] duration-300 cursor-pointer">
                            আরও জানুন
                          </button>
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="custom-pagination flex justify-center gap-2 z-20 relative -mt-10"></div>
    </div>
  );
};

export default Banner;