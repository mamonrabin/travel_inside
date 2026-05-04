import Image, { StaticImageData } from "next/image";
import React from "react";
import { roboto } from "../app/font";
import { IoIosArrowForward } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";

interface PackageCardProps {
  items: {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
    place: string;
    price: string;
    trivalto: string;
    staycount: string;
  };
}

const PackageCard = ({ items }: PackageCardProps) => {
  return (
    <div className="border relative group border-[#262626]/10 rounded-md p-6 cursor-pointer">
      <div className=" overflow-hidden rounded">
        <div className="overflow-hidden rounded relative">
          <Image
            src={items.image}
            alt={items.title}
            className="
      w-full object-cover
      transition-all duration-700 ease-in-out
      group-hover:scale-110
      group-hover:rotate-1
    "
          />

          {/* Dark Overlay */}
          <div
            className="
      absolute inset-0 bg-black/10
      transition-all duration-500
      group-hover:bg-black/25
    "
          ></div>
        </div>

        <div className="inline-flex flex-col absolute top-10 md:-left-5 -left-1">
          <p className="bg-[#262626] w-30 text-white font-bold text-sm inline-flex px-2 py-1">
            {items.staycount}
          </p>
          <p className="items-center gap-1 font-bold text-sm bg-white border border-[#55BEEF] text-[#55BEEF] px-2 py-1 inline-flex">
            <FaMapMarkerAlt size={16} />
            {items.place}
          </p>
        </div>
      </div>
      <div className="mt-3">
        <h2 className="font-bold line-clamp-1">{items.title}</h2>
        <p className="text-gray-500 mt-1">{items.trivalto}</p>

        <div>
          <div
            className={`flex items-center gap-1 font-bold ${roboto.className}`}
          >
            <p className="text-xs text-gray-400">শুরু হচ্ছে মাত্র : </p>{" "}
            <p className="text-lg font-bold text-[#55BEEF]">
              ৳{items.price}.00
            </p>
            <p className="text-xs text-gray-400 translate-y-1">/ প্রতি ব্যক্তি</p>
          </div>

          <button
            className="relative overflow-hidden z-10 inline-flex items-center gap-1 mt-3 
  bg-[#55BEEF] text-white text-base font-medium px-4 py-3 rounded 
  transition-all duration-500 hover:text-white group cursor-pointer"
          >
            <span className="relative z-10 text-sm font-bold">আরো জানুন</span>

            <span className="transform group-hover:translate-x-1 relative z-10 transition duration-300">
              <IoIosArrowForward size={16} />
            </span>

            {/* Hover Background Effect */}
            <span
              className="absolute inset-0 bg-[#0f9ed8] scale-x-0 origin-left 
    transition-transform duration-500 group-hover:scale-x-100 z-0"
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
