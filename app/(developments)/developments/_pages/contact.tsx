"use client";

import Image from "next/image";
import React, { useState } from "react";

import banner from "@/public/assets/banner.svg";

import Container from "@/components/container";

const Contact = () => {
  return (
    <div id="contact">
      <Container className="">
        <div className="relative grid place-content-center rounded-[50px] bg-white py-20">
          <Image
            src={banner}
            alt=""
            className="absolute -left-5 -top-14 z-10 w-48"
          />
          <h1 className="text-5xl font-bold">Receive a Free UI sample now!</h1>
          <h3 className="mt-4 text-center text-xl">
            Want to test us out? Grab a free design,
            <br /> no strings attached.
          </h3>
          <form
            action="https://formsubmit.co/azeemtariq@hotmail.com"
            method="POST"
          >
            <div className="flex w-full items-start">
              <div className="flex h-full grow flex-col justify-between ">
                <input
                  className=" focus:shadow-outline rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                  name="first name"
                  type="text"
                  placeholder="First Name*"
                  required
                />

                <input
                  className=" focus:shadow-outline rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                  name="email"
                  type="email"
                  placeholder="Email*"
                  required
                />
              </div>
              <div className="grow">
                <textarea
                  name="message"
                  placeholder="Message*"
                  className="focus:shadow-outline h-32 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                  required
                ></textarea>
              </div>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="focus:shadow-outline w-full rounded-lg bg-blue-900 p-3 text-sm font-bold uppercase tracking-wide 
                      text-gray-100 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
