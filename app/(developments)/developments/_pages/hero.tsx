import React from "react";
import background from "@/public/assets/background.svg";
import Image from "next/image";
import Container from "@/components/container";

const carousel = [
  {
    name: "studily",
  },
  {
    name: "langfordman",
  },
  {
    name: "samosaKing",
  },
  {
    name: "r2b",
  },
  {
    name: "jewelery",
  },
  {
    name: "chauffeur",
  },
  {
    name: "boldMeats",
  },
  {
    name: "portfolio",
  },
];

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 h-[50%] w-full md:right-0 md:top-0 md:h-full md:w-[50%]">
        <Image
          fill
          src={background}
          alt="background"
          className="object-cover opacity-40"
        />
      </div>
      <div className="grid min-h-[100vh] w-full bg-[#040404] text-white">
        <Container className="relative z-10 mt-[10vh] text-center">
          <div className="my-32">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-7xl lg:text-8xl">
              Build, Grow, And <br />
              Manage <span className="text-[#8AFFB9]">Your Brand </span>
            </h1>
            <h2 className="mt-5  font-medium sm:text-lg md:text-xl lg:text-2xl">
              At Xamaa Development we make{" "}
              <span className="text-[#8AFFB9]">beautiful, responsive</span>
              <br className="hidden sm:block" /> and especially{" "}
              <span className="text-[#8AFFB9]">AFFORDABLE</span> websites
            </h2>
            <form
              className="mt-10 w-full text-center"
              action="https://formsubmit.co/abdullahbinazeem06@gmail.com"
              method="POST"
            >
              <div className="mx-auto flex max-w-[600px]  rounded-[50px] bg-[#191919] px-4 py-4 text-black lg:px-10">
                <input
                  name="email"
                  type="email"
                  className="box-border basis-3/5 overflow-hidden   bg-transparent text-left text-sm  text-[#B6B6B6] opacity-100 md:basis-2/3  md:text-base"
                  placeholder="Enter your email"
                  required
                />
                <button className="md:basis-basis-1/3 md:text-md min-w-[100px] flex-1 basis-2/5 rounded-[50px] bg-[#8AFFB9] py-2 text-center text-sm font-black md:py-4 xl:text-lg">
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </Container>
        <a href="#works">
          <div className="slider relative pt-10">
            <div className={`carousel whitespace-nowrap`}>
              {carousel.map((item) => (
                <Image
                  width={500}
                  height={300}
                  src={`/web-projects/${item.name}.jpg`}
                  alt={item.name}
                  className="inline-block w-[100vw] md:w-[50vw] lg:w-[33vw]"
                  key={item.name}
                />
              ))}
              {carousel.map((item) => (
                <Image
                  width={500}
                  height={300}
                  src={`/web-projects/${item.name}.jpg`}
                  alt={item.name}
                  className="inline-block w-[100vw] md:w-[50vw] lg:w-[33vw]"
                  key={item.name}
                />
              ))}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
