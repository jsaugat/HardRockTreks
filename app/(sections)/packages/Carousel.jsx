import React, { useEffect, useState } from 'react'
import packagesData from "@/data/packages.json";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SliderNavigationButtons } from "./CarouselNavigation";
import { useRef } from "react";
import useWindowDimensions from '@/hooks/useWindowDimension';
import { SmallPackageCard } from './PackageCardSmall';
import { LargePackageCard } from './PackageCardLarge';

export const PackagesCarousel = () => {
  const packagesSwiperContainerRef = useRef(null); // Type swiperContainerRef correctly
  const { width } = useWindowDimensions();

  const [swiperInstance, setSwiperInstance] = useState(null); // Store Swiper instance
  const [isInView, setIsInView] = useState(false);

  // Set up IntersectionObserver to observe the carousel component
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 1 } // Trigger when at least 50% of the carousel is in view
    );

    if (packagesSwiperContainerRef.current) {
      observer.observe(packagesSwiperContainerRef.current);
    }

    return () => {
      if (packagesSwiperContainerRef.current) {
        observer.unobserve(packagesSwiperContainerRef.current);
      }
    };
  }, []);

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
        ref={packagesSwiperContainerRef}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        // autoplay={{
        //   delay: 8000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
        navigation={false}
        // pagination={{ clickable: width && width < 768 ? false : true }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={() => console.log("Package slide changed.")}
        className="h-[440px] md:h-[520px]"
      >
        {packagesData.map((pkg) => (
          <SwiperSlide key={pkg.title} className="overflow-visible">
            <div className="block lg:hidden">
              {/* Small Package Card for smaller screens */}
              <SmallPackageCard pkg={pkg} />
            </div>
            <div className="hidden lg:block">
              {/* Large Package Card for larger screens */}
              <LargePackageCard pkg={pkg} />
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
      <SliderNavigationButtons packagesSwiperContainerRef={packagesSwiperContainerRef} />
    </>
  )
}

