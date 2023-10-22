"use client";

import Container from "@/components/container";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useCallback } from "react";
import qs from "query-string";
import Link from "next/link";

import Image from "next/image";

const navLinks = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Featured",
    url: "/",
  },
  {
    text: "Certifications",
    url: "/",
  },
];

const page = () => {
  //   const router = useRouter();

  //   const params = useSearchParams();
  //   const pathname = usePathname();

  //   const handleClick = useCallback(
  //     (label: string) => {
  //       let currentQuery = {};

  //       if (params) {
  //         currentQuery = qs.parse(params.toString());
  //       }

  //       const updatedQuery: any = {
  //         ...currentQuery,
  //         category: label,
  //       };

  //       if (params?.get("category") == label) {
  //         delete updatedQuery.category;
  //       }

  //       const url = qs.stringifyUrl(
  //         {
  //           url: "/testauto-labs/catalog",
  //           query: updatedQuery,
  //         },
  //         { skipNull: true }
  //       );

  //       router.push(url);
  //     },
  //     [params, router]
  //   );

  return (
    <div className="py-10 w-full min-h-[100vh] bg-[#dbdbdb]  relative ">
      <Container className="text-black">
        <Link href="/testauto-labs">
          <div className="text-[#black] mb-20 text-2xl cursor-pointer">
            <span className="text-4xl font-black mr-4">←</span>XAAMA TECH.
          </div>
        </Link>
        <h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-black text-[#313131]">
          Find top quality tutorials
        </h2>
        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-black">
          Our Catalog
        </h1>
        <div className="mt-10 md:mt-20 w-full">
          {/* <div className=" md:justify-center md:gap-20 justify-evenly md:flex hidden">
            <p
              className="hover:scale-105 transition-all md:text-lg font-bold p-4 md:py-4 md:px-6 rounded-3xl bg-[#bdffd8] cursor-pointer "
              onClick={() => {
                // handleClick("selenium");
              }}
            >
              Selenium
            </p>
            <p
              className="hover:scale-105 transition-all md:text-lg font-bold p-4 md:py-4 md:px-6 rounded-3xl bg-[#bddcff] cursor-pointer "
              onClick={() => {
                // handleClick("appium");
              }}
            >
              Appium
            </p>
            <p
              className="hover:scale-105 transition-all md:text-lg font-bold p-4 md:py-4 md:px-6 rounded-3xl bg-[#cfffbd] cursor-pointer "
              onClick={() => {
                // handleClick("certifications");
              }}
            >
              Certifcations
            </p>
          </div> */}
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 md:mt-20 gap-10">
            <div className="w-full bg-white rounded-xl divide-y-2">
              <div className="rounded-t-xl relative w-full  aspect-video overflow-hidden">
                <Image
                  alt="fundamentals of selenium"
                  src="/trainings/fundamentals-tutorial.jpeg"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h1 className="text-xl font-black">
                  Selenium - Zero to Hero series
                </h1>
                <Link href="https://youtube.com/playlist?list=PLqi6r2vSamFM1V6mt6fNJmAmdAtnR7WK7&si=U16y7L3uf_szSPpi">
                  <p className="mt-6 hover:underline  font-bold text-[#34be6b]">
                    View
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
