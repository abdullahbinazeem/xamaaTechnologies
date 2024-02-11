import React from "react";

import Hero from "./_pages/hero";
import Solutions from "./_pages/solutions";
import Work from "./_pages/work";
import Companies from "./_components/logo";
import Customer from "./_pages/customers";
import Contact from "./_pages/contact";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="bg-[#F5F5F5]">
        <Companies />
        <Work />
        <Solutions />
        <Customer />
        <Contact />
      </div>
    </div>
  );
};

export default page;
