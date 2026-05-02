"use client";
import SectionHead from "@/src/share/SectionHead";
import { Swiper, SwiperSlide } from "swiper/react";
import { stpeList } from "@/src/api/workStepApi";
import StepCard from "@/src/cards/StepCard";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
const WorkStep = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="Container md:mt-10 mt-4 pb-10">
      <SectionHead
        title="কাজের ধাপ"
        description="মাত্র ৪টি সহজ ধাপে আপনার ভ্রমণ বুক করুন এবং আপনার যাত্রা শুরু করুন।"
      />

      <div>
        <div className="relative md:mt-6 mt-2">
          <Swiper
            slidesPerView={2}
            spaceBetween={8}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              700: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 4 },
              1536: { slidesPerView: 4 },
            }}
            modules={[Autoplay, Pagination]}
            speed={800}
            pagination={{ el: ".custom-pagination2", clickable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {stpeList?.map((item, index) => (
              <SwiperSlide key={item.id} className="">
                <StepCard item={item} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination2  flex justify-center gap-2 z-20 relative md:top-5! top-6!"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkStep;
