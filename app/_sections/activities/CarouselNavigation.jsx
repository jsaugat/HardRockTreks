import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export const CarouselNavigationButtons = ({
  activitiesSwiperContainerRef,
}) => {
  return (
    <div className="hidden lg:flex items-center gap-2 mx-auto justify-center">
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => activitiesSwiperContainerRef.current?.swiper?.slidePrev()}
        className="border-muted-foreground/50 hover:bg-primary hover:border-primary hover:text-primary-foreground"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => {
          console.log("Activites right nav clicked.")
          activitiesSwiperContainerRef.current?.swiper?.slideNext()
        }
        }
        className="border-muted-foreground/50 hover:bg-primary hover:border-primary hover:text-primary-foreground"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
};
