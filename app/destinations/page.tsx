import { Row } from "@/components/flex-layouts";
import Link from "next/link";
import Image from "next/image";
import { getDestinations } from "@/prisma/repositories/destinations";

export default async function Page() {
  const destinations = await getDestinations(); // Fetch directly on the server

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinations.map((destination) => (
            <Link key={destination.id} href={destination.slug ?? ""} passHref>
              <div className="relative w-full h-full rounded-2xl aspect-square cursor-pointer overflow-hidden">
                {destination.image && (
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                    height={300}
                    width={300}
                  />
                )}
                <p className="absolute z-10 bottom-3 left-0 right-0 mt-2 text-2xl text-center text-white">
                  {destination.name}
                </p>
                <div className="absolute z-10 left-0 top-0 right-0 mt-2 mx-auto px-3 bg-foreground/40 text-center text-primary-foreground rounded-full border w-fit">
                  69 Packages
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Row>
  );
}
