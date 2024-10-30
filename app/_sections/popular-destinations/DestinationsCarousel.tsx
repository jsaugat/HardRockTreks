'use client'

import * as React from "react"
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

export function DestinationsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [isAutoplay, setIsAutoplay] = React.useState(true)
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  React.useEffect(() => {
    if (!api || !isAutoplay) return

    const intervalId = setInterval(() => {
      api.scrollNext()
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(intervalId)
  }, [api, isAutoplay])

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

  const toggleAutoplay = () => {
    setIsAutoplay(!isAutoplay)
  }

  return (
    <div className="">
      <Carousel
        className="w-full"
        setApi={setApi}
        onMouseEnter={() => setIsAutoplay(false)}
        onMouseLeave={() => setIsAutoplay(true)}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-[9/3] items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>
      <ButtonsSection scrollPrev={scrollPrev} scrollNext={scrollNext} toggleAutoplay={toggleAutoplay} isAutoplay={isAutoplay} />
      {/* <div className="text-center mt-2">
        Slide {current} of {count}
      </div> */}
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
          className=""
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className=""
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <Button
        variant="outline"
        onClick={toggleAutoplay}
      >
        {isAutoplay
          ? "Pause"
          : "Play"
        }
      </Button>
    </div>
  )
}