import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import BookReserve from "./BookReserve";

const ResponsiveResive = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="bg-[#55BEEF] text-white cursor-pointer font-semibold py-2 px-4 rounded hover:bg-[#3a8acb] transition-colors duration-300">
          বুক রিজার্ভ করুন
        </button>
      </SheetTrigger>

      <SheetContent
        side="bottom"
        className="h-[420px]! rounded-t-2xl px-6"
      >
        <BookReserve />
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveResive;