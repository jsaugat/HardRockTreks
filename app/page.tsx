"use client"

import Hero from '@/components/hero';
import { PopularDestinations } from "@/app/_sections/popular-destinations";
import { Packages } from '@/app/_sections/packages';
import React, { useEffect, useState } from 'react'
import { useLoadingBar } from '@/contexts/TopLoadingBar';
import { Button } from '@/components/ui/button';

export default function Home() {
  const { triggerLoading } = useLoadingBar();
  return (
    <>
      <Hero />
      <Button onClick={triggerLoading}>Trigger Bar</Button>
      <PopularDestinations />
      <Packages />
      <div className="h-screen bg-green-900 mb-10" />
    </>
  )
}
