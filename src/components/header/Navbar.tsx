"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/src/assets/logo/logo-01.png";
import ArragentSuppert from "./ArragentSuppert";
import Responsivebar from "./Responsivebar";
import { menuItems } from "@/src/share/MenuItems";



const Navbar = () => {
  return (
    <nav className="Container flex items-center justify-between py-4 border-b border-[#262626]/12">
      
      {/* Logo */}
      <Link href="/" className="lg:flex hidden">
        <Image src={logo} alt="Logo" width={150} height={150} priority />
      </Link>
     <Responsivebar/>

      {/* Menu */}
      <ul className="lg:flex hidden items-center gap-6 text-lg font-medium">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className="hover:text-[#55BEEF] duration-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/" className="lg:hidden block">
        <Image src={logo} alt="Logo" width={150} height={150} priority />
      </Link>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        
        {/* Support Icon */}
        <ArragentSuppert/>

        {/* Auth Button */}
        <Link
          href="/login"
          className="text-base font-semibold hover:text-[#8E191C] duration-300 md:flex hidden"
        >
          লগিন/রেজিষ্ট্রেশন
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
