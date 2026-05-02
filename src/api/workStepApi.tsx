import { GiTimeBomb } from "react-icons/gi";
import { PiArrowSquareInBold } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbBus } from "react-icons/tb";

export const stpeList = [
  {
    id: 1,
    icon: <TbBus />,
    title: "গন্তব্য নির্বাচন",
    description: "আপনার পছন্দের গন্তব্য এবং যাতায়াত মাধ্যম বেছে নিন",
  },
  {
    id: 2,
    icon: <GiTimeBomb />,
    title: "তারিখ ও সময়",
    description: "ভ্রমণের তারিখ এবং সুবিধাজনক সময় নির্ধারণ করুন",
  },
  {
    id: 3,
    icon:<RiSecurePaymentLine />,
    title: "পেমেন্ট করুন",
    description: "নিরাপদ পেমেন্ট গেটওয়ের মাধ্যমে টিকেট বুক করুন",
  },
  {
    id: 4,
    icon:<PiArrowSquareInBold />,
    title: "কনফার্মেশন পান",
    description: "তাৎক্ষণিক টিকেট কনফার্মেশন এবং ডিজিটাল টিকেট পান",
  },
];
