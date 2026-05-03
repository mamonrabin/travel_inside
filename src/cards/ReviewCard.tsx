import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";

interface ReviewItem {
  name: string;
  review: string;
  rating: number;
  image: StaticImageData;
}

const ReviewCard = ({ item }: { item: ReviewItem }) => {
  return (
    <div className="border rounded p-8 cursor-pointer">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < Math.floor(item.rating) ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.46ls" />
          </svg>
        ))}
      </div>

      <p className="py-3 text-gray-500 line-clamp-3">{item.review}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 pt-4">
        <Image className="rounded-full" src={item.image} alt="image" width={50} height={50}/>
        <div className="-space-y-1">
            <h2 className="text-lg font-medium">{item.name}</h2>
            <p className="text-sm text-gray-500">Customer</p>
        </div>
      </div>

      <p className="text-4xl text-gray-300"><FaQuoteRight /></p>
      </div>
      
    </div>
  );
};

export default ReviewCard;
