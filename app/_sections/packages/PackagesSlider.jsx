import React from 'react'
import packagesData from "@/data-access/packages.json";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.css";
import { SliderNavigationButtons } from "./SliderNavigationButtons";
import { useRef } from "react";
import { Card } from '@/components/ui/card';
import { ArrowUpRight, ChartColumn, SunDim } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const PackagesSlider = () => {
  const packagesSwiperContainerRef = useRef(null); // Type swiperContainerRef correctly
  return (
    <>
      <Swiper
        ref={packagesSwiperContainerRef}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={false}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log({ swiper })}
        onSlideChange={() => console.log("slide change")}
        className="md:h-[500px]"
      >
        {packagesData.map((pkg) => (
          <SwiperSlide className='overflow-visible'>
            <PackageCard pkg={pkg} key={pkg.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderNavigationButtons packagesSwiperContainerRef={packagesSwiperContainerRef} />
    </>
  )
}

// New functional component for rendering each package card
const PackageCard = ({ pkg }) => {
  const { title, subtitle, description, image, duration, difficulty, price } = pkg;
  return (
    <Card
      key={title}
      className="h-full p-3 pb-8 flex rounded-3xl"
    >
      {/* //? IMAGE SECTION - LEFT */}
      <div className="relative h-full w-3/5 rounded-xl overflow-hidden" >
        <Image
          src={image}
          alt={title}
          layout="fill"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black" />
      </div>
      {/* //? TEXT SECTION - RIGHT */}
      <section className="w-2/5 p-8 flex lg:flex-col justify-between">
        <div className="space-y-4">
          <header>
            {/* TITLE */}
            <h2 className="text-3xl lg:text-4xl font-neueRegrade font-semibold">{title}</h2>
            {/* SUBTITLE */}
            <h3 className="text-xl lg:text-2xl font-neueRegrade font-normal text-muted-foreground">{subtitle}</h3>
          </header>
          {/* DESCRIPTION */}
          <p className="text-lg leading-none">{description}</p>
          {/* TAGS */}
          <div className="flex gap-2 text-muted-foreground">
            <div className="border border-muted-foreground rounded-full px-2 p-1 text-sm flex items-center gap-1">
              <SunDim className="h-4 w-4" /> {duration}
            </div>
            <div className="border border-muted-foreground rounded-full px-2 p-1 text-sm flex items-center gap-1">
              <ChartColumn className="h-4 w-4" /> {difficulty}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {/* PRICE */}
          <p className="font-neueRegrade">
            <span className="text-2xl lg:text-3xl font-normal mr-3 text-muted-foreground">
              Starting from
            </span>
            <span className="text-2xl lg:text-3xl font-medium">
              USD {price}
            </span>
          </p>
          <Button className="pr-1 lg:w-full lg:h-12 bg-gradient-to-r from-primary to-purple-500 hover:from-primary transition-all flex justify-between items-center">
            <span className="w-10"></span>
            <span>Book Now</span>
            <div className="rounded-full bg-background h-10 w-10 flex items-center justify-center ml-2">
              <ArrowUpRight className="h-6 w-6 text-foreground" />
            </div>
          </Button>
        </div>
      </section>
    </Card>
  );
};
