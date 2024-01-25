import Footer from "@/components/Footer";
import NavHeader from "@/components/NavHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <NavHeader />
      {children}
      <Footer />
    </div>
  );
}
