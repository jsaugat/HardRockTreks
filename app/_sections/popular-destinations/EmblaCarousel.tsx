"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from "./styles.module.css"
import { cn } from '@/lib/utils'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={cn(styles.embla__slide, "bg-red-400")}>Slide 1</div>
        <div className={styles.embla__slide}>Slide 2</div>
        <div className={styles.embla__slide}>Slide 3</div>
      </div>
    </div>
  )
}
