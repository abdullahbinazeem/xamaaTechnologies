"use client";

import Link from "next/link";
import React, { useState } from "react";

import { Menu, X } from "lucide-react";

import { Montserrat } from "next/font/google";
import { cn } from "@/libs/utils";

const montserrat = Montserrat({ subsets: ["latin"] });

const links = [
  {
    name: "Home",
    url: "/",
  },
];

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);

  return (
    <div className="text-white flex z-[100] relative justify-between items-center py-8 px-5 md:px-10 rounded-2xl  max-w-[1280px] mx-5 md:mx-10 xl:m-auto">
      <div className={montserrat.className}>
        <a href="/" className="cursor-pointer">
          <h2 className=" uppercase text-2xl md:text-3xl lg:text-[40px] font-black leading-5 ">
            Xamaa <br />
            <span className="uppercase text-base md:text-lg lg:text-xl text-[#8AFFB9] font-black">
              Developments
            </span>
          </h2>
        </a>
      </div>
      <div className="gap-5 lg:gap-10 md:flex hidden">
        {links.map((linkItem) => (
          <Link
            href={linkItem.url}
            key={linkItem.url + linkItem.name + " developments"}
            className="lg:text-xl text-lg font-medium hover:text-[#8AFFB9] hover:scale-110 transition-all"
          >
            {linkItem.name}
          </Link>
        ))}
      </div>
      <div className="md:hidden block cursor-pointer">
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
              ? "scale-y-100 translate-y-[110%]"
              : "scale-y-[0] translate-y-[110%]  pointer-events-none  ",
            "transition-all z-10 absolute bottom-0  py-10 w-full left-0 bg-[#fff] rounded-xl"
          )}
        >
          <div className="flex flex-col px-10 gap-10 text-black font-black hover:translate-x-[5%] hover:scale-110 transition-all">
            {links.map((linkItem) => (
              <Link
                href={linkItem.url}
                key={linkItem.url + linkItem.name + " developments"}
                className="lg:text-xl text-lg font-medium"
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

      <div className="md:block hidden">
        <Link
          href="/"
          className="lg:text-xl text-lg py-3 lg:py-4 px-5 lg:px-10 border-[#8AFFB9] border-2 rounded-[40px] "
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
