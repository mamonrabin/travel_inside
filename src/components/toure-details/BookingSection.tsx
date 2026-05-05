import React from "react";
import { MdLocalPhone } from "react-icons/md";
import BookReserve from "./BookReserve";
import ResponsiveResive from "./ResponsiveResive";

const BookingSection = () => {
  return (
    <div className="lg:mt-30 sticky top-20">
      <div className="border rounded">
        <h2 className="py-2 px-8 bg-[#55BEEF] rounded-t flex items-center gap-2 text-white font-medium">
          <MdLocalPhone />
          প্যাকেজের বিস্তারিত জানতে কল করুন
        </h2>

        <div className="px-8 py-4 space-y-1 border-b-2 border-[#55BEEF] rounded-b">
          <p className="grid grid-cols-2 uppercase font-medium text-gray-500">
            <span>Al Mamon</span> <span>: +8801746770324</span>
          </p>
          <p className="grid grid-cols-2 uppercase font-medium text-gray-500">
            <span>Riaz Shikder</span> <span>: +8801746870320</span>
          </p>
          <p className="grid grid-cols-2 uppercase font-medium text-gray-500">
            <span>Rabin Hossain</span> <span>: +8801917645281</span>
          </p>
        </div>
      </div>

      <div className="lg:flex hidden">
        <BookReserve />
      </div>

      <div className="bottom-0 left-0 fixed w-full flex items-center justify-between p-6 bg-white border-t border-[#262626]/20 lg:hidden">
        <h2 className="text-xl font-semibold">৳16,500</h2>
        <ResponsiveResive/>
      </div>
    </div>
  );
};

export default BookingSection;
