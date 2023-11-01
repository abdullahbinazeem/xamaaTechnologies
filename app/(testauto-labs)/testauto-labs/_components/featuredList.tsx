import Banner from "./banner";
import Container from "@/components/container";

import Image from "next/image";

import appium from "@/public/icons/appium.svg";
import selenium from "@/public/icons/selenium.svg";
import cucumber from "@/public/icons/cucumber.svg";
import cypress from "@/public/icons/cypress.png";
import gatling from "@/public/icons/gatling.png";
import jmeter from "@/public/icons/jmeter.svg";

import auto from "@/public/fundamental-icon.png";

import Link from "next/link";

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

const FeaturedList = () => {
  return (
    <div className="py-40 w-full bg-[#1F1F1F] relative ">
      <Banner testList={["TEST AUTOMATION", "TRAINING", "CERTIFICATION"]} />
      <Container className="text-white">
        <h2 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-black text-[#8AFFB9]">
          Our formula for SUCCESS
        </h2>
        <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-black">
          Test Automation
        </h1>
        <div className="mt-20 hover:scale-110 transition-all text-center">
          <Link
            href="/testauto-labs/catalog"
            target="blank"
            className=" xl:text-2xl text-xl py-4 px-6 transition-all hover:bg-[#363636] text-[#8AFFB9] underline underline-offset-4 font-bold rounded-md"
          >
            View Our Tutorial Catalog
          </Link>
        </div>
        <div className="mt-20 xl:px-30 lg:px-20 md:px-5 px-0">
          <ul>
            <li className="md:flex gap-5">
              <div className="aspect-square lg:w-36 lg:h-36 h-24 w-24  relative md:m-0 mb-5">
                <Image src={auto} alt="" fill />
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
  );
};

export default FeaturedList;
