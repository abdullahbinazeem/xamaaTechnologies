import Navbar from "@/components/navbar";
import { FC } from "react";
import SplashScreen from "../_components/splash-screen";

const navLinks = [
  {
    text: "Work",
    url: "/",
  },
  {
    text: "About",
    url: "/",
  },
  {
    text: "Services",
    url: "/",
  },
  {
    text: "Blog",
    url: "/",
  },
];

const page = ({}) => {
  return (
    <div className="text-white relative h-[100vh] bg-gradient-to-b from-[#213D36] to-[#12121D] py-10">
      <Navbar
        links={navLinks}
        logo="Test-Auto Labs"
        callToAction={{ text: "Get Started", url: "/" }}
      />
      <SplashScreen text="Scalable Automation" />
    </div>
  );
};

export default page;
