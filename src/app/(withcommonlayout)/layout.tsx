export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      {children}
      {/* <TopFooter/> */}
    </div>
  );
}
