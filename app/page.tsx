"use client";

import Hero from "@/components/hero";
import { PopularDestinations } from "@/app/_sections/popular-destinations";
import { Packages } from "@/app/_sections/packages";
import React from "react";
import { Activites } from "./_sections/activities";
import TripPlanner from "./_sections/trip-planner";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularDestinations />
      <Packages />
      <Activites />
      <TripPlanner />
    </>
  );
}
