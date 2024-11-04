"use client";

import Hero from "@/app/(sections)/hero";
import { PopularDestinations } from "@/app/(sections)/popular-destinations";
import { Packages } from "@/app/(sections)/packages";
import React from "react";
import { Activites } from "./(sections)/activities";
import TripPlanner from "./(sections)/trip-planner";

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
