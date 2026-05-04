import CopyRight from "@/src/components/footer/CopyRight";
import Footer from "@/src/components/footer/Footer";
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
      <Footer/>
      <CopyRight/>
    </div>
  );
}
