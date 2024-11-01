import React from "react";

export const Headline = () => {
  return (
    <div className="hero-header text-4xl tracking-tighter sm:text-5xl lg:text-[5rem] font-neueRegrade uppercase w-[400px] lg:w-[1300px] font-bold flex flex-col justify-center">
      <h1 className="bg-gradient-to-br from-primary-foreground via-primary-foreground to-primary-foreground bg-clip-text text-transparent drop-shadow-lg">
        Turning your dreams into
      </h1>
      <h1 className="bg-gradient-to-br from-primary-foreground via-background to-white bg-clip-text text-transparent drop-shadow-md">
        lifelong adventures
      </h1>
    </div>
  );
};
