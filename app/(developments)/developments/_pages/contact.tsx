"use client";

import Image from "next/image";
import React, { useState } from "react";

import banner from "@/public/assets/banner.svg";

import Container from "@/components/container";

const Contact = () => {
  return (
    <div id="contact" className="bg-white md:bg-transparent">
      <Container className="mb-20">
        <div className="relative grid place-content-center rounded-[50px] bg-white pb-10 pt-20 md:shadow-[20px_20px_5px_5px_#DFFBEA]">
          <Image
            src={banner}
            alt=""
            className="absolute -left-12 -top-6 z-10 w-28 md:-left-4 md:-top-10 md:w-36 lg:-left-5 lg:-top-14 lg:w-48"
          />
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Receive a Free UI sample now!
          </h1>
          <h3 className="mt-4 text-center md:text-lg lg:text-xl">
            Want to test us out? Grab a free design,
            <br /> no strings attached.
          </h3>
          <form
            action="https://formsubmit.co/abdullahbinazeem06@gmail.com"
            method="POST"
            className="mt-12"
          >
            <div className="flex w-full flex-col items-start gap-x-12 md:flex-row">
              <div className="flex h-full w-full grow flex-col justify-between gap-y-5">
                <div>
                  <h2 className="mb-2 w-full text-lg font-semibold">
                    Name{" "}
                    <span className="text-2xl font-bold text-red-500">*</span>
                  </h2>
                  <input
                    className="focus:shadow-outline box-border w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                    name="first name"
                    type="text"
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <h2 className="mb-2 text-lg font-semibold">
                    Email{" "}
                    <span className="text-2xl font-bold text-red-500">*</span>
                  </h2>
                  <input
                    className="focus:shadow-outline box-border w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <input
                  type="hidden"
                  name="_next"
                  value="http://xaama.tech"
                ></input>
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Your online form was recieved by Xamaa Technologies. We will be in touch shortly!"
                ></input>
              </div>
              <div className="mt-4 flex w-full grow flex-col self-stretch md:mt-0">
                <h2 className="mb-2 text-lg font-semibold">
                  Description of project{" "}
                  <span className="text-2xl font-bold text-red-500">*</span>
                </h2>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="focus:shadow-outline h-full max-h-[300px] min-h-[100px] w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                  required
                ></textarea>
              </div>
            </div>
            <div className="my-6 text-center">
              <button
                className="focus:shadow-outline  rounded-lg bg-[#5ad28a] px-5 py-3 font-bold uppercase tracking-wide 
                      text-gray-100 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
