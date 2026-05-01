import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import logo from "@/src/assets/logo/logo-01.png";
import { menuItems } from "@/src/share/MenuItems";
const Responsivebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <p className="lg:hidden block cursor-pointer">
          <HiOutlineMenuAlt1 size={28} />
        </p>
      </SheetTrigger>
      <SheetContent side={"left"} className="">
        <div className="border-b p-6">
          <Image src={logo} alt="Logo" width={150} height={150} priority />
        </div>

        <ul className="px-6 flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <li key={index} className="font-semibold">
              <Link
                href={item.path}
                className="hover:text-[#55BEEF] duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/login"
          className="text-base font-semibold hover:text-[#8E191C] duration-300 px-6"
        >
          লগিন/রেজিষ্ট্রেশন
        </Link>
      </SheetContent>
    </Sheet>
  );
};

export default Responsivebar;
