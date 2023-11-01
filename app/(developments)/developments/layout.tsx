import Navbar from "./_components/navbar";

export default function DevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      {children}
    </div>
  );
}
