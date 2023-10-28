"use client";

import Container from "@/components/container";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useCallback, useState } from "react";
import qs from "query-string";
import Link from "next/link";

import Image from "next/image";
import { cn } from "@/libs/utils";

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

const Filter = () => {
  const router = useRouter();

  const params = useSearchParams();
  const pathname = usePathname();

  const [query, setQuery] = useState<any>();

  const handleClick = useCallback(
    (label: string) => {
      let currentQuery = {};

      if (params) {
        currentQuery = qs.parse(params.toString());
      }

      const updatedQuery: any = {
        ...currentQuery,
        category: label,
      };

      if (params?.get("category") == label) {
        delete updatedQuery.category;
      }

      const url = qs.stringifyUrl(
        {
          url: "/testauto-labs/catalog",
          query: updatedQuery,
        },
        { skipNull: true }
      );

      router.push(url);

      console.log(qs.parse(params.toString()).category);
    },
    [params, router]
  );

  return (
    <div className="mt-10 md:mt-20 w-full">
      <div className=" md:justify-center md:gap-20 justify-evenly md:flex hidden">
        <p
          className={cn(
            qs.parse(params.toString()).category == "selenium with java"
              ? "bg-[#c4ffbd]"
              : "bg-[#bdffd8]",
            `hover:scale-105 transition-all md:text-lg font-bold p-4 md:py-4 md:px-6 rounded-3xl  cursor-pointer `
          )}
          onClick={() => {
            handleClick("selenium with java");
          }}
        >
          Selenium with Java
        </p>
        <p
          className={cn(
            qs.parse(params.toString()).category == "selenium with c#"
              ? "bg-[#c4ffbd]"
              : "bg-[#bdffd8]",
            `hover:scale-105 transition-all md:text-lg font-bold p-4 md:py-4 md:px-6 rounded-3xl  cursor-pointer `
          )}
          onClick={() => {
            handleClick("selenium with c#");
          }}
        >
          Selenium with C#
        </p>
      </div>
      {qs.parse(params.toString()).category == "selenium with java" ||
      qs.parse(params.toString()).category == null ? (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 md:mt-20 gap-10">
          <div className="w-full bg-white rounded-xl divide-y-2">
            <div className="rounded-t-xl relative w-full  aspect-video overflow-hidden">
              <Image
                alt="fundamentals of selenium"
                src="/trainings/fundamentals-tutorial.png"
                fill
                className="object-cover"
              />
            </div>
            <div className="py-3 px-4">
              <h1 className="text-lg font-bold">Basic Concept Series</h1>
              <Link
                target="_blank"
                href="https://youtube.com/playlist?list=PLqi6r2vSamFM1V6mt6fNJmAmdAtnR7WK7&si=U16y7L3uf_szSPpi"
              >
                <p className="mt-2 hover:underline  font-bold text-[#34be6b]">
                  View
                </p>
              </Link>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl divide-y-2">
            <div className="rounded-t-xl relative w-full  aspect-video overflow-hidden bg-gray-600"></div>
            <div className="py-3 px-4">
              <h1 className="text-lg font-bold">Intermediate Level Series</h1>
              <Link
                target="_blank"
                href="https://youtube.com/playlist?list=PLqi6r2vSamFM1V6mt6fNJmAmdAtnR7WK7&si=U16y7L3uf_szSPpi"
              >
                <p className="mt-2 hover:underline  font-bold text-[#34be6b]">
                  View
                </p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Filter;
