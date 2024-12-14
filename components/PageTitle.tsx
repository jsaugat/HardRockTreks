import { cn } from "@/lib/utils";
import React from "react";

interface TitleProps {
  text: string;
  className?: string;
}

export const PageTitle: React.FC<TitleProps> = ({ text, className }) => {
  return (
    <h1
      className={cn(
        "text-3xl sm:text-4xl lg:text-4xl lg:mb-2 text-primary font-familjenGrotesk font-semibold capitalize",
        className
      )}
    >
      {text}
    </h1>
  );
};
