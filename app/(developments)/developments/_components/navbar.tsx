"use client";

import Link from "next/link";
import React, { useState } from "react";

import { Menu, X } from "lucide-react";

import { Montserrat } from "next/font/google";
import { cn } from "@/libs/utils";

const montserrat = Montserrat({ subsets: ["latin"] });

const links = [
  {
    name: "Services",
    url: "#services",
  },
  {
    name: "Projects",
    url: "#works",
  },
  {
    name: "Customers",
    url: "#customers",
  },
];

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);

  return (
    <div className="absolute left-0 right-0 top-0 z-[100] mx-5 flex max-w-[1280px] items-center justify-between rounded-2xl px-0 py-8 text-white sm:px-5 md:mx-5 lg:m-auto">
      <div className={montserrat.className}>
        <a href="/developments" className="cursor-pointer">
          <h2 className="text-2xl font-black uppercase leading-5 md:text-3xl lg:text-4xl">
            Xamaa <br />
            <span className="text-base font-black uppercase text-[#8AFFB9] lg:text-xl">
              Developments
            </span>
          </h2>
        </a>
      </div>
      <div className="hidden gap-8 md:flex lg:gap-10">
        {links.map((linkItem) => (
          <a
            href={linkItem.url}
            key={linkItem.url + linkItem.name + " developments"}
            className="text-base font-medium transition-all hover:scale-110 hover:text-[#8AFFB9] lg:text-xl"
          >
            {linkItem.name}
          </a>
        ))}
      </div>
      <div className="block cursor-pointer md:hidden">
        {!navigation ? (
          <Menu
            color="white"
            size={40}
            strokeWidth={1}
            onClick={() => {
              setNavigation(!navigation);
            }}
          />
        ) : (
          <X
            color="white"
            size={40}
            strokeWidth={1}
            onClick={() => {
              setNavigation(!navigation);
            }}
          />
        )}
        <div
          className={cn(
            navigation
              ? "translate-y-[110%] scale-y-100"
              : "pointer-events-none translate-y-[110%]  scale-y-[0]  ",
            "absolute bottom-0 left-0 z-10  w-full rounded-xl bg-[#111] p-4 py-10 transition-all",
          )}
        >
          <div className="flex flex-col gap-10 px-10 font-black text-white transition-all ">
            {links.map((linkItem) => (
              <Link
                href={linkItem.url}
                key={linkItem.url + linkItem.name + " developments"}
                className="text-lg font-medium transition-all hover:translate-x-[5%] hover:scale-110 lg:text-xl"
                onClick={() => {
                  setNavigation(!navigation);
                }}
              >
                {linkItem.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <Link
          href="#contact"
          className="rounded-[40px] border-2 border-[#8AFFB9] px-8 py-2 text-lg lg:px-12 lg:py-3 lg:text-xl "
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
