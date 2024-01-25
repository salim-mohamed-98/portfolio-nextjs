export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <div>NavBar</div>
      {children}
      <div>footer</div>
    </div>
  );
}
