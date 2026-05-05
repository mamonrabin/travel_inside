import React from "react";

const BookReserve = () => {
  const dateList = ["৫ মে - ৮ মে", "১০ মে - ১৩ মে", "১৫ মে - ১৮ মে"];

  const personList = [
    "১ ব্যক্তি",
    "২ ব্যক্তি",
    "৩ ব্যক্তি",
    "৪ ব্যক্তি",
    "৫ ব্যক্তি",
  ];

  return (
    <div className="mt-6 border rounded lg:p-6">
      {/* Date Selection */}
      <div>
        <p className="font-semibold text-gray-500 pb-1">তারিখ নির্বাচন করুন</p>

        <div className="flex flex-wrap items-center gap-1 mt-2">
          {dateList.map((date, index) => (
            <div key={index}>
              <input
                type="radio"
                name="date"
                id={`date-${index}`}
                className="peer hidden"
              />
              <label
                htmlFor={`date-${index}`}
                className="peer-checked:bg-[#55BEEF] peer-checked:text-white font-semibold px-2 py-2 border rounded border-gray-300 cursor-pointer transition-all duration-300"
              >
                {date}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Person Selection */}
      <div className="mt-5">
        <p className="font-semibold text-gray-500 pb-1">
          ব্যক্তি নির্বাচন করুন
        </p>

        <div className="flex  items-center gap-2  mt-2">
          {personList.map((person, index) => (
            <div key={index}>
              <input
                type="radio"
                name="person"
                id={`person-${index}`}
                className="peer hidden"
              />
              <label
                htmlFor={`person-${index}`}
                className="peer-checked:bg-[#55BEEF] peer-checked:text-white font-semibold text-sm px-2 py-2 border rounded border-gray-300 cursor-pointer transition-all duration-300"
              >
                {person}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <button className="w-full  cursor-pointer mt-6 bg-[#55BEEF] text-white font-semibold py-2 rounded hover:bg-[#3a8acb] transition-colors duration-300">
          বুক রিজার্ভ করুন
        </button>
      </div>
    </div>
  );
};

export default BookReserve;
