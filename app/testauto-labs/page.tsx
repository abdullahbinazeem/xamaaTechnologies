import Navbar from "@/components/navbar";

import Image from "next/image";

import SplashScreen from "../_components/splash-screen";
import Container from "@/components/container";
import Banner from "../_components/banner";
import Link from "next/link";
import FeaturedList from "./_components/featuredList";

const navLinks = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Tutorials",
    url: "/testauto-labs/catalog",
  },
];

const page = ({}) => {
  return (
    <div className="overflow-x-hidden">
      <div className="text-white relative h-[100vh] bg-gradient-to-b from-[#213D36] to-[#12121D] py-10">
        <Navbar
          links={navLinks}
          logo="Test-Auto Labs"
          callToAction={{ text: "Get Started", url: "/" }}
        />
        <SplashScreen text="Scalable Automation" />
        <Container className="z-[10] relative">
          <div className="grid place-content-center h-[60vh] w-full ">
            <Image
              src="globe.svg"
              alt="globe"
              width={150}
              height={150}
              className="text-center mx-auto mb-10 md:block hidden"
            />
            <h1 className="xl:text-8xl lg:text-7xl text-5xl font-black">
              QA Capacity Building
            </h1>
            <p className="md:m-auto font-black mt-4 xl:text-3xl lg:text-2xl text-xl text-left">
              Test Automation Certifications
            </p>
            <form className="w-full text-center mt-10">
              <div className="max-w-[600px] mx-auto bg-[#13221E]  py-5 text-black rounded-[50px] flex px-5 lg:px-10">
                <input
                  type="text"
                  className="basis-3/5 md:basis-2/3  text-[#DAFCE7] lg:text-xl md:text-lg text-sm font-bold opacity-100 bg-[#13221E] text-left  box-border"
                  placeholder="Enter your email"
                />
                <button className="basis-2/5 min-w-[100px] md:basis-basis-1/3 font-black xl:text-lg md:text-md text-sm bg-[#8AFFB9] flex-1 text-center rounded-[50px] py-2 md:py-4">
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>
      <FeaturedList />
    </div>
  );
};

export default page;
