import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

export const SliderNavigationButtons = ({ packagesSwiperContainerRef }) => {
  // State to track if arrow keys are pressed
  const [leftPressed, setLeftPressed] = useState(false);
  const [rightPressed, setRightPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        setLeftPressed(true);
        packagesSwiperContainerRef.current?.swiper?.slidePrev();
      } else if (event.key === "ArrowRight") {
        setRightPressed(true);
        packagesSwiperContainerRef.current?.swiper?.slideNext();
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === "ArrowLeft") {
        setLeftPressed(false);
      } else if (event.key === "ArrowRight") {
        setRightPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [packagesSwiperContainerRef]);

  return (
    <div className="hidden lg:flex items-center gap-2 mx-auto mt-5 justify-center">
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => packagesSwiperContainerRef.current?.swiper?.slidePrev()}
        className={`border-muted-foreground/50 hover:bg-primary hover:border-primary hover:text-primary-foreground ${leftPressed ? "bg-primary text-primary-foreground" : ""
          }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => packagesSwiperContainerRef.current?.swiper?.slideNext()}
        className={`border-muted-foreground/50 hover:bg-primary hover:border-primary hover:text-primary-foreground ${rightPressed ? "bg-primary text-primary-foreground" : ""
          }`}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
};
