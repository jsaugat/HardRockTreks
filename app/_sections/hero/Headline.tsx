import React from "react";
import Balancer from "react-wrap-balancer";

export const Headline = () => {
  return (
    <>
      {/* Show only on small screens */}
      <div className="block md:hidden">
        <SmallHeadline />
      </div>

      {/* Show only on medium and larger screens */}
      <div className="hidden md:block">
        <LargeHeadline />
      </div>
    </>
  );
};

// MOBILE
const SmallHeadline = () => {
  return (
    <h1 className="text-5xl sm:text-6xl text-center font-familjenGrotesk uppercase text-primary-foreground font-bold drop-shadow-md">
      <span
        // className="bg-clip-text text-transparent bg-gradient-to-br from-primary-foreground via-primary-foreground to-[#366fff] drop-shadow-[0_1px_10px_rgba(59,130,246,0.5)]"
      >
        <Balancer>From Trails to Summits</Balancer>
      </span>
      <span className="text-xl font-semibold block">Your Next Adventure Awaits</span>
    </h1>
  );
};

// DESKTOP
const LargeHeadline = () => {
  return (
    <div className="hero-header text-4xl tracking-tighter sm:text-5xl lg:text-[5rem] font-familjenGrotesk uppercase w-[400px] lg:w-[1300px] font-bold flex flex-col justify-center">
      <h1 className="bg-gradient-to-tr from-primary-foreground via-primary-foreground to-primary bg-clip-text text-transparent drop-shadow-lg">
        Turning your dreams into
      </h1>
      <h1 className="bg-gradient-to-tr from-orange-600 via-primary-foreground to-primary-foreground bg-clip-text text-transparent drop-shadow-md">
        lifelong adventures
      </h1>
    </div>
  );
};
