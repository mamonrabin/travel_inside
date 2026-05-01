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
      {/* <TopFooter/> */}
    </div>
  );
}
