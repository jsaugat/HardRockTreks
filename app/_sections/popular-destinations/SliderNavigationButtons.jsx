import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export const SliderNavigationButtons = ({
  swiperRef,
}) => {
  return (
    <div className="flex items-center gap-2 mx-auto mt-5 justify-center">
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => swiperRef.current?.swiper?.slidePrev()}
        className="border-muted-foreground/50 hover:bg-primary hover:text-primary-foreground"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => swiperRef.current?.swiper?.slideNext()}
        className="border-muted-foreground/50 hover:bg-primary hover:text-primary-foreground"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
};