'use client'

import React, { useEffect, useState } from "react"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

// Array of mountain images from the internet
const mountainImages = [
  { src: 'https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zfGVufDB8fDB8fHww', alt: 'Mountain 1' },
  { src: 'https://source.unsplash.com/random/800x400/?mountain,2', alt: 'Mountain 2' },
  { src: 'https://source.unsplash.com/random/800x400/?mountain,3', alt: 'Mountain 3' },
  { src: 'https://source.unsplash.com/random/800x400/?mountain,4', alt: 'Mountain 4' },
  { src: 'https://source.unsplash.com/random/800x400/?mountain,5', alt: 'Mountain 5' },
]

export function DestinationsCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [isAutoplay, setIsAutoplay] = useState(false)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    if (!api || !isAutoplay) return

    const intervalId = setInterval(() => {
      api.scrollNext()
    }, 2000) // Change slide every 2 seconds

    return () => clearInterval(intervalId)
  }, [api, isAutoplay])

  // Functions to scroll to the previous and next slide
  const scrollPrev = React.useCallback(() => {
    if (api) {
      api.scrollPrev()
    }
  }, [api])
  const scrollNext = React.useCallback(() => {
    if (api) {
      api.scrollNext()
    }
  }, [api])

  // Toggle autoplay on or off
  const toggleAutoplay = () => {
    setIsAutoplay(!isAutoplay)
  }

  return (
    <div className="">
      <Carousel
        className="w-full"
        setApi={setApi}
      // onMouseEnter={() => setIsAutoplay(false)}
      // onMouseLeave={() => setIsAutoplay(true)}
      >
        <CarouselContent>
          {mountainImages.map((image, index) => (
            <CarouselItem key={index} className="">
              <Card>
                <CardContent className="flex aspect-[9/3] items-center justify-center">
                  <Image
                    src={image.src}
                    alt={"helo"}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>
      <ButtonsSection scrollPrev={scrollPrev} scrollNext={scrollNext} toggleAutoplay={toggleAutoplay} isAutoplay={isAutoplay} />
    </div>
  )
}

const ButtonsSection = ({
  scrollPrev,
  scrollNext,
  toggleAutoplay,
  isAutoplay
}: {
  scrollPrev: () => void
  scrollNext: () => void
  toggleAutoplay: () => void
  isAutoplay: boolean
}) => {
  return (
    <div className="flex justify-between items-center space-x-2 mt-4">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="shadow-md"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="shadow-md"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <Button
        variant="outline"
        onClick={toggleAutoplay}
        className="shadow-md"
      >
        {isAutoplay ? "Pause" : "Play"}
      </Button>
    </div>
  )
}
