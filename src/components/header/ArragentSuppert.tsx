import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FiCopy } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const ArragentSuppert = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="text-[#8E191C] p-2 border border-[#8E191C] 
        hover:bg-[#8E191C] hover:text-white hover:border-[#8E191C] 
        duration-300 cursor-pointer rounded-full">
          <TfiHeadphoneAlt size={16} />
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="rounded p-4 mt-2">
        <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 font-semibold text-base"><span className="text-[#8E191C]"><TfiHeadphoneAlt size={16} /></span> <span>সাপোর্ট</span></p>
            <p className="flex items-center gap-2 font-semibold text-base"><span className="text-base">⏰</span> <span>২৪/৭ কাস্টমার সাপোর্ট</span></p>
        </div>

        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between border px-2 py-2 rounded">
                <p className="flex items-center gap-1 text-base"><span className="text-[#8E191C]"><LuPhone size={16} /></span> <span>+8801746770324</span></p>
                <p className="cursor-pointer"><FiCopy size={16} /></p>
            </div>

            <div className="flex items-center justify-between border px-2 py-2 rounded">
                <p className="flex items-center gap-1 text-base"><span className="text-[#8E191C]"><MdOutlineMailOutline size={16} /></span> <span>almamon757@gmail.com</span></p>
                <p className="cursor-pointer"><FiCopy size={16} /></p>
            </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ArragentSuppert;
