"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Star } from "lucide-react";

import barkwill from "@/public/review/barkwill.png";

import Container from "@/components/container";

const Customer = () => {
  return (
    <div id="customers">
      <Container className="h-screen pt-40 md:min-h-[800px]">
        <div>
          <h2 className="text-lg font-bold text-[#8AFFB9] sm:text-xl md:text-2xl lg:text-3xl">
            Why our customers are saying
          </h2>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Reviews
          </h1>
        </div>
        <div className="mt-10">
          <ul className="grid grid-cols-1 gap-x-20 md:grid-cols-2 lg:grid-cols-3">
            <div className="border-[#D2D2D2 m-auto min-h-[300px] max-w-[380px] rounded-3xl border-2 bg-[#F0F0F0] px-8">
              <div className="m-auto mt-6 flex w-[75%] justify-evenly gap-2">
                <Star fill="#F8B84E" stroke="#F8B84E" size={32} />
                <Star fill="#F8B84E" stroke="#F8B84E" size={32} />
                <Star fill="#F8B84E" stroke="#F8B84E" size={32} />
                <Star fill="#F8B84E" stroke="#F8B84E" size={32} />
                <Star fill="#F8B84E" stroke="#F8B84E" size={32} />
              </div>
              <p className="mt-6 ">
                Their communication within the project was outstanding and I
                felt that they were very receptive to my requirements and
                desires regarding how I wanted to display my skills toward
                informing my potential clients about the services I offer.
              </p>
              <div className="flex items-center gap-2">
                <Image
                  src={barkwill}
                  alt="review"
                  className="w-12 rounded-full py-4"
                />
                <div>
                  <h1 className="text-lg font-bold">Ray Barkwill</h1>
                  <h3 className="text-xs text-[#696969]">
                    Former National Canadian Rugby Player & Owner of R2bfrontrow
                  </h3>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Customer;
