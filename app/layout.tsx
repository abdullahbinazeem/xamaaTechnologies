import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://xaama.tech"),
  keywords: [
    "Website Design",
    "Marketing",
    "Affordable",
    "Langford",
    "Victoria",
  ],
  title: "Website Design & Marketing in Langford | Xamaa",
  description:
    "We specialize in digital marketing strategy and website design that generates leads for your business. Contact us today for a free mockup.",
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
