import useWindowDimensions from "@/hooks/useWindowDimension";
import React from "react";

export const Headline = () => {
  const { width, height } = useWindowDimensions();
  return width && width < 768 ? <SmallHeadline /> : <LargeHeadline />;
};

// MOBILE
const SmallHeadline = () => {
  return (
    <h1 className="text-5xl font-neueRegrade uppercase text-primary-foreground text-center font-bold">
      Adventures beyound dreams.
    </h1>
  );
};
// DESKTOP
const LargeHeadline = () => {
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
