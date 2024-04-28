import React from "react";
import Navbar from "@/components/navbar";
import SplashScreen from "./testauto-labs/_components/splash-screen";
import Container from "@/components/container";
import Link from "next/link";
import Banner from "./testauto-labs/_components/banner";

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

const oldHero = () => {
  return (
    <div className="overflow-x-hidden bg-[#F5F5F5]">
      <Navbar
        links={navLinks}
        logo="technologies"
        callToAction={{ text: "Get Started", url: "/testauto-labs/contact" }}
      />
      <div className="relative min-h-[90vh]   text-black">
        <SplashScreen text="Elevating TECH" />

        <Container className="z-1 relative">
          <div className="position absolute left-0 right-0 top-[25%] m-auto hidden h-[70%] w-[5px] rounded-full bg-[#111] lg:block" />
          <div className="relative my-20 flex w-[100%] flex-col justify-between gap-24 divide-y-[1px] lg:m-0 lg:h-[70vh] lg:flex-row lg:items-center lg:gap-0 lg:divide-y-0 ">
            <div>
              <h1 className="text-5xl font-black xl:text-6xl">
                Test-Auto Labs
              </h1>
              <Link
                href="https://youtube.com/playlist?list=PLqi6r2vSamFM1V6mt6fNJmAmdAtnR7WK7&si=U16y7L3uf_szSPpi"
                target="blank"
              >
                <p className=" mt-6 inline-block rounded-lg bg-[#e9e9e9] p-3  text-lg font-semibold transition-all hover:scale-110 xl:p-5 xl:text-xl">
                  <span className="mr-3 font-black text-[#33a560]">NEW!</span>
                  Test Automation Fundamentals-Selenium
                </p>
              </Link>
              <p className="mt-8 text-lg font-semibold lg:max-w-[400px] xl:text-xl ">
                Zero to Hero QA trainings and consultation, get ready to learn
                industry standards.
              </p>
              <div className="mt-10 transition-all hover:translate-x-[5%] hover:scale-110 ">
                <Link
                  href="/testauto-labs"
                  className="rounded-md bg-[#8AFFB9]  px-6 py-4 text-lg font-bold text-[#1F1F1F] xl:text-xl "
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="pt-16  lg:p-0">
              <h1 className="text-5xl font-black xl:text-6xl">Developments</h1>
              <Link href="/developments">
                <p className=" mt-6 inline-block rounded-lg bg-[#e9e9e9] p-3  text-lg font-semibold transition-all hover:scale-110 xl:p-5 xl:text-xl">
                  <span className="mr-3 font-black text-[#33a560]">
                    JUMP START!
                  </span>
                  Your business online
                </p>
              </Link>
              <p className="mt-8 text-lg font-semibold lg:max-w-[400px] xl:text-xl">
                Learn to harness the power of the internet and social media to
                boost your business.
              </p>
              <div className="mt-10 transition-all hover:translate-x-[5%] hover:scale-110 ">
                <Link
                  href="/developments"
                  className="rounded-md bg-[#8AFFB9] px-6 py-4 text-lg font-bold text-[#1F1F1F] xl:text-xl"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="relative h-[100vh] w-full bg-[#1F1F1F] ">
        <Banner testList={["Excellence", "Creativity", "Sustainability"]} />
        fdasfas
      </div>
    </div>
  );
};

export default oldHero;
