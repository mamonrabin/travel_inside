import CopyRight from "@/src/components/footer/CopyRight";
import Footer from "@/src/components/footer/Footer";
import Subscribe from "@/src/components/footer/Subscribe";
import Navbar from "@/src/components/header/Navbar";
import ScrollToBottomToTop from "@/src/share/ScrollToBottomToTop";

export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Navbar />
      <ScrollToBottomToTop />
      {children}
      <Subscribe />
      <Footer />
      <CopyRight />
    </div>
  );
}
