import CopyRight from "@/src/components/footer/CopyRight";
import Footer from "@/src/components/footer/Footer";
import Subscribe from "@/src/components/footer/Subscribe";
import Navbar from "@/src/components/header/Navbar";

export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Navbar/>
      {children}
      <Subscribe/>
      <Footer/>
      <CopyRight/>
    </div>
  );
}
