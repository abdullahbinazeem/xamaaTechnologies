import Navbar from "@/components/navbar";

import Image from "next/image";

import SplashScreen from "../_components/splash-screen";
import Container from "@/components/container";
import Banner from "../_components/banner";
import Link from "next/link";

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

import appium from "../../public/icons/appium.svg";
import selenium from "../../public/icons/selenium.svg";
import cucumber from "../../public/icons/cucumber.svg";
import cypress from "../../public/icons/cypress.png";
import gatling from "../../public/icons/gatling.png";
import jmeter from "../../public/icons/jmeter.svg";

const Icons = [
  {
    name: "appium",
    icon: appium,
  },
  {
    name: "selenium",
    icon: selenium,
  },
  {
    name: "cucumber",
    icon: cucumber,
  },
  {
    name: "cypress",
    icon: cypress,
  },
  {
    name: "gatling",
    icon: gatling,
  },
  {
    name: "jmeter",
    icon: jmeter,
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
                  className="basis-3/4 md:basis-2/3  text-[#DAFCE7] lg:text-xl md:text-lg text-sm font-bold opacity-100 bg-[#13221E] text-left  box-border"
                  placeholder="Enter your email"
                />
                <button className="basis-1/4 md:basis-basis-1/3 font-black xl:text-lg md:text-md text-sm bg-[#8AFFB9] flex-1 text-center rounded-[50px] py-2 md:py-4">
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>
      <div className="py-40 w-full bg-[#1F1F1F] relative ">
        <Banner testList={["TEST AUTOMATION", "TRAINING", "CERTIFICATION"]} />
        <Container className="text-white">
          <h2 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-black text-[#8AFFB9]">
            Our formula for SUCCESS
          </h2>
          <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-black">
            Test Automation
          </h1>
          <div className="mt-20 xl:px-30 lg:px-20 px-5">
            <ul>
              <li className="flex gap-5">
                <div className="aspect-square lg:w-36 lg:h-36 h-24 w-24  relative md:block hidden">
                  <Image src="/fundamental-icon.png" alt="" fill />
                </div>
                <div>
                  <h2 className="xl:text-2xl lg:text-xl text-lg font-black text-[#8AFFB9]">
                    Learn from scratch
                  </h2>
                  <h1 className="xl:text-5xl lg:text-4xl text-3xl font-black">
                    Test Automation Fundamentals-Selenium
                  </h1>
                  <p className="xl:text-xl lg:text-lg  lg:mt-10 mt-5">
                    We&apos;ll set the foundation for learning test automation
                    using Selenium and Java, gradually evolving the initial
                    automation code into reusable components.
                  </p>
                  <div className="mt-10 hover:scale-110 hover:translate-x-[5%] transition-all">
                    <Link
                      href="https://youtube.com/playlist?list=PLqi6r2vSamFM1V6mt6fNJmAmdAtnR7WK7&si=U16y7L3uf_szSPpi"
                      target="blank"
                      className=" xl:text-xl text-lg py-4 px-6 bg-[#8AFFB9] text-[#1F1F1F] font-bold rounded-md"
                    >
                      Videos
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-10 items-center mt-40 justify-center">
            {Icons.map((i) => (
              <Image className="w-20" src={i.icon} alt={i.name} key={i.name} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default page;
