import React from 'react'
import packagesData from "@/data-access/packages.json";
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
  return (
    <>
      <Swiper
        ref={packagesSwiperContainerRef}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={false}
        // pagination={{ clickable: width && width < 768 ? false : true }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log({ swiper })}
        onSlideChange={() => console.log("slide change")}
        className="h-[440px] md:h-[500px]"
      >
        {packagesData.map((pkg) => (
          <SwiperSlide key={pkg.title} className='overflow-visible'>
            {width < 768 ? <SmallPackageCard pkg={pkg} /> : <LargePackageCard pkg={pkg} />}
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderNavigationButtons packagesSwiperContainerRef={packagesSwiperContainerRef} />
    </>
  )
}

