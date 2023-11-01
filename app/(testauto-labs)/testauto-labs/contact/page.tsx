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
    <div className="text-white bg-[#111] h-[100vh] overflow-x-hidden flex justify-center py-10">
      <div>
        <Navbar
          links={navLinks}
          logo="Test-Auto Labs"
          callToAction={{ text: "Get Started", url: "/testauto-labs/contact" }}
        />
        <div className="flex justify-center items-center w-screen mt-10 text-black">
          <div className="container max-w-[1200px] mx-auto my-4 px-4 md:px-10  ">
            <div className=" w-full p-8 my-4 md:px-12  lg:px-20  bg-white rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold uppercase text-5xl">
                  Send us a <br /> message
                </h1>
              </div>
              <form
                action="https://formsubmit.co/abdullahbinazeem06@gmail.com"
                method="POST"
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                  <input
                    className=" bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    name="first name"
                    type="text"
                    placeholder="First Name*"
                    required
                  />
                  <input
                    className=" bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    name="last name"
                    type="text"
                    placeholder="Last Name"
                  />
                  <input
                    className=" bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    name="email"
                    type="email"
                    placeholder="Email*"
                    required
                  />
                  <input
                    className=" bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    name="phone number"
                    type="number"
                    placeholder="Phone"
                  />
                </div>
                <div className="my-4">
                  <textarea
                    name="message"
                    placeholder="Message*"
                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    required
                  ></textarea>
                </div>
                <div className="my-2 w-1/2 lg:w-1/4">
                  <button
                    className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
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
