import { FaHotel } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineFlightTakeoff } from "react-icons/md";

export const facilityList = [
    {
        id:1,
        icon:<MdOutlineFlightTakeoff />
,
        title:"অভ্যন্তরীণ ফ্লাইট",
        description:"দেশের যেকোনো প্রান্তে দ্রুততম সময়ে পৌঁছান। সকল দেশীয় এয়ারলাইন্সের টিকেট।"
    },
    {
        id:2,
        icon:<FaHotel />,
        title:"হোটেল বুকিং",
        description:"সারাদেশে সাশ্রয়ী মূল্যে আরামদায়ক হোটেল বুকিং করুন।"
    },
    {
        id:3,
        icon:<FaMapLocationDot />,
        title:"ট্যুর প্যাকেজ",
        description:"বাংলাদেশের সুন্দরতম স্থানগুলোতে সাজানো ট্যুর প্যাকেজ।"
    },
]