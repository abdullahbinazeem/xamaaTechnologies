import React from "react";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const SplashScreen = ({ text }: { text: string }) => {
  return (
    <div className={montserrat.className}>
      <div className="text-gradient  pointer-events-none absolute left-0 right-0 top-[50%] m-auto translate-y-[-50%] select-none overflow-hidden py-20 text-center text-[20vw] font-black leading-[85%] ">
        {text}
      </div>
    </div>
  );
};

export default SplashScreen;
