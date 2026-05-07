"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("মেসেজ সফলভাবে পাঠানো হয়েছে");
        
      } else {
        toast.error("মেসেজ পাঠানো যায়নি");
      }
    } catch (error) {
      
      toast.error("কিছু সমস্যা হয়েছে");
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold pb-4">আমাদের লিখুন</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-base font-medium text-gray-700"
          >
            নাম
          </label>

          <input
            id="name"
            type="text"
            placeholder="নাম লিখুন"
            className="block rounded px-4 py-2 w-full border outline-none"
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

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-base font-medium text-gray-700"
          >
            ইমেইল
          </label>

          <input
            id="email"
            type="email"
            placeholder="ইমেইল লিখুন"
            className="block rounded px-4 py-2 w-full border outline-none"
            {...register("email", {
              required: "ইমেইল আবশ্যক",
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

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-base font-medium text-gray-700"
          >
            ফোন নাম্বার
          </label>

          <input
            id="phone"
            type="tel"
            placeholder="ফোন নাম্বার লিখুন"
            className="block rounded px-4 py-2 w-full border outline-none"
            {...register("phone", {
              required: "ফোন নাম্বার আবশ্যক",
              pattern: {
                value: /^(01[3-9]\d{8})$/,
                message: "সঠিক মোবাইল নাম্বার লিখুন",
              },
            })}
          />

          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-base font-medium text-gray-700"
          >
            বার্তা
          </label>

          <textarea
            id="message"
            rows={4}
            placeholder="আপনার মূল্যবান বার্তা লিখুন..."
            className="block rounded px-4 py-2 w-full border outline-none"
            {...register("message", {
              required: "বার্তা লিখুন",
              minLength: {
                value: 10,
                message: "কমপক্ষে ১০ অক্ষরের বার্তা লিখুন",
              },
            })}
          />

          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex cursor-pointer items-center px-4 py-2 text-sm font-medium rounded text-white bg-[#55BEEF] hover:bg-[#1c79a5] duration-300 disabled:opacity-60"
          >
            {loading ? "পাঠানো হচ্ছে..." : "পাঠিয়ে দিন"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;