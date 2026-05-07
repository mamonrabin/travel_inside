"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import logo from "@/src/assets/logo/logo-01.png";
import { menuItems } from "@/src/share/MenuItems";
import { useState } from "react";

const Responsivebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="lg:hidden block cursor-pointer">
          <HiOutlineMenuAlt1 size={28} />
        </button>
      </SheetTrigger>

      <SheetContent side={"left"}>
        <div className="border-b p-6">
          <Image src={logo} alt="Logo" width={150} height={150} priority />
        </div>

        <ul className="px-6 flex flex-col gap-4 mt-6">
          {menuItems.map((item, index) => (
            <li key={index} className="font-semibold">
              <Link
                href={item.path}
                onClick={() => setOpen(false)}
                className="hover:text-[#55BEEF] duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/login"
          onClick={() => setOpen(false)}
          className="text-base font-semibold hover:text-[#8E191C] duration-300 px-6 mt-6 inline-block"
        >
          লগিন/রেজিষ্ট্রেশন
        </Link>
      </SheetContent>
    </Sheet>
  );
};

export default Responsivebar;