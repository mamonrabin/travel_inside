"use client";

import Image from "next/image";
import { useState } from "react";

import p1 from "@/src/assets/single/photo1.jpg";
import p3 from "@/src/assets/single/photo3.jpg";
import p4 from "@/src/assets/single/photo4.jpg";
import p5 from "@/src/assets/single/photo7.jpg";
import p6 from "@/src/assets/single/photo6.jpg";
import p7 from "@/src/assets/single/photo6.jpg";
import p8 from "@/src/assets/single/photo6.jpg";

const images = [p1, p3, p4, p5, p6, p7, p8];

const ImageGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      {/* Main Gallery */}
      <div className="mt-6">
        <div className="grid lg:grid-cols-2 gap-2 rounded-2xl overflow-hidden">
          {/* Left Big Image */}
          <div className="relative group">
            <Image
              src={images[0]}
              alt="photo"
              width={1000}
              height={800}
              onClick={() => setSelected(0)}
              className="w-full lg:h-102 h-80 object-cover cursor-pointer transition duration-300 group-hover:brightness-90"
            />
          </div>

          {/* Right Grid */}
          <div className="grid  grid-cols-2 gap-2 relative">
            {images.slice(1, 5).map((img, index) => (
              <div
                key={index}
                className=" group overflow-hidden"
                onClick={() => setSelected(index + 1)}
              >
                <Image
                  src={img}
                  alt="photo"
                  width={500}
                  height={500}
                  className="w-full lg:flex hidden h-50 object-cover cursor-pointer transition duration-300 group-hover:brightness-90"
                />

                {/* Show all photos button */}
                {index === 3 && (
                  <button className="absolute z-50 lg:bottom-4 lg:top-auto -top-20 right-4 bg-[#55BEEF] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#1d88b9] duration-300 cursor-pointer">
                    সব ছবি দেখুন
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selected !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          {/* Close */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white text-xl cursor-pointer"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={() =>
              setSelected((prev) =>
                prev === 0 ? images.length - 1 : (prev as number) - 1
              )
            }
            className="absolute left-6 text-white text-5xl cursor-pointer"
          >
            ‹
          </button>

          {/* Image */}
          <Image
            src={images[selected]}
            alt="preview"
            width={1400}
            height={900}
            className="max-h-[90vh] w-auto object-contain rounded"
          />

          {/* Next */}
          <button
            onClick={() =>
              setSelected((prev) =>
                prev === images.length - 1 ? 0 : (prev as number) + 1
              )
            }
            className="absolute right-6 text-white text-5xl cursor-pointer"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
