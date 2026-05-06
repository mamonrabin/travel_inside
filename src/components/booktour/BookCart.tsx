import img from "@/src/assets/package/package1.jpg";
import Image from "next/image";
import PaymentSelect from "./PaymentSelect";

const BookCart = () => {
  return (
   <div>
     <div className="border rounded p-4">
      <div className="flex gap-4 items-end">
        <Image
          src={img}
          alt="Package Image"
          width={120}
          height={120}
          className="rounded"
        />
        <h1 className="font-medium text-gray-500">
          কক্সবাজার হল বাংলাদেশের একটি প্রতিষ্ঠিত সমুদ্রসৈকত
        </h1>
      </div>
      <div className="mt-4">
        <div className="flex flex-col gap-2">
          <p className="flex items-center justify-between gap-1 font-semibold text-gray-500">
            <span className="text-[#262626] flex items-center gap-1 text-sm">
              সময়কাল:
            </span>{" "}
            <span className="md:text-base text-sm"> ৩ দিন ২ রাত</span>
          </p>
          <p className="flex items-center justify-between gap-1 font-semibold text-gray-500">
            <span className="text-[#262626] flex items-center gap-1 text-sm">
              সর্বোচ্চ ব্যক্তি সংখ্যা :
            </span>{" "}
            <span className="md:text-base text-sm">
               ২
            </span>
          </p>

          <p className="flex items-center justify-between gap-1 font-semibold text-gray-500">
            <span className="text-[#262626] flex items-center gap-1 text-sm">
              মূল্যের বিবরণ : 
            </span>
            <span className="md:text-base text-sm">৳16,500 * 2</span>
          </p>
          <p className="flex items-center justify-between gap-1 font-semibold text-gray-500 border-b pb-1">
            <span className="text-[#262626] flex items-center gap-1 text-sm">
              সাব-টোটাল : 
            </span>
            <span className="md:text-base text-sm">৳33,000</span>
          </p>

          <p className="flex items-center justify-between gap-1 font-semibold text-gray-500">
            <span className="text-[#262626] flex items-center gap-1 text-sm">
              টোটাল : 
            </span>
            <span className="md:text-base text-sm">৳33,000</span>
          </p>
        </div>
      </div>
    </div>

    <PaymentSelect/>

    <div>
      <button className="w-full bg-[#1766D6] hover:bg-[#0B53C3] duration-300 cursor-pointer py-2 text-white rounded mt-2">অর্ডার প্লেস করুন</button>
    </div>
   </div>
  );
};

export default BookCart;
