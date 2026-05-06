"use client";

import { paymentList } from "@/src/api/paymentApi";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const PaymentSelect = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleToggle = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="mt-4 flex flex-col gap-3">
      {paymentList.map((item) => {
        const isOpen = activeCategory === item.category;

        return (
          <div
            key={item.id}
            className="border rounded overflow-hidden transition-all duration-500"
          >
            {/* Category Button */}
            <button
              onClick={() => handleToggle(item.category)}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={item.image}
                  alt="image"
                  width={24}
                  height={24}
                  className="rounded"
                />
                <p className="font-semibold capitalize">{item.category}</p>
              </div>

              <ChevronDown
                size={20}
                className={`transition-transform duration-500 ${
                  isOpen ? "rotate-180 text-[#1766D6]" : ""
                }`}
              />
            </button>

            {/* Only clicked category opens */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-4 border-t bg-gray-50">
                  <h2 className="text-base flex gap-2 font-medium flex-wrap">
                    <span>আপনার আমাদের পাঠানো প্রয়োজন :</span>
                    <span className="font-semibold text-lg text-[#55BEEF]">
                      ৳ 3499.00
                    </span>
                  </h2>

                  <p className="text-gray-500 mt-1">
                    <span>Account Type:</span>{" "}
                    <span>Personal (Send Money)</span>
                  </p>

                  <form className="py-3 flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <label>আপনার {item.category} নাম্বার</label>
                      <input
                        className="border outline-none rounded-lg p-2"
                        type="text"
                        placeholder="01*********"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label>
                        আপনার {item.category} ট্রাঞ্জেকশন আইডি
                      </label>
                      <input
                        className="border outline-none rounded-lg p-2"
                        type="text"
                        placeholder="2MXLSF"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PaymentSelect;