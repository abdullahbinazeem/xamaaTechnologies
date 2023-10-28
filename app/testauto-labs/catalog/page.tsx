import Container from "@/components/container";

import React from "react";
import Link from "next/link";

import Filter from "./_components/filter";

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
        <Filter />
      </Container>
    </div>
  );
};

export default page;
