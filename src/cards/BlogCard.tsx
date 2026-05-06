/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaFire } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const BlogCard = ({ blog }: { blog: any }) => {
  return (
    <div className="cursor-pointer group">
      <Link href={`/blog/${blog.id}`}>
      <div className="relative overflow-hidden rounded-t">
        <Image
          className="rounded-t transition-all duration-700 ease-in-out
      group-hover:scale-110 overflow-hidden
      group-hover:rotate-1"
          src={blog.image}
          alt="image"
          width={500}
          height={500}
        />
        <p className="px-3 py-1 rounded border border-white/30 text-white font-medium text-base bg-[#262626]/40 absolute top-3 right-3">
          {blog.data}
        </p>
        <div
          className="
      absolute inset-0 bg-black/10
      transition-all duration-500
      group-hover:bg-black/25
    "
        ></div>
      </div>
      </Link>
      <div className="px-4 py-6 border border-[#262626]/15 rounded-b">
        <div className="flex items-center gap-10 text-gray-500 text-sm">
          <p>{blog.admin}</p>
          <p className="flex items-center gap-1">
            <GoDotFill className="text-[#55BEEF]" /> {blog.visit}
          </p>
        </div>
        <Link href={`/blog/${blog.id}`}>
        <h2 className="text-xl font-bold text-gray-600 hover:text-[#55BEEF] duration-300 mt-2 line-clamp-1">
          {blog.title}
        </h2>
        </Link>
        <div className="flex items-center justify-between mt-4">
          <Link href={`/blog/${blog.id}`}>
          <button className="flex hover:text-[#0B53C3] duration-300 items-center gap-1 font-semibold text-[#55BEEF] underline cursor-pointer">
            পোস্ট দেখুন{" "}
            <span className="group-hover:translate-x-1 transition duration-300">
              <BsArrowRight />
            </span>
          </button>
          </Link>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            <FaFire /> {blog.readTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
