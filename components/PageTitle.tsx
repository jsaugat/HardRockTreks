import { cn } from "@/lib/utils";
import React from "react";
import Balancer from "react-wrap-balancer";

interface TitleProps {
  title: string;
  description?: string;
  className?: string;
}

export const PageTitle: React.FC<TitleProps> = ({ title, description, className }) => {
  return (
    <h1
      className={cn(
        "text-center text-3xl sm:text-4xl lg:text-4xl lg:mb-2 text-primary font-familjenGrotesk font-semibold capitalize",
        className
      )}
    >
      {title}
      {description && <span className="text-base md:text-lg text-muted-foreground font-normal block leading-tight">
        <Balancer>
          {description}
        </Balancer>
      </span>}
    </h1>
  );
};
