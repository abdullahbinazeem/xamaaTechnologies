import React from "react";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const Banner = ({ testList }: { testList: string[] }) => {
  return (
    <div className={montserrat.className}>
      <div className="z-10 shadow-lg overflow-x-hidden shadow-[#6fedc144] flex gap-10 absolute overflow-hidden w-[105%] left-[-2.5%] top-0 translate-y-[-50%] justify-evenly rotate-2 py-5 bg-[#6FEDC0]">
        {testList.map((item) => (
          <p
            key={item}
            className="text-[3vw] md:text-[3.5vw] text-[#202020] font-black"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Banner;
