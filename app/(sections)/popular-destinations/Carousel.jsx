import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SliderNavigationButtons } from "./CarouselNavigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import popularDestinations from "@/data/popular-destinations.json";

export const DestinationsCarousel = () => {
  const destinationsSwiperRef = useRef(null); // Ref for Intersection Observer
  const [swiperInstance, setSwiperInstance] = useState(null); // Store Swiper instance
  const [isInView, setIsInView] = useState(false);

  // Set up IntersectionObserver to observe the carousel component
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        // console.log({ isIntersecting: entry.isIntersecting });
      },
      { threshold: 1 } // Trigger when 100% of the carousel is in view
    );

    if (destinationsSwiperRef.current) {
      observer.observe(destinationsSwiperRef.current);
    }

    return () => {
      if (destinationsSwiperRef.current) {
        observer.unobserve(destinationsSwiperRef.current);
      }
    };
  }, []);

  // Start/Stop autoplay based on visibility
  // useEffect(() => {
  //   if (swiperInstance) {
  //     if (isInView) {
  //       swiperInstance.autoplay.start(); // Start autoplay
  //     } else {
  //       swiperInstance.autoplay.stop(); // Stop autoplay
  //     }
  //   }
  // }, [isInView, swiperInstance]);

  return (
    <>
      <Swiper
        ref={destinationsSwiperRef}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: false,
        // }}
        navigation={false}
        pagination={{ clickable: true }}
        // Capture the Swiper instance here
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={() => console.log("Destination slide changed")}
        className="h-[440px] lg:h-[480px] mb-5"
      >
        {popularDestinations.map((destination) => (
          <SwiperSlide key={destination.id}>
            <div className="relative w-full h-[400px] lg:h-[440px] rounded-3xl overflow-hidden">
              <Image
                src={destination.image}
                alt={destination.title}
                fill
                className="rounded-xl"
                style={{
                  objectFit: "cover",
                  objectPosition:
                    destination.id === "manaslu1"
                      ? "center 15%"
                      : destination.id === "annapurna1"
                        ? "center 40%"
                        : destination.id === "everest1"
                          ? "center 65%"
                          : "",
                }}
              />
              {/* OVERLAY GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-50% via-foreground/50 to-foreground/50 opacity-80 rounded-xl" />
              {/* TITLE */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-foreground text-center text-4xl w-full p-4 lg:text-6xl font-semibold font-familjenGrotesk uppercase">
                <span className="drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r via-secondary from-secondary to-secondary/50">
                  {destination.title}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderNavigationButtons swiperRef={destinationsSwiperRef} />
    </>
  );
};
