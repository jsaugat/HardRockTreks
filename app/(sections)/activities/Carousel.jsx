import React, { useRef, useEffect, useState } from "react";
import activitiesData from "@/data/activities.json";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CarouselNavigationButtons } from "./CarouselNavigation";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import useWindowDimensions from "@/hooks/useWindowDimension";

export const ActivitiesCarousel = () => {
  const activitiesSwiperContainerRef = useRef(null);
  const { width } = useWindowDimensions();
  const [swiperInstance, setSwiperInstance] = useState(null); // Store Swiper instance
  const [isInView, setIsInView] = useState(false);

  // Set up IntersectionObserver to observe the carousel component
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsInView(entry.isIntersecting);
  //       // console.log({ isIntersecting: entry.isIntersecting, isInView });

  //     },
  //     { threshold: 1 } // Trigger when at least 50% of the carousel is in view
  //   );

  //   if (activitiesSwiperContainerRef.current) {
  //     observer.observe(activitiesSwiperContainerRef.current);
  //   }

  //   return () => {
  //     if (activitiesSwiperContainerRef.current) {
  //       observer.unobserve(activitiesSwiperContainerRef.current);
  //     }
  //   };
  // }, []);

  // Pause/Resume autoplay based on visibility
  // useEffect(() => {
  //   if (swiperInstance) {
  //     if (isInView) {
  //       swiperInstance.autoplay.resume();
  //     } else {
  //       swiperInstance.autoplay.pause();
  //     }
  //   }
  // }, [isInView, swiperInstance]);

  return (
    <>
      <Swiper
        ref={activitiesSwiperContainerRef}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={width && (width < 768 ? 1 : width > 1024 ? 3 : 2)}
        loop={true}
        // autoplay={{
        //   delay: width && width < 768 ? 3000 : 2500,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: false,
        // }}
        navigation={false}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => setSwiperInstance(swiper)} // Capture Swiper instance
        onSlideChange={() => console.log("Activity slide changed.")}
        className="h-[400px] md:h-[440px] mb-5"
      >
        {activitiesData.map((act) => (
          <SwiperSlide key={act.title} className="rounded-3xl">
            <Card className="relative h-[360px] md:h-[400px] w-full rounded-3xl overflow-hidden">
              <Image
                src={act.image}
                alt={act.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <h2 className="absolute z-10 left-4 bottom-4 text-4xl text-primary-foreground font-semibold font-familjenGrotesk uppercase">
                {act.title}
              </h2>
              <div className="absolute top-2 right-2 bg-foreground/30 text-secondary backdrop-blur-sm px-2 py-1 rounded-full">
                {act.noOfPackages} Packages
              </div>
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
