"use client";

import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  district: string;
};

const BookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="border md:px-8 md:py-8 p-4 rounded">
      <h2 className="text-lg font-semibold">ব্যক্তিগত তথ্য</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 flex flex-col gap-3"
      >
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-base font-medium text-gray-500"
          >
            নাম <span className="text-red-800">*</span>
          </label>

          <input
            type="text"
            id="name"
            placeholder="আপনার নাম লিখুন"
            className="mt-1 block w-full border border-gray-300 rounded p-2 outline-none"
            {...register("name", {
              required: "নাম আবশ্যক",
            })}
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-base font-medium text-gray-500"
          >
            মোবাইল <span className="text-red-800">*</span>
          </label>

          <input
            type="text"
            id="phone"
            placeholder="আপনার মোবাইল নম্বর লিখুন"
            className="mt-1 block w-full border border-gray-300 rounded p-2 outline-none"
            {...register("phone", {
              required: "মোবাইল নম্বর আবশ্যক",
              pattern: {
                value: /^(01[3-9]\d{8})$/,
                message: "সঠিক মোবাইল নম্বর লিখুন",
              },
            })}
          />

          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-base font-medium text-gray-500"
          >
            ইমেইল (অপশনাল)
          </label>

          <input
            type="email"
            id="email"
            placeholder="আপনার ইমেইল লিখুন"
            className="mt-1 block w-full border border-gray-300 rounded p-2 outline-none"
            {...register("email", {
              pattern: {
                value: /^\S+@\S+$/i,
                message: "সঠিক ইমেইল লিখুন",
              },
            })}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-base font-medium text-gray-500"
          >
            ঠিকানা <span className="text-red-800">*</span>
          </label>

          <input
            type="text"
            id="address"
            placeholder="আপনার ঠিকানা লিখুন"
            className="mt-1 block w-full border border-gray-300 rounded p-2 outline-none"
            {...register("address", {
              required: "ঠিকানা আবশ্যক",
            })}
          />

          {errors.address && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* District */}
        <div>
          <label
            htmlFor="district"
            className="block text-base font-medium text-gray-500"
          >
            জেলা <span className="text-red-800">*</span>
          </label>

          <input
            type="text"
            id="district"
            placeholder="আপনার জেলা লিখুন"
            className="mt-1 block w-full border border-gray-300 rounded p-2 outline-none"
            {...register("district", {
              required: "জেলা আবশ্যক",
            })}
          />

          {errors.district && (
            <p className="text-red-500 text-sm mt-1">
              {errors.district.message}
            </p>
          )}
        </div>

        {/* <button
          type="submit"
          className="mt-2 bg-[#1766D6] text-white py-2 rounded hover:bg-[#1458b8] duration-300 cursor-pointer"
        >
          সাবমিট করুন
        </button> */}
      </form>
    </div>
  );
};

export default BookForm;