'use client'

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { getDestinations } from '@/prisma/repositories/destinations'
import type { Destination } from '@/lib/zod/destinations'

export function DestinationsList({
  initialDestinations
}: {
  initialDestinations: Destination[]
}) {
  const { data: destinations } = useQuery({
    queryKey: ['destinations'],
    queryFn: getDestinations,
    initialData: initialDestinations,
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map((destination) => (
        <Link
          key={destination.id}
          href={`/destinations/${destination.slug}`}
          className="group relative overflow-hidden rounded-lg"
        >
          <Image
            src={destination.image}
            alt={destination.name}
            width={400}
            height={300}
            className="object-cover w-full h-64 transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {destination.name}
              </h2>
              <p className="text-white/90">
                10 packages available
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

