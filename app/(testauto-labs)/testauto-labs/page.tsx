import Navbar from "@/components/navbar";

import Image from "next/image";

import SplashScreen from "./_components/splash-screen";
import Container from "@/components/container";
import Banner from "./_components/banner";
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
      <div className="relative h-[100vh] bg-gradient-to-b from-[#213D36] to-[#12121D] py-10 text-white">
        <Navbar
          links={navLinks}
          logo="Test-Auto Labs"
          callToAction={{ text: "Get Started", url: "/testauto-labs/contact" }}
        />
        <SplashScreen text="Scalable Automation" />
        <Container className="relative z-[10]">
          <div className="grid h-[60vh] w-full place-content-center ">
            <Image
              src="globe.svg"
              alt="globe"
              width={150}
              height={150}
              className="mx-auto mb-10 hidden text-center md:block"
            />
            <h1 className="text-5xl font-black lg:text-7xl xl:text-8xl">
              QA Capacity Building
            </h1>
            <p className="mt-4 text-left text-xl font-black md:m-auto lg:text-2xl xl:text-3xl">
              Test Automation Certifications
            </p>
            <div className="min-w-[400px]: m-auto mt-10 w-[50%] text-center">
              <div className="mx-auto flex max-w-[600px]  rounded-[50px] bg-[#13221E] px-5 py-5 text-black lg:px-10">
                <a
                  href="testauto-labs/contact"
                  className="md:basis-basis-1/3 md:text-md min-w-[100px] flex-1 basis-2/5 rounded-[50px] bg-[#8AFFB9] py-2 text-center text-sm font-black md:py-4 xl:text-lg"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <FeaturedList />
    </div>
  );
};

export default page;
