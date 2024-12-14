import { getDestinations } from '@/prisma/repositories/destinations'
import { DestinationsList } from './destination-list'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react';

export default async function DestinationsPage() {
  const { data: destinations, count } = await getDestinations();

  return (
    <main className="max-w-7xl mx-auto pt-navbarOffset md:pt-0">
      {/* Header Section */}
      <h1 className="text-3xl sm:text-4xl lg:text-4xl mb-4 font-familjenGrotesk font-semibold capitalize bg-gradient-to-br from-primary to-purple-500 w-fit bg-clip-text text-transparent flex items-center gap-2">
        Explore Destinations
        {/* <span className='text-xl sm:text-2xl lg:text-2xl rounded-full border border-black/50 text-muted-foreground w-12 flex items-center justify-center'>
          {destinations.length}
        </span> */}
      </h1>
      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {destinations.map((destination) => (
          <Link
            href={`/destinations/${destination.slug}`}
            key={destination.slug}
            className="group"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
              <div className="relative h-72">
                <Image
                  src={destination.image}
                  alt={`Scenic view of ${destination.name || ""}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-xss"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="px-3 text-white text-lg rounded-full flex items-center gap-1 uppercase">
                    <span>Explore</span>
                    <ArrowUpRight className='h-5 w-5' />
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h2 className="text-3xl font-semibold mb-2">{destination.name}</h2>
                <p className="text-muted-foreground min-h-[4rem]">
                  {destination.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
