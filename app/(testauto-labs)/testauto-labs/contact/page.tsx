import Navbar from "@/components/navbar";
import React from "react";

const navLinks = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Tutorials",
    url: "/testauto-labs/catalog",
  },
];
export default function page() {
  return (
    <div className="flex h-[100vh] justify-center overflow-x-hidden bg-[#111] py-10 text-white">
      <div>
        <Navbar
          links={navLinks}
          logo="Test-Auto Labs"
          callToAction={{ text: "Get Started", url: "/testauto-labs/contact" }}
        />
        <div className="mt-10 flex w-screen items-center justify-center text-black">
          <div className="container mx-auto my-4 max-w-[1200px] px-4 md:px-10  ">
            <div className=" my-4 w-full rounded-2xl bg-white  p-8  shadow-2xl md:px-12 lg:px-20">
              <div className="flex">
                <h1 className="text-5xl font-bold uppercase">
                  Send us a <br /> message
                </h1>
              </div>
              <form
                action="https://formsubmit.co/azeemtariq@hotmail.com"
                method="POST"
              >
                <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <input
                    className=" focus:shadow-outline mt-2 rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                    name="first name"
                    type="text"
                    placeholder="First Name*"
                    required
                  />
                  <input
                    className=" focus:shadow-outline mt-2 rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                    name="last name"
                    type="text"
                    placeholder="Last Name"
                  />
                  <input
                    className=" focus:shadow-outline mt-2 rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                    name="email"
                    type="email"
                    placeholder="Email*"
                    required
                  />
                  <input
                    className=" focus:shadow-outline mt-2 rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                    name="phone number"
                    type="number"
                    placeholder="Phone"
                  />
                </div>
                <div className="my-4">
                  <textarea
                    name="message"
                    placeholder="Message*"
                    className="focus:shadow-outline mt-2 h-32 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                    required
                  ></textarea>
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
          </div>
        </div>
      </div>
    </div>
  );
}
