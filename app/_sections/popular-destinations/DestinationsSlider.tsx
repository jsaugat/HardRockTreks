// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.css";
import { SliderNavigationButtons } from "./SliderNavigationButtons";
import { useRef } from "react";
import Image from "next/image";
import popularDestinations from "@/data-access/popular-destinations.json";

export const DestinationsSlider = () => {
  const swiperContainerRef = useRef(null); // Type swiperContainerRef correctly

  return (
    <>
      <Swiper
        ref={swiperContainerRef}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        navigation={false}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log({ swiper })}
        onSlideChange={() => console.log("slide change")}
        className="lg:h-[460px]"
      >
        {popularDestinations.map((destination) => (
          <SwiperSlide key={destination.id} className="">
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              <Image
                src={destination.image}
                alt={destination.alt}
                layout="fill"
                className="rounded-xl"
                style={{
                  objectFit: "cover",
                  objectPosition: "right center",
                }}
              />
              {/* OVERLAY GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/10 to-foreground/50 opacity-80 rounded-xl" />
              {/* TITLE */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-foreground text-center lg:text-7xl font-semibold font-neueRegrade uppercase">
                <span className="drop-shadow-lg">{destination.title}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderNavigationButtons swiperRef={swiperContainerRef} />
    </>
  );
};
