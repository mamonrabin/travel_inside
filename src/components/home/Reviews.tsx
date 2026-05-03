"use client";
import SectionHead from "@/src/share/SectionHead";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import TeamCard from "@/src/cards/TeamCard";
import { teamList } from "@/src/api/teamApi";
import { reviewLast } from "@/src/api/reviewApi";
import ReviewCard from "@/src/cards/ReviewCard";
const Reviews = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="Container md:mt-10 mt-6 pb-10">
      <SectionHead
        title="গ্রাহকদের রিভিউ"
        description="গ্রাহকদের আমাদের সাথে থাকার প্রতিক্রিয়া দেখুন"
      />
      <div>
        <div className="relative md:mt-4 mt-2">
          <Swiper
            slidesPerView={1}
            spaceBetween={8}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              700: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
              1536: { slidesPerView: 3 },
            }}
            modules={[Autoplay, Pagination]}
            speed={800}
            pagination={{ el: ".custom-pagination3", clickable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {reviewLast?.map((item) => (
              <SwiperSlide key={item.id} className="">
                <ReviewCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination3  flex justify-center gap-1 z-20 relative md:top-5! top-6!"></div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
