"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/container";

import LangfordmanSample from "@/public/samples/langfordman.png";
import RaybarkwillSample from "@/public/samples/R2b.png";
import SamosaKing from "@/public/samples/SamosaKing.png";
import Eccomerce from "@/public/samples/Eccomerce.png";

import { MoveUpRight } from "lucide-react";
import { cn } from "@/libs/utils";

const samples = [
  {
    title: "Tarp Fabrics Shop",
    description:
      " Full E-commerce website for LangfordManFabrics company. Within the website you can add items to the cart, customize colors, and checkout via Credit Card.",
    link: "https://langfordman.ca/",
    img: LangfordmanSample,
  },
  {
    title: "R2B Frontrow Group",
    description:
      "Consulting website for rugby coaching and training programs. Created for former national Canadian rugby player, Ray Barkwill. ",
    link: "http://r2bfrontrow.com/",
    img: RaybarkwillSample,
  },
  {
    title: "Samosa King",
    description:
      "Food truck website for authentic pakistani food in Victoria, BC. View menu, their mission and contact them through the website.",
    link: "https://www.alrahman.ca/",
    img: SamosaKing,
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Backend dashboard to manage your E-commerce site. Add products, categories, shipping methods, view orders and more.",
    link: "https://freds-ecom-dashboard.vercel.app/",
    img: Eccomerce,
  },
];

const Work = () => {
  const [sample, setSample] = useState(0);

  return (
    <div id="works">
      <Container className="min-h-[100vh] pt-40">
        <div>
          <h2 className="text-lg font-bold text-[#8AFFB9] sm:text-xl md:text-2xl lg:text-3xl">
            Why customers choose us!
          </h2>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Our Works
          </h1>
          <div className="relative mt-20 w-full lg:ml-28">
            <div className="-left-32  mb-10 md:px-20 lg:absolute lg:p-0">
              <ul className="flex justify-center gap-8 text-3xl font-bold sm:gap-12 lg:flex-col lg:justify-normal xl:gap-16 xl:text-4xl">
                {samples.map((item, index) => (
                  <li
                    key={item.title}
                    onClick={() => {
                      setSample(index);
                    }}
                    className={cn(
                      `cursor-pointer py-2 transition-all hover:scale-125 lg:border-b-0 lg:pl-4`,
                      index == sample
                        ? `border-b-4 border-[#00FF66] lg:border-l-8`
                        : "border-0 opacity-40",
                    )}
                  >
                    0{index + 1}
                  </li>
                ))}
              </ul>
            </div>
            <div className="m-auto md:w-[80%] lg:absolute lg:right-10 lg:w-[60%] xl:-top-[20%] xl:right-0 2xl:right-[-5vw] 2xl:w-[75%]">
              <Image
                src={samples[sample].img}
                alt="Tarp Fabrics Shop Samples"
              />
            </div>
            <div className="relative mt-10 md:px-20 lg:mt-0 lg:p-0">
              <h2 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                {samples[sample].title}
              </h2>

              <p className="mb-10 mt-6 text-lg text-[#312D2D] lg:max-w-[350px] xl:max-w-[400px]">
                {samples[sample].description}
              </p>
              <Link
                href={samples[sample].link}
                className="flex items-center gap-4 text-xl font-medium text-[#8AFFB9] md:text-2xl lg:text-3xl"
                target="_blank"
              >
                View
                <MoveUpRight
                  strokeWidth={2}
                  className="h-6 w-6 lg:h-10 lg:w-10"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Work;
