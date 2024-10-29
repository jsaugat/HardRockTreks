"use client"

import Hero from '@/components/hero';
import { PopularDestinations } from "@/app/_sections/popular-destinations";
import { Packages } from '@/app/_sections/packages';
import React, { useEffect, useState } from 'react'

export default function Home() {
  return (
    <>
      <Hero />
      <PopularDestinations />
      <Packages />
      <div className="h-screen bg-green-900 mb-10" />
    </>
  )
}
