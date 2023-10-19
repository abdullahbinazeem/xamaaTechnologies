import React from "react";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const SplashScreen = ({ text }: { text: string }) => {
  return (
    <div className={montserrat.className}>
      <div className="pointer-events-none  select-none overflow-hidden py-20 text-gradient text-center text-[20vw] font-black absolute left-0 right-0 top-[50%] translate-y-[-50%] m-auto leading-[85%] ">
        {text}
      </div>
    </div>
  );
};

export default SplashScreen;
