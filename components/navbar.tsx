"use client";

import Link from "next/link";
import React, { useState } from "react";

import { Menu, X } from "lucide-react";

import { Montserrat } from "next/font/google";
import { cn } from "@/libs/utils";

const montserrat = Montserrat({ subsets: ["latin"] });

interface navbarProps {
  links: {
    text: string;
    url: string;
  }[];
  logo: string;
  callToAction?: {
    text: string;
    url: string;
  };
}

const Navbar: React.FC<navbarProps> = ({ links, logo, callToAction }) => {
  const [navigation, setNavigation] = useState(false);

  return (
    <div>
      <div className="relative z-[100] mx-5 flex max-w-[1280px] items-center justify-between rounded-2xl  px-5 py-8 md:mx-10 md:px-10 xl:m-auto">
        <div className={montserrat.className}>
          <a href="/" className="cursor-pointer">
            <h2 className="  text-2xl font-black uppercase leading-5 text-[#2a2a2a] md:text-3xl lg:text-[40px] ">
              Xamaa <br />
              <span className="text-base font-black uppercase text-[#000] md:text-lg lg:text-xl">
                {logo}
              </span>
            </h2>
          </a>
        </div>
        <div className="hidden gap-5 md:flex lg:gap-10">
          {links.map((linkItem) => (
            <Link
              href={linkItem.url}
              key={linkItem.url + linkItem.text + "test-autolabs"}
              className="text-lg font-medium lg:text-xl"
            >
              {linkItem.text}
            </Link>
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
                : "pointer-events-none translate-y-[110%]  scale-y-0  ",
              "absolute bottom-0 left-0 z-10  w-full rounded-xl bg-[#13221E] py-10 transition-all",
            )}
          >
            <div className="flex flex-col gap-10 px-10">
              {links.map((linkItem) => (
                <Link
                  href={linkItem.url}
                  key={linkItem.url + linkItem.text + "test-autolabs"}
                  className="text-lg font-medium lg:text-xl"
                  onClick={() => {
                    setNavigation(!navigation);
                  }}
                >
                  {linkItem.text}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <Link
            href={callToAction?.url || "/"}
            className="rounded-[40px] border-2 border-[#33a560] px-5 py-3 text-lg lg:px-10 lg:py-4 lg:text-xl "
          >
            {callToAction?.text}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
