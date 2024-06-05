import React from "react";
import Image from "next/image";

import Container from "@/components/container";

import design from "@/public/icons/services/design.svg";
import development from "@/public/icons/services/development.svg";
import seo from "@/public/icons/services/seo.svg";
import socials from "@/public/icons/services/socials.svg";
import { cn } from "@/libs/utils";
import Link from "next/link";

const services = [
  {
    title: "Website Development",
    description:
      "Increase your leads and client base now! By  letting us help you to create a fully customized website.",
    icon: development,
    bgColor: "#E8FFF1",
  },
  {
    title: "Design",
    description:
      "Need a logo, business card, flyers, website designs, etc. With our experienced help we can help you create all those things!",
    icon: design,
    bgColor: "#ffdbd9",
  },
  {
    title: "Search Engine Optimization",
    description:
      "We optimize your website to rank higher on search engine and attract more traffic",
    icon: seo,
    bgColor: "#FFFCE6",
  },
  {
    title: "Social Media Management",
    description:
      "Transform your social media to pump out quality content, daily activity, and analytics monitoring.",
    icon: socials,
    bgColor: "#E8F3FF",
  },
];
const Solutions = () => {
  return (
    <div className="md:min-h-[800px]">
      <Container className="mt-36 min-h-[100vh] pb-32 ">
        <h1
          className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
          id="services"
        >
          Our Quality <span className="text-[#8AFFB9]">&</span> Cost <br />{" "}
          Effective Solutions
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 sm:gap-y-32 md:mt-20">
          {services.map((service) => (
            <div
              className="max-w-[350px] items-start gap-x-8 pl-4 sm:max-w-none sm:p-0 lg:flex"
              key={service.title}
            >
              <div
                className={cn(
                  `relative mb-10 aspect-square w-24 min-w-[80px] rounded-2xl lg:w-28  lg:pb-0`,
                )}
                style={{ backgroundColor: service.bgColor }}
              >
                <Image
                  src={service.icon}
                  alt="development"
                  fill
                  className="p-4 lg:p-6"
                />
              </div>
              <div className="basis-3/4">
                <h1 className="text-2xl sm:text-3xl">{service.title}</h1>
                <p className=" mt-5 w-full leading-[120%] text-[#464646]  md:w-[90%] lg:w-[70%]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-32 text-center transition-all hover:scale-110">
          <a
            href="#contact"
            className="rounded-md bg-[#8AFFB9] px-14 py-5 text-lg font-bold "
          >
            Start Now
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Solutions;
