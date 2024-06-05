import Image from "next/image";
import React from "react";

import Logo from "@/app/logo.png";
import Container from "@/components/container";

const Footer = () => {
  return (
    <footer id="footer">
      <Container className="bg-[#101010] pb-10 pt-20">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="mb-4 flex flex-col sm:mb-0">
            <span className="  text-4xl font-black  uppercase text-white">
              Xamaa
            </span>
            <span className="mt-2  text-xl  font-black   uppercase text-[#8AFFB9]">
              Developments
            </span>
          </a>
          <ul className="mb-6 mt-10 flex flex-wrap items-center text-sm font-medium text-slate-200 sm:mb-0  sm:mt-0">
            <li>
              <a href="#services" className="me-4 hover:underline md:me-6">
                Services
              </a>
            </li>
            <li>
              <a href="#customers" className="me-4 hover:underline md:me-6">
                Reviews
              </a>
            </li>
            <li>
              <a href="#works" className="me-4 hover:underline md:me-6">
                Projects
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-slate-200  sm:mx-auto lg:my-8" />
        <span className="block text-sm text-slate-200  sm:text-center">
          © 2024{" "}
          <a target="_blank" href="https://xaama.tech/" className="underline">
            Xamaa Technlogies Ltd™
          </a>
          . All Rights Reserved.
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
