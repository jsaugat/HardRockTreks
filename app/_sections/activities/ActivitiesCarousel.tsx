import React from "react";
import activitiesData from "@/data-access/activities.json";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CarouselNavigationButtons } from "./CarouselNavigationButtons";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export const ActivitiesCarousel = () => {
  const activitiesSwiperContainerRef = useRef(null); // Type swiperContainerRef correctly
  return (
    <>
      <Swiper
        ref={activitiesSwiperContainerRef}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={false}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log({ swiper })}
        onSlideChange={() => console.log("slide change")}
        className="md:h-[460px]"
      >
        {activitiesData.map((act) => (
          <SwiperSlide key={act.title} className="rounded-3xl">
            <Card className="relative md:h-[400px] w-full rounded-3xl overflow-hidden">
              {/* IMAGE */}
              <Image
                src={act.image}
                alt={act.title}
                fill
                style={{ objectFit: "cover" }}
              />
              {/* TITLE */}
              <h2 className="absolute z-10 left-4 bottom-4 text-4xl text-primary-foreground font-semibold font-neueRegrade uppercase">
                {act.title}
              </h2>
              {/* PACKAGES NUMBER BADGE */}
              <div className="absolute top-2 right-2 bg-foreground/30 text-secondary backdrop-blur-sm px-2 py-1 rounded-full">
                {act.noOfPackages} Packages
              </div>
              {/* BLACK OVERLAY GRADIENT  */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/10 to-foreground opacity-80" />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <CarouselNavigationButtons
        activitiesSwiperContainerRef={activitiesSwiperContainerRef}
      />
    </>
  );
};
