import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CgMenuGridR } from "react-icons/cg";
import p1 from "@/src/assets/single/photo1.jpg";
import p3 from "@/src/assets/single/photo3.jpg";
import p4 from "@/src/assets/single/photo4.jpg";
import p5 from "@/src/assets/single/photo7.jpg";
import p6 from "@/src/assets/single/photo8.jpg";
import p7 from "@/src/assets/single/photo2.jpg";
import p8 from "@/src/assets/single/photo5.jpg";
import Image from "next/image";

const allimages = [p1, p3, p4, p5, p6, p7, p8];

const AllImageSection = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="absolute flex items-center gap-1 z-50 lg:bottom-4 lg:top-auto -top-20 right-4 bg-[#55BEEF] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#1d88b9] duration-300 cursor-pointer">
          <CgMenuGridR size={16} />
          সব ছবি দেখুন
        </button>
      </SheetTrigger>

      <SheetContent side="bottom" className="h-140! rounded-t-2xl p-8 overflow-y-scroll">
        <div className="flex items-center gap-1 flex-wrap">
          {allimages.map((item, index) => (
            <div key={index}>
              <Image
                src={item}
                alt={`gallery-${index}`}
                width={320} height={320}
                className="rounded"
              />
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AllImageSection;
