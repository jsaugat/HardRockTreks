"use client"

import { Row } from "@/components/flex-layouts";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getDestinations } from "@/prisma/repositories/destinations";

interface Destination {
  id: string;
  name: string;
  image: string;
  packagesCount: number;
  description: string;
  slug: string;
  activities: {
    id: string;
    name: string;
    slug: string;
    image: string;
    packagesCount: number;
    description: string;
    destinationId: string;
  }[];
}

export default function Page() {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const data = await getDestinations(); // Call the function to get destinations
        setDestinations(data); // Store the data in state
        console.log({ destinations })
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    }
    fetchDestinations();
  }, []);

  return (
    <Row
      justify="between"
      align="start"
      className="mt-2 mx-auto md:w-[80%] gap-8"
    >
      <section className="mt-default">
        <h1 className="text-3xl sm:text-4xl lg:text-4xl lg:mb-2 text-primary font-familjenGrotesk font-semibold capitalize">
          Destinations
        </h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href={"/destinations/nepal"}>Nepal</Link>
          {destinations.map((destination, index) => (
            <Link key={index} href={destination.slug ?? ""} passHref>
              <div className="relative w-full h-full rounded-2xl aspect-square cursor-pointer overflow-hidden">
                {destination.image ? (
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                    height={300} // Remove fixed height if you want it to take the entire height of the container
                    width={300} // Remove fixed width if you want it to take the entire width of the container
                  />
                ) : null}
                <p className="absolute z-10 bottom-3 left-0 right-0 mt-2 text-2xl text-center text-white">
                  {destination.name}
                </p>
                <div className="absolute z-10 left-0 top-0 right-0 mt-2 mx-auto px-3 bg-foreground/40 text-center text-primary-foreground rounded-full border w-fit">
                  {destination?.packagesCount ?? 0} Packages
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
            </Link>
          ))}
          {/* {destinationsData.map((destination, index) => (
            <Link key={index} href={destination.href ?? ""} passHref>
              <div className="relative w-full h-full rounded-2xl aspect-square cursor-pointer overflow-hidden">
                {destination.image ? (
                  <Image
                    src={destination.image}
                    alt={destination.label}
                    className="w-full h-full object-cover"
                    height={300} // Remove fixed height if you want it to take the entire height of the container
                    width={300} // Remove fixed width if you want it to take the entire width of the container
                  />
                ) : null}
                <p className="absolute z-10 bottom-3 left-0 right-0 mt-2 text-2xl text-center text-white">
                  {destination.label}
                </p>
                <div className="absolute z-10 left-0 top-0 right-0 mt-2 mx-auto px-3 bg-foreground/40 text-center text-primary-foreground rounded-full border w-fit">
                  {destination?.packagesCount ?? 0} Packages
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
            </Link>
          ))} */}
        </div>
      </section>
    </Row>
  );
}
