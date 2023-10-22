import Container from "@/components/container";
import Navbar from "@/components/navbar";
import Image from "next/image";

import SplashScreen from "./_components/splash-screen";
import Banner from "./_components/banner";

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

import { cn } from "@/libs/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative text-white min-h-[110vh] bg-gradient-to-b from-[#213D36] to-[#12121D] py-10">
        <SplashScreen text="Elevating TECH" />
        <Navbar
          links={navLinks}
          logo="technologies"
          callToAction={{ text: "Get Started", url: "/" }}
        />
        <Container className="relative z-1">
          <div className="position absolute top-[25%] left-0 right-0 m-auto w-[5px] rounded-full h-[70%] bg-[#D0FFE3] lg:block hidden" />
          <Image
            src="globe.svg"
            height={150}
            width={150}
            alt=""
            className="absolute left-0 right-0 m-auto top-5 lg:block hidden"
          />
          <div className="lg:divide-y-0  divide-y-[1px] flex my-40 lg:gap-0 gap-24 lg:m-0 lg:flex-row flex-col w-[100%] justify-between lg:h-[80vh] lg:items-center relative">
            <div>
              <h1 className="xl:text-6xl text-5xl font-black">
                Test-Auto Labs
              </h1>
              <Link
                href="https://youtube.com/playlist?list=PLqi6r2vSamFM1V6mt6fNJmAmdAtnR7WK7&si=U16y7L3uf_szSPpi"
                target="blank"
              >
                <p className=" inline-block rounded-lg mt-6 xl:text-xl text-lg  font-semibold xl:p-5 p-3 bg-[#1F1F1F] hover:scale-110 transition-all">
                  <span className="font-black text-[#8AFFB9] mr-3">NEW!</span>
                  Test Automation Fundamentals-Selenium
                </p>
              </Link>
              <p className="font-semibold mt-8 lg:max-w-[400px] xl:text-xl text-lg ">
                Zero to Hero QA trainings and consultation, get ready to learn
                industry standards.
              </p>
              <div className="mt-10 hover:scale-110 transition-all hover:translate-x-[5%] ">
                <Link
                  href="/testauto-labs"
                  className="xl:text-xl text-lg  py-4 px-6 bg-[#8AFFB9] text-[#1F1F1F] font-bold rounded-md "
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="pt-16  lg:p-0">
              <h1 className="xl:text-6xl text-5xl font-black">Developments</h1>
              <p className=" inline-block rounded-lg mt-6 xl:text-xl text-lg font-semibold xl:p-5 p-3 bg-[#1F1F1F] ">
                <span className="font-black text-[#8AFFB9] mr-3">
                  JUMP START!
                </span>
                Your business online
              </p>
              <p className="xl:text-xl text-lg font-semibold mt-8 lg:max-w-[400px]">
                Learn to harness the power of the internet and social media to
                boost your business.
              </p>
              <div className="mt-10">
                <Link
                  href="/"
                  target="blank"
                  className="xl:text-xl text-lg py-4 px-6 bg-[#8AFFB9] text-[#1F1F1F] font-bold rounded-md"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="h-[100vh] w-full bg-[#1F1F1F] relative ">
        <Banner testList={["Excellence", "Creativity", "Sustainability"]} />
        fdasfas
      </div>
    </div>
  );
}
