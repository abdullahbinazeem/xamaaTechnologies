import Navbar from "./_components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xamaa Developments",
  description:
    "Xamaa Development provide Web development, design, and SEO services in Victoria, BC. We have collection of works you can view. You can request for a FREE UI design for your business.",
};

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
