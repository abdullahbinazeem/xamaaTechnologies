"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/container";

import RaybarkwillSample from "@/public/samples/R2b.jpg";
import SamosaKing from "@/public/samples/SamosaKing.jpg";
import WheelzDriving from "@/public/samples/4WheelzDriving.jpg";
import Eccomerce from "@/public/samples/Eccomerce.jpg";
import Studily from "@/public/samples/Studily.jpg";
import AlbCanada from "@/public/samples/AlbCanada.jpg";

import { MoveUpRight } from "lucide-react";
import { cn } from "@/libs/utils";

const samples = [
  {
    title: "R2B Frontrow Group",
    description:
      "Consulting website for rugby coaching and training programs. Created for former national Canadian rugby player, Ray Barkwill. ",
    link: "http://r2bfrontrow.com/",
    img: RaybarkwillSample,
  },
  {
    title: "AlbCanada Construction",
    description:
      "User-friendly website for a leading roofing contractor - AlbCanada Constrction, highlighting their services and projects to attract new clients. The site is optimized for both desktop and mobile viewing.",
    link: "https://albcanada.ca/",
    img: AlbCanada,
  },
  {
    title: "4 Wheelz Driving",
    description:
      "Driving School website based in Langford Victoria. Book lessons, road tests, and training courses. ",
    link: "https://4wheelzdriving.netlify.app/",
    img: WheelzDriving,
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
      <Container className="h-screen pt-40 md:min-h-[800px]">
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
                      index == sample + 1 ? "clickme" : "",
                      index == 0 && sample == 3 ? "clickme" : "",
                    )}
                  >
                    0{index + 1}
                  </li>
                ))}
              </ul>
            </div>
            <div className="m-auto md:w-[80%] lg:absolute lg:right-10 lg:w-[60%] xl:-top-[20%] xl:right-0 2xl:right-[-5vw] 2xl:w-[75%]">
              <Image src={samples[sample].img} alt={samples[sample].title} />
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
