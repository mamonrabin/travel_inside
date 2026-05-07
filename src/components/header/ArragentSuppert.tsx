"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { FiCopy } from "react-icons/fi";
import { LuPhone, LuCheck } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const ArragentSuppert = () => {
  const [copied, setCopied] = useState<"phone" | "email" | null>(null);

  const handleCopy = async (text: string, type: "phone" | "email") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);

      setTimeout(() => {
        setCopied(null);
      }, 2000);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="text-[#1766D6] p-2 border border-[#1766D6]
          hover:bg-[#1766D6] hover:text-white
          duration-300 cursor-pointer rounded-full"
        >
          <TfiHeadphoneAlt size={16} />
        </button>
      </PopoverTrigger>

      <PopoverContent align="end" className="rounded p-4 mt-2 w-[320px]">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-4">
          <p className="flex items-center gap-2 font-semibold text-base text-gray-600">
            <span className="text-[#1766D6]">
              <TfiHeadphoneAlt size={16} />
            </span>
            <span>সাপোর্ট</span>
          </p>

          <p className="flex items-center gap-2 font-semibold text-base text-gray-600">
            <span>⏰</span>
            <span>২৪/৭ কাস্টমার সাপোর্ট</span>
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          {/* Phone */}
          <div className="flex items-center justify-between border px-3 py-2 rounded">
            <p className="flex items-center gap-2 text-sm">
              <span className="text-[#1766D6]">
                <LuPhone size={16} />
              </span>
              <span>+8801746770324</span>
            </p>

            <button
              onClick={() =>
                handleCopy("+8801746770324", "phone")
              }
              className="cursor-pointer text-[#1766D6]"
            >
              {copied === "phone" ? (
                <LuCheck size={18} />
              ) : (
                <FiCopy size={16} />
              )}
            </button>
          </div>

          {/* Email */}
          <div className="flex items-center justify-between border px-3 py-2 rounded">
            <p className="flex items-center gap-2 text-sm">
              <span className="text-[#1766D6]">
                <MdOutlineMailOutline size={16} />
              </span>
              <span>almamon757@gmail.com</span>
            </p>

            <button
              onClick={() =>
                handleCopy("almamon757@gmail.com", "email")
              }
              className="cursor-pointer text-[#1766D6]"
            >
              {copied === "email" ? (
                <LuCheck size={18} />
              ) : (
                <FiCopy size={16} />
              )}
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ArragentSuppert;