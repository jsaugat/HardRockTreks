import React from "react";

export const Headline = () => {
  return (
    <div className="hero-header text-4xl tracking-tighter sm:text-5xl lg:text-[5rem] font-neueRegrade uppercase w-[400px] lg:w-[1300px] font-semibold flex flex-col justify-center">
      <h1 className="bg-gradient-to-tr from-background via-background to-primary bg-clip-text text-transparent drop-shadow-md">
        Turning your dreams into
      </h1>
      <h1 className="bg-gradient-to-br from-orange-300 via-background to-white bg-clip-text text-transparent drop-shadow-md">
        lifelong adventures
      </h1>
    </div>
  );
};
