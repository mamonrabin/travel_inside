"use client";

import { packageList } from "@/src/api/packageApi";
import PackageCard from "@/src/cards/PackageCard";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const TourPackage = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visiblePackages = packageList.slice(0, visibleCount);
  const hasMore = visibleCount < packageList.length;

  return (
    <div className="pb-10">
      {/* Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-3">
        {visiblePackages.map((items) => (
          <PackageCard key={items.id} items={items} />
        ))}
      </div>

      {/* Button */}
      {hasMore && (
        <div className="flex items-center justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="relative overflow-hidden z-10 flex items-center justify-center gap-1
            bg-[#262626] text-white text-base font-medium px-5 py-3 rounded
            transition-all duration-500 hover:text-white group cursor-pointer"
          >
            <span className="relative z-10 text-sm font-bold">
              আরও প্যাকেজ দেখুন
            </span>

            <span className="transform group-hover:translate-x-1 relative z-10 transition duration-300">
              <IoIosArrowForward size={16} />
            </span>

            {/* Hover Background */}
            <span
              className="absolute inset-0 bg-[#FBB03B] scale-x-0 origin-left
              transition-transform duration-500 group-hover:scale-x-100 z-0"
            ></span>
          </button>
        </div>
      )}
    </div>
  );
};

export default TourPackage;
