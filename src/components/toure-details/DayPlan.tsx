"use client";

import { ItineraryList } from "@/src/api/ItineraryApi";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const DayPlan = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="mt-8 space-y-4">
      {ItineraryList.map((item) => (
        <div
          key={item.id}
          className="border rounded overflow-hidden  transition-all duration-300"
        >
          {/* Header */}
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full flex items-center justify-between text-left"
          >
            <div className="flex items-center w-full cursor-pointer">
              <p className="px-4  py-2 bg-[#55BEEF] text-white text-base font-semibold ">
                {item.day}
              </p>

              <h2 className="text-base font-semibold px-4 text-gray-700">
                {item.title}
              </h2>
            </div>

            <FaChevronDown size={14}
              className={`mr-4 text-gray-500 transition-transform duration-300 ${
                openId === item.id ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Content */}
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              openId === item.id
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="p-4 text-gray-500 bg-gray-50 leading-7">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DayPlan;