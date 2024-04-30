import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://xaama.tech"),
  title: "Xamaa Developments",
  description:
    "Xamaa Developments provide Web development, design, and SEO services in Victoria, BC. We have collection of works you can view. You can request for a FREE UI design for your business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bricolage.className}>{children}</body>
    </html>
  );
}
