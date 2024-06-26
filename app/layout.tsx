import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

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
      <head>
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DTY88PT8F2"
        ></script>
        <script>
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DTY88PT8F2');
  `}
        </script> */}
      </head>
      <body className={bricolage.className}>
        {children}
        <GoogleAnalytics gaId="G-DTY88PT8F2" />
      </body>
    </html>
  );
}
