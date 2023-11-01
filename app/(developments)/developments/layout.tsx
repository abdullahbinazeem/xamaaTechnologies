import Navbar from "./_components/navbar";

export default function DevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-black h-[100vh] overflow-x-hidden">
      <Navbar />
      {children}
    </div>
  );
}
