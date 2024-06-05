import Container from "@/components/container";
import Image from "next/image";

import logo from "@/public/assets/logos.png";

import React from "react";

const Companies = () => {
  return (
    <div>
      <Container className="border-y-2 border-[#CACACA] ">
        <div className="py-14 text-center">
          <h2 className="text-lg font-semibold text-[#555555] md:text-xl">
            Trust by companies around the world
          </h2>
          <Image
            src={logo}
            alt="Companies"
            className="m-auto mt-10 w-full lg:w-[80vw]"
          />
        </div>
      </Container>
    </div>
  );
};

export default Companies;
